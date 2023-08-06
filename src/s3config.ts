import type { Args } from '@payloadcms/plugin-cloud-storage/s3';

const s3config: Args = {
  config: {
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
    region: process.env.S3_REGION,
    endpoint: process.env.STORAGE_ENDPOINT || 'https://s3.amazonaws.com',
  },
  bucket: process.env.S3_BUCKET,
  acl: 'public-read', // idk, penis security
};

export default s3config;
