// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: "https://ghostbots.org",
    output: "static",
    build: {
        format: "preserve",
    },
    vite: {
        plugins: [tailwindcss()],
        resolve: {
        alias: {
            '@layouts': '/src/layouts',
            '@components': '/src/components',
            '@styles': '/src/styles',
            "@images": "/src/images",
        }
        }
    },
    experimental: {
        fonts: [
                {
                    provider: fontProviders.google(),
                    name: "Noto Sans",
                    weights: ["400"],
                    subsets: ["latin"],
                    cssVariable: "--font-para"
                },
                {
                    provider: fontProviders.google(),
                    name: "Audiowide",
                    cssVariable: "--font-header"
                },
                {
                    provider: fontProviders.google(),
                    name: "Bungee",
                    cssVariable: "--font-logo"
                }
        ]
    }
});
