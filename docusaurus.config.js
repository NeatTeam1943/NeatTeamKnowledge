// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Neat Team #1943',
  tagline: 'FRC team from Rosh HaAyin, Israel',
  url: 'https://neatteam1943.github.io',
  baseUrl: '/NeatTeamKnowledge/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NeatTeam1943', // Usually your GitHub org/user name.
  projectName: 'NeatTeamKnowledge', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/NeatTeam1943/NeatTeamKnowledge/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Neat Team #1943',
        hideOnScroll: true,
        logo: {
          alt: 'NeatTeam #1943 Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'library/intro',
            position: 'left',
            label: 'Knowledge',
          },
          {
            type: 'doc',
            docId: 'contact-us',
            position: 'right',
            label: 'Contact Us'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Useful Links',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/neatteam_1943',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/NeatTeam1943',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/NeatTeam1943',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                to: 'docs/library/intro',
                label: 'Knowledge',
              },
              {
                to: 'docs/contact-us',
                label: 'Contact Us',
              },
            ],
          },
        ],
        logo: {
          alt: "Neat Team #1943 Logo",
          src: "img/logo-name.svg",
          href: "/",
          height: 120
        },
        copyright: `Copyright © ${new Date().getFullYear()} Neat Team #1943. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true
      },
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: true
        }
      }
    }),
};

module.exports = config;
