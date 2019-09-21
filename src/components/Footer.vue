<template>
  <div class="rodape columns is-vcentered">
    <div class="column is-3 is-offset-1">
      <p class="versao">Locksmith v0.1 - Alpha - Em fase de contrução...</p>
    </div>
    <div class="column is-3 is-offset-4 column-autor">
      <p class="autor">
        Feito com
        <span class="icon is-small">
          <i class="mdi mdi-heart"></i>
        </span>
        por
        <a target="_blank" href="https://github.com/higorc">HigorC</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped lang="scss">
.rodape {
  font-size: 10px;
  background-color: #393e46 !important;
  color: #eeeeee;

.column-autor{
    text-align: right;
}

  .versao {
    font-family: "Cinzel", serif;
  }

  .autor {
    a {
      color: #00adb5;
    }

    a:hover {
      text-decoration: none;
      filter: brightness(146%);
    }

    .mdi::before {
      font-size: 13px !important;
      text-shadow: 0px 0px 0px #fff;
      color: #ff5555;
    }
  }
}
</style>