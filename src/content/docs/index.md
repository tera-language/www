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

<div class="install-box">
  <code>npm i teralang</code>
  <button onclick="navigator.clipboard.writeText('npm i -g teralang').then(() => {
    const btn = this;
    btn.innerText = 'Copied!';
    setTimeout(() => btn.innerText = 'Copy', 2000);
  })">Copy</button>
</div>
