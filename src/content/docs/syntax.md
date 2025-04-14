---
title: Syntax
description: Introduction to TeraLang's syntax
---

# 📘 Introduction to TeraLang's Syntax

TeraLang is a language designed for quickly creating mock APIs. It’s ideal for frontend developers who need fast, realistic endpoints without setting up a full backend.

This guide introduces you to the basic syntax of TeraLang so you can get productive immediately.

---

## 📁 Basic Route Structure

At its core, a TeraLang file consists of route definitions. Here's the basic syntax:

```tera
route "/hello" GET: {
  json: {
    message: "Hello, world!"
  }
}
```

## 🔍 What’s happening here?
- **route "/hello"** — declares the endpoint path.

- **GET:** — specifies the HTTP method (GET, POST, PUT, DELETE, etc.).

- **json:** — the JSON object returned as the response body.

# 🛠 Tips & Best Practices
Avoid complex logic — **TeraLang is meant for simple mocks**, not production.

Use consistent formatting to keep files readable.

# 🚀 Next Steps
Now that you understand the syntax, you’re ready to:

- Build mock endpoints for your app

- Integrate them with fetch/AJAX

- Share mock servers with teammates