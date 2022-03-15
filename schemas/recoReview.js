
export default {
  name: 'recoReview',
  title: 'Reco Reviews',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Reviewer Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Reviewer Image',
      type: 'image',
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
    },
    {
      name: 'reviewDate',
      title: 'Review Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'reviewScore',
      title: 'Review Score',
      type: 'number',
      options: {
      list: [5,4,3,2,1]
      }
    },
    {
      name: 'reviewText',
      title: 'Review Text',
      type: 'text',
    },
  ],  orderings: [
    {
      title: 'Review Date, New',
      name: 'reviewDateDesc',
      by: [
        {field: 'reviewDate', direction: 'desc'}
      ]
    },
    {
      title: 'Review Date, Old',
      name: 'reviewDateAsc',
      by: [
        {field: 'reviewDate', direction: 'asc'}
      ]
    },
    {
      title: 'Review Score, High',
      name: 'reviewScoreDesc',
      by: [
        {field: 'reviewScore', direction: 'desc'}
      ]
    },
    {
      title: 'Review Score, Low',
      name: 'reviewScoreAsc',
      by: [
        {field: 'reviewScore', direction: 'asc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      date: 'reviewDate',
      score: 'reviewScore'
    },
    prepare(selection) {
      const {title, media, date, score} = selection
      return {
        title: title,
        media: media,
        date: date,
        subtitle: `Review Score: ${score ? score : 'unknown'} - ${date}`
      }
    }
  },
}
