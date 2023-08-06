import path from 'path';
import { buildConfig } from 'payload/config';
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';

import Users from './collections/Users';

import Media from './collections/Media';

import Course from './collections/Course';
import Lesson from './collections/Lesson';

import Logo from './assets/Logo';
import Icon from './assets/Icon';

import s3config from './s3config';

// NOTE Can't disable it easily for local development yet. Just comment it out yet.
// See https://github.com/payloadcms/plugin-cloud-storage/issues/49#issuecomment-1523809160
const adapter = s3Adapter(s3config);

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: 'Cambodiu',
      // ogImage:
      //   'https://cdn.shopify.com/s/files/1/0034/5362/files/Symbol_Sink-the-Pink_RGB_180x.png',
      // favicon:
      //   'https://cdn.shopify.com/s/files/1/0034/5362/files/Symbol_Sink-the-Pink_RGB_180x.png',
    },
    components: {
      graphics: {
        Logo,
        Icon,
      },
    },
  },
  cors: '*',
  // cors: JSON.parse(process.env.CORS_WHITELIST || '[]'),
  collections: [Course, Lesson, Users, Media],
  globals: [],
  upload: {
    limits: {
      fileSize: 12000000, // 12MB, written in bytes
    },
  },
  localization: {
    locales: ['en'],
    defaultLocale: 'en',
    fallback: true,
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    disable: true,
  },
  plugins: [
    cloudStorage({
      collections: {
        [Media.slug]: {
          adapter: adapter,
        },
      },
    }),
  ],
});
