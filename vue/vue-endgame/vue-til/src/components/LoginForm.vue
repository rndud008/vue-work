<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id: </label>
          <input id="username" type="text" v-model="username" />
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <button
          :disabled="!isUsernameValid || !password"
          type="submit"
          class="btn"
          :class="!isUsernameValid || !password ? 'disabled' : null"
        >
          로그인
        </button>
        <p class="log">{{ logMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
// import { loginUser } from "@/api/index";
import { validateEmail } from "@/utils/validation";
// import router from "../routes";
// import { saveAuthToCookie, saveUserToCookie } from "../utils/cookies";

export default {
  data() {
    return {
      username: "",
      password: "",
      logMessage: "",
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        };

        await this.$store.dispatch("LOGIN", userData);

        // const { data } = await loginUser(userData);
        // console.log(data);
        // this.$store.commit("setToken", data.token);
        // this.$store.commit("setUsername", data.user.username);
        // saveAuthToCookie(data.token);
        // saveUserToCookie(data.user.username);
        this.$router.push("/main");
        // this.logMessage = `${data.user.username} 님 환영합니다.`;
        // this.initForm();
      } catch (error) {
        // console.log(error.response.data);
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = "";
      this.password = "";
    },
  },
};
</script>

<style>
.btn {
  color: white;
}
</style>
