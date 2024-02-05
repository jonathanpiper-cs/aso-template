import React, { CSSProperties } from 'react';
import Parser from "html-react-parser";


export const Blog = (props: any) => {
    const tableStyle: CSSProperties = {
        borderSpacing: 0,
        borderCollapse: 'collapse',
        width: '50%',
    };

    const innerTableStyle: CSSProperties = {
        backgroundColor: '#ffffff',
        width: '550px',
        textAlign: 'left',
        borderCollapse: 'collapse'
    };

    const thStyle: CSSProperties = {
        padding: '20px',
        backgroundColor: '##ffffff',
        color: '#7c4dff'
    };

    const headingStyle: CSSProperties = {
        fontSize: '16px',
        color: '#253143',
        fontWeight: 'bold',
        lineHeight: '22px',
        textAlign: 'left',
        paddingLeft: "40px",
        paddingTop: '10px'
    };

    const paragraphStyle: CSSProperties = {
        fontSize: '14px',
        color: '#253143',
        lineHeight: '18px',
        textAlign: 'left',
        paddingLeft: "40px",
        paddingTop: '10px'
    };

    const linkStyle: CSSProperties = {
        textDecoration: 'none',
        color: '#ffffff',
    };


    const tdStyle: CSSProperties = {
        backgroundColor: '#7c4dff',
        fontFamily: 'Helvetica, sans-serif',
        fontSize: '15px',
        textAlign: 'center',
        verticalAlign: 'top',
        padding: '10px 18px',
        borderRadius: '10px',
        lineHeight: '14px',
        border: '1px solid #7c4dff',
        display: 'block',
        fontWeight: 'bold',
        width: '150px'
    };

    return (

        props.group.map((item: any, index: number) => (
            <>
                <table style={tableStyle} align="left" border={0} cellPadding="20" cellSpacing="0">
                    <tbody>
                        <table align="left" border={0} cellPadding="20" cellSpacing="0">
                            <tbody>
                                <tr>
                                    <td valign="top" style={{ backgroundColor: '#ffffff' }}>
                                        <table style={tableStyle}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ lineHeight: '1px', fontSize: '1px', height: '30px' }}>&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td valign="top">
                                                        <table className="main" style={innerTableStyle} align="left" bgcolor="#FFFFFF" cellPadding="0" cellSpacing="0">
                                                            <tbody>
                                                                <tr>
                                                                    <th style={thStyle}>
                                                                        <div id="m_8857370553266852253body-right-graphic1208558956-617a-4249-a7e3-fa9d4aed8510">
                                                                            <a href="http://go.contentstack.com/NDg5LVdOSS0zODMAAAGQ4VfBOBu6M-q8n9AdaEf2yv3_gDSlxTxUbPm9446JMW51MZjZyyLBSw56UI652bneNOCs89g="
                                                                                target="_blank"
                                                                                data-saferedirecturl="https://www.google.com/url?q=http://go.contentstack.com/NDg5LVdOSS0zODMAAAGQ4VfBOBu6M-q8n9AdaEf2yv3_gDSlxTxUbPm9446JMW51MZjZyyLBSw56UI652bneNOCs89g%3D&amp;source=gmail&amp;ust=1707254339735000&amp;usg=AOvVaw01NNpVF_lGRhJ9ziPKBFaP">
                                                                                <img src={item.blog_image.url}
                                                                                    width="275"
                                                                                    alt="intro-to-developer-hub"
                                                                                    style={{ borderRadius: "15px" }}
                                                                                    className="CToWUd"
                                                                                    data-bit="iit" />
                                                                            </a>
                                                                        </div>
                                                                    </th>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table align="left" border={0} cellPadding="0" cellSpacing="0">
                            <tbody>
                                <tr>
                                    <td valign="top" style={{ backgroundColor: '#ffffff', marginLeft: '50px' }}>
                                        <table border={0} cellPadding={0} cellSpacing={0}>
                                            <tbody>
                                                <tr>
                                                    <td style={headingStyle} valign="top">
                                                        {item.blog_title}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={paragraphStyle} valign="top">
                                                        {Parser(item.description)}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table align='left' style={{marginLeft: '40px'}}>
                            <tbody>
                                {item.cta.title ?
                                    <tr>
                                        <td style={tdStyle}>
                                            <a style={linkStyle} href="http://go.contentstack.com/your-link" target="_blank">
                                                Hello
                                            </a>
                                        </td>
                                    </tr> : null}
                            </tbody>
                        </table>
                        <table align='center'>
                            <tbody>
                                <tr>
                                    <td height={50} style={{ fontSize: '1px', lineHeight: '1px' }} className="divider"><hr /></td>
                                </tr>
                            </tbody>
                        </table>
                    </tbody >
                </table >
            </>

        ))

    );
};
