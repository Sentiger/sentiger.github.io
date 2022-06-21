import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "http://blog.sentiger.com",
  pure:true,
  author: {
    name: "Sentiger",
    url: "https://blog.sentiger.com",
  },
  // 深色模式
  darkmode:"enable",

  iconAssets: "//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css",

  logo: "/logo.svg",

  docsBranch:"master",
  repo: "sentiger/sentiger.github.io",

  lastUpdated: true,
  contributors: false,
  editLink: false,

  ReadingTime:false,

  docsDir: "blog",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "",

  displayFooter: true,

  pageInfo: [ "Original", "Date", "Category", "Tag"],

  blog: {
    name:"Sentiger",
    description: "一个自由写作者",
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using giscus
       */
      type: "giscus",
      repo: "Sentiger/sentiger.github.io",
      repoId: "R_kgDOHZzSuQ",
      category: "Announcements",
      categoryId: "DIC_kwDOHZzSuc4CPyeT",

      /**
       * Using twikoo
       */
      // type: "twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // type: "waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
