<template>
  <div class="mr-4 mb-4">
    <div class="d-flex align-center">
      <span
        v-if="isWrittenQuiz"
        class="font-weight-bold main-number"
        :class="{ 'mr-3': !isListeningCompatible }"
        >{{ row.number }}</span
      >
      <v-btn
        v-if="isListeningCompatible"
        icon="mdi-volume-high"
        variant="plain"
        @click="speak"
      />
      <v-text-field
        v-model="row.userInput"
        variant="outlined"
        :append-inner-icon="icon"
        :error="row.error"
        :clearable="true"
        :hide-details="true"
        :placeholder="rowPlaceHolder"
      />
    </div>
    <div class="d-flex justify-end mt-1 text-medium-emphasis mb-2">
      <span v-if="showResults">{{ row.result }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NumberResult } from '@/type/result'
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '@/stores/settings'
const settingsStore = useSettingsStore()

const {
  showResults,
  isWrittenQuiz,
  voiceSpeed,
  isListeningCompatible,
  rowPlaceHolder,
} = storeToRefs(settingsStore)

const synth = window.speechSynthesis
const numberSpeech = new window.SpeechSynthesisUtterance()

interface Props {
  row: NumberResult
}

const props = defineProps<Props>()

const icon = computed(() => {
  if (props.row.success) return 'mdi-check'
  if (props.row.error) return 'mdi-close'
  return undefined
})

const speak = async () => {
  synth.cancel()
  numberSpeech.text = `${props.row.number}`
  const koreanVoice = synth.getVoices().find((voice) => voice.lang === 'ko-KR')
  if (!koreanVoice) {
    synth.cancel()
    alert('Cant reproduce audio')
  } else {
    numberSpeech.voice = koreanVoice || null
    numberSpeech.rate = voiceSpeed.value
    synth.speak(numberSpeech)
  }
}
</script>

<style lang="scss" scoped>
.main-number {
  font-size: 18px;
}
</style>
