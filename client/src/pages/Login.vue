<template>
  <div>
    <v-container>
      <div class="elevation-6" style="margin-top:6rem;">
        <v-toolbar color="indigo" dense dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <form class="px-3 py-3">
          <v-text-field label="Email" v-model="email" :rules="[rules.email]"></v-text-field>
          <v-text-field label="Password" type="password" v-model="password"></v-text-field>
          <v-btn color="indigo darken-2" @click="submit" dark>Login</v-btn>
          <p class="mt-3">
            Don't have an account?
            <router-link :to="{name : 'register'}">Register Here!</router-link>
          </p>
          <div v-if="errors">
            <v-alert color="red" dark class="elevation-2">
              <p v-for="error of errors" :key="error">
                <strong>{{error}}</strong>
              </p>
            </v-alert>
          </div>
        </form>
      </div>
    </v-container>
  </div>
</template>
<script>
import authService from "../services/authService";

export default {
  data: () => ({
    email: null,
    password: null,
    formHasErrors: false,
    errors: null,
    rules: {
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      }
    }
  }),
  methods: {
    async submit() {
      this.error = null;
      try {
        const response = await authService.login(this.email, this.password);

        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setIsAdmin", response.data.isAdmin);

        this.$router.replace({ name: "quizList" });
      } catch (e) {
        const errorsArray = [];

        if (e.response && e.response.data.errors) {
          for (let error of e.response.data.errors) {
            errorsArray.push(error.msg);
          }

          this.errors = errorsArray;
        } else {
          errorsArray.push(e.message);
          this.errors = errorsArray;
        }
      }
    }
  }
};
</script>