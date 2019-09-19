<template>
  <section class="login">
    <div class="card">
      <div class="card-header">
        <div class="card-header-title">
          <span class="titulo">
            Lock
            <span class="smith">smith</span>
          </span>
        </div>
      </div>
      <div class="card-content">
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="email" placeholder="Email" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-left">
              <b-icon icon="account-circle"></b-icon>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password" />
            <span class="icon is-small is-left">
              <b-icon icon="lock"></b-icon>
            </span>
          </p>
        </div>

        <div class="columns">
          <div class="column is-6">
            <a class="button is-light is-fullwidth">Criar conta</a>
          </div>
          <div class="column is-6">
            <a class="button login-btn is-success is-fullwidth">Login</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style scoped lang="scss">
@import "../styles/main.scss";

.card {
  background-color: #393e46;
  animation: pulse 2s infinite;
  // box-shadow: 0px 0px 20px #00adb578, 0 0 0 1px rgba(115, 115, 115, 0.27);
  // trocar cor green e red caso sucesso e erro
}

.card-header-title {
  .titulo {
    color: #eeeeee;
    font-size: 20px;
    margin: 0 auto;
    font-family: "Cinzel", serif;
    font-weight: normal;
    .smith {
      font-weight: bold;
    }
  }
}

.card-content {
  a {
    transition: all 0.2s linear;

    &.login-btn {
      background-color: $primary;
    }
  }

  input:last-child {
    margin-top: 1em;
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0px 0px 10px #00adb578, 0 0 0 1px rgba(115, 115, 115, 0.27);
  }
  50% {
    box-shadow: 0px 0px 30px #00adb578, 0 0 0 1px rgba(115, 115, 115, 0.27);
  }
  100% {
    box-shadow: 0px 0px 10px #00adb578, 0 0 0 1px rgba(115, 115, 115, 0.27);
  }
}
</style>
