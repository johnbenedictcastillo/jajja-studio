export default {
    name: "textWithHeadingAndImage",
    type: "object",
    title: "Text with Heading and Image",
    fields: [
      {
        name: 'heading',
        type: 'string',
        title: 'Heading'
      },
      {
        name: 'text',
        type: 'blockContent',
        title: 'Text'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative text'
          }
        ]
      }
    ]
  }