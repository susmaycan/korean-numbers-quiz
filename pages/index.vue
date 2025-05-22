<script setup lang="ts">
const {
  allCorrectAnswers,
  checkResults,
  clearQuiz,
  generateQuiz,
  hasCheckedResults,
  isLoading,
  list,
} = useQuiz()

onMounted(() => {
  generateQuiz()
})
</script>
<template>
  <div class="d-flex flex-column justify-center w-100">
    <results :is-loading="isLoading" :list="list" />
    <div class="d-flex justify-center flex-wrap px-5 mb-4">
      <v-btn
        class="ma-1"
        color="primary"
        @click="checkResults"
        append-icon="mdi-check"
      >
        {{ $t('check_results') }}
      </v-btn>
      <v-btn
        class="ma-1"
        color="primary"
        @click="clearQuiz"
        append-icon="mdi-broom"
      >
        {{ $t('clear_results') }}
      </v-btn>
    </div>
  </div>
  <success-game-alert
    :all-correct-answers="allCorrectAnswers"
    @generate-quiz="generateQuiz"
  />
  <error-game-alert
    :all-correct-answers="allCorrectAnswers"
    :has-checked-results="hasCheckedResults"
  />
</template>
