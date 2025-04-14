---
title: Editor Support
description: Editor support with TeraLang
---

# ✨ TeraLang Editor Support

TeraLang has official editor integrations powered by [Tree-sitter](https://tree-sitter.github.io/tree-sitter/), enabling syntax highlighting and structure-aware editing in multiple editors.

Below are the current options and how to install them.

---

## 🌳 Tree-sitter Grammar

The core of all editor support is the [Tree-sitter grammar for TeraLang](https://github.com/tera-language/tree-sitter-teralang).

To use this grammar in an editor that supports Tree-sitter (like Neovim, Helix, or custom tooling), clone and link it into your Tree-sitter setup.

**Repo:**
[Tree-sitter Repo](https://github.com/tera-language/tree-sitter-teralang)

---

## 🧠 Zed Editor Support

Zed has native support for Tree-sitter grammars. You can install the TeraLang plugin for Zed manually:

**Repo:**
[Zed Extension Repo](https://github.com/tera-language/teralang-zed)

### 🛠 Installation

1. Clone the repo.
2. Open the extensions menu in Zed.
3. Click on "Install Dev Extension" and select the directory where you cloned the repo.
4. Reload Zed, and you should now have syntax highlighting for `.tera` files.

---

## 🧩 VS Code Extension

There is also a TeraLang syntax extension for Visual Studio Code:

**Repo:**
[Visual Studio Code Extension Repo](https://github.com/tera-language/teralang-vscode)

### 🛠 Installation

1. Download the repo
2. Move it to your Visual Studio Code extensions folder
3. You should now have syntax support for `.tera` files.

---

## 📝 File Extensions

All editor integrations support the `.tera` file extension. Make sure your files use this extension to get syntax highlighting and editor features.

---

## 🧪 Contribute

Want to add support for another editor (like Sublime, Atom, or JetBrains)? PRs are welcome in the respective repos!

---

Happy editing 🖋️🚀
