import Image from "next/image";
import { File } from "./contentstack";
import Parser from "html-react-parser";

interface Section {
    /** Section Title */
    section_title?: string;
    /** Section Description */
    json_rte?: any;
    image_alignment?: string;
    /** Image */
    image?: File;
    /** CTA */
    cta?: Link;
}
interface Link {
    title: string;
    href: string;
}

export const RteSection = (props: Section) => {
    return (
        <table>
            <style jsx>{`
                .sample-css {
                    padding: 0 3em; text-align: center;
                }

                .center {
                    text-align: center;
                }
            `}</style>
            <tbody>
                <tr>
                    <td>
                        {Parser(props.json_rte)}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

