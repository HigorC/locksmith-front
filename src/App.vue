<template>
  <div id="app">
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Footer
  }
};
</script>

<style lang="scss">
// Import de font
@import url("https://fonts.googleapis.com/css?family=Cinzel&display=swap");
@import url("https://fonts.googleapis.com/css?family=Be+Vietnam|Roboto&display=swap");
html {
  background-color: #222831 !important;
  // overflow-y: hidden !important;
}

.max-height {
  height: calc(100vh - 16px);
  // height: 100vh;
}

html,
body,
#app,
.columns-principal {
  @extend .max-height;
  //  font-family: 'Roboto', sans-serif;
  font-family: "Be Vietnam", sans-serif;
}
</style>
