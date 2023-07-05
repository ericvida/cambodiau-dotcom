	- Move pages/components/elements to their files in their folder.
	- Use module/lesson ids instead of indexes. Handle loading / missed modules/lessons in a better way.
	- Make CMS panel for adding/editing modules/lessons.
	- ERIC: UI for Make Modal for editing phrases.
	- BOHUSLAV: refactor dictionary data to work better with CMS admin panel.
		- from key based structre: 
			"ឡើង": {
				rank: "52", 
				vida: "laẹṇg", 
				vida_auto: "laẹṇg",
				google: "to get up on, to climb onto", 
				ipa: "laǝŋ", 
				def: ["v=to go up|ascend|to rise, get up, take off (aircraft)|to climb|to get on|to board (a means of transport)|to swell|rise (of dough)|to increase|to grow"]},
				
		- to have an id per word, so it can be referrenced by multiple spellings, unless you think it's better to use the khmer words as a keys, and then store definitions with an id and referenced them from the khme words by id's. I think it's the same problem.
		- Example:
  		- "id10212312312": {
			