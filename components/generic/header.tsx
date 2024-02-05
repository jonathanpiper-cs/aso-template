import React from 'react';

export const Header = (props: any) => {
    return (
        <tr>
            <td style={{ background: '#007bff', color: '#ffffff', padding: '10px', textAlign: 'center' }}>
                <h1 style={{ margin: 0, color: '#ffffff' }}>{props.header_title}</h1>
            </td>
        </tr>

    )

}
