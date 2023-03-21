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

  return (
    <table style={tableStyle as React.CSSProperties}>
      <tbody>
        {image?.url && (
          <tr>
            {image_alignment === "Right" && (
              <td style={paddingStyle}>
                <div style={centerStyle}>
                  <h2 style={centerStyle}>{section_title}</h2>
                  <p>{section_description}</p>
                  {cta?.href && (
                    <p style={centerStyle}>
                      <a href={cta.href} style={{ display: "inline-block", backgroundColor: "#0070f3", color: "#fff", padding: "12px 24px", borderRadius: "4px", textDecoration: "none" }}>
                        {cta.title}
                      </a>
                    </p>
                  )}
                </div>
              </td>
            )}
            <td>
              <Image src={image.url} width={450} height={250} alt="" />
            </td>
            {image_alignment === "Left" && (
              <td style={paddingStyle}>
                <div style={centerStyle as React.CSSProperties}>
                  <h2 style={centerStyle as React.CSSProperties}>{section_title}</h2>
                  <p>{section_description}</p>
                  {cta?.href && (
                    <p style={centerStyle as React.CSSProperties}>
                      <a href={cta.href} style={{ display: "inline-block", backgroundColor: "#0070f3", color: "#fff", padding: "12px 24px", borderRadius: "4px", textDecoration: "none" }}>
                        {cta.title}
                      </a>
                    </p>
                  )}
                </div>
              </td>
            )}
          </tr>
        )}
        {!image?.url && (
          <tr>
            <td style={paddingStyle}>
              <div style={centerStyle}>
                <h2 style={centerStyle}>{section_title}</h2>
                <p>{section_description}</p>
                {cta?.href && (
                  <p style={centerStyle}>
                    <a href={cta.href} style={{ display: "inline-block", backgroundColor: "#0070f3", color: "#fff", padding: "12px 24px", borderRadius: "4px", textDecoration: "none" }}>
                      {cta.title}
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