import nodeAdapter from '@sveltejs/adapter-node';
import netlifyAdapter from '@sveltejs/adapter-netlify';
import multiAdapter from '@macfja/svelte-multi-adapter';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess()],

	kit: {
		adapter: multiAdapter([
			netlifyAdapter({
				edge: false,
				split: false
			}),
			nodeAdapter({
				out: 'build',
				precompress: false,
				envPrefix: ''
			})
		]),
		target: '#svelte'
	}
};
export default config;
