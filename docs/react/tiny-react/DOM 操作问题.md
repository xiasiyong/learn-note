# 2. DOM 操作问题

在现代 web 应用程序中使用 JavaScript 操作 DOM 是必不可少的，但遗憾的是它比其他大多数 JavaScript 操作要慢的多。

大多数 JavaScript 框架对于 DOM 的更新远远超过其必须进行的更新，从而使得这种缓慢操作变得更糟。

例如假设你有包含十个项目的列表，你仅仅更改了列表中的第一项，大多数 JavaScript 框架会重建整个列表，这比必要的工作要多十倍。

更新效率低下已经成为严重问题，为了解决这个问题，React 普及了一种叫做 Virtual DOM 的东西，Virtual DOM 出现的目的就是为了提高 JavaScript 操作 DOM 对象的效率。
