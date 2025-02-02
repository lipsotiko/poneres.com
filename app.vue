<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const url = "https://www.poneres.com";
const title = "Poneres.com";
const description = "buy, sell, & manage real estate in the Chicagoland area with confidence.";
const areas = ["Chicago", "Des Plaines", "Niles", "Park Ridge"]
const keywords = areas.map(a => [`${a} area real estate`, `${a} homes`, `${a} homes for sale`]).flat()
keywords.push("Evangelos Poneres", "property management", "real estate");

useHead({
  title,
  meta: [
    {
      property: "description",
      content: description,
    },
    {
      property: "keywords",
      content: keywords.join(', ')
    },
    {
      property: "author",
      content: "Evangelos Poneres",
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
  ogTitle: "Evangelos Poneres | Chicago Real Estate Agent",
  ogDescription: description,
  ogImage: `${url}/poneres-logo.png`,
  ogImageWidth: 600,
  ogImageHeight: 600,
  ogType: "website",
});
</script>
<style lang="scss">
@font-face {
  font-family: "Playfair Display";
  src: url("~/assets/PlayfairDisplay.ttf");
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

.top {
  text-align: center;
  margin-top: 48px;
}

:root {
  --button--light--color: white;
  --body--font-family: "Playfair Display";
  --h3--font-family: "Playfair Display";
  --navbar--box-shadow: none;
  --navbar--border-radius: 0px;
  --navbar--border-width: 0px;
  --navbar--light--color: ivory;
  --hamburger-menu--light--background: white;
}
</style>
