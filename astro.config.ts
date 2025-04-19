import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import teralang from "./teralang.textmate.json";

// https://astro.build/config
export default defineConfig({
  site: "https://teralang.org",
  markdown: {
    shikiConfig: {
      langs: [teralang],
      langAlias: {
        tera: "teralang",
      },
    },
  },
  integrations: [
    starlight({
      title: "TeraLang",
      favicon: "/favicon.ico",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/tera-language/teralang",
        },
      ],
      sidebar: [
        {
          label: "Getting started",
          slug: "getting-started",
        },
        {
          label: "Syntax",
          slug: "syntax",
        },
        {
          label: "Editor support",
          slug: "editor-support",
        },
      ],
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/teralang.css",
      ],
      components: {
        ThemeSelect: "./src/components/ThemeSelect.astro",
      },
    }),
  ],
});
