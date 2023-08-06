import type { Endpoint } from 'payload/config';

const getCourses: Endpoint = {
  path: '/all',
  method: 'get',
  handler: async (req, res) => {
    const courses = await req.payload.find({
      collection: 'course',
      limit: 100,
      //   depth: 0, // specify if want to fetch only the course data, without related lessons
    });
    const coursesWithProperImage = courses.docs.map((course: any) => {
      //   course.image = `${req.protocol}://${req.get('host')}${course.image.url}`;
      course.image = course.image.url;
      //   course.image = `${process.env.PAYLOAD_PUBLIC_SERVER_URL}${course.image.url}`;
      return course;
    });

    res.status(200).json(coursesWithProperImage);
  },
};

export default getCourses;
