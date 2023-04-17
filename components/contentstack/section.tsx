import Image from "next/image";
import { File } from "./contentstack";

interface Link {
  title: string;
  href: string;
}

interface SectionProps {
  section_title?: string;
  section_description?: string;
  image_alignment?: string;
  image?: File;
  cta?: Link;
}

/*
export const Section: React.FC<SectionProps> = ({
  section_title,
  section_description,
  image_alignment,
  image,
  cta,
}) => {
  const centerStyle : React.CSSProperties = { textAlign: "center" };
  const paddingStyle : React.CSSProperties = { padding: "0 3em" };
  const tableStyle : React.CSSProperties = { borderCollapse: "collapse", width: "100%" };
*/
export const Section = (props: any) => {
  const centerStyle : React.CSSProperties = { textAlign: "center" };
  const paddingStyle : React.CSSProperties = { padding: "0 3em" };
  const tableStyle : React.CSSProperties = { borderCollapse: "collapse", width: "100%" };
  return (
    <table style={tableStyle as React.CSSProperties}>
      <tbody>
        {props.image?.url && (
          <tr>
            {props.image_alignment === "Right" && (
              <td style={paddingStyle}>
                <div style={centerStyle}>
                  <h2 style={centerStyle} {...props.$.section_title}>{props.section_title}</h2>
                  <p {...props.$.section_description}>{props.section_description}</p>
                  {props.cta?.href && (
                    <p style={centerStyle} {...props.cta.$.href}>
                      <a href={props.cta.href} style={{ display: "inline-block", backgroundColor: "#0070f3", color: "#fff", padding: "12px 24px", borderRadius: "4px", textDecoration: "none" }}>
                        {props.cta.title}
                      </a>
                    </p>
                  )}
                </div>
              </td>
            )}
            <td>
              <Image src={props.image.url} width={250} height={250} alt="" {...props.image.$.title} />
            </td>
            {props.image_alignment === "Left" && (
              <td style={paddingStyle}>
                <div style={centerStyle as React.CSSProperties}>
                  <h2 style={centerStyle as React.CSSProperties} {...props.$.section_title}>{props.section_title}</h2>
                  <p {...props.$.section_description}>{props.section_description}</p>
                  {props.cta?.href && (
                    <p style={centerStyle as React.CSSProperties} {...props.cta.$.href}>
                      <a href={props.cta.href} style={{ display: "inline-block", backgroundColor: "#0070f3", color: "#fff", padding: "12px 24px", borderRadius: "4px", textDecoration: "none" }}>
                        {props.cta.title}
                      </a>
                    </p>
                  )}
                </div>
              </td>
            )}
          </tr>
        )}
        {!props.image?.url && (
          <tr>
            <td style={paddingStyle}>
              <div style={centerStyle}>
                <h2 style={centerStyle}>{props.section_title}</h2>
                <p>{props.section_description}</p>
                {props.cta?.href && (
                  <p style={centerStyle}>
                    <a href={props.cta.href} style={{ display: "inline-block", backgroundColor: "#0070f3", color: "#fff", padding: "12px 24px", borderRadius: "4px", textDecoration: "none" }}>
                      {props.cta.title}
                    </a>
                  </p>
                )}
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};