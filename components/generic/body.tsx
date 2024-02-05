import React from 'react';

export const Body = (props: any) => {
    return (
        <tr>
            <td style={{ padding: '20px', textAlign: 'left' }}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <p><a href={props.cta.href} target="_blank" style={{ color: '#007bff', textDecoration: 'none' }}>{props.cta.title}</a></p>
            </td>
        </tr>

    )

}
