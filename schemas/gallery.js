export default {
    name: 'gallery',
    type: 'object',
    title: 'Gallery',
    fields: [
      {
        name: 'images',
        type: 'array',
        title: 'Images',
        of: [
          {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
              hotspot: true,
            },
            fields: [
                {
                    name: 'name',
                    type: 'string',
                    title: 'Image Name',
                },
                {
                    name: 'description',
                    type: 'string',
                    title: 'Description',
                },
                {
                name: 'alt',
                type: 'string',
                title: 'Alternative text',
                },
            ],
          },
        ],
        options: {
          layout: 'grid',
        },
      },
      {
        name: 'height',
        type: 'number',
        title: 'Image height',
        description: 'Height of images in pixel.'
      },
      {
        name: 'width',
        type: 'number',
        title: 'Image width',
        description: 'Height of images in pixel.'
      },
      {
        name: 'columns',
        type: 'number',
        title: 'Number of columns',
        description: 'How should we display these images?'
      },
    ],
    preview: {
      select: {
        images: 'images',
        image: 'images.0',
      },
      prepare(selection) {
        const { images, image } = selection;
        if(images == undefined){
            return {
                title: `Gallery block of 0 images`,
                media: image,
              };
        }
        return {
          title: `Gallery block of ${Object.keys(images).length - 1} images`,
          media: image,
        };
      },
    },
  };