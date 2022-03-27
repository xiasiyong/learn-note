# 11. key 属性

在 React 中，渲染列表数据时通常会在被渲染的列表元素上添加 key 属性，key 属性就是数据的唯一标识，帮助 React 识别哪些数据被修改或者删除了，从而达到 DOM 最小化操作的目的。

key 属性不需要全局唯一，但是在同一个父节点下的兄弟节点之间必须是唯一的。

也就是说，在比对同一个父节点下类型相同的子节点时需要用到 key 属性。

## 11.1 节点对比

实现思路是在两个元素进行比对时，如果类型相同，就循环旧的 DOM 对象的子元素，查看其身上是否有 key 属性，如果有就将这个子元素的 DOM 对象存储在一个 JavaScript 对象中，接着循环要渲染的 Virtual DOM 对象的子元素，在循环过程中获取到这个子元素的 key 属性，然后使用这个 key 属性到 JavaScript 对象中查找 DOM 对象，如果能够找到就说明这个元素是已经存在的，是不需要重新渲染的。如果通过 key 属性找不到这个元素，就说明这个元素是新增的是需要渲染的。

```javascript
// diff.js
else if (oldVirtualDOM && virtualDOM.type === oldVirtualDOM.type) {
  // 将拥有key属性的元素放入 keyedElements 对象中
  let keyedElements = {}
  for (let i = 0, len = oldDOM.childNodes.length; i < len; i++) {
    let domElement = oldDOM.childNodes[i]
    if (domElement.nodeType === 1) {
      let key = domElement.getAttribute("key")
      if (key) {
        keyedElements[key] = domElement
      }
    }
  }
}
```

```javascript
// diff.js
// 看一看是否有找到了拥有 key 属性的元素
let hasNoKey = Object.keys(keyedElements).length === 0;

// 如果没有找到拥有 key 属性的元素 就按照索引进行比较
if (hasNoKey) {
  // 递归对比 Virtual DOM 的子元素
  virtualDOM.children.forEach((child, i) => {
    diff(child, oldDOM, oldDOM.childNodes[i]);
  });
} else {
  // 使用key属性进行元素比较
  virtualDOM.children.forEach((child, i) => {
    // 获取要进行比对的元素的 key 属性
    let key = child.props.key;
    // 如果 key 属性存在
    if (key) {
      // 到已存在的 DOM 元素对象中查找对应的 DOM 元素
      let domElement = keyedElements[key];
      // 如果找到元素就说明该元素已经存在 不需要重新渲染
      if (domElement) {
        // 虽然 DOM 元素不需要重新渲染 但是不能确定元素的位置就一定没有发生变化
        // 所以还要查看一下元素的位置
        // 看一下 oldDOM 对应的(i)子元素和 domElement 是否是同一个元素 如果不是就说明元素位置发生了变化
        if (oldDOM.childNodes[i] && oldDOM.childNodes[i] !== domElement) {
          // 元素位置发生了变化
          // 将 domElement 插入到当前元素位置的前面 oldDOM.childNodes[i] 就是当前位置
          // domElement 就被放入了当前位置
          oldDOM.insertBefore(domElement, oldDOM.childNodes[i]);
        }
      } else {
        mountElement(child, oldDOM, oldDOM.childNodes[i]);
      }
    }
  });
}
```

```javascript
// mountNativeElement.js
if (oldDOM) {
  container.insertBefore(newElement, oldDOM);
} else {
  // 将转换之后的DOM对象放置在页面中
  container.appendChild(newElement);
}
```

## 11.2 节点卸载

在比对节点的过程中，如果旧节点的数量多于要渲染的新节点的数量就说明有节点被删除了，继续判断 keyedElements 对象中是否有元素，如果没有就使用索引方式删除，如果有就要使用 key 属性比对的方式进行删除。

实现思路是循环旧节点，在循环旧节点的过程中获取旧节点对应的 key 属性，然后根据 key 属性在新节点中查找这个旧节点，如果找到就说明这个节点没有被删除，如果没有找到，就说明节点被删除了，调用卸载节点的方法卸载节点即可。

```javascript
// 获取就节点的数量
let oldChildNodes = oldDOM.childNodes;
// 如果旧节点的数量多于要渲染的新节点的长度
if (oldChildNodes.length > virtualDOM.children.length) {
  if (hasNoKey) {
    for (
      let i = oldChildNodes.length - 1;
      i >= virtualDOM.children.length;
      i--
    ) {
      oldDOM.removeChild(oldChildNodes[i]);
    }
  } else {
    for (let i = 0; i < oldChildNodes.length; i++) {
      let oldChild = oldChildNodes[i];
      let oldChildKey = oldChild._virtualDOM.props.key;
      let found = false;
      for (let n = 0; n < virtualDOM.children.length; n++) {
        if (oldChildKey === virtualDOM.children[n].props.key) {
          found = true;
          break;
        }
      }
      if (!found) {
        unmount(oldChild);
        i--;
      }
    }
  }
}
```

卸载节点并不是说将节点直接删除就可以了，还需要考虑以下几种情况

1. 如果要删除的节点是文本节点的话可以直接删除
2. 如果要删除的节点由组件生成，需要调用组件卸载生命周期函数
3. 如果要删除的节点中包含了其他组件生成的节点，需要调用其他组件的卸载生命周期函数
4. 如果要删除的节点身上有 ref 属性，还需要删除通过 ref 属性传递给组件的 DOM 节点对象
5. 如果要删除的节点身上有事件，需要删除事件对应的事件处理函数

```javascript
export default function unmount(dom) {
  // 获取节点对应的 virtualDOM 对象
  const virtualDOM = dom._virtualDOM;
  // 如果要删除的节点时文本
  if (virtualDOM.type === "text") {
    // 直接删除节点
    dom.remove();
    // 阻止程序向下运行
    return;
  }
  // 查看节点是否由组件生成
  let component = virtualDOM.component;
  // 如果由组件生成
  if (component) {
    // 调用组件卸载生命周期函数
    component.componentWillUnmount();
  }

  // 如果节点具有 ref 属性 通过再次调用 ref 方法 将传递给组件的DOM对象删除
  if (virtualDOM.props && virtualDOM.props.ref) {
    virtualDOM.props.ref(null);
  }

  // 事件处理
  Object.keys(virtualDOM.props).forEach((propName) => {
    if (propName.slice(0, 2) === "on") {
      const eventName = propName.toLowerCase().slice(2);
      const eventHandler = virtualDOM.props[propName];
      dom.removeEventListener(eventName, eventHandler);
    }
  });

  // 递归删除子节点
  if (dom.childNodes.length > 0) {
    for (let i = 0; i < dom.childNodes.length; i++) {
      unmount(dom.childNodes[i]);
      i--;
    }
  }

  dom.remove();
}
```
