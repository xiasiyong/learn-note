(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{441:function(t,s,a){"use strict";a.r(s);var e=a(56),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"apache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache"}},[t._v("#")]),t._v(" apache")]),t._v(" "),a("h2",{attrs:{id:"操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作"}},[t._v("#")]),t._v(" 操作")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" httpd\nsystemctl start httpd\nsystemctl stop httpd\nsystemctl restart httpd\nsystemctl reload httpd // 修改配置之后，重载\nsystemctl status httpd // 查看状态\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" httpd // 开启启动\nsystemctl disable httpd // 开机不启动\nsystemctl is-enabled httpd  // 查看是否开机启动\nfirewall-cmd --list-ports // 查看防火墙开放端口\nsystemctl stop firewalld // 停止防火墙\nfirewall-cmd --zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("public --add-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("/tcp --permanent // 开放80端口， 修改之后需要reload\nfirewall-cmd --zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("public --query-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("/tcp \nfirewall-cmd --zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("public --remove-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("/tcp --permanent \nfirewall-cmd --reload // 立即生效\n\n")])])]),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("p",[t._v("![image-20220219181329605](/Users/xiasiyong/Library/Application Support/typora-user-images/image-20220219181329605.png)")]),t._v(" "),a("p",[t._v("![image-20220219181650980](/Users/xiasiyong/Library/Application Support/typora-user-images/image-20220219181650980.png)")]),t._v(" "),a("h2",{attrs:{id:"selinux-安全子系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#selinux-安全子系统"}},[t._v("#")]),t._v(" SElinux:安全子系统")]),t._v(" "),a("p",[t._v("![image-20220219183226403](/Users/xiasiyong/Library/Application Support/typora-user-images/image-20220219183226403.png)")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("\tsestatus: 查看selinux的状态\n\tgetenforce\n\tsetenforce "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" // 临时的\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -Zd /var/www/html\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" _Zd /home/xxx\n\tyum provides semanage\n\tsemanage \n\tsemanage fcontext -a -t xxx /home/web/*\n\trestorecon -Rv /home/web // 重载上下文\n\n")])])]),a("h2",{attrs:{id:"动态分配ip-静态分配ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态分配ip-静态分配ip"}},[t._v("#")]),t._v(" 动态分配IP/静态分配IP")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("systemctl status NetworkManager\nnmtui\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);