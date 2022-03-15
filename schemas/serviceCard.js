export default {
    title: 'Services',
    name: 'serviceCard',
    type: 'object',
    fields:[
    {
        name: 'icon',
        title: 'Image',
        type: 'image',
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative text'
          }
        ]
      },
        { title: 'Heading', name: 'heading', type: 'string'},
        { title: 'Short Description', name: 'shortDescription', type: 'blockContent'},   
        { title: 'Service Link', name: 'serviceLink',  
        validation: Rule => Rule.required(), type: 'reference', to: [{type: 'service'}]},
        { title: 'Link Text', name: 'linkText', type: 'string'},
    ]
}