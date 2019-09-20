<template>
  <section class="login">
    <div class="card" :class="{'card-minimized':tryToLogin}">
      <div
        class="card-2"
        :class="{'card-2-error': isEmailInvalid() && !tryToLogin, 'card-2-normal-pulse': !isEmailInvalid()}"
      >
        <!-- Div para suavizar transição dos keyframes de pulsação -->
        <!-- 'pulse-success':isInputsPreenchidos()} -->
      </div>
      <div class="card-header">
        <div class="card-header-title">
          <span class="titulo">
            -
            <span class="lock">LOCK</span>
            <span class="smith">SMITH</span> -
          </span>
        </div>
      </div>
      <div class="card-content" :class="{'card-content-minimized':tryToLogin}">
        <div class="field">
          <p class="control has-icons-left">
            <input v-model="email" class="input" type="email" placeholder="Email ou usuário" />
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
            <input v-model="senha" class="input" type="password" placeholder="Senha" />
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
            <a class="button login-btn is-success is-fullwidth" @click="login">Login</a>
          </div>
        </div>
      </div>
    </div>
    <a class="button login-btn is-success is-fullwidth btn-teste" @click="login">Login</a>
  </section>
</template>

<script>
export default {
  name: "Login",
  data: () => {
    return {
      email: "",
      senha: "",
      inputFocado: false,
      tryToLogin: false
    };
  },
  methods: {
    isEmailInvalid: function() {
      const re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      return !re.test(this.email);
    },
    focarInput: function() {
      this.inputFocado = true;
    },
    login: function() {
      this.tryToLogin = !this.tryToLogin;
    }
    // isInputsPreenchidos: function() {
    //   return !this.isEmailInvalid() && this.senha.length >= 4;
    // }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/main.scss";

.card {
  transition: all 0.4s linear;
  background-color: #393e46;
  border-radius: 5px;

  // Pulse básico, presente sempre
  animation: pulse 2s infinite alternate;

  max-height: 500px;

  &-minimized {
    max-height: 50px;
  }
}

.card-2 {
  height: 100%;
  width: 100%;
  position: absolute;
  border-radius: 5px;
  transition: all 0.5s linear;

  &-normal {
    box-shadow: 0px 0px 10px #00adb578, 0 0 0 1px rgba(115, 115, 115, 0.27);
  }

  &-error {
    box-shadow: 0px 0px 10px #ff3860, 0 0 0 1px rgba(115, 115, 115, 0.27);
  }
}

.card-header-title {
  .titulo {
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
}

.card-content {
  transition: all 0.3s linear;
  a {
    transition: all 0.2s linear;

    &.login-btn {
      background-color: $primary;
    }
  }

  input:last-child {
    margin-top: 1em;
  }

  &-minimized {
    opacity: 0;
    transform: translateY(-10%);
  }
}

@keyframes pulse {
  from {
    box-shadow: 0px 0px 10px #00adb578, 0 0 0 1px rgba(115, 115, 115, 0.27);
  }
  to {
    box-shadow: 0px 0px 25px #00adb578, 0 0 0 1px rgba(115, 115, 115, 0.27);
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

.btn-teste {
  background-color: transparent!important;
}
</style>
