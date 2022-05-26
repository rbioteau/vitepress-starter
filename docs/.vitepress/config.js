import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'HG Couture',
    description: 'Just playing around.',
    lang: 'fr-FR',
    themeConfig: {
        logo:  "logo.svg",
        nav: [
            { text: 'Produits', link: '/products/' },
            { text: 'À propos', link: '/about/' },
          ],
        sidebar: [],
    },
})