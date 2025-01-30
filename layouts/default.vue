<template>
  <ILayout>
    <ILayoutHeader>
      <INavbar fluid style="z-index: 200;">
        <INavbarBrand to="/">
          <b>Poneres.com</b>
        </INavbarBrand>
        <INavbarCollapsible class="_justify-content:flex-end">
          <INav>
            <INavItem to="/" exact-active-class="-active">Home</INavItem>
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
