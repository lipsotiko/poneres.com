<template>
  <div class="my-container">
    <div>
      <img class="logo" src="~/assets/images/poneres-logo.png" alt="Poneres.com Logo" />
    </div>
    <div class="description-text-container">
      <span class="description-text">buy, sell, & manage real estate in the <b>Chicagoland</b> area with confidence.</span>
      <hr>
      <div class="consultation">
        <div>
          <p class="lead">Get in touch today...</p>
        </div>
        <IButton outline size="sm" color="light" to="/contact">Contact</IButton>
      </div>
    </div>
    <div class="bottom-left-stuff">
      <a href="mailto:hello@poneres.com">
        <img src="~/assets/images/envelope-solid.svg" width="20" alt="email icon" />
        <div>hello@poneres.com</div>
      </a>
    </div>
    <div class="service-areas">Des Plaines - Niles - Park Ridge</div>
    <div class="realtor-eho">
      <img src="~/assets/images/realtor.svg" />
      <img src="~/assets/images/eho.svg" />
    </div>
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
  padding: 10px 0;
}

.service-areas {
  padding: 18px 0;
  align-self: end;
  font-weight: lighter;
}

.consultation {
  @media screen and (max-width: 1119px) {
    display: grid;
  }

  @media screen and (max-width: 991px) {
    display: none;
  }
}

.consultation div {
  display: inline;
  font-size: 22px;
  margin-right: 18px;
}

.consultation p {
  display: inline;
}

.consultation a {
  @media screen and (max-width: 1119px) {
    margin: 12px 0;
  }
}

.realtor-eho {
  padding: 16px 0;
  align-self: end;

  
  @media screen and (max-width: 991px) {
    padding: 18px 0;
  }
}

.realtor-eho img {
  bottom: 0px;
  height: 28px;
  width: 28x;
  margin-right: 6px;
}
</style>
