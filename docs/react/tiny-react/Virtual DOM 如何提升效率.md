# 4. Virtual DOM 如何提升效率

精准找出发生变化的 DOM 对象，只更新发生变化的部分。

在 React 第一次创建 DOM 对象后，会为每个 DOM 对象创建其对应的 Virtual DOM 对象，在 DOM 对象发生更新之前，React 会先更新所有的 Virtual DOM 对象，然后 React 会将更新后的 Virtual DOM 和 更新前的 Virtual DOM 进行比较，从而找出发生变化的部分，React 会将发生变化的部分更新到真实的 DOM 对象中，React 仅更新必要更新的部分。

Virtual DOM 对象的更新和比较仅发生在内存中，不会在视图中渲染任何内容，所以这一部分的性能损耗成本是微不足道的。

<img src="./images/1.png" style="margin: 20px 0;width: 80%"/>

```javascript
<div id="container">
  <p>Hello React</p>
</div>
```

```javascript
<div id="container">
  <p>Hello Angular</p>
</div>
```

```javascript
const before = {
  type: "div",
  props: { id: "container" },
  children: [
    {
      type: "p",
      props: null,
      children: [{ type: "text", props: { textContent: "Hello React" } }],
    },
  ],
};
```

```javascript
const after = {
  type: "div",
  props: { id: "container" },
  children: [
    {
      type: "p",
      props: null,
      children: [{ type: "text", props: { textContent: "Hello Angular" } }],
    },
  ],
};
```
