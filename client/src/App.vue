<template>
  <v-app>
    <div>
      <header-nav></header-nav>
      <transition name="fade" mode="out-in">
        <v-container>
          <router-view></router-view>
        </v-container>
      </transition>
    </div>
  </v-app>
</template>
<script>
import HeaderNav from "./components/HeaderNav.vue";

export default {
  components: {
    "header-nav": HeaderNav
  }
};
</script>
<style>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 2s;
}

.fade-leave-active {
}

.fade-leave {
  transition: opacity 2s;
  opacity: 0;
}
</style>
