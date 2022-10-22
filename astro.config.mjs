import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

export default defineConfig({
	publicDir: 'src/assets/static',
	integrations: [
		react(),
	],
});
