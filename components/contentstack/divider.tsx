interface IMyProps {
    key: number
    height: number
}

export const Line = (props? : IMyProps) => {
    return (
        <table role="presentation" cellPadding={0} cellSpacing={0} {...{ border: 0 }} width="100%">
            <tbody>
                <tr>
                    <td height={props?.height} style={{ fontSize: '1px', lineHeight: '1px' }} className="divider"><hr/></td>
                </tr>
            </tbody>
        </table>
    )
}