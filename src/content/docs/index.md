---
title: TeraLang
description: A lightweight, easy-to-use language for quickly creating mock APIs and mock backends for frontend development
template: splash
hero:
  tagline: A lightweight, easy-to-use language for quickly creating mock APIs and mock backends for frontend development
  image:
    file: ../../assets/teralang.png
  actions:
    - text: Getting started
      link: /getting-started
      icon: right-arrow
---

<style>
.install-box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 2.5rem auto 1.5rem;
  font-family: ui-monospace, monospace;
  font-size: 1.1rem;
  padding: 1rem 1.75rem;
  border-radius: 10px;
  width: fit-content;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.install-box code {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 1.05rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.install-box button {
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  min-width: 70px; /* Fix the width of the button */
  text-align: center; /* Ensure the text is centered */
}

@media (prefers-color-scheme: dark) {
  .install-box {
    background-color: #1e1e1e;
    color: #cdd6f4;
    box-shadow: 0 0 0 1px #333;
  }

  .install-box code {
    background-color: #2a2a2a;
    color: #cdd6f4;
  }

  .install-box button {
    background-color: #3a3a3a;
    color: #cdd6f4;
  }
}

@media (prefers-color-scheme: light) {
  .install-box {
    background-color: #ffffff;
    color: #1a1a1a;
    box-shadow: 0 0 0 1px #ddd;
  }

  .install-box code {
    background-color: #f4f4f4;
    color: #1a1a1a;
  }

  .install-box button {
    background-color: #f0f0f0;
    color: #1a1a1a;
  }

  .install-box button:hover {
    background-color: #e0e0e0;
  }
}

</style>

<div class="install-box">
  <code>npm i teralang</code>
  <button onclick="navigator.clipboard.writeText('npm i teralang').then(() => {
    const btn = this;
    btn.innerText = 'Copied!';
    setTimeout(() => btn.innerText = 'Copy', 2000);
  })">Copy</button>
</div>
