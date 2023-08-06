// The variables look like this:
// S3_BUCKET=dev-media-prisoner-of-payload
// STORAGE_ENDPOINT=https://s3.amazonaws.com

// First kind of base url syntax
// const endpointParts = process.env.STORAGE_ENDPOINT.split('//');
// const STATIC_URL_BASE = `${endpointParts[0]}//${process.env.S3_BUCKET}.${endpointParts[1]}`;

// Second kind of base url syntax
const STATIC_URL_BASE = `${process.env.STORAGE_ENDPOINT || 'https://s3.amazonaws.com'}/${
  process.env.S3_BUCKET
}`;

// In terms of performance I am unsure if it is faster to access media with bucket in subdomain or path
// For the sake of simplicity I am using the path way

/**
 * In order ot have this working you should
 * @param param0 {{ req: Request, doc: Media | Icons }}
 * @returns doc with urls prepended with STATIC_URL_BASE
 */
export const appendS3Url = ({ req, doc }) => {
  if (req.headers?.referer?.includes('/admin/')) {
    return doc;
  }

  if (doc.url) {
    doc.url = `${STATIC_URL_BASE}${doc.url}`;
  }
  for (const size in doc.sizes) {
    if (doc.sizes[size].url) {
      doc.sizes[size].url = `${STATIC_URL_BASE}${doc.sizes[size].url}`;
    }
  }
  return doc;
};
