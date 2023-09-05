<template>
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
  <not-compatible-alert />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useQuizStore } from '@/stores/quiz'
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '@/stores/settings'

const store = useQuizStore()

const { generateQuiz, checkResults, clearQuiz } = store

const settingsStore = useSettingsStore()
const { isListeningCompatible } = storeToRefs(settingsStore)

const checkListeningCompatible = () => {
  isListeningCompatible.value =
    !!window &&
    window.speechSynthesis &&
    window.speechSynthesis.getVoices().length > 0
}
onMounted(() => {
  checkListeningCompatible()
  generateQuiz()
})
</script>

<style lang="scss" scoped></style>
