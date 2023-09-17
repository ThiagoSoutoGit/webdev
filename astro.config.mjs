import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://thiagosoutogit.github.io",
  integrations: [
    starlight({
      title: "Web development",
      social: {
        github: "https://github.com/thiagosoutogit",
      },
      sidebar: [
        {
          label: "Programming Languages",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "TypeScript", link: "/code/typescript/" },
          ],
        },
        {
          label: "NestJS",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "NestJS", link: "/nest/nest/" },
          ],
        },
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "NeoVim", link: "/guides/nvim/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
