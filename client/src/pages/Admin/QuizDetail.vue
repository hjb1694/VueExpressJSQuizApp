<template>
  <div>
    <h2>Quiz {{$route.params.quizId}} Details</h2>

    <h3 class="mt-4">Questions</h3>
    <template v-if="questions">
      <template v-if="questions.length">
        <v-card
          class="mt-4"
          @click="$router.push({
          name : 'questionDetail', 
          params : {questionId : question.id}
        })"
          v-for="question of questions"
          :key="question.id"
        >
          <v-card-title>{{question.question}}</v-card-title>
        </v-card>
      </template>
      <div v-else>
        <p>Doesn't appear you have any questions yet!</p>
      </div>
    </template>
    <div class="mt-4 elevation-6 px-4 py-4">
      <v-textarea v-model="newQuestion" outlined label="New Question"></v-textarea>
      <v-textarea v-model="answer1" outlined label="Answer A"></v-textarea>
      <v-textarea v-model="answer2" outlined label="Answer B"></v-textarea>
      <v-textarea v-model="answer3" :class="{hidden : answer3Hidden}" outlined label="Answer C"></v-textarea>
      <v-textarea v-model="answer4" :class="{hidden : answer4Hidden}" outlined label="Answer D"></v-textarea>
      <v-textarea v-model="answer5" :class="{hidden : answer5Hidden}" outlined label="Answer E"></v-textarea>
      <v-btn color="indigo" @click="revealAnswerBox" class="mb-4" dark>Add Another Answer</v-btn>
      <header>Select correct answer</header>
      <v-radio-group v-model="correctAnswer">
        <v-radio label="Answer A" value="1"></v-radio>
        <v-radio label="Answer B" value="2"></v-radio>
        <v-radio label="Answer C" :class="{hidden : answer3Hidden}" value="3"></v-radio>
        <v-radio label="Answer D" :class="{hidden : answer4Hidden}" value="4"></v-radio>
        <v-radio label="Answer E" :class="{hidden : answer5Hidden}" value="5"></v-radio>
      </v-radio-group>
      <v-btn color="indigo" @click="submit" dark>Add Question</v-btn>
    </div>
    {{error}}
  </div>
</template>
<script>
import adminService from "../../services/adminService";

export default {
  data() {
    return {
      error: null,
      questions: null,
      newQuestion: null,
      answer1: null,
      answer2: null,
      answer3: null,
      answer4: null,
      answer5: null,
      answer3Hidden: true,
      answer4Hidden: true,
      answer5Hidden: true,
      correctAnswer: null,
      answerBoxToReveal: 3
    };
  },
  methods: {
    async fetchQuestions() {
      try {
        const response = await adminService.fetchQuestions(
          this.$route.params.quizId
        );
        this.questions = response.data.questions;
      } catch (e) {
        this.error = e;
      }
    },
    revealAnswerBox() {
      this[`answer${this.answerBoxToReveal}Hidden`] = false;
      this.answerBoxToReveal++;
    },
    async submit() {
      const answers = [
        {
          answerNo: 1,
          answer: this.answer1
        },
        {
          answerNo: 2,
          answer: this.answer2
        }
      ];

      for (let i = 3; i < 6; i++) {
        if (!this[`answer${i}Hidden`]) {
          answers.push({
            answerNo: i,
            answer: this[`answer${i}`]
          });
        }
      }

      try {
        await adminService.addNewQuestion(
          this.$route.params.quizId,
          this.newQuestion,
          answers,
          this.correctAnswer
        );
        this.fetchQuestions();
      } catch (e) {
        this.error = e;
      }
    }
  },
  created() {
    this.fetchQuestions();
  }
};
</script>
<style scoped>
.hidden {
  display: none;
}
</style>