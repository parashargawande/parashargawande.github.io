import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const siteUrl = 'https://parashargawande.github.io';

const defaultKeywords = [
  'Parashar Gawande',
  'software engineer',
  'full stack developer',
  'IoT developer',
  'electronics projects',
  'cloud solutions',
  'portfolio',
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Parashar Gawande',
  url: siteUrl,
  jobTitle: 'Software Engineer & Tech Creator',
  description:
    'Portfolio of Parashar Gawande — software engineer crafting full-stack apps, IoT systems, and immersive technical content.',
  image: `${siteUrl}/img/android-chrome-512x512.png`,
  sameAs: [
    'https://github.com/parashargawande',
    'https://linkedin.com/in/parashargawande',
    'https://medium.com/@parashargawande',
    'https://www.youtube.com/@parashargawande',
    'https://www.instagram.com/parashargawande',
  ],
  alumniOf: 'Savitribai Phule Pune University',
  knowsAbout: [
    'Full Stack Development',
    'Cloud Architecture',
    'IoT',
    'Embedded Systems',
    'DevOps',
  ],
};

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Parashar Gawande',
  tagline: 'Where Software Meets Hardware & Creativity',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: siteUrl,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'parashargawande', // Usually your GitHub org/user name.
  projectName: 'parashargawande.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages', // Branch used for GitHub Pages deployment

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/parashargawande/parashargawande.github.io/tree/main/',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.7,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-pages',
      {
        id: 'projects-pages',
        path: 'projects',
        routeBasePath: 'projects',
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'Parashar Gawande Logo',
        src: 'img/android-chrome-512x512.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'About',
        },
        {to: '/projects', label: 'Projects', position: 'left'},
        {
          href: 'https://medium.com/@parashargawande/',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://github.com/parashargawande',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://linkedin.com/in/parashargawande',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },
    metadata: [
      {name: 'description', content: 'Portfolio of Parashar Gawande — software engineer building full-stack web apps, IoT systems, and cloud-native products.'},
      {name: 'keywords', content: defaultKeywords.join(', ')},
      {name: 'author', content: 'Parashar Gawande'},
      {name: 'robots', content: 'index, follow'},
      {name: 'theme-color', content: '#0b1120'},
    ],
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'canonical',
        href: `${siteUrl}/`,
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:site_name',
        content: 'Parashar Gawande Portfolio',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image:alt',
        content: 'Portrait and branding of Parashar Gawande',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'google-site-verification',
        content: 'boXMUMiCh1wrtfgbLMejcxosy_XCnKeoP7zf-zG8irQ',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify(structuredData),
    },
  ],
};

export default config;
