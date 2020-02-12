<template>
  <div>
    <v-app-bar dense dark fixed color="indigo darken-2" collapse-on-scroll>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title color="white">JavaScript Quizzes</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer fixed temporary v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <router-link v-if="!isLoggedIn" :to="{name : 'register'}">Register</router-link>
          <router-link v-if="!isLoggedIn" :to="{name : 'login'}">Login</router-link>
          <router-link v-if="isLoggedIn" :to="{name : 'quizList'}">Quizzes</router-link>
          <a v-if="isLoggedIn" @click="logout">Logout</a>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      drawer: false
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace({ name: "root" });
    }
  }
};
</script>