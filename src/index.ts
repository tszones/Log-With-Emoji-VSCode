import * as vscode from "vscode";

interface ConfigItem {
  trigger: string;
  description: string;
  hideName: boolean;
  format: string;
  prefix: string;
  suffix: string;
  emojiList: string[];
}

class GoCompletionItemProvider implements vscode.CompletionItemProvider {
  position?: vscode.Position;

  config: ConfigItem[];

  constructor(config: ConfigItem[]) {
    this.config = config;
  }

  public provideCompletionItems(
    _: vscode.TextDocument,
    position: vscode.Position
  ) {
    this.position = position;
    const completions = this.config.map((item) => {
      const snippetCompletion = new vscode.CompletionItem(
        item.trigger,
        vscode.CompletionItemKind.Operator
      );

      snippetCompletion.documentation = new vscode.MarkdownString(item.description);

      return snippetCompletion;
    });

    return completions;
  }

  public resolveCompletionItem(item: vscode.CompletionItem) {
    const label = item.label;

    if (this.position && this.config && typeof label === "string") {
      const config = this.config.find((config) => config.trigger === label);

      item.command = {
        command: "dot-usestate-replace",
        title: "refactor",
        arguments: [this.position.translate(0, label.length + 1), config],
      };

    }

    return item;
  }
}

export function activate(context: vscode.ExtensionContext): void {
  const logWithEmojiConfig: vscode.WorkspaceConfiguration =
    vscode.workspace.getConfiguration("logWithEmoji");

  const configList: ConfigItem[] | undefined = logWithEmojiConfig.get("config");

  if (!configList) {
    return;
  }

  const options = vscode.languages.registerCompletionItemProvider(
    [
      "html",
      "javascript",
      "javascriptreact",
      "typescript",
      "typescriptreact",
      "vue",
    ],
    new GoCompletionItemProvider(configList),
    "."
  );

  const command = "dot-usestate-replace";

  const getRandomElementFromArray = (arr: string[]): string => {

    const randomIndex: number = Math.floor(Math.random() * arr.length);

    return arr[randomIndex];
  };

  const commandHandler = (
    editor: vscode.TextEditor,
    edit: vscode.TextEditorEdit,
    position: vscode.Position,
    config: ConfigItem
  ) => {
    const lineText = editor.document.lineAt(position.line).text;

    const emojiList = config.emojiList


    const matchVarReg = new RegExp(`\(\[^\\s\]*\[^\'\"\`\]\).${config.trigger}$`);

    const matchStrReg = new RegExp(`\(\[\'\"\`\]\)\(\[^\'\"\`\]*\)\\1\.${config.trigger}$`);

    let matchFlag: "var" | "str" = "var";

    let text: string | undefined;
    let key;
    let quote = "'";
    let insertVal = "";

    [text, key] = lineText.match(matchVarReg) || [];

    if (!key) {
      [text, quote, key] = lineText.match(matchStrReg) || [];
      matchFlag = "str";
    }

    if (key && text) {
      const index = lineText.indexOf(text);

      edit.delete(new vscode.Range(
        position.with(undefined, index),
        position.with(undefined, index + text.length)
      ));

      if (matchFlag === "var" && key.includes("'")) {
        quote = '"';
      }

      if (matchFlag === "var") {
        if (config.hideName === true) {
          insertVal = `${config.format}(${key})`;
        } else {
          const emojiStr: string = getRandomElementFromArray(emojiList);

          insertVal = `${config.format}(${quote}${emojiStr}${key}${quote}, ${key});`;
        }
      }

      if (matchFlag === "str") {
        const emojiStr: string = getRandomElementFromArray(emojiList);

        insertVal = `${config.format}(${quote}${emojiStr}${key}${quote})`;
      }

      edit.insert(position.with(undefined, index), insertVal);
    }

    return Promise.resolve([]);
  };

  context.subscriptions.push(vscode.commands.registerTextEditorCommand(command, commandHandler));
  context.subscriptions.push(options);
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function deactivate(): void {
}
