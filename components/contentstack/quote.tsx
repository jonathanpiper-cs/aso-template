import Image from 'next/image'

interface IMyProps {
    quote: string,
    name: string,
    title: string,
    company: string,
    logo: {
        uid: string
        url: string
    }
}

export const Quote = (props: any) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <blockquote className="static quote-icon">
                            <p {...props.$.quote}>&quot;{props.quote}&quot;</p>
                            <cite>
                                <span {...props.$.name}><strong>{props.name}</strong></span> |
                                <span {...props.$.title}>{props.title}</span>
                                {props.logo &&
                                <span {...props.logo.$.title}>
                                      <Image src={props.logo.url} width={50} height={50} alt={"test"} />
                                </span>
}
                        </cite>
                    </blockquote>

                </td>
            </tr>
        </tbody>
        </table >

    )
}