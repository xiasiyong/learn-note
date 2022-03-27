# 1. JSX 到底是什么

使用 React 就一定会写 JSX，JSX 到底是什么呢？它是一种 JavaScript 语法的扩展，React 使用它来描述用户界面长成什么样子。虽然它看起来非常像 HTML，但它确实是 JavaScript 。在 React 代码执行之前，Babel 会对将 JSX 编译为 React API.

```javascript
<div className="container">
  <h3>Hello React</h3>
  <p>React is great </p>
</div>
```

```javascript
React.createElement(
  "div",
  {
    className: "container",
  },
  React.createElement("h3", null, "Hello React"),
  React.createElement("p", null, "React is great")
);
```

从两种语法对比来看，JSX 语法的出现是为了让 React 开发人员编写用户界面代码更加轻松。

[Babel REPL](https://babeljs.io/repl)
