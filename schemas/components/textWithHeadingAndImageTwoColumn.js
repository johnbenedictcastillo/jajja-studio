export default {
    name: "textWithHeadingAndImageTwoColumn",
    type: "object",
    title: "Two Column Text with Heading and Image",
    fieldsets: [
      {
        name: 'set-columns',
        title: 'Two Columns Text',
        options: {
          collapsible: true, // Makes the whole fieldset collapsible
          collapsed: false, // Defines if the fieldset should be collapsed by default or not
          columns: 2 // Defines a grid for the fields and how many columns it should have
        }
    }],
    fields: [
      {
        name: 'heading',
        type: 'string',
        title: 'Heading',
      },
      {
        title: 'Reverse the position of column 1 and column 2?',
        description: 'If set, this will display column 2 in the left and column 1 in right.',
        name: 'reverse',
        type: 'boolean'
      },
      {
        name: 'text',
        type: 'blockContent',
        title: 'Column 1 - Text',
        fieldset: 'set-columns'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Column 2 - Image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative text'
          }
        ],
        fieldset: 'set-columns'
      }
    ]
  }