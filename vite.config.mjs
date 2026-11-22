import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    input: {
        main: resolve(import.meta.dirname, 'index.html'),
        license: resolve(import.meta.dirname, 'license/index.html'),
    },
    define: {
        'import.meta.env.VITE_BUILD_DATE': JSON.stringify(new Date().toLocaleDateString())
        // Usage: <div>%VITE_BUILD_DATE%</div>
    }
});