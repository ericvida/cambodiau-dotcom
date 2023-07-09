- BOHUSLAV
  - Make route persistent. so we don't have to navigate after every save of vscode
    - ✅ You have to be logged in to stay on route
  - change Modules to Courses on firebase and update COURSES_COLLECTION = 'modules' to 'courses'
    - ✅ done
  - Use module/lesson ids instead of indexes. Handle loading / missed modules/lessons in a better way.
    - moving to slugs
  - Refactor dictionary data to suit (see word-editor.imba)
    - to support multiple khmer spellings we may need to us ID as keys, instead of khmer word, so we don't have to duplicate the definition for two different khmer spellings, unless you can think of something else.

ERIC
- Move pages/components/elements to their files in their folder. WORK IN PROGRESS.
- Integrate ./components/shortcuts-list.imba POSTPONED
