---
title: Getting started
description: Getting started with TeraLang
---

## 📁 Installation

You can install TeraLang via npm:

```bash
npm install -g teralang
```

## Usage

### 📘 Basic Example

Create a **.tera** file to define routes for your mock API. For example, create a file called **mock-api.tera**:

```tera
route "/ping" GET: {
  status: 200 // optional
  json: {
    message: "pong"
  }
}
```

To start the server, run:

```bash
npx teralang serve mock-api.tera --port 4000
```

### 🚀 Importing Other Tera Files
To keep your project organized and reduce clutter, you can import other **.tera** files into your main file. This allows you to split different parts of your mock API into separate files and manage them more easily.

For example, if you have a file called app.tera and want to include it in your main file, you can import it like this:

```tera
import "./app.tera"
```

#### Note:

Imported **.tera** files follow the exact same format as your main .tera file—there's no special syntax or setup required.
