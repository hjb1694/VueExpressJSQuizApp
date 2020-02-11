<template>
  <div>
    <div v-if="showResults">
      <h1>Your Results</h1>
      <div class="mt-4">
        <div
          class="px-4 py-4 mt-4 elevation-6"
          v-for="result of results"
          :key="result.questionContent"
        >
          <h3>{{result.questionContent}}</h3>
        </div>
      </div>
    </div>
    <div v-else>
      <template v-if="quizItems">
        <div v-if="quizItems.length">
          <div class="elevation-4 px-4 py-4 mt-4" v-for="item of quizItems" :key="item.id">
            <h3>{{item.question}}</h3>
            <div class="mt-4">
              <v-radio-group v-model="userAnswers[findQ(item.id)].userAnswer">
                <v-radio
                  v-for="answer of item.QuizAnswers"
                  :key="answer.id"
                  :label="answer.answer"
                  :value="answer.answerNumber"
                ></v-radio>
              </v-radio-group>
            </div>
          </div>
          <v-btn color="indigo" class="mt-4" dark @click="submit">Score Quiz</v-btn>
          <p class="mt-4">{{submissionError}}</p>
        </div>
        <div v-else>
          <p>Hmmm...Doesn't appear to be any quiz items.</p>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import quizService from "../services/quizService";

export default {
  data() {
    return {
      quizItems: null,
      userAnswers: [],
      selected: null,
      submissionError: null,
      showResults: false,
      results: []
    };
  },
  methods: {
    async fetchQuiz() {
      const response = await quizService.fetchQuiz(this.$route.params.quizId);

      this.quizItems = response.data.quiz;

      for (let item of response.data.quiz) {
        this.userAnswers.push({
          questionId: item.id,
          userAnswer: null
        });
      }
    },
    findQ(itemId) {
      return this.userAnswers.findIndex(item => item.questionId == itemId);
    },
    submit() {
      this.submissionError = null;

      for (let item of this.userAnswers) {
        if (item.userAnswer == null) {
          this.submissionError =
            "Please answer all questions before submitting!";
          return;
        }
      }

      for (let answerItem of this.userAnswers) {
        const quizItem = this.quizItems.find(
          quizItem => quizItem.id == answerItem.questionId
        );

        let correctIncorrect;

        if (answerItem.userAnswer != quizItem.correctAnswer) {
          correctIncorrect = "Incorrect!";
        } else {
          correctIncorrect = "Correct!";
        }

        let correctAnswerContentIndex = quizItem.QuizAnswers.findIndex(item => {
          return item.answerNumber == quizItem.correctAnswer;
        });

        let correctAnswerContent =
          quizItem.QuizAnswers[correctAnswerContentIndex].answer;

        let userAnswerContentIndex = quizItem.QuizAnswers.findIndex(item => {
          return item.answerNumber == answerItem.userAnswer;
        });

        let userAnswerContent =
          quizItem.QuizAnswers[userAnswerContentIndex].answer;

        this.results.push({
          questionContent: quizItem.question,
          correctIncorrect,
          correctAnswerContent,
          userAnswerContent
        });
      }

      this.showResults = true;
    }
  },
  created() {
    this.fetchQuiz();
  }
};
</script>