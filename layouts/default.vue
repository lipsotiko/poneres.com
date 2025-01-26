<template>
  <ILayout>
    <ILayoutHeader>
      <INavbar>
        <INavbarBrand to="https://www.poneres.com"><b>Poneres.com</b></INavbarBrand>
        <INavbarCollapsible class="_justify-content:flex-end">
          <INav>
            <INavItem to="/" exact-active-class="-active"> Home </INavItem>
            <INavItem to="/contact" exact-active-class="-active"> Contact </INavItem>
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
