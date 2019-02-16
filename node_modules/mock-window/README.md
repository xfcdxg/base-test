# mock-window

用于在 Node (SSR) 环境下模拟 window 对象

### 例子

```js
  var mockWindow = require('mock-window')

  var win = mockWindow()

  win.hello = 'world'
```

### 设置默认参数

```js
  var mockWindow = require('mock-window')

  var default = { hello: 'world' }

  var win = mockWindow(default)

  console.log(win.hello)  // -> world
```
