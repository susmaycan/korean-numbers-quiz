<script setup lang="ts">
const { generateQuiz, checkResults, clearQuiz } = useQuiz()

onMounted(() => {
  generateQuiz()
})
</script>
<template>
  <client-only>
    <div class="d-flex flex-column justify-center w-100">
      <results />
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
    <success-game-alert />
    <error-game-alert />
  </client-only>
</template>
