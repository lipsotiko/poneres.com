<template>
  <INavbar class="nav" size="sm">
    <INavbarBrand to="/">
      Poneres
    </INavbarBrand>
    <INavbarCollapsible class="_justify-content:flex-end">
      <INav>
        <INavItem to="/">Home</INavItem>
        <INavItem to="/services">Services</INavItem>
        <INavItem to="/about">About</INavItem>
      </INav>
    </INavbarCollapsible>
  </INavbar>
  <slot />
</template>
<style scoped>
.nav {
  z-index: 100;
}
</style>
