# 6. 渲染 Virtual DOM 对象为 DOM 对象

通过调用 render 方法可以将 Virtual DOM 对象更新为真实 DOM 对象。

在更新之前需要确定是否存在旧的 Virtual DOM，如果存在需要比对差异，如果不存在可以直接将 Virtual DOM 转换为 DOM 对象。

目前先只考虑不存在旧的 Virtual DOM 的情况，就是说先直接将 Virtual DOM 对象更新为真实 DOM 对象。

```javascript
// render.js
export default function render(
  virtualDOM,
  container,
  oldDOM = container.firstChild
) {
  // 在 diff 方法内部判断是否需要对比 对比也好 不对比也好 都在 diff 方法中进行操作
  diff(virtualDOM, container, oldDOM);
}
```

```javascript
// diff.js
import mountElement from "./mountElement";

export default function diff(virtualDOM, container, oldDOM) {
  // 判断 oldDOM 是否存在
  if (!oldDOM) {
    // 如果不存在 不需要对比 直接将 Virtual DOM 转换为真实 DOM
    mountElement(virtualDOM, container);
  }
}
```

在进行 virtual DOM 转换之前还需要确定 Virtual DOM 的类 Component VS Native Element。

类型不同需要做不同的处理 如果是 Native Element 直接转换。

如果是组件 还需要得到组件实例对象 通过组件实例对象获取组件返回的 virtual DOM 然后再进行转换。

目前先只考虑 Native Element 的情况。

```javascript
// mountElement.js
import mountNativeElement from "./mountNativeElement";

export default function mountElement(virtualDOM, container) {
  // 通过调用 mountNativeElement 方法转换 Native Element
  mountNativeElement(virtualDOM, container);
}
```

```javascript
// mountNativeElement.js
import createDOMElement from "./createDOMElement";

export default function mountNativeElement(virtualDOM, container) {
  const newElement = createDOMElement(virtualDOM);
  container.appendChild(newElement);
}
```

```javascript
// createDOMElement.js
import mountElement from "./mountElement";
import updateElementNode from "./updateElementNode";

export default function createDOMElement(virtualDOM) {
  let newElement = null;
  if (virtualDOM.type === "text") {
    // 创建文本节点
    newElement = document.createTextNode(virtualDOM.props.textContent);
  } else {
    // 创建元素节点
    newElement = document.createElement(virtualDOM.type);
    // 更新元素属性
    updateElementNode(newElement, virtualDOM);
  }
  // 递归渲染子节点
  virtualDOM.children.forEach((child) => {
    // 因为不确定子元素是 NativeElement 还是 Component 所以调用 mountElement 方法进行确定
    mountElement(child, newElement);
  });
  return newElement;
}
```
