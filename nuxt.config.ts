// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@inkline/plugin/nuxt", "vue3-carousel-nuxt"],
  devtools: { enabled: true },
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
      buildDate: process.env.BUILD_DATE,
      apiBase:
        process.env.NODE_ENV === "development"
          ? "http://localhost:8080"
          : "https://app.poneres.com",
    },
  },
});
