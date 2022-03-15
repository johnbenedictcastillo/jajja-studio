export default {
    title: 'Widget Standard',
    name: 'widgetStandard',
    type: 'object',
    fields:[
        { title: 'Pre Header', name: 'preHeader', type: 'string'},
        { title: 'Heading', name: 'heading', type: 'string'},
        { title: 'Image', name: 'image', type: 'image',fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text'
            }
          ]},
        { title: 'Button Text', name: 'buttonText', type: 'string'},
        { title: 'Button Url', name: 'buttonUrl', type: 'url'},
    ]
}