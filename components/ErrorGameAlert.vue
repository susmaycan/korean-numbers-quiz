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

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useQuizStore } from '@/stores/quiz'
const store = useQuizStore()

const { allCorrectAnswers, hasCheckedResults } = storeToRefs(store)

const timeout = 4000
</script>
