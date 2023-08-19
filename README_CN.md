# VSCode Dot UseState Extension

VSCode Dot UseState 扩展是一个在 Visual Studio Code 中快速生成 React `useState` 代码片段的实用工具。它通过自动为声明状态变量及其对应的设置函数生成样板代码，帮助您节省时间。

## 功能

- 提供用于在 React 中声明 `useState` 的代码片段。
- 支持不同类型的状态变量，包括数组、对象、字符串和默认值。

## 使用方法

要使用该扩展，请按照以下步骤进行操作：

1. 在 Visual Studio Code 中打开一个 JavaScript 或 TypeScript 文件。

```javascript
xxx.useState => const [xxx, setXxx] = useState()
xxx.useStateArray => const [xxx, setXxx] = useState([])
xxx.useStateObj => const [xxx, setXxx] = useState({})
xxx.useStateString => const [xxx, setXxx] = useState('')
```

将 `xxx` 替换为您想要的状态变量名。

![img](https://github.com/code-cola-js/Dot-useState-VSCode/blob/main/public/show.gif)

## 许可证

该扩展基于 [MIT 许可证](LICENSE)。

## 联系方式

如果您对 VSCode Dot UseState Extension 有任何问题或建议，请随时通过 [codeCola.js@outlook.com] 联系我。