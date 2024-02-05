interface IMyProps {
    key: number
    line_height: number
}

export const Divider = (props? : IMyProps) => {
    console.log(props);
    return (
        <table role="presentation" cellPadding={0} cellSpacing={0} {...{ border: 0 }} width="100%">
            <tbody>
                <tr>
                    <td height={props?.line_height} style={{ fontSize: '1px', lineHeight: '1px' }} className="divider"><hr/></td>
                </tr>
            </tbody>
        </table>
    )
}