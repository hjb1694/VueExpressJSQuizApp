<template>
  <div>
    <v-container>
      <div style="margin-top:3.5rem;">
        <h1>Admin</h1>
        <v-toolbar dense dark color="white">
          <v-btn @click="$router.push('/admin/quizzes')" color="white" light>Manage Quizzes</v-btn>
        </v-toolbar>
        <div class="pt-5">
          <router-view></router-view>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {};
</script>
<style>
</style>