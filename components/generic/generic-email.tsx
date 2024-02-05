import ReactDOMServer from 'react-dom/server'
import beautify from 'js-beautify'
import { GenericComponents } from './generic-components'

export interface IMyProps {
    modularBlocks?: any
    asRaw?: boolean
}

export const GenericEmail = (props: IMyProps) => {
    const output = (
            <table align="center" style={{ width: '50%'}} bgcolor="#f4f4f4">
                <tr>
                    <td>
                        <table align="center" bgcolor="#ffffff" style={{ width: '100%', margin: 0, backgroundColor: '#ffffff' }} cellPadding="20" cellSpacing="0" border={0}>
                            <GenericComponents modularBlocks={props.modularBlocks} locale={'en-us'} />
                        </table>
                    </td>
                </tr>
            </table>
    )

    const rawOutput = ReactDOMServer.renderToStaticMarkup(output)

    return !props.asRaw ? output : (<pre>{beautify.html(rawOutput, { indent_size: 2, wrap_line_length: 80 })}</pre>)
}

export default GenericEmail