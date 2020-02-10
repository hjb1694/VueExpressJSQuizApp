<template>
  <div>
    <h2>Question Details</h2>
    <h3 class="mt-4">{{question}}</h3>
    <template v-if="quizAnswers">
      <div v-if="quizAnswers.length">
        <v-card class="mt-4" v-for="answer of quizAnswers" :key="answer.id">
          <v-card-title>{{answer.answer}}</v-card-title>
        </v-card>
      </div>
      <div v-else>
        <p>Hmmm...doesn't seem like you have any answers.</p>
      </div>
    </template>
  </div>
</template>
<script>
import adminService from "../../services/adminService";

export default {
  data() {
    return {
      question: null,
      quizAnswers: null
    };
  },
  methods: {
    async fetchDetails() {
      const response = await adminService.fetchQuestionDetails(
        this.$route.params.questionId
      );
      this.question = response.data.details.question;
      this.quizAnswers = response.data.details.QuizAnswers;
    }
  },
  created() {
    this.fetchDetails();
  }
};
</script>