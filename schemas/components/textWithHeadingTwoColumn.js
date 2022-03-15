export default {
    name: "textWithHeadingTwoColumn",
    type: "object",
    title: "Two Column Text with Heading",
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
        name: 'column1',
        type: 'blockContent',
        title: 'Column 1 - Text',
        fieldset: 'set-columns'
      },
      {
        name: 'column2',
        type: 'blockContent',
        title: 'Column 2 - Text',
        fieldset: 'set-columns'
      }
    ]
  }