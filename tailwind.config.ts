import { join } from 'path';
import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { myteam } from './src/myteam';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {},
		fontSize: {
			xs: ['13px', '18px'],
			sm: ['15px', '25px'],
			base: ['15px', '28px'],
			lg: ['18px', '28px'],
			xl: ['32px', '32px'],
			'2xl': ['32px', '48px'],
			'3xl': ['40px', '40px'],
			'4xl': ['48px', '48px'],
			'5xl': ['64px', '56px'],
			'6xl': ['100px', '100px']
		}
	},
	plugins: [
		skeleton({
			themes: {
				custom: [myteam]
			}
		})
	]
} satisfies Config;
