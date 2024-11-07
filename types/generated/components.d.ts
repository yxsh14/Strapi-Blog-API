import type { Schema, Struct } from '@strapi/strapi';

export interface BlogContentSection extends Struct.ComponentSchema {
  collectionName: 'components_blog_content_sections';
  info: {
    description: '';
    displayName: 'Content Block';
    icon: 'collapse';
  };
  attributes: {
    HeadingID: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images'>;
    Text: Schema.Attribute.Text;
    Type: Schema.Attribute.Enumeration<['Ex:', 'heading', 'paragraph']>;
  };
}

export interface SeoMetaData extends Struct.ComponentSchema {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'files' | 'images'>;
    metaTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog.content-section': BlogContentSection;
      'seo.meta-data': SeoMetaData;
    }
  }
}
