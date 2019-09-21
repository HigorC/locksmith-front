<template>
  <div id="app">
    <div class="columns-principal columns is-centered is-vcentered">
      <div class="column is-3">
        <login />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Login from "./components/Login.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Login,
    Footer
  }
};
</script>

<style lang="scss">
// Import de font
@import url("https://fonts.googleapis.com/css?family=Cinzel&display=swap");
@import url('https://fonts.googleapis.com/css?family=Be+Vietnam|Roboto&display=swap');
html {
  background-color: #222831 !important;
  overflow-y: hidden !important;
}

.max-height {
  height: calc(100vh - 28px);
}

html,
body,
#app,
.columns-principal {
  @extend .max-height;
//  font-family: 'Roboto', sans-serif;
font-family: 'Be Vietnam', sans-serif;
}
</style>
