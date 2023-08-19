# VSCode Dot UseState Extension

The VSCode Dot UseState Extension is a utility that allows you to quickly generate `useState` code snippets for React in Visual Studio Code. It helps you save time by automatically generating the boilerplate code for declaring state variables and their corresponding setter functions.

## Features

- Provides code snippets for `useState` declarations in React.
- Supports different types of state variables, including arrays, objects, strings, and default values.

## Usage

To use the extension, follow these steps:

1. Open a JavaScript or TypeScript file in Visual Studio Code.

```javascript
xxx.useState => const [xxx, setXxx] = useState()
xxx.useStateArray => const [xxx, setXxx] = useState([])
xxx.useStateObj => const [xxx, setXxx] = useState({})
xxx.useStateString => const [xxx, setXxx] = useState('')
```

Replace `xxx` with your desired state variable name.

![img](https://github.com/code-cola-js/Dot-useState-VSCode/blob/main/public/show.gif)

## License

This extension is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or suggestions regarding the VSCode Dot UseState Extension, feel free to contact me at [codeCola.js@outlook.com].