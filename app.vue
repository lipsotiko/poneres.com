<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const url = "https://www.poneres.com";
const title = "Poneres.com";
const description =
  "Keeping Chicago's rental market running smoothly. Landlords can relax knowing their investments are in qualified hands, with services covering everything from tenant placement to maintenance coordination.";

useHead({
  title,
  meta: [
    {
      property: "description",
      content: description,
    },
    {
      property: "keywords",
      content:
        "poneres, property, management, real estate, maintenance, rental, services, tenant, landlord, chicago, niles, park ridge, evanston",
    },
    {
      property: "author",
      content: "Poneres Property Management",
    },
  ],
  link: [
    {
      href: url,
      rel: "canonical",
    },
  ],
  script: [
    {
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=G-G80494X25T",
    },
    {
      src: "/js/google.js",
      type: "text/javascript",
    },
  ],
});

useSeoMeta({
  title,
  ogUrl: url,
  ogTitle: "Poneres Property Management",
  ogDescription: description,
  ogImage: `${url}/poneres-logo.png`,
  ogImageWidth: 600,
  ogImageHeight: 600,
  ogType: "website",
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

.bottom-left-stuff a {
  color: #000;
  display: flex;
  font-weight: lighter;
  text-decoration: none;
}

.bottom-left-stuff a:hover {
  text-decoration: underline;
  text-decoration-thickness: 0.1px;
}

.bottom-left-stuff div {
  padding: 8px 8px;
}

textarea {
  height: 100px;
}

:root {
  --navbar--box-shadow: none;
  --navbar--border-radius: 0px;
  --navbar--border-width: 0px;
  --navbar--collapsed--item--background: var(--color-light-tint-50);
  --navbar--light--background: var(--color-light-tint-50);
  --navbar--light--collapsed--background: var(--color-light-tint-50);
  --navbar--light--item--hover--background: var(--color-light-shade-50);
}
</style>
