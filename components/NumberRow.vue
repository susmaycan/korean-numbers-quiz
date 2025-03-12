<script setup lang="ts">
const { speak, isCompatible, voiceList } = useSpeechAPI()

const { voiceSpeed, showResults, isWrittenQuiz, rowPlaceHolder } = useSettings()
interface Props {
  row: NumberResult
}

const props = defineProps<Props>()

const icon = computed(() => {
  if (props.row.success) return 'mdi-check'
  if (props.row.error) return 'mdi-close'
  return undefined
})

const speakNumber = async () => {
  console.log('🚀 ~ speakNumber ~ props.row.resul:', props.row)
  speak(props.row.result, voiceSpeed.value)
}
</script>
<template>
  <div class="mr-4 mb-4">
    <div class="d-flex align-center">
      <span
        v-if="isWrittenQuiz"
        class="font-weight-bold main-number"
        :class="{ 'mr-3': !isCompatible }"
        >{{ row.number }}</span
      >
      <v-btn
        v-if="isCompatible"
        icon="mdi-volume-high"
        variant="plain"
        @click="speakNumber"
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
<style lang="scss" scoped>
.main-number {
  font-size: 18px;
}
</style>
