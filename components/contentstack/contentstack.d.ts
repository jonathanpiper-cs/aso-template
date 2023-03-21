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
  
  export interface Email {
    /** Title */
    title: string;
    /** URL */
    url?: string;
    /** Preheader */
    preheader?: string;
    /** Components */
    components?: (
      | {
          divider: {
            /** Height */ height: number;
          };
          header: undefined;
          feature_copy: undefined;
          full_width_image: undefined;
          Image_with_Copy: undefined;
        }
      | {
          header: {
            /** Headline */ headline?: string;
            /** Eyebrow */
            eyebrow?: string;
            /** Block Color */
            block_color?:
              | "#027AAE"
              | "#E87722"
              | "#0096D6"
              | "#AF00AF"
              | "#707070"
              | "#CC0000";
            /** Block Image */
            block_image?: File;
            /** Brand */
            brand: "hp" | "hp_plus" | "hp_instant_ink";
            /** Show Brand in Card */
            show_brand_in_card?: boolean;
          };
          divider: undefined;
          feature_copy: undefined;
          full_width_image: undefined;
          Image_with_Copy: undefined;
        }
      | {
          feature_copy: {
            /** Copy */ copy?: any;
            /** Highlight Color */
            highlight_color?:
              | "#027AAE"
              | "#E87722"
              | "#0096D6"
              | "#AF00AF"
              | "#707070";
            /** CTA */
            cta?: {
              /** Text */
              text?: string;
              /** Url */
              url?: string;
              /** Color */
              color?: "#027AAE" | "#E87722" | "#0096D6" | "#AF00AF" | "#707070";
              /** Style */
              style?: "Primary" | "Secondary";
            };
          };
          divider: undefined;
          header: undefined;
          full_width_image: undefined;
          Image_with_Copy: undefined;
        }
      | {
          full_width_image: {
            /** Image */ image?: File;
            /** Height */
            height?: number;
            /** Target URL */
            target_url?: string;
          };
          divider: undefined;
          header: undefined;
          feature_copy: undefined;
          Image_with_Copy: undefined;
        }
      | {
          Image_with_Copy: {
            /** Height */ height: number;
            /** Image Side */
            image_side: "Left" | "Right";
            /** Image */
            image: File;
            /** Target Url */
            target_url?: string;
            /** Copy */
            copy?: {
              /** Headline */
              headline?: string;
              /** Text */
              text?: any;
            };
            /** CTA */
            cta?: {
              /** Text */
              text?: string;
              /** Url */
              url?: string;
              /** Color */
              color?: "#027AAE" | "#E87722" | "#0096D6" | "#AF00AF" | "#707070";
              /** Style */
              style?: "Primary" | "Secondary";
            };
          };
          divider: undefined;
          header: undefined;
          feature_copy: undefined;
          full_width_image: undefined;
        }
    )[];
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
          header: undefined;
          image_block: undefined;
          link_image_block: undefined;
          footer: undefined;
        }
      | {
          section: {
            /** Section Title */ section_title?: string;
            /** Section Description */
            section_description?: string;
            /** Image */
            image?: File;
            /** CTA */
            cta?: Link;
          };
          line: undefined;
          quote: undefined;
          header: undefined;
          image_block: undefined;
          link_image_block: undefined;
          footer: undefined;
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
          header: undefined;
          image_block: undefined;
          link_image_block: undefined;
          footer: undefined;
        }
      | {
          header: {
            /** Company Logo */ company_logo?: File;
            /** Header Image */
            header_image?: File;
            /** Caption */
            caption?: string;
            /** Description */
            description?: string;
            /** CTA */
            cta?: Link;
          };
          line: undefined;
          section: undefined;
          quote: undefined;
          image_block: undefined;
          link_image_block: undefined;
          footer: undefined;
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
          header: undefined;
          link_image_block: undefined;
          footer: undefined;
        }
      | {
          link_image_block: {
            /** Background Image */ background_image?: File;
            /** Button */
            button?: Link;
          };
          line: undefined;
          section: undefined;
          quote: undefined;
          header: undefined;
          image_block: undefined;
          footer: undefined;
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
          header: undefined;
          image_block: undefined;
          link_image_block: undefined;
        }
    )[];
  }
  