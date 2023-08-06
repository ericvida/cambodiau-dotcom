import type { Endpoint } from 'payload/config';

import type { Lesson } from '../../payload-types';

const bulkLessonsUpload: Endpoint = {
  path: '/create-lessons',
  method: 'post',
  handler: async (req, res, next) => {
    try {
      // in the body there should be list of lessons
      // for each lesson, we need to create a new lesson
      // the lesson course id should be taken from body

      // console.log('REQ BODY', req.body);x
      const lessons = req.body.lessons;
      const lessonsToCreate = lessons.map((lesson: any) => {
        return {
          title: lesson.title,
          slug: lesson.slug,
          phrases: lesson.phrases,
        };
      });
      const createdLessons: Lesson[] = [];
      for (let i = 0; i < lessonsToCreate.length; i++) {
        const lesson = lessonsToCreate[i];
        try {
          if (lesson.id) {
            // update if exists in db
            const updatedLesson = await req.payload.update({
              collection: 'lesson',
              id: lesson.id,
              data: lesson,
            });
            createdLessons.push(updatedLesson);
          } else {
            const createdLesson = await req.payload.create({
              collection: 'lesson',
              data: lesson,
            });
            createdLessons.push(createdLesson);
          }
        } catch (error) {
          console.log(error, lesson.slug);
        }
      }

      // Add the lessons to the course
      const { course_slug } = req.body;
      const courses = await req.payload.find({
        collection: 'course',
        where: {
          slug: course_slug,
        },
        depth: 0,
      });
      if (courses.docs.length === 0) {
        return res.status(400).json({
          error: 'Course not found',
        });
      }
      const course = courses.docs[0];
      // now add all these lessons to the course.lessons
      // console.log('COURSE', course);
      console.log('updating course lessons', createdLessons, [
        ...course.lessons,
        createdLessons.map((lesson: any) => lesson.id),
      ]);
      req.payload.update({
        collection: 'course',
        id: course.id,
        data: {
          lessons: [...course.lessons, ...createdLessons.map((lesson: any) => lesson.id)],
        },
      });
      // console.log('CREATED LESSONS', createdLessons);
      res.status(200).json({
        lessons: createdLessons,
      });

      return next();
    } catch (err: unknown) {
      req.payload.logger.error(err);
      return next();
    }
  },
};

export default bulkLessonsUpload;
