<template>
  <div>
    <h1>Your Results</h1>
    <div class="mt-4">
      <div
        class="px-4 py-4 mt-4 elevation-6"
        v-for="result of results"
        :key="result.questionContent"
      >
        <h3>{{result.questionContent}}</h3>
        <p class="mt-4">
          <strong>Result:</strong>
          {{result.correctIncorrect}}
        </p>
        <p>
          <strong>Correct Answer:</strong>
          {{result.correctAnswerContent}}
        </p>
        <p>
          <strong>Your Answer:</strong>
          {{result.userAnswerContent}}
        </p>
      </div>
    </div>
    <v-btn
      class="mt-4"
      @click="$router.push({name : 'quizList'})"
      text
      color="indigo"
    >Back to Quizzes</v-btn>
  </div>
</template>
<script>
export default {
  props: ["results"]
};
</script>