// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@inkline/plugin/nuxt", "vue3-carousel-nuxt"],
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_colors.scss" as *;',
        },
      },
    },
  },
  inkline: {
    globals: {
      colorMode: "light",
    },
  },
  nitro: {
    compressPublicAssets: true,
  },
  runtimeConfig: {
    public: {
      buildDate: process.env.BUILD_DATE
    }
  }
});
