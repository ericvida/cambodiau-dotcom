import express from 'express'
import index from './app/index.html'

import raw_fb_courses from './app/data/raw_fb_courses.json'

# A simple state that exists until the server stops
const state = {
	count: 0,
}

# Using Imba with Express as the server is quick to set up:
const app = express()
const port = process.env.PORT or 3000

app.use(express.static('public'))

# Express works like usual, so we can allow JSON in the POST request:
const jsonBody = express.json({ limit: '1kb' })

app.post('/increment', jsonBody) do(req,res)
	# A good exercise here is to add validation for the request body.
	# For example, what would happen if you send a string instead of a number?
	state.count += req.body.increment

	# Sending the state back to the client lets us update it right away:
	res.send({
		count: state.count
	})

app.get('/count') do(req,res)
	res.send({
		count: state.count
	})

app.get('/api/courses') do(req,res)
	// load courses from payload
	try
		const result = await fetch("{process.env.PAYLOAD_URL}/api/course/all")
		const data = await result.json()
		return res.send(data)
	catch e
		console.error(e)

app.get('/api/upload-lessons') do(req,res)
	try
		for course in raw_fb_courses
			console.log('UPLOADING COURSE LESSONS')
			const result = await fetch("{process.env.PAYLOAD_URL}/api/lesson/create-lessons", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					course_slug: course.slug
					lessons: course.lessons
				})
			})
			const data = await result.json()
			return res.send(data)
	catch e
		console.error(e)
		return res.send(e)
	return res.send(raw_fb_courses[0].lessons)

# catch-all route that returns our index.html
app.get(/.*/) do(req,res)
	# only render the html for requests that prefer an html response
	unless req.accepts(['image/*', 'html']) == 'html'
		return res.sendStatus(404)

	res.send(index.body)

# Express is set up and ready to go!
imba.serve(app.listen(port))
