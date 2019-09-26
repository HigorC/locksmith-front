<template>
  <div>
    <div class="columns-principal columns is-centered is-vcentered">
      <div class="column is-3">
        <login />
      </div>
    </div>
  </div>
</template>

<script>
import Login from "./components/Login.vue";
// import Footer from "./components/Footer.vue";

export default {
  name: "LoginPage",
  components: {
    Login
    // Footer
  }
};
</script>

<style>
</style>