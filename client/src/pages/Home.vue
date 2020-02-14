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
    <v-container>
      <div style="min-height:500px;margin:2rem 0;" class="home-section-1">
        <div class="home-img elevation-6"></div>
        <div class="briefing">
          <h2 class="briefing__heading">A Free, Blazing Fast, Simple Quiz Platform</h2>
          <p class="briefing__text">
            Build up your JavaScript skills utilizing a user-friendly quiz platform. View your results instantly!
            Did we mention it is free? There is absolutely no cost to you!
          </p>
        </div>
      </div>
    </v-container>
  </div>
</template>
<style scoped>
.home-img {
  width: 100%;
  height: 20rem;
  background-image: url(../assets/js_quiz_ss.png);
  background-position: center;
  background-size: cover;
}

.briefing {
  padding: 1rem 2rem;
}

.briefing__heading {
  color: #303f9f;
  margin-top: 1rem;
}

.briefing__text {
  font-size: 1.2rem;
  margin-top: 1.2rem;
}

@media (min-width: 750px) {
  .home-section-1 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
