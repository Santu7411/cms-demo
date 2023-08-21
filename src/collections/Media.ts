import path from 'path';
import type { CollectionConfig } from 'payload/types';

const Media: CollectionConfig = {
  slug: 'media',
  //upload: {
    //staticDir: path.resolve(__dirname, '../../media'),
  //},
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      type: 'richText',
      admin: {
        elements: ['link'],
      },
    },
  ],
}

export default Media;