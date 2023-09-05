<template>
  <v-snackbar
    :model-value="!!allCorrectAnswers"
    color="success"
    :timeout="timeout"
    multi-line
  >
    <div>
      <h3 class="mb-1">{{ $t('win_title') }}</h3>
      <p>{{ $t('win_message') }}</p>
    </div>
    <template v-slot:actions>
      <v-btn variant="text" @click="generateQuiz">{{ $t('play_again') }}</v-btn>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useQuizStore } from '@/stores/quiz'
const store = useQuizStore()

const { allCorrectAnswers } = storeToRefs(store)
const { generateQuiz } = store

const timeout = 6000
</script>
