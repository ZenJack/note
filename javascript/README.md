# 原生 Javacript 相关

1. [横向滚动条到底](#横向滚动条到底)


---

### 横向滚动条到底
```js
let element = ...
if ((element.scrollLeft + element.offsetWidth) >= element.scrollWidth) {
  // 横向滚动到底了
}
```
- scrollLeft: 滚动条距左
- offsetWidth: 可见区域的内容
- scrollWidth: 整个元素的宽度
