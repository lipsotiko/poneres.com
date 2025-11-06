<template>
  <ILayout>
    <ILayoutHeader>
      <INavbar fluid style="z-index: 200">
        <INavbarBrand to="/" style="padding: 0">
          <span class="ep-name">Poneres.com</span>
        </INavbarBrand>
        <INavbarCollapsible class="_justify-content:flex-end">
          <INav>
            <INavItem to="/" exact-active-class="-active">Home</INavItem>
            <INavItem to="/support" exact-active-class="-active"
              >Support</INavItem
            >
          </INav>
        </INavbarCollapsible>
      </INavbar>
    </ILayoutHeader>
    <ILayoutContent>
      <slot />
    </ILayoutContent>
    <ILayoutFooter> </ILayoutFooter>
  </ILayout>
</template>
<style scoped>
.ep-name {
  font-size: 28px;
  padding-right: 10px;
  color: white;

  @media screen and (max-width: 552px) {
    font-size: 18px;
    padding-right: 6px;
  }
}
</style>
