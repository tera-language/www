import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://teralang.org",
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
    }),
  ],
});
