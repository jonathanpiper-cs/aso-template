import React, { CSSProperties } from 'react';
import Parser from "html-react-parser";


export const Blog = (props: any) => {
    const tableStyle: CSSProperties = {
        borderSpacing: 0,
        borderCollapse: 'collapse',
        width: '100%'
    };

    const innerTableStyle: CSSProperties = {
        backgroundColor: '#ffffff',
        width: '550px',
        margin: '0 auto',
        textAlign: 'center',
        borderCollapse: 'collapse'
    };

    const thStyle: CSSProperties = {
        padding: '20px',
        backgroundColor: '##ffffff',
        color: '#ffffff'
    };

    const outerTableStyle: CSSProperties = {
        borderSpacing: 0,
        borderCollapse: 'collapse',
        backgroundColor: '#ffffff',
        width: '100%',
        margin: '0 auto'
    };

    const innerTableStyle2: CSSProperties = {
        fontFamily: 'Helvetica, sans-serif',
        width: '550px',
        margin: '0 auto',
        textAlign: 'left'
    };

    const spacingStyle: CSSProperties = {
        lineHeight: '1px',
        fontSize: '1px',
        height: '20px'
    };

    const headingStyle: CSSProperties = {
        fontSize: '16px',
        color: '#253143',
        fontWeight: 'bold',
        lineHeight: '22px',
        textAlign: 'left'
    };

    const paragraphStyle: CSSProperties = {
        fontSize: '14px',
        color: '#253143',
        lineHeight: '18px',
        textAlign: 'left'
    };

    const linkStyle: CSSProperties = {
        textDecoration: 'none',
        color: '#7c4dff'
    };


    console.log(props);
    return (
        <table>
            <tbody>
                {props.group.map((item: any, index: number) => (
                    <>
                        <table style={tableStyle} align="left" border={0} cellPadding="20" cellSpacing="0">
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
                                                        <table className="main" style={innerTableStyle} align="center" bgcolor="#FFFFFF" cellPadding="0" cellSpacing="0">
                                                            <tbody>
                                                                <tr>
                                                                    <th style={thStyle}>
                                                                        <div id="m_8857370553266852253body-right-graphic1208558956-617a-4249-a7e3-fa9d4aed8510">
                                                                            <a href="http://go.contentstack.com/NDg5LVdOSS0zODMAAAGQ4VfBOBu6M-q8n9AdaEf2yv3_gDSlxTxUbPm9446JMW51MZjZyyLBSw56UI652bneNOCs89g="
                                                                                style={{ textDecoration: "none", outline: "none" }}
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
                                                                    <th style={{ fontSize: '1px', lineHeight: '1px', width: '20px' }} className="hidden">&nbsp;</th>
                                                                    <th style={{ paddingRight: '20px', boxSizing: 'border-box' }}>
                                                                        <table className="inner_table" style={innerTableStyle} align="center" border={0} cellPadding="0" cellSpacing="0">
                                                                            <tbody>
                                                                            </tbody>
                                                                        </table>
                                                                    </th>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ lineHeight: '1px', fontSize: '1px', height: '5px' }}>&nbsp;</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table style={outerTableStyle} align="left" border={0} cellPadding="20" cellSpacing="0">
                            <tbody>
                                <tr>
                                    <td valign="top" style={{ backgroundColor: '#ffffff' }}>
                                        <table className="inner_table" style={innerTableStyle2} align="left" border={0} cellPadding="0" cellSpacing="0">
                                            <tbody>
                                                <tr>
                                                    <td style={spacingStyle}>&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td style={headingStyle} valign="top">
                                                        {item.blog_title}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={3} style={spacingStyle}>&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td style={paragraphStyle} valign="top">
                                                        {Parser(item.description)}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={spacingStyle}>!!!!!!!!!!</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                ))}
            </tbody>
        </table>
    );
};
