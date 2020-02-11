<template>
  <div>
    <h1>Quizzes</h1>
    <template v-if="quizzes">
      <div class="mt-4" v-if="quizzes.length">
        <v-card v-for="quiz of quizzes" :key="quiz.id" max-width="300">
          <v-img class="white--text align-end" height="200px" :src="quiz.image">
            <v-card-title>{{quiz.quizDescription}}</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">Quiz {{quiz.id}}</v-card-subtitle>

          <v-card-actions>
            <v-btn
              @click="$router.push({name : 'quiz', params : {quizId : quiz.id}})"
              color="indigo"
              text
            >Take Quiz</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </template>
    <p>{{error}}</p>
  </div>
</template>
<script>
import quizService from "../services/quizService";

export default {
  data() {
    return {
      quizzes: null,
      error: null
    };
  },
  methods: {
    async fetchQuizzes() {
      try {
        const response = await quizService.fetchQuizzes();
        this.quizzes = response.data.quizzes;
      } catch (e) {
        if (e.response && e.response.data.error) {
          this.error = e.response.data.error;
        } else {
          this.error = e;
        }
      }
    }
  },
  created() {
    this.fetchQuizzes();
  }
};
</script>