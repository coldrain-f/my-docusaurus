// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "COLDRAIN-F",
  tagline: "Even if it flows slowly, it has to flow.",
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
          sidebarPath: require.resolve("./sidebars/sidebars.js"),
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
    // 프로그래밍 언어
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "javascript",
        path: "language/javascript",
        routeBasePath: "language/javascript",
        sidebarPath: require.resolve(
          "./sidebars/language/sidebarsJavascript.js"
        ),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "typescript",
        path: "language/typescript",
        routeBasePath: "language/typescript",
        sidebarPath: require.resolve(
          "./sidebars/language/sidebarsTypescript.js"
        ),
      },
    ],
    // CS 지식
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "network",
        path: "cs/network",
        routeBasePath: "cs/network",
        sidebarPath: require.resolve("./sidebars/cs/sidebarsNetwork.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "database",
        path: "cs/database",
        routeBasePath: "cs/database",
        sidebarPath: require.resolve("./sidebars/cs/sidebarsDatabase.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "dataStructure",
        path: "cs/dataStructure",
        routeBasePath: "cs/dataStructure",
        sidebarPath: require.resolve("./sidebars/cs/sidebarsDataStructure.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "operatingSystem",
        path: "cs/operatingSystem",
        routeBasePath: "cs/operatingSystem",
        sidebarPath: require.resolve(
          "./sidebars/cs/sidebarsOperatingSystem.js"
        ),
      },
    ],
    // 알고리즘
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "algorithm",
        path: "algorithm",
        routeBasePath: "algorithm",
        sidebarPath: require.resolve(
          "./sidebars/algorithm/sidebarsAlgorithm.js"
        ),
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
        // 네비게이션 아이템
        // ** 새로운 메뉴 생성법
        // 1. 새로운 폴더를 하나 생성한다.
        // 2. 새로운 sidebars를 하나 생성한다.
        // 3. 새로운 @docusaurus/plugin-content-docs를 생성한다.
        // 4. 만든 폴더에 intro.md파일을 하나 생성한다.
        items: [
          {
            type: "dropdown",
            docId: "intro",
            position: "left",
            label: "🎓 CS 지식",
            items: [
              {
                type: "doc",
                docsPluginId: "dataStructure",
                label: "자료구조",
                docId: "intro",
              },
              {
                type: "doc",
                docsPluginId: "operatingSystem",
                label: "운영체제",
                docId: "intro",
              },
              {
                type: "doc",
                docsPluginId: "database",
                label: "데이터베이스",
                docId: "intro",
              },
              {
                type: "doc",
                docsPluginId: "network",
                label: "네트워크",
                docId: "intro",
              },
            ],
          },
          {
            type: "dropdown",
            position: "left",
            label: "📚 프로그래밍",
            items: [
              {
                type: "doc",
                docsPluginId: "javascript",
                label: "자바스크립트",
                docId: "intro",
              },
              {
                type: "doc",
                docsPluginId: "typescript",
                label: "타입스크립트",
                docId: "intro",
              },
            ],
          },
          {
            type: "doc",
            docsPluginId: "algorithm",
            docId: "intro",
            position: "left",
            label: "🤖 알고리즘",
          },
          { to: "/blog", label: "💬 Today I Learned", position: "right" },
          {
            href: "https://github.com/coldrain-f",
            label: "Github",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   title: "Docs",
          //   items: [
          //     {
          //       label: "Tutorial",
          //       to: "/docs/intro",
          //     },
          //   ],
          // },
          // {
          //   title: "Community",
          //   items: [
          //     {
          //       label: "Stack Overflow",
          //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
          //     },
          //   ],
          // },
          // {
          //   title: "More",
          //   items: [
          //     {
          //       label: "Blog",
          //       to: "/blog",
          //     },
          //     {
          //       label: "GitHub",
          //       href: "https://github.com/coldrain-f",
          //     },
          //   ],
          // },
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
