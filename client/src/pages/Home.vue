<template>
  <div class="home">
    <v-parallax src="../assets/space.jpg" dark>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-2 font-weight-thin mb-4">Take the Challenge!</h1>
          <h4 class="subheading" style="font-size:1.2rem;">Register and take quizzes for free</h4>
          <v-btn
            color="white"
            @click="$router.push({name : 'register'})"
            class="mt-5"
            light
          >Get Started</v-btn>
        </v-col>
      </v-row>
    </v-parallax>
    <div style="height:500px;"></div>
  </div>
</template>