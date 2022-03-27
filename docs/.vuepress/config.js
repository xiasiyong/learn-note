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
      { text: "数据结构与算法", link: "/algorithm/", target: "_self" },
    ],
    sidebar: {
      "/react/": [
        {
          title: "框架原理", // 必要的
          path: "/react/tiny-react/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            "/react/tiny-react/JSX 到底是什么.md",
            "/react/tiny-react/DOM 操作问题.md",
            "/react/tiny-react/什么是 Virtual DOM.md",
            "/react/tiny-react/Virtual DOM 如何提升效率.md",
            "/react/tiny-react/创建 Virtual DOM.md",
            "/react/tiny-react/渲染 Virtual DOM 对象为 DOM 对象.md",
            "/react/tiny-react/为元素节点添加属性.md",
            "/react/tiny-react/渲染组件.md",
            "/react/tiny-react/Virtual DOM 对比.md",
            "/react/tiny-react/ref 属性.md",
            "/react/tiny-react/key 属性.md",
          ],
        },
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
      "/linux/": [
        {
          title: "linux", // 必要的
          path: "/linux/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            "/linux/1常用命令.md",
            "/linux/2用户和权限.md",
            "/linux/3进阶知识.md",
            "/linux/4vim编辑器.md",
            "/linux/5软件安装.md",
            "/linux/6压缩和解压文件.md",
            "/linux/7链接服务器.md",
            "/linux/9apache.md",
            "/linux/11Nginx.md",
            "/linux/12ssl证书.md",
          ],
        },
      ],
      "/algorithm/": [
        {
          title: "数据结构", // 必要的
          path: "/algorithm/dataStructure/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            "/algorithm/dataStructure/栈.md",
            "/algorithm/dataStructure/队列.md",
            "/algorithm/dataStructure/集合.md",
            "/algorithm/dataStructure/链表.md",
            "/algorithm/dataStructure/树.md",
            "/algorithm/dataStructure/字典.md",
          ],
        },
        {
          title: "算法思想", // 必要的
          path: "/algorithm/method/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            "/algorithm/method/排序和搜索.md",
            "/algorithm/method/分而治之.md",
            "/algorithm/method/动态规划.md",
            "/algorithm/method/贪心算法.md",
            "/algorithm/method/回溯算法.md",
          ],
        },
      ],

      // fallback
      "/": ["", ["/react/", "react知识点"], ["/vue/", "vue知识点"]],
    },
  },
};
