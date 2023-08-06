import { CollectionConfig } from 'payload/types';

import { isEditor } from '../access/isEditor';

import bulkLessonUpload from './endpoints/bulkLessonsUpload';

const Lesson: CollectionConfig = {
  slug: 'lesson',
  access: {
    create: isEditor,
    read: () => true,
    update: isEditor,
    delete: isEditor,
  },
  admin: {
    description: 'Lessonss admin description',
    useAsTitle: 'title',
  },
  endpoints: [bulkLessonUpload],
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'phrases',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'image',
          type: 'text',
          required: true,
        },
        {
          name: 'khmer',
          type: 'text',
          required: true,
        },
        {
          name: 'meaning',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
};

export default Lesson;
