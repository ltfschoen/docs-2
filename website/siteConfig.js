/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    image: '/docs/img/undraw_open_source.svg',
    infoLink: '#',
    pinned: true,
  },
  {
    caption: 'User2',
    image: '/docs/img/undraw_online.svg',
    infoLink: '#',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Substrate Developer Hub', // Title for your website.
  tagline: 'The place for blockchain innovators.',

  url: 'https://substrate-developer-hub.github.io/', // Your website URL
  baseUrl: '/docs/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'docs',
  organizationName: 'substrate-developer-hub',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {page: 'docs', label: 'Docs'},
    {page: 'tutorials', label: 'Tutorials'},
    {href: 'https://www.parity.io/blog/', label: 'Blog'},
    {page: 'community/support', label: 'Community'},
    {href: 'https://github.com/substrate-developer-hub/', label: 'GitHub'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/Substrate-logo.svg',
  footerIcon: 'img/Substrate-logo.svg',
  favicon: 'img/Substrate-logo.svg',

  /* Colors for website */
  colors: {
    primaryColor: '#ff1864',
    secondaryColor: '#222222',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Parity Technologies`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
    defaultLang: 'rust',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
