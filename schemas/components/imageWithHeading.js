export default {
    name: "imageWithHeading",
    type: "object",
    title: "Image with Heading",
    fields: [
      {
        name: 'heading',
        type: 'string',
        title: 'Heading'
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