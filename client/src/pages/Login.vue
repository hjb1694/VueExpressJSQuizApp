<template>
  <div>
    <div class="elevation-6">
      <v-toolbar color="indigo" dense dark>
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>
      <form class="px-3 py-3">
        <v-text-field label="Email" v-model="email" :rules="[rules.email]"></v-text-field>
        <v-text-field label="Password" type="password" v-model="password"></v-text-field>
        <v-btn color="indigo accent-4" @click="submit" dark>Login</v-btn>
        <div v-if="errors">
          <p v-for="error of errors" :key="error">{{error}}</p>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import authService from '../services/authService';

export default {
  data: () => ({
    email: null,
    password: null,
    formHasErrors: false,
    errors : null,
    rules: {
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      }
    }
  }),
  methods: {
    async submit(){
      this.error = null;
      try {
        const response = await authService.login(this.email, this.password);

        this.$store.dispatch('setToken', response.data.token);

        this.$router.replace({name : 'root'});

      }catch(e){
        const errorsArray = [];

        if(e.response && e.response.data.errors){

          for(let error of e.response.data.errors){

            errorsArray.push(error.msg);

          }

          this.errors = errorsArray

        }else {
            errorsArray.push(e.message);
            this.errors = errorsArray;
        }
      }
    }
  }
};
</script>