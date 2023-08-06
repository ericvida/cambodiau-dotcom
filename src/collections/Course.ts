import { CollectionConfig } from 'payload/types';

import { isEditor } from '../access/isEditor';
import getCourses from './endpoints/getCourses';

const Course: CollectionConfig = {
  slug: 'course',

  access: {
    create: isEditor,
    read: () => true,
    update: isEditor,
    delete: isEditor,
  },
  admin: {
    description: 'Courses admin description',
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'info',
      type: 'textarea',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'lessons',
      type: 'relationship',
      relationTo: 'lesson',
      hasMany: true,
      admin: {
        description: 'Drag to reorder',
      },
    },
    {
      name: 'price',
      type: 'number',
    },
  ],
  endpoints: [getCourses],
};

export default Course;
