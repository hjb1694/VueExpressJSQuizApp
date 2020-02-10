<template>
  <div>
    <h2>Quiz List</h2>
    <div class="pt-4">
      <div v-if="quizzes">
        <div v-if="!quizzes.length">
          <p>Doesn't look like you have any quizzes yet!</p>
        </div>
        <div v-else>
          <v-card
            @click="$router.push({name : 'quizDetail', params : {
            quizId : quiz.id
          }})"
            v-for="quiz of quizzes"
            :key="quiz.id"
            class="mt-4"
            raised
          >
            <v-card-title>{{quiz.quizDescription}}</v-card-title>
            <v-card-subtitle>Quiz {{quiz.id}}</v-card-subtitle>
          </v-card>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <v-text-field v-model="newQuizTitle" label="Add New Quiz Title"></v-text-field>
      <v-btn @click="submit" color="indigo" dark>Add Quiz</v-btn>
      <div v-if="error">{{error}}</div>
    </div>
  </div>
</template>
<script>
import adminService from "../../services/adminService";

export default {
  data() {
    return {
      quizzes: null,
      error: null,
      newQuizTitle: null
    };
  },
  methods: {
    async fetchQuizzes() {
      try {
        const response = await adminService.fetchQuizzes();
        this.quizzes = response.data.quizzes;
      } catch (e) {
        this.error = e;
      }
    },
    async submit() {
      try {
        await adminService.addNewQuiz(this.newQuizTitle);
        this.fetchQuizzes();
      } catch (e) {
        this.error = e;
      }
    }
  },
  created() {
    this.fetchQuizzes();
  }
};
</script>