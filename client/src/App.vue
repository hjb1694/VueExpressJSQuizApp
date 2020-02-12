<template>
  <v-app>
    <div>
      <header-nav></header-nav>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
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
  transition: opacity 0.8s;
}

.fade-leave-active {
}

.fade-leave {
  transition: opacity 0.8s;
  opacity: 0;
}
</style>
