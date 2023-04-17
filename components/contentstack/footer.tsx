import Image from 'next/image'

interface IMyProps {
    company_logo: {
        uid: string
        url: string
    }
    background_color: {
        hex: string
    }
    icon_links: [
        {
            icon_svg: {
                url: string
            }
            icon_link: {
                href: string
                title: string
            }
        }
    ]
    informational_lines: [
        {
            description: string
            link: {
                href: string
                title: string
            }
        }
    ]
    action_links: [{
        title: string
        href: string
    }]
    copyright: string
}

export const Footer = (props: any) => {
    const IconLayout = props.icon_links.map((icon : any, index : any) => {
        return (
            <td key={index}>
                <a href={icon.icon_link.href} title={icon.icon_link.title}><Image src={icon.icon_svg.url} height={40} width={40} alt='' /></a>
            </td>
        )
    })

    return (
        <>
            <style jsx>{`
                tbody  {
                    vertical-align: top !important;

                }
                .align-top {
                    vertical-align: top !important;
                }
                .padding-top {
                    padding-top:20px
                }
                .text-left {
                    text-align: left !important;
                }
                .padding {
                    padding: 10px !important;
                }
            `}</style>
            <table width="100%" style={{ background: props.background_color.hex }}>
                <tbody>
                    <tr className="align-top">
                        <td width="100%" align="center">
                            <Image src={props.company_logo.url} alt={''} width={250} height={150} {...props.company_logo.$.url}/>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        {IconLayout}
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    {props.informational_lines.map((info : any, index : any) => (
                        <tr key={index}>
                            <td align='center' className='padding-top'>
                                {info.description} | <a href={info.link.href}>{info.link.title}</a>
                            </td>
                        </tr>

                    ))
                    }
                    <tr>
                        <td align='center' className='padding-top'>
                            {props.action_links.map((info: any, index: any) => (
                                <>
                                    <a href={info.href} key={index} className="padding">{info.title}</a>
                                </>
                            ))
                            }
                        </td>
                    </tr>
                    <tr>
                        <td align='center' className='padding-top' {...props.$.copyright} >{props.copyright} </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}