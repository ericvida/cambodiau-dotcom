import { imba } from 'vite-plugin-imba';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	base: '',
	plugins: [imba(), VitePWA()],
});