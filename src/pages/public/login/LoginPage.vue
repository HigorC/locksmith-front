<template>
  <div>
    <div class="columns-principal columns is-centered is-vcentered">
      <div class="flip column column-login is-3-desktop is-2-fullhd is-4-tablet">
        <!-- <login /> -->
        <register />
      </div>
    </div>
  </div>
</template>

<script>
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
// import Footer from "./components/Footer.vue";

export default {
  name: "LoginPage",
  components: {
    Login,
    Register
    // Footer
  }
};
</script>

<style scoped lang="scss">
.flip {
  login {
     position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }
}
</style>