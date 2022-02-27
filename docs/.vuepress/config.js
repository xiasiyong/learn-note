module.exports = {
  base: "/learn-note/",
  title: "学习笔记",
  description: "高级前端开发工程师进阶之路",
  themeConfig: {
    nav: [
      { text: "react", link: "/react/", target: "_self", rel: "" },
      { text: "vue", link: "/vue/", target: "_self" },
      { text: "nodejs", link: "/nodejs/", target: "_self" },
      { text: "微前端", link: "/microend/", target: "_self" },
      { text: "linux", link: "/linux/", target: "_self" },
    ],
    sidebar: {
      "/react/": [
        {
          title: "hooks", // 必要的
          path: "/react/hooks/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: ["/react/hooks/useEffect", "/react/hooks/useState"],
        },
        {
          title: "样式篇", // 必要的
          path: "/react/style/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: ["/react/style/module"],
        },
      ],

      "/vue/": [
        {
          title: "生命周期", // 必要的
          path: "/vue/hooks/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: ["/vue/hooks/mounted"],
        },
        {
          title: "源码篇", // 必要的
          path: "/vue/source/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: ["/vue/source/diff"],
        },
      ],

      // fallback
      "/": ["", ["/react/", "react知识点"], ["/vue/", "vue知识点"]],
    },
  },
};
