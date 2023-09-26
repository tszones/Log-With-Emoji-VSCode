# Log with Emoji - Visual Studio Code Extension

- [中文](./README_CN.md)

## Overview

![console.log](public/console.log.gif)

The **Log with Emoji** extension for Visual Studio Code allows you to log messages with fun **random** emojis in your code. It enhances your development experience by adding emojis to your console.log statements or other custom log formats.

## Features

- **Customizable Emoji List**: You can customize the list of emojis available for logging. Add your favorite emojis to make your logs more expressive.

- **Quick Logging**: Use predefined triggers to quickly log messages. For example, type "log" and select the desired emoji and log format to insert it into your code.

## Getting Started

1. **Installation**: Install the extension from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=codeColajs.log-with-emoji).

2. Emoji List: Tailor the available emojis by modifying the logWithEmoji.emojiList setting in your VS Code settings. You can use any emojis you like.

## Customization

### Emoji List

You can customize the list of emojis available for logging in your settings. The extension provides a default list of emojis, but you can add your own favorites. The extension will automatically remove duplicates when processing the list.

## Example Configuration

```json
"logWithEmoji.emojiList": [
  "❤️",
  "🌟",
  "😃",
  "🚀",
  "🎉"
  // Add your favorite emojis here
]
```

## Contributing

If you have any suggestions, bug reports, or feature requests, please [open an issue on GitHub](https://github.com/code-cola-js/Log-With-Emoji-VSCode/issues). We welcome contributions from the community!

## License

This extension is licensed under the [MIT License](LICENSE).
