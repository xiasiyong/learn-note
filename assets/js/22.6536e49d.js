(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{422:function(t,s,a){"use strict";a.r(s);var n=a(56),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"动态规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态规划"}},[t._v("#")]),t._v(" 动态规划")]),t._v(" "),a("h2",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),a("p",[t._v("算法设计中的一种方法")]),t._v(" "),a("p",[t._v("将一个问题分解成相互重叠的子问题，通过反复请求子问题，要解决原来的问题")]),t._v(" "),a("h2",{attrs:{id:"动态规划vs分而治之"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态规划vs分而治之"}},[t._v("#")]),t._v(" 动态规划VS分而治之")]),t._v(" "),a("p",[t._v("最关键的区别就是动态规划的子问题是有相互重叠的，而分而治之的子问题是相互独立的")]),t._v(" "),a("h2",{attrs:{id:"场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#场景"}},[t._v("#")]),t._v(" 场景")]),t._v(" "),a("h3",{attrs:{id:"_1-斐波拉契定律"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-斐波拉契定律"}},[t._v("#")]),t._v(" 1. 斐波拉契定律")]),t._v(" "),a("h2",{attrs:{id:"算法题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法题"}},[t._v("#")]),t._v(" 算法题")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("[70] 假设你正在爬楼梯。需要 "),a("code",[t._v("n")]),t._v(" 阶你才能到达楼顶。")]),t._v(" "),a("p",[t._v("每次你可以爬 "),a("code",[t._v("1")]),t._v(" 或 "),a("code",[t._v("2")]),t._v(" 个台阶。你有多少种不同的方法可以爬到楼顶呢？")]),t._v(" "),a("p",[t._v("解题思路：")]),t._v(" "),a("ol",[a("li",[t._v("爬到n阶可以在n-1阶怕一个台阶或者在n-2阶爬两个台阶")]),t._v(" "),a("li",[t._v("fn = f(n-1) + f(n-2)")]),t._v(" "),a("li",[t._v("反复执行：从2循环到n，执行上述公式")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("climbStairs")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。")]),t._v(" "),a("p",[t._v("给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。")]),t._v(" "),a("p",[t._v("示例 1：")]),t._v(" "),a("p",[t._v("输入：[1,2,3,1]\n输出：4\n解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。\n偷窃到的最高金额 = 1 + 3 = 4 。\n示例 2：")]),t._v(" "),a("p",[t._v("输入：[2,7,9,3,1]\n输出：12\n解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。\n偷窃到的最高金额 = 2 + 9 + 1 = 12 。")]),t._v(" "),a("p",[t._v("解题思路")]),t._v(" "),a("ol",[a("li",[t._v("f(k)：表示从前k个房间能够偷窃到的总金额")]),t._v(" "),a("li",[t._v("ak： 表示第k个房间的金额")]),t._v(" "),a("li",[t._v("f(k) = max(f(k-2) + ak, f(k-2))")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);