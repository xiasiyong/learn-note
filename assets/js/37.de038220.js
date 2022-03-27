(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{437:function(v,_,l){"use strict";l.r(_);var i=l(56),n=Object(i.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h1",{attrs:{id:"vim"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#vim"}},[v._v("#")]),v._v(" vim")]),v._v(" "),l("ol",[l("li",[l("p",[v._v("教程：vimtutor")])]),v._v(" "),l("li",[l("p",[v._v("模式")]),v._v(" "),l("ol",[l("li",[v._v("交互模式\n"),l("ol",[l("li",[v._v("不能输入文本")]),v._v(" "),l("li",[v._v("可以剪切粘贴撤销")])])]),v._v(" "),l("li",[v._v("插入模式\n"),l("ol",[l("li",[v._v("按 i，a(当前光标位置)，A当前光标末尾，o(光标后面新增一行), O(光标前面新增一行) 切换成插入模式")]),v._v(" "),l("li",[v._v("按esc退出插入模式")])])]),v._v(" "),l("li",[v._v("命令模式\n"),l("ol",[l("li",[v._v("退出，保存，配置：高亮，显示行号，发送命令")]),v._v(" "),l("li",[v._v("按：进入该模式")]),v._v(" "),l("li",[v._v("回车执行命令")])])]),v._v(" "),l("li",[v._v("可视模式\n"),l("ol",[l("li",[v._v("v：字符可视模式")]),v._v(" "),l("li",[v._v("V：行可视模式")]),v._v(" "),l("li",[v._v("Ctrl + v: 块可是模式")]),v._v(" "),l("li",[v._v("配合d 删除内容")]),v._v(" "),l("li")])])])]),v._v(" "),l("li",[l("p",[v._v("基本操作")]),v._v(" "),l("ol",[l("li",[l("p",[v._v("打开vim")]),v._v(" "),l("div",{staticClass:"language-bash extra-class"},[l("pre",{pre:!0,attrs:{class:"language-bash"}},[l("code",[l("span",{pre:!0,attrs:{class:"token function"}},[v._v("vim")]),v._v(" file.txt // file.txt 不存在会被创建\n")])])])])])]),v._v(" "),l("li",[l("p",[v._v("插入文本：")]),v._v(" "),l("div",{staticClass:"language-bash extra-class"},[l("pre",{pre:!0,attrs:{class:"language-bash"}},[l("code",[v._v("   i: 进入插入模式\n")])])])]),v._v(" "),l("li",[l("p",[v._v("移动")]),v._v(" "),l("ol",[l("li",[v._v("h, j, k ,l 上下左右\n2. 交互模式下\n"),l("ol",[l("li",[v._v("0: 移动到行首")]),v._v(" "),l("li",[v._v("$ 移动到行尾")]),v._v(" "),l("li",[v._v("w: 一个单词一个单词的移动")])])])])]),v._v(" "),l("li",[l("p",[v._v("保存文件")])]),v._v(" "),l("li",[l("p",[v._v("：进入命令模式\n2. w file.txt\n3. :q , entry 退出\n4. 修改了没保存就按q, 会出现红色告警")]),v._v(" "),l("ol",[l("li",[v._v(":q！ 强制退出")]),v._v(" "),l("li",[v._v(":wq 保存并退出")]),v._v(" "),l("li",[v._v(":x === :wq")])])]),v._v(" "),l("li",[l("p",[v._v("标准操作")]),v._v(" "),l("ol",[l("li",[l("p",[v._v("删除")]),v._v(" "),l("ol",[l("li",[l("p",[v._v("删除字符：交互模式：x，n+x:删除n个字符\n2. 删除行： dd：删除光标所在的行， n+dd, 删除n行")])]),v._v(" "),l("li",[l("p",[v._v("删除单词： dw：移动到单词的首个字母，如果不在首字母，只会删除光标到下一个单词之间所有的内容， d{n}w:删除n个单词\n4. d0: 删除光标到行首的字符\n5. d$： 删除光标到行末的字符\n6. s: 删除光标所在字符并进入插入模式\n7. S： 删除光标所在的行并进入插入模式")])])])]),v._v(" "),l("li",[l("p",[v._v("复制：")]),v._v(" "),l("ol",[l("li",[v._v("yy: 复制行到内存从\n2. Yw:复制一个单词\n3. y$: 复制光标到行末的字符\n4. Y0:复制光标到行首的字符")])])]),v._v(" "),l("li",[l("p",[v._v("粘贴")]),v._v(" "),l("ol",[l("li",[v._v("p\n2. n+p: 粘贴n次")])])]),v._v(" "),l("li",[l("p",[v._v("替换")]),v._v(" "),l("ol",[l("li",[v._v("r：替换当前字符\n2. R： 切换替换模式")])])]),v._v(" "),l("li",[l("p",[v._v("撤销")]),v._v(" "),l("ol",[l("li",[v._v("u\n2. n + u: 撤销n次")])])]),v._v(" "),l("li",[l("p",[v._v("取消撤销")]),v._v(" "),l("ol",[l("li",[v._v("ctrl+r")])])]),v._v(" "),l("li",[l("p",[v._v("跳转")]),v._v(" "),l("ol",[l("li",[v._v("g： 跳转到指定行（: set nu 显示行号），（: set nonu 隐藏行号）\n2. 7G, 7gg ：跳转到第7行\n3. G: 末行\n4. gg： 第一行")])])])])]),v._v(" "),l("li",[l("p",[v._v("高级操作")]),v._v(" "),l("ol",[l("li",[v._v("分屏\n"),l("ol",[l("li",[v._v("sp: 横向分屏")]),v._v(" "),l("li",[v._v("vsp： 垂直分屏")]),v._v(" "),l("li",[v._v("Ctrl + w: 切换viewport")]),v._v(" "),l("li",[v._v("合并\n"),l("ol",[l("li",[v._v("r 文件名")])])]),v._v(" "),l("li",[v._v("查找\n"),l("ol",[l("li",[v._v("/ 当前光标到文末查找")]),v._v(" "),l("li",[v._v("？当前光标到文件开头查找")]),v._v(" "),l("li",[v._v("下一个匹配项 n")]),v._v(" "),l("li",[v._v("上一个匹配项 N")]),v._v(" "),l("li",[v._v("😒/旧字符串/新字符串 查找并替换（替换光标所在行的第一个匹配到的字符串）")]),v._v(" "),l("li",[v._v("😒/旧字符串/新字符串/g （替换光标所在行的所有匹配到的字符串）")]),v._v(" "),l("li",[v._v("#，# 😒/旧字符串/新字符串/g （替换文件中第几行到第几行所有匹配到的字符串）")]),v._v(" "),l("li",[v._v("%s/旧字符串/新字符串 （替换文件中所有匹配到的字符串）")])])]),v._v(" "),l("li",[v._v("运行外部命令\n"),l("ol",[l("li",[v._v(":! + ls")])])])])])])]),v._v(" "),l("li",[l("p",[v._v("vim 配置")]),v._v(" "),l("div",{staticClass:"language-ba extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[v._v('   cp /etc/vimrc ~/.vimrc\n   \n   syntax on\n   set number\n   set showcmd\n   set ignorecase " 搜索时忽略大小写\n   set mouse=a\n')])])])])])])}),[],!1,null,null,null);_.default=n.exports}}]);