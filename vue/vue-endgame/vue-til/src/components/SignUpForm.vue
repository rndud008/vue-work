<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id: </label>
          <input id="username" v-model="username" type="text" />
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" v-model="password" type="text" />
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" v-model="nickname" type="text" />
        </div>
        <button
          :disabled="!isUsernameValid || !password || !nickname"
          type="submit"
          class="btn"
        >
          회원 가입
        </button>
        <p class="log">{{ logMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { registerUser } from "@/api/auth";
import { validateEmail } from "@/utils/validation";
export default {
  data() {
    return {
      username: ``,
      password: ``,
      nickname: ``,
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
      console.log(`폼 제출`);
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const { data } = await registerUser(userData);
      console.log(data);
      this.logMessage = `${data.username} 님이 가입되었습니다.`;
      this.initForm();
    },
    initForm() {
      this.username = "";
      this.password = "";
      this.nickname = "";
    },
  },
};
</script>

<style></style>
