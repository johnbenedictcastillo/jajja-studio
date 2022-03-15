import { MdCompareArrows } from 'react-icons/md'
export default {
  name: 'redirect',
  title: 'Redirects',
  type: 'document',
  icon: MdCompareArrows,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'source',
      title: 'Source',
      type: 'string',
    },
    {
      name: 'destination',
      title: 'Destination',
      type: 'string',
    },
    {
      title: 'Permanent?',
      description: 'Check if redirect is permanent',
      name: 'isPermanent',
      type: 'boolean'
    }
  ],
  initialValue: {
    isPermanent: false
  },
  preview: {
    select: {
      title: 'title',
      source: 'source',
      destination: 'destination',
      isPermanent: 'isPermanent',
    },
    prepare(selection) {
      const {title,source,destination,isPermanent} = selection
      return {
        title: title,
        subtitle: `${source} -> ${destination}`
      }
    }
  },
}
