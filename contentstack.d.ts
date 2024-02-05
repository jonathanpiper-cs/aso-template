export interface File {
  uid: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string;
  content_type: string;
  file_size: string;
  tags: string[];
  filename: string;
  url: string;
  ACL: any[];
  is_dir: boolean;
  parent_uid: string;
  _version: number;
  title: string;
  publish_details: {
    environment: string;
    locale: string;
    time: string;
    user: string;
  };
}

export interface Link {
  title: string;
  href: string;
}

export interface Sms {
  /** Title */
  title: string;
  /** Audience */
  audience?: "High Traffic" | "Medium Traffic" | "Low Traffic" | "Unknown";
  /** Rich Text Editor */
  rich_text_editor?: string;
}

export interface ContentstackEmailTemplate {
  /** Title */
  title: string;
  /** URL */
  url?: string;
  /** Modular Blocks */
  modular_blocks?: (
    | {
        line: {
          /** Line Height */ line_height?: number;
        };
        section: undefined;
        quote: undefined;
        image_block: undefined;
        footer: undefined;
        text_block: undefined;
        rte_section: undefined;
        blog: undefined;
      }
    | {
        section: {
          /** Section Title */ section_title?: string;
          /** Section Description */
          section_description?: string;
          /** Image Alignment */
          image_alignment?: "Left" | "Right";
          /** Image */
          image?: File;
          /** CTA */
          cta?: Link;
        };
        line: undefined;
        quote: undefined;
        image_block: undefined;
        footer: undefined;
        text_block: undefined;
        rte_section: undefined;
        blog: undefined;
      }
    | {
        quote: {
          /** Quote */ quote?: string;
          /** Name */
          name?: string;
          /** Title */
          title?: string;
          /** Logo */
          logo?: File;
        };
        line: undefined;
        section: undefined;
        image_block: undefined;
        footer: undefined;
        text_block: undefined;
        rte_section: undefined;
        blog: undefined;
      }
    | {
        image_block: {
          /** Background Image */ background_image?: File;
          /** Forefront Text */
          forefront_text?: string;
        };
        line: undefined;
        section: undefined;
        quote: undefined;
        footer: undefined;
        text_block: undefined;
        rte_section: undefined;
        blog: undefined;
      }
    | {
        footer: {
          /** Company Logo */ company_logo?: File;
          /** Background Color */
          background_color?: any;
          /** Icon Links */
          icon_links?: [
            {
              /** Icon SVG */
              icon_svg?: File;
              /** Icon Link */
              icon_link?: Link;
            },
            {
              /** Icon SVG */
              icon_svg?: File;
              /** Icon Link */
              icon_link?: Link;
            },
            {
              /** Icon SVG */
              icon_svg?: File;
              /** Icon Link */
              icon_link?: Link;
            },
            {
              /** Icon SVG */
              icon_svg?: File;
              /** Icon Link */
              icon_link?: Link;
            },
            {
              /** Icon SVG */
              icon_svg?: File;
              /** Icon Link */
              icon_link?: Link;
            },
            {
              /** Icon SVG */
              icon_svg?: File;
              /** Icon Link */
              icon_link?: Link;
            }
          ];
          /** Informational Lines */
          informational_lines?: {
            /** Description */
            description?: string;
            /** Link */
            link?: Link;
          }[];
          /** Action Links */
          action_links?: [Link, Link, Link];
          /** Copyright */
          copyright?: string;
        };
        line: undefined;
        section: undefined;
        quote: undefined;
        image_block: undefined;
        text_block: undefined;
        rte_section: undefined;
        blog: undefined;
      }
    | {
        text_block: {
          /** Text */ text?: string;
          /** Block Height */
          block_height?: number;
          /** Background Color */
          background_color?: any;
        };
        line: undefined;
        section: undefined;
        quote: undefined;
        image_block: undefined;
        footer: undefined;
        rte_section: undefined;
        blog: undefined;
      }
    | {
        rte_section: {
          /** JSON Rich Text Editor */ json_rte?: any;
        };
        line: undefined;
        section: undefined;
        quote: undefined;
        image_block: undefined;
        footer: undefined;
        text_block: undefined;
        blog: undefined;
      }
    | {
        blog: Blog
    }
  )[];
}

export interface Blog {
  blog: {
    /** Logo */ logo?: File;
    /** Header Text */
    header_text?: string;
    /** Reference (optional) */
    reference_optional_?: Sms[];
    /** Blog Title */
    blog_title?: string;
    /** Blog Description */
    blog_description?: string;
    /** Blog Link */
    blog_link?: Link;
  };
  line: undefined;
  section: undefined;
  quote: undefined;
  image_block: undefined;
  footer: undefined;
  text_block: undefined;
  rte_section: undefined;
}
