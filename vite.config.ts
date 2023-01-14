import UnoCSS from 'unocss/vite';
import { presetUno } from 'unocss';
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [
		UnoCSS({
			presets: [presetUno()]
		}),
		sveltekit()
	]
};

export default config;
