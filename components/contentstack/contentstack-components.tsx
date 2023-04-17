import { Quote } from "./quote"
import { Line } from "./divider"
import { Section } from "./section"
import { Footer } from "./footer"
import { TextBlock } from "./textblock"
import { RteSection } from "./rtesection"

interface IMyProps {
  locale: string
  modularBlocks: any[]
}

export const ContentstackComponents = (props: IMyProps) => {
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
    
    case "section":
      return <Section key={i} {...componentDetails} />
    case "line":
      return <Line key={i} height={componentDetails.line_height} />
    case "quote":
      return <Quote key={i} {...componentDetails} />
    case "footer":
      return <Footer key={i} {...componentDetails} />
    case "text_block":
      return <TextBlock key={i} {...componentDetails} />
    case "rte_section":
      return <RteSection key={i} {...componentDetails} />
    default:
      break;
  }
}

