import Image from 'next/image'

interface IMyProps {
    background_color: {
        hex: string
    }
    text: string
    block_height: number
}

export const TextBlock = (props: IMyProps) => {
    return (
        <><style jsx>{`
                .white  {
                    color: white !important;
                }
            `}</style><table width="100%" style={{ background: props.background_color.hex }}>
                <tbody>
                    <tr>
                        <td width="100%" height={props.block_height} align="center">
                           <h3 className="white">{props.text}</h3>
                        </td>
                    </tr>
                </tbody>
            </table></>
    )
}