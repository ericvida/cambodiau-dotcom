export default {
	bundler: "vite",
	client: {
		build: {
			ssr: false,
			ssrManifest: false
		},
		worker: {
			plugins() {
				return []
			}
		}
	}
}