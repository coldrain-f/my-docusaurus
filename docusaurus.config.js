// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "찬비 블로그",
  tagline: "Dinosaurs are cool",
  url: "https://coldrain-f.github.io", // username.github.io (username은 Github username)
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "coldrain-f", // Usually your GitHub org/user name.
  projectName: "my-docusaurus", // Github Repository Name

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/coldrain-f/my-docusaurus/blob/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/coldrain-f/my-docusaurus/blob/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "javascript",
        path: "language/javascript",
        routeBasePath: "language/javascript",
        sidebarPath: require.resolve("./sidebarsJavascript.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "typescript",
        path: "language/typescript",
        routeBasePath: "language/typescript",
        sidebarPath: require.resolve("./sidebarsTypescript.js"),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "COLDRAIN-F",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        // 네비게이션 항목
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "🎓 CS 지식",
          },
          // 문서 멀티 인스턴스
          {
            type: "dropdown",
            position: "left",
            label: "📚 프로그래밍",
            items: [
              {
                type: "doc",
                docsPluginId: "javascript",
                label: "Javascript",
                docId: "intro",
              },
              {
                type: "doc",
                docsPluginId: "typescript",
                label: "Typescript",
                docId: "intro",
              },
            ],
          },
          { to: "/blog", label: "💬 TIL(Today I Learnd)", position: "right" },
          {
            href: "https://github.com/coldrain-f",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              // {
              //   label: "Stack Overflow",
              //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
              // },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/coldrain-f",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} COLDRAIN-F BLUG, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
