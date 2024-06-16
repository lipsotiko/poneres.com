<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const url = "https://poneres.com";
const title = 'Poneres.com';

useHead({
  title,
  meta: [
    {
      name: "description",
      property: "og:description",
      content: "A property management company.",
    }
  ],
  link: [
    {
      href: url,
      rel: "canonical",
    },
  ],
});

useSeoMeta({
  title,
  ogUrl: url,
  ogTitle: title,
  ogImage: `${url}/poneres-logo.png`,
  ogImageWidth: 600,
  ogImageHeight: 600,
  ogType: "website"
});
</script>
<style lang="scss">
html {
  font-family: "RedditMono, sans-serif";
}

@font-face {
  font-family: "RedditMono";
  src: url("~/assets//RedditMono.ttf");
}
</style>
