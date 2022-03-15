export default {
    name: "textWithHeading",
    type: "object",
    title: "Text with Heading",
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
    ]
  }