
import { Header } from "./header"
import { Body } from "./body"
import { Footer } from "./footer"

interface IMyProps {
  locale: string
  modularBlocks: any[]
}

export const GenericComponents = (props: IMyProps) => {
  if (props.modularBlocks === null || props.modularBlocks === undefined)
    return null
  const renderedElements = props.modularBlocks.map((block, index) => getRenderedElements(block, index, props.locale))
  return (
    <>{renderedElements}</>
  )
}

const getRenderedElements = (componentDefinition: any, i: number, locale: string) => {
  const componentType = Object.keys(componentDefinition)[0]
  const componentDetails = componentDefinition[componentType]
  switch (componentType) {
    case "header":
      return <Header key={i} {...componentDetails} />
    case "body":
      return <Body key={i} {...componentDetails} />
    case "footer":
      return <Footer key={i} {...componentDetails} />
    default:
      break;
  }
}

