import path from 'path';
import type { CollectionConfig } from 'payload/types';

import { isEditor } from '../access/isEditor';

// import { appendS3Url } from './hooks/appendS3Url';
// import { generateBase64Thumb } from './hooks/generateBase64Thumb';

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    create: isEditor,
    read: () => true,
    update: isEditor,
    delete: isEditor,
  },
  admin: {
    description:
      'Upload and manage media. The most general collection. Maximum upload file size: 12MB. Recommended file size for images is <500KB.',
    useAsTitle: 'alt',
    group: 'Media',
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data.filesize > 12000000) {
          throw new Error(
            'Max upload file size is: 12MB. Recommended file size for images is <500KB.',
          );
        }
        return data;
      },
    ],
    // afterRead: [appendS3Url],
    // beforeOperation: [generateBase64Thumb],
  },

  // file uploads are stored on the server by default, plugins are available for cloud storage
  // https://github.com/richardvanbergen/payload-plugin-cloud-storage as an example
  upload: {
    // from the imageSizes below, the admin UI will show this size for previewing
    adminThumbnail: 'thumbnail',

    // staticDir tell Payload where to store files to and allows them to be served
    staticDir: path.resolve(__dirname, '../../media'),

    // limit the types of files allowed and request validation
    mimeTypes: [
      'image/png',
      'image/jpeg',
      'image/gif',
      'image/svg+xml',
      'video/webm',
      'video/mp4',
      'video/ogg',
      'video/avi',
      'video/mpeg',
      'video/mpg',
      'video/mov',
    ],

    // in addition to the original file, Payload saves resized images automatically
    imageSizes: [
      {
        name: 'thumbnail',
        width: 480,
        height: 320,
      },
      {
        name: 'portrait',
        width: 768,
        height: 1024,
      },
      {
        name: 'hero',
        width: 1920,
        height: 1080,
      },
    ],
  },

  // upload collections inherit base fields for file information and imageSizes, then add your own for users to change
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      localized: true,
      type: 'text',
      required: true,
    },
    {
      name: 'base64Thumb',
      type: 'text',
      admin: {
        hidden: true,
      },
    },
  ],
};

export default Media;
