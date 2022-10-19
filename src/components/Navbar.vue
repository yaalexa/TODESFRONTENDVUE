<template>
  <div>
    <b-navbar>
      <div>
         
             <div class="vertical-layout.h-100.vertical-menu-modern.menu-expanded.navbar-floating.footer-static">
                <nav class="navbar header-navbar navbar navbar-shadow align-items-center navbar-light navbar-expand floating-nav">
                    <div class="navbar-container d-flex content align-items-center">
                      <b-tabs content-class="mt-3">
                         <b-tab title="First" active><p>I'm the first tab</p></b-tab>
                           <b-tab title="Second"><p>I'm the second tab</p></b-tab>
                            <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
                      </b-tabs>
                   </div>
                </nav>
      </div>
    </div>
  </b-navbar>
</div>
</template>

<style>
.dark-layout .header-navbar {
    background-color: #283046;
}
.header-navbar.navbar-shadow {
    box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
}
.header-navbar.floating-nav {
    right: 0;
}
.header-navbar.floating-nav {
    margin: 1.3rem 2rem 0;
    border-radius: 0.428rem;
}
.navbar-floating .navbar-container {
    padding: 0.8rem 1rem;
}

</style>
