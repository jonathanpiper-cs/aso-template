import React from 'react';

export const Footer = (props: any) => {
    return (
        <tr>
            <td style={{ background: '#333', color: '#ffffff', textAlign: 'center', padding: '10px', fontSize: '12px' }}>
                <p style={{ margin: 0, color: '#ffffff' }}>{props.footer_description}</p>
                <p style={{ margin: 0, color: '#ffffff' }}>Unsubscribe | Update Preferences</p>
            </td>
        </tr>

    )

}
