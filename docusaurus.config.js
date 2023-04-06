// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NeatTeamKnowledge',
  tagline: 'Welcome to the NeaTeam #1943 library!',
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
        title: 'NeatTeamKnowledge',
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
            label: 'Docs',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Our Website',
            items: [
              {
                html: '<a class="footer-logo-name" href="https://neatteam1943.com"><img src="./img/logo-name.svg"/></a>'
              }
            ]
          },
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
                label: 'Docs',
              },
            ],
          },
          {
            title: 'Contact Us',
            items: [
              {
                label: 'Team Captain: +972-50-0000000',
                href: 'tel:+972500000000',
              },
              {
                html: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1690.0968723671167!2d34.952938!3d32.091049!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d312c8ecdda1f%3A0x693a89ad6c7b2751!2zMzLCsDA1JzI4LjIiTiAzNMKwNTcnMTEuMCJF!5e0!3m2!1sen!2sil!4v1663430218391!5m2!1sen!2sil" width="300" height="200" style="border:0; border-radius:10px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
              }
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NeatTeam #1943. Built with Docusaurus.`,
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
          hideable: true,
          autoCollapseCategories: true
        }
      }
    }),
};

module.exports = config;
