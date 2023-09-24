import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Linq Functional',
  description: "A functional adaptation of C#'s Linq API.",
  base: '/linq-functional/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting started', link: '/getting-started' },
      { text: 'API reference', link: '/api-reference/types' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting started', link: '/getting-started' },
          { text: 'Deferred execution', link: '/deferred-execution' },
          { text: 'Finishers', link: '/finishers' },
          { text: 'Extensibility', link: '/extensibility' },
        ],
      },
      {
        text: 'API reference',
        items: [
          { text: 'Types', link: '/api-reference/types' },
          { text: 'Starters', link: '/api-reference/starters' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/koppa96/linq-functional' },
    ],

    search: {
      provider: 'local',
    },
  },
})
