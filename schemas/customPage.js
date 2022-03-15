export default {
  
    // Setup a 'document' type to house the page builder field
    
    name: "customPage",
    type: "document",
    title: "Custom Pages",
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        description: 'Slug will be used as url. ex: https://jajja.com/page/<slug>',
        validation: Rule => Rule.required(),
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        title: 'Use white logo and navigation text?',
        description: 'Set the logo and navigation text color to white, otherwise it will be the black',
        name: 'white',
        type: 'boolean'
      },
      {
        title: 'Absolute positioning of white logo and navigation text?',
        description: 'Set the logo and navigation position to absolute, useful when you want them above hero image, otherwise they will have their own block',
        name: 'absolute',
        type: 'boolean'
      },
      {
        name: 'pageBuilder',
        type: 'array',
        description: 'Add components of the page',
        title: 'Page builder',
        of: [
          { type: 'hero' },
          { type: 'gallery' },
          { type: 'textWithHeadingAndImage' },
          { type: 'textWithHeadingTwoColumn' },
          { type: 'textWithHeadingAndImageTwoColumn' }
          ]
      },
    {
      title: 'SEO',
      name: 'seoContent',
      description: 'Set the SEO details of the page, otherwise it will use the default in Site Settings',
      type: 'seo'
      }
    ]
  }