<template>
  <div class="my-container">
    <IRow class="first-row">
      <IColumn lg="12" xl="4">
        <img class="logo" src="~/assets/images/poneres-logo.png" alt="Poneres.com Logo" />
      </IColumn>
      <IColumn lg="12" xl="8">
        <div class="description-text-container second-col-gridarea two">
          <span class="description-text">a property management & investment group focused on
            <b>unlocking real estate potential</b> that benefits investors and
            residents alike.</span>
        </div>
      </IColumn>
    </IRow>
    <IRow class="second-row">
      <IColumn lg="12" xl="4">
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
      </IColumn>
      <IColumn lg="12" xl="4">
        <div class="service-areas">Baltimore - Chicago</div>
      </IColumn>
    </IRow>
  </div>
</template>
<style scoped>
.my-container {
  margin: 58px 166px;

  @media screen and (max-width: 991px) {
    margin: 18px 66px;
  }
}

.first-row {
  height: 680px;

  @media screen and (max-width: 1600px) {
    height: 680px;
  }

  @media screen and (max-width: 991px) {
    height: 480px;
  }

  @media screen and (max-width: 767px) {
    height: 380px;
  }
}

.bottom-left-stuff {

  @media screen and (max-width: 991px) {
    display: grid;
    justify-content: center;
  }
}

.service-areas {
  @media screen and (max-width: 991px) {
    justify-content: center;
    margin: 48px;
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

.description-text-container {
  @media screen and (max-width: 5000px) {
    margin-top: 50px;
  }

  @media screen and (max-width: 1600px) {
    margin-top: 54px;
  }

  @media screen and (max-width: 991px) {
    margin-top: 20px;
  }
}

.bottom-left-stuff a {
  display: flex;
}

.service-areas {
  display: flex;
  padding: 16px 8px;
  font-weight: lighter;
  text-wrap: nowrap;
}
</style>
