<template>
  <span class="logo">
    -
    <span class="lock">LOCK</span>
    <span class="smith">SMITH</span> -
  </span>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.logo {
  color: #eeeeee;
  font-size: 20px;
  margin: 0 auto;
  font-family: "Cinzel", serif;
  font-weight: normal;

  .lock {
    text-shadow: 0px 0px 5px #a0a0a0;
  }

  .smith {
    color: #00adb5;
    text-shadow: 0px 0px 5px #00adb5;
    animation: pulse-text 2s infinite;
  }
}

@keyframes pulse-text {
  0% {
    text-shadow: 0px 0px 3px #00adb5;
  }
  50% {
    text-shadow: 0px 0px 11px #00adb5;
  }
  100% {
    text-shadow: 0px 0px 3px #00adb5;
  }
}
</style>