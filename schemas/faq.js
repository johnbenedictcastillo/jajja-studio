export default {
    title : 'FAQ',
    name : 'faq',
    type: 'object',
    fields: [
        {
            title: 'Question',
            name: 'question',
            validation: Rule => Rule.required(),
            type: 'string'
        },
        {
          title: 'Answer',
          name: 'answer',
          validation: Rule => Rule.required(),
          type: 'blockContent',
        },
    ]

}