import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";

import jopSoftwarecookieconsent from "@jop-software/astro-cookieconsent";
import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: "https://sharukhrahman.vercel.app",
  integrations: [tailwind(), sitemap(), mdx(), pagefind(), jopSoftwarecookieconsent({
    guiOptions: {
      consentModal: {
        layout: "box",
        position: "bottom left",
        flipButtons: false,
        equalWeightButtons: true,
      },
      preferencesModal: {
        layout: "box",
        position: 'right',
        flipButtons: false,
        equalWeightButtons: true,
      },
    },
    categories: {
      necessary: {
        enabled: true,
        readOnly: true,
      },
      analytics: {
        enabled: true,
      },
    },
    language: {
      default: "en",
      translations: {
        en: {
          consentModal: {
            title: "This page uses cookies",
            description:
              "Just basic analytics, and you'll always remain anonymized!",
            acceptAllBtn: "Accept all",
          },
        },
      },
    },
  }), playformCompress()],
  markdown: {
    shikiConfig: {
      theme: "css-variables"
    }
  }
});