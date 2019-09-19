<template>
  <div id="app">
    <div class="columns-principal columns is-centered is-vcentered">
      <div class="column is-3">
        <login />
      </div>
    </div>
  </div>
</template>

<script>
import Login from "./components/Login.vue";

export default {
  name: "app",
  components: {
    Login
  }
};
</script>

<style lang="scss">
// Import de font
@import url("https://fonts.googleapis.com/css?family=Cinzel&display=swap");

html {
  background-color: #222831 !important;
  overflow-y: hidden !important;
}

.max-height {
  height: 100vh;
}

html,
body,
#app,
.columns-principal {
  @extend .max-height;
}
</style>
