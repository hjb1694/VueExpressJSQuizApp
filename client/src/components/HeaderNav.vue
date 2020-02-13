<template>
  <div>
    <v-app-bar dense dark fixed color="indigo darken-2" collapse-on-scroll>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title color="white">JavaScript Quizzes</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer fixed temporary color="indigo darken-2" v-model="drawer">
      <v-list-item v-if="!isLoggedIn" link>
        <v-list-item-content>
          <router-link class="navlink" :to="{name : 'register'}">Register</router-link>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-if="!isLoggedIn" link>
        <v-list-item-content>
          <router-link class="navlink" :to="{name : 'login'}">Login</router-link>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-if="isLoggedIn" link>
        <v-list-item-content>
          <router-link class="navlink" :to="{name : 'quizList'}">Quizzes</router-link>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-if="isLoggedIn" link>
        <v-list-item-content>
          <a class="navlink" @click="logout">Logout</a>
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
<style scoped>
.navlink {
  text-decoration: none;
  font-weight: bold;
  color: #fff;
}
</style>