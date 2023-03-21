import { addEditableTags, Next, Node } from '@contentstack/utils'
import Contentstack, { Stack } from 'contentstack'
import PrimaryStack, { onEntryChange } from './stack'
export default class ContentstackService {
  public Stack: Stack
  public OnEntryChange: any

  constructor() {
    this.Stack = PrimaryStack
    this.OnEntryChange = onEntryChange
  }

  public async getEmail(id: string, locale: string = "en-us"): Promise<[any, Record<string, any>]> {
    try {
      const response = await this.Stack
        .ContentType('contentstack_email_template')
        .Entry(id)
        .language(locale.toLocaleLowerCase())
        .includeFallback()
        .includeEmbeddedItems()
        .toJSON()
        .fetch()
      return this.processEntry(response, 'contentstack_email_template')
    } catch (error) {
      console.log(error)
      return [null, {}]
    }
  }

  private processEntry(entry: any, contentType: string): [any, Record<string, any>] {
    let boundData: Record<string, any> = {}
    const paths = this.GetAllJsonRtePaths(entry, contentType)

    if (process.env.NEXT_PUBLIC_CS_ENVIRONMENT !== 'production') {
      addEditableTags(entry, contentType, true, entry.locale)
    }

    Contentstack.Utils.jsonToHTML({
      entry,
      paths,
      renderOption: {
        p: (node: Node, next: Next) => {
          return `
          <p>
            ${next(node.children)}
          </p>
          `
        },
        h2: (node: Node, next: Next) => {
          let display = this.generateClassNames(node);
          return `
          <h2 class='classname'>
            ${display}
          </h2>
          `;

        },
        span: (node: Node, next: Next) => {
          return `<span>${next(node.children)}</span>`
        },
        a: (node: Node, next: Next) => {
          return `<a href="${node.attrs.url}" target="_blank" style="color:#707070; text-decoration:underline;">${next(node.children)}</a>`
        },
        bold: (text: string) => {
          return `<span style="color:__color__;">${text}</span>`
        },
        block: {
          // to render the default  
          '$default': (item, metadata) => {
            return `<div><p>${item._content_type_uid} not supported yet.</p></div>`
          }
        },
      }
    })

    return [entry, boundData]
  }

  public GetAllJsonRtePaths(entry: any, contentType: string): Array<string> {
    let paths = new Array<string>()
    return this.CheckProperty(entry, paths, ``)
  }

  private CheckProperty(property: any, paths: Array<string>, propertyPath: string): Array<string> {
    const path = propertyPath
    if (property === null || property === undefined) { return paths }

    const currentPropertyIsArray = Array.isArray(property)
    const currentPropertyIsObject = typeof property === 'object'

    if (currentPropertyIsArray) {
      this.CheckArrayForNestedJsonRtes(property, paths, propertyPath)
    } else if (currentPropertyIsObject) {
      this.CheckObjectForNestedJsonRtes(property, paths, propertyPath)
    }

    return paths
  }

  private generateClassNames(node: Node) : string {
    let h2 = node.children.map((value: any) => {
      if (value.children) {
        let element = value.children.map((child: any) => {
          return `<span className='${child.classname}'>${child.text}</span>`
        })
        return element;
      } else if (value.classname) {
        return `<span className='${value.classname}'>${value.text}</span>`
      } else {
        return value.text
      }
    })
    return h2.join("")
  }

  private IsObjectAJsonRte(object: any): boolean {
    return object !== null
      && object !== undefined
      && object.hasOwnProperty('uid')
      && object.hasOwnProperty('type')
      && object.type === 'doc'
      && object.hasOwnProperty('children')
  }

  private CheckObjectForNestedJsonRtes(object: any, paths: Array<string>, objectPath: string): Array<string> {
    const currentPropertyIsJsonRte = this.IsObjectAJsonRte(object)
    if (currentPropertyIsJsonRte) {
      if (paths.indexOf(objectPath) === -1) {
        paths.push(objectPath)
      }
    }

    Object.keys(object).map(childProperty => {
      const childPropertyPath = objectPath ? `${objectPath}.${childProperty}` : childProperty
      this.CheckProperty(object[childProperty], paths, childPropertyPath)
    })

    return paths
  }

  private CheckArrayForNestedJsonRtes(array: any, paths: Array<string>, arrayPath: string): Array<string> {
    array.map((item: any) => {
      this.CheckProperty(item, paths, `${arrayPath}`)
    })

    return paths
  }
}
