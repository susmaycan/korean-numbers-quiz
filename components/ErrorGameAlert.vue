<script setup lang="ts">
const { allCorrectAnswers, hasCheckedResults } = useQuiz()
const timeout = 4000
</script>
<template>
  <v-snackbar
    :model-value="!allCorrectAnswers && hasCheckedResults"
    color="error"
    :timeout="timeout"
    multi-line
  >
    <div>
      <h3 class="mb-1">{{ $t('lose_title') }}</h3>
      <p>{{ $t('lose_message') }}</p>
    </div>
  </v-snackbar>
</template>
