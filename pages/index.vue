<template>
  <div class="my-container">
    <div>
      <img class="logo" src="~/assets/images/poneres-logo.png" alt="Poneres.com Logo" />
    </div>
    <div class="description-text-container">
      <span class="description-text">a property management & investment group focused on
        <b>unlocking real estate potential</b> that benefits investors and
        residents alike.</span>
    </div>
    <div class="bottom-left-stuff">
      <a href="https://app.poneres.com/oauth2/authorization/okta" target="_blank">
        <img src="~/assets/images/globle.svg" width="20" alt="portal login icon" />
        <div>Tenant Portal</div>
      </a>
      <a href="https://app.poneres.com/apply" target="_blank">
        <img src="~/assets/images/sign-hanging-solid.svg" width="20" alt="apply icon" />
        <div>Apply</div>
      </a>
    </div>

    <div class="service-areas">Baltimore - Chicago</div>
  </div>
</template>
<style scoped>
.my-container {
  z-index: 100;
  display: grid;
  grid-column-gap: 48px;
  grid-row-gap: 48px;
  flex-direction: column;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  padding: 188px 160px 40px;
  height: 100vh;
  position: absolute;
  top: 0%;
  bottom: 0%;

  @media screen and (max-width: 991px) {
    display: block;
    padding: 88px 60px 40px;
  }
}

.description-text-container {
  grid-area: span 1 / span 2 / span 1 / span 2;

  @media screen and (max-width: 991px) {
    margin-top: 28px;
    margin-bottom: 28px;
  }
}

.logo {
  max-height: 168px;

  @media screen and (max-width: 991px) {
    margin-top: 28px;
    height: 98px;
  }
}

.description-text {
  font-size: 52px;
  font-weight: lighter;

  @media screen and (max-width: 5000px) {
    font-size: 42px;
  }

  @media screen and (max-width: 1600px) {
    font-size: 38px;
  }

  @media screen and (max-width: 991px) {
    font-size: 28px;
  }

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
}

.bottom-left-stuff {
  align-self: end;

  @media screen and (max-width: 991px) {
    margin-top: 28px;
    margin-bottom: 28px;
  }
}

.service-areas {
  align-self: end;
  font-weight: lighter;
}
</style>
