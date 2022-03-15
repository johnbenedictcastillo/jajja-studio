import { MdLink,MdFormatColorText } from 'react-icons/md'
/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'H5', value: 'h5'},
        {title: 'H6', value: 'h6'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'}
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'External link',
            fields: [
              {
                name: 'href',
                type: 'url',
                validation: Rule => Rule.uri({
                  scheme: ['http', 'https', 'mailto', 'tel']
                }),
                title: 'URL'
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                description: 'Read https://css-tricks.com/use-target_blank/',
                type: 'boolean'
              },
              {
                title: 'Link title',
                name: 'linkTitle',
                type: 'string'
              }
            ]
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            icon: MdLink,
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  { type: 'homePage' },
                  { type: 'customerPage' },
                  { type: 'newsPage' },
                  { type: 'careerPage' },
                  { type: 'aboutUsPage' },
                  { type: 'contactPage' },
                  { type: 'invoiceInformationPage' },
                  { type: 'supportPage' },
                  { type: 'service' },
                  { type: 'servicesPage' },
                  { type: 'article' },
                  { type: 'job' },
                  { type: 'cookiePage' },
                  // other types you may want to link to
                ]
              },
              {
                title: 'Link title',
                name: 'linkTitle',
                type: 'string'
              }
            ]
          },
          {
            name: 'color',
            title: 'Text Color',
            type: 'color',
            icon: MdFormatColorText
          },
        ],
      },
    },
    {
      name: 'imageGallery',
      title: 'ImageGallery',
      type: 'gallery',
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text'
        },
        {
          name: 'height',
          type: 'number',
          title: 'Height',
          description: 'Height of image in pixel.'
        },
        {
          name: 'width',
          type: 'number',
          title: 'Width',
          description: 'Width of image in pixel.'
        }
      ],
      options: {hotspot: true},
    },
  ],
}
