# 3. 什么是 Virtual DOM

在 React 中，每个 DOM 对象都有一个对应的 Virtual DOM 对象，它是 DOM 对象的 JavaScript 对象表现形式，其实就是使用 JavaScript 对象来描述 DOM 对象信息，比如 DOM 对象的类型是什么，它身上有哪些属性，它拥有哪些子元素。

可以把 Virtual DOM 对象理解为 DOM 对象的副本，但是它不能直接显示在屏幕上。

```javascript
<div className="container">
  <h3>Hello React</h3>
  <p>React is great </p>
</div>
```

```javascript
{
  type: "div",
  props: { className: "container" },
  children: [
    {
      type: "h3",
      props: null,
      children: [
        {
          type: "text",
          props: {
            textContent: "Hello React"
          }
        }
      ]
    },
    {
      type: "p",
      props: null,
      children: [
        {
          type: "text",
          props: {
            textContent: "React is great"
          }
        }
      ]
    }
  ]
}
```
