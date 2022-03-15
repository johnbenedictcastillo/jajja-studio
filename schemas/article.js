
import userStore from 'part:@sanity/base/user'
export default {
  name: 'article',
  title: 'Articles',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Use white logo and navigation text?',
      description: 'Set the logo and navigation text color to white, otherwise it will be the black',
      name: 'white',
      type: 'boolean'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      readOnly: true,
      initialValue: async () => { 
        const {displayName} = await userStore.getUser('me')
        return displayName
      }
    },
    {
      name: 'imageUrl',
      title: 'Author Image',
      type: 'string',
      readOnly: true,
      hidden: true,
      initialValue: async () => { 
        const {imageUrl} = await userStore.getUser('me')
        return imageUrl
      }
    },
    {
      name: 'publishDate',
      title: 'Publish Date',
      type: 'datetime',
      initialValue: (new Date()).toISOString()
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'featureImage',
      title: 'Featured image',
      type: 'image',
      validation: Rule => Rule.required(),
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
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'},
    },
    {
      name: 'shortDescription',
      title: 'Short Description and Ingress',
      type: 'blockContent',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
    title: 'SEO',
    name: 'seoContent',
    description: 'Set the SEO details of the page, otherwise it will use the default in Site Settings',
    type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'featureImage',
      subtitle: 'shortDescription',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
