<template>
  <div class="header">
    <div class="bar columns is-vcentered">
      <div class="column is-3">
        <Logo />
      </div>

      <div class="column is-1 is-offset-8">
        <div class="user">Higor</div>
      </div>
    </div>
    <div class="divisor"></div>
  </div>
</template> 

<script>
import Logo from "../../../../components/Logo";

export default {
  components: {
    Logo
  }
};
</script>

<style scoped lang="scss">
.header {
  // padding: 10px 10px 0 10px;
  margin: 0;

  .bar {
    padding: 5px 10px;
    margin: 0;
  }
}

.divisor {
  background-color: #00adb5;
  width: 100%;
  height: 1px;
  text-align: center;
  margin: 0 auto;
  animation: pulse 2s infinite alternate;
}

.user {
  color: #ffffff;
}

@keyframes pulse {
  from {
    box-shadow: 0px 0px 10px #17caf3;
  }
  to {
    box-shadow: 0px 0px 15px #17caf3;
  }
}
</style>