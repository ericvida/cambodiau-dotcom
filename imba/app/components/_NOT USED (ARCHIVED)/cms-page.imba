# TAG[epic=PAGE, seq=1] cms-page
tag cms-page
	def render
		<self>
			<h1[p:1sp bg:rose0 bd:2px solid rose3 rd:md m:1sp]> "Design of CMS interface will be improved soon. This a quick implementation."
			<div route="/cms/">
				<CMSLearnCourseList>
			# <CMSLessonList route="/cms/0/">
			# <CMSChapterList route="/cms/0/0/">

tag CMSLearnCourseList
	prop course_list = [
		title: "course one"
		description: "description one"
		imageURL: "url one"
		price: 20
		language: "kh"
		word_set: ["មួយ", "ពីរ", "បី"]
		word_usage_count: {"មួយ":4, "ពីរ":4, "បី":4}
		word_usage_count_sum: 12
		number_of_lessons: 2
		lessons: [
			title: "lesson one"
			imageURL: "lesson url one"
			word_set: ["មួយ", "ពីរ", "បី"]
			word_usage_count: {"មួយ":2, "ពីរ":2, "បី":2}
			word_usage_count_sum: 6
			number_of_chapters: 2
			chapters: [
				number_eng: "1"
				number_khmer: "១"
				khmer:  "មួយ ពីរ បី"
				english_meaning: "one two three"
				vida_phonetics: "muy pii bai"
				ipa_phonetics: "muy pii bai"
				word_set: ["មួយ", "ពីរ", "បី"]
				word_usage_count: {"មួយ":1, "ពីរ":1, "បី":1}
				word_usage_count_sum: 3
				---
				number_eng: "2"
				number_khmer: "២"
				khmer:  "មួយ ពីរ បី"
				english_meaning: "one two three"
				vida_phonetics: "muy pii bai"
				ipa_phonetics: "muy pii bai"
				word_set: ["មួយ", "ពីរ", "បី"]
				word_usage_count: {"មួយ":1, "ពីរ":1, "បី":1}
				word_usage_count_sum: 3
			]
			---
			title: "lesson two"
			imageURL: "lesson url two"
			word_set: ["មួយ", "ពីរ", "បី"]
			word_usage_count: {"មួយ":2, "ពីរ":2, "បី":2}
			word_usage_count_sum: 6
			number_of_chapters: 2
			chapters: [
				number_eng: "1"
				number_khmer: "១"
				khmer:  "មួយ ពីរ បី"
				english_meaning: "one two three"
				vida_phonetics: "muy pii bai"
				ipa_phonetics: "muy pii bai"
				word_set: ["មួយ", "ពីរ", "បី"]
				word_usage_count: {"មួយ":1, "ពីរ":1, "បី":1}
				word_usage_count_sum: 3
				---
				number_eng: "2"
				number_khmer: "២"
				khmer:  "មួយ ពីរ បី"
				english_meaning: "one two three"
				vida_phonetics: "muy pii bai"
				ipa_phonetics: "muy pii bai"
				word_set: ["មួយ", "ពីរ", "បី"]
				word_usage_count: {"មួយ":1, "ពីរ":1, "បី":1}
				word_usage_count_sum: 3
			]
		]
		---
		title: "course two"
		description: "description two"
		imageURL: "url two"
		price: 20
		language: "kh"
		word_set: ["មួយ", "ពីរ", "បី"]
		word_usage_count: {"មួយ":4, "ពីរ":4, "បី":4}
		word_usage_count_sum: 12
		number_of_lessons: 2
		lessons: [
			title: "lesson one"
			imageURL: "lesson url one"
			word_set: ["មួយ", "ពីរ", "បី"]
			word_usage_count: {"មួយ":2, "ពីរ":2, "បី":2}
			word_usage_count_sum: 6
			number_of_chapters: 2
			chapters: [
				number_eng: "1"
				number_khmer: "១"
				khmer:  "មួយ ពីរ បី"
				english_meaning: "one two three"
				vida_phonetics: "muy pii bai"
				ipa_phonetics: "muy pii bai"
				word_set: ["មួយ", "ពីរ", "បី"]
				word_usage_count: {"មួយ":1, "ពីរ":1, "បី":1}
				word_usage_count_sum: 3
				---
				number_eng: "2"
				number_khmer: "២"
				khmer:  "មួយ ពីរ បី"
				english_meaning: "one two three"
				vida_phonetics: "muy pii bai"
				ipa_phonetics: "muy pii bai"
				word_set: ["មួយ", "ពីរ", "បី"]
				word_usage_count: {"មួយ":1, "ពីរ":1, "បី":1}
				word_usage_count_sum: 3
			]
			---
			title: "lesson two"
			imageURL: "lesson url two"
			word_set: ["មួយ", "ពីរ", "បី"]
			word_usage_count: {"មួយ":2, "ពីរ":2, "បី":2}
			word_usage_count_sum: 6
			number_of_chapters: 2
			chapters: [
				number_eng: "1"
				number_khmer: "១"
				khmer:  "មួយ ពីរ បី"
				english_meaning: "one two three"
				vida_phonetics: "muy pii bai"
				ipa_phonetics: "muy pii bai"
				word_set: ["មួយ", "ពីរ", "បី"]
				word_usage_count: {"មួយ":1, "ពីរ":1, "បី":1}
				word_usage_count_sum: 3
				---
				number_eng: "2"
				number_khmer: "២"
				khmer:  "មួយ ពីរ បី"
				english_meaning: "one two three"
				vida_phonetics: "muy pii bai"
				ipa_phonetics: "muy pii bai"
				word_set: ["មួយ", "ពីរ", "បី"]
				word_usage_count: {"មួយ":1, "ពីរ":1, "បី":1}
				word_usage_count_sum: 3
			]
		]
	]
	def render
		<self[]>
			<button[ml:1sp px:.6sp bg:indigo2]> "Add Courses"
			for item in course_list
				<CMSCourseCard item=item>

tag CMSCourseCard
	prop meta_is_editable = false
	def toggleEditable
		meta_is_editable = !meta_is_editable
		imba.commit!
	css .meta
		p:1sp
		my:1sp
		bd:2px rd:sm solid gray1
	css .editable
		bg:gray1
	<self[bg:white m:1sp p:1sp]> 
		<h1[fs:xl]> item.title
		<[d:flex gap:1sp]>
			# TODO: route-to needs to by dynamic
			<button[px:.4sp bg:indigo2 rd:sm] @click.toggleEditable> 
				if meta_is_editable
					"save course"
				else
					"edit course"
			<button[px:.4sp bg:cool2 rd:sm]> "delete"
		<pre>
			<code>
				<div.meta contentEditable=meta_is_editable .editable=meta_is_editable> 
					css h:300px of:auto
					JSON.stringify item, null, 4
		# <button[px:.4sp bg:indigo2 rd:sm] route-to="/cms/0"> "see lessons"
tag CMSLessonList
	prop lesson_list = [
		title: "lesson one"
		imageURL: "lesson url one"
		word_set: ["មួយ", "ពីរ", "បី"]
		word_usage_count: {"មួយ":2, "ពីរ":2, "បី":2}
		word_usage_count_sum: 6
		number_of_chapters: 2
		---
		title: "lesson two"
		imageURL: "lesson url two"
		word_set: ["មួយ", "ពីរ", "បី"]
		word_usage_count: {"មួយ":2, "ពីរ":2, "បី":2}
		word_usage_count_sum: 6
		number_of_lessons: 2
	]
	def render
		<self>
			<button[ml:1sp px:.6sp bg:indigo2]> "add lesson"
			for item in lesson_list
				<CMSLessonCard item=item >

tag CMSLessonCard
	prop meta_is_editable = false
	def toggleEditable
		meta_is_editable = !meta_is_editable
		imba.commit!
	css .meta
		p:1sp
		my:1sp
		bd:2px rd:sm solid gray1
	css .editable
		bg:gray1
	<self[bg:white m:1sp p:1sp]> 
		<[d:flex gap:1sp]>
			# TODO: route-to needs to by dynamic
			<button[px:.4sp bg:indigo2 rd:sm] @click.toggleEditable> 
				if meta_is_editable
					"save lesson"
				else
					"edit lesson"
			<button[px:.4sp bg:cool2 rd:sm]> "delete lesson"
		<pre>
			<code>
				<div.meta contentEditable=meta_is_editable .editable=meta_is_editable> 
					JSON.stringify item, null, 4
		<button[px:.4sp bg:indigo2 rd:sm] route-to="/cms/0/0"> "see chapters"

tag CMSChapterList
	prop chapter_list = [
		number_eng: "1"
		number_khmer: "១"
		khmer:  "មួយ ពីរ បី"
		english_meaning: "one two three"
		vida_phonetics: "muy pii bai"
		ipa_phonetics: "muy pii bai"
		word_set: ["មួយ", "ពីរ", "បី"]
		word_usage_count: {"មួយ":1, "ពីរ":1, "បី":1}
		word_usage_count_sum: 3
		---
		number_eng: "2"
		number_khmer: "២"
		khmer:  "មួយ ពីរ បី"
		english_meaning: "one two three"
		vida_phonetics: "muy pii bai"
		ipa_phonetics: "muy pii bai"
		word_set: ["មួយ", "ពីរ", "បី"]
		word_usage_count: {"មួយ":1, "ពីរ":1, "បី":1}
		word_usage_count_sum: 3
	]
	def render
		<self>
			<button[ml:1sp px:.6sp bg:indigo2]> "add chapter"
			for item in chapter_list
				<CMSChapterCard item=item>
		
tag CMSChapterCard
	prop meta_is_editable = false
	def toggleEditable
		meta_is_editable = !meta_is_editable
		imba.commit!
	css .meta
		p:1sp
		my:1sp
		bd:2px rd:sm solid gray1
	css .editable
		bg:gray1
	<self[bg:white m:1sp p:1sp]> 
		<[d:flex gap:1sp]>
			# TODO: route-to needs to by dynamic
			<button[px:.4sp bg:indigo2 rd:sm] @click.toggleEditable> 
				if meta_is_editable
					"save chapter"
				else
					"edit chapter"
			<button[px:.4sp bg:cool2 rd:sm]> "delete chapter"
		<pre>
			<code>
				<div.meta contentEditable=meta_is_editable .editable=meta_is_editable> 
					JSON.stringify item, null, 4
