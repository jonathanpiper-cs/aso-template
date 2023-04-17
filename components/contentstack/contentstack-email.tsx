import { ContentstackComponents } from "./contentstack-components"
import ReactDOMServer from 'react-dom/server'
import beautify from 'js-beautify'

export interface IMyProps {
  modularBlocks?: any
  asRaw?: boolean
}

export const ContentstackEmail = ( props : IMyProps ) => {
  const output = (
  <table cellPadding={0} cellSpacing={0} {...{ border: 0 }} width="100%" className="marginFix">
    <tbody>
      <tr>
        <td width="100%" align="center">
          <table cellPadding={0} cellSpacing={0} {...{ border: 0 }} width={700} className="full-width-container" style={{ width: '700px', minWidth: '700px' }}>
            <tbody>
              <tr>
                <td width={700} align="center" style={{ width: '700px', minWidth: '700px' }} className="full-width-container-inner">
                  {/* inner container / place all modules below */}
                  <ContentstackComponents locale="en-us" modularBlocks={props.modularBlocks} />
                  {/* end inner container / place all modules above */}
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  )

  const rawOutput = ReactDOMServer.renderToStaticMarkup(output)

  return !props.asRaw ? output : (<pre>{beautify.html(rawOutput, { indent_size: 2, wrap_line_length: 80 })}</pre>)
}

export default ContentstackEmail