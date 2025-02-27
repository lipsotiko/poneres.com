<template>
  <ILayout>
    <ILayoutHeader>
      <INavbar fluid style="z-index: 200;">
        <INavbarBrand to="/" style="padding: 0;">
          <img class="kw-logo" src="~/assets/images/kw_logo.png" />
        </INavbarBrand>
        <INavbarCollapsible class="_justify-content:flex-end">
          <INav>
            <INavItem to="/" exact-active-class="-active">Home</INavItem>
            <INavItem to="/about" exact-active-class="-active">About</INavItem>
            <INavItem to="https://eponeres.kw.com/search" exact-active-class="-active" target="_blank">Search Properties</INavItem>
            <IDropdown events="hover" size="sm" :hoverHideDelay="0">
              <INavItem stopPropagation>Sellers</INavItem>
              <template #body>
                <IDropdownItem to="/sellers/list-your-property">List your property</IDropdownItem>
              </template>
            </IDropdown>
            <IDropdown events="hover" size="sm" :hoverHideDelay="0">
              <INavItem stopPropagation>Residents</INavItem>
              <template #body>
                <IDropdownItem to="https://app.poneres.com/oauth2/authorization/okta" target="_blank">Resident Portal
                </IDropdownItem>
                <IDropdownItem to="https://app.poneres.com/apply" target="_blank">Rental Application</IDropdownItem>
              </template>
            </IDropdown>
            <INavItem to="/contact" exact-active-class="-active">Contact</INavItem>
          </INav>
        </INavbarCollapsible>
      </INavbar>
    </ILayoutHeader>
    <ILayoutContent>
      <slot />
    </ILayoutContent>
    <ILayoutFooter>
    </ILayoutFooter>
  </ILayout>
</template>
<style scoped>
.kw-logo {
  width: 200px;
  margin-right: 12px;
}
</style>