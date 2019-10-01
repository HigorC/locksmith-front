<template>
  <section class="login">
    <div class="card" :class="{'card-minimized':tryToLogin}">
      <div class="card-2" :class="{'card-2-error': errorOnLogin, 'card-2-loading': tryToLogin}"></div>
      <div class="card-header">
        <div class="card-header-title">
          <Logo />
        </div>
      </div>
      <div class="card-content" :class="{'card-content-minimized':tryToLogin}">
        <div class="field">
          <p class="control has-icons-left">
            <input v-model="email" class="input" type="email" placeholder="Email" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-left">
              <b-icon icon="at"></b-icon>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input v-model="user" class="input" type="email" placeholder="Nome de usuário" />
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
            <input v-model="password" class="input" type="password" placeholder="Senha" />
            <span class="icon is-small is-left">
              <b-icon icon="lock"></b-icon>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input
              v-model="password2"
              class="input"
              type="password"
              placeholder="Confirme sua senha"
            />
            <span class="icon is-small is-left">
              <b-icon icon="lock"></b-icon>
            </span>
          </p>
        </div>

        <div class="columns">
          <div class="column is-6">
            <a class="button is-light is-fullwidth">
              Voltar
            </a>
          </div>
          
          <div class="column is-6">
            <a class="button is-success is-fullwidth" @click="login">Criar conta</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const axios = require("axios");

import Logo from "../../../../components/Logo";

export default {
  name: "Login",
  components: {
    Logo
  },
  data: () => {
    return {
      email: "",
      user: "",
      password: "",
      password2: "",
      tryToLogin: false,
      errorOnLogin: false
    };
  },
  methods: {
    isEmailInvalid: function() {
      const re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      return !re.test(this.email);
    },
    login: function() {
      if (this.email.trim() == "" || this.email.trim() == "") {
        this.$buefy.toast.open({
          message: "Informe seu email/usuário e senha.",
          type: "is-danger"
        });
      } else {
        this.tryToLogin = true;
        const that = this;
        axios
          .post("http://127.0.0.1:5000/login", {
            headers: {
              "Access-Control-Allow-Origin": "*"
            },
            proxy: {
              host: "104.236.174.88",
              port: 3128
            },
            email: "red@red.com",
            username: "redy",
            password: 1234
          })
          .then(function(response) {
            that.$buefy.toast.open({
              message: "Logado",
              type: "is-success"
            });
            that.errorOnLogin = false;
            console.log(response);
          })
          .catch(function(error) {
            that.$buefy.toast.open({
              message: "Falha ao logar-se",
              type: "is-danger"
            });
            that.errorOnLogin = true;
            console.log(error);
          })
          .finally(() => {
            this.tryToLogin = false;

            this.$router.push("/home");
          });
      }
    }
    // isInputsPreenchidos: function() {
    //   return !this.isEmailInvalid() && this.senha.length >= 4;
    // }
  }
};
</script>

<style scoped lang="scss">
@import "../../../../styles/main.scss";

.card {
  transition: all 0.4s linear;
  background-color: #393e46;
  border-radius: 5px;

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
    // box-shadow: 0px 0px 10px #ff3860, 0 0 0 1px rgba(115, 115, 115, 0.27);
  }

  &-loading {
    animation: pulse-loading 1s infinite alternate;
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

@keyframes pulse-loading {
  from {
    box-shadow: 0px 0px 0px #00adb578, 0 0 0 1px rgba(115, 115, 115, 0.27);
  }
  to {
    box-shadow: 0px 0px 35px #00adb578, 0 0 0 1px rgba(115, 115, 115, 0.27);
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
  background-color: transparent !important;
}
</style>
