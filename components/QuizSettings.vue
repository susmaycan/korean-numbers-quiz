<template>
  <div class="pa-5 w-100">
    <h2 class="text-center">{{ $t('settings') }}</h2>
    <div v-if="isListeningCompatible" class="pl-2 settings-input">
      <voice-speed-slider />
    </div>
    <div>
      <div class="settings-input">
        <v-radio-group
          v-model="quizType"
          inline
          :label="$t('quiz_type')"
          hide-details
        >
          <v-radio
            v-for="quizTypeOption in quizSettings.quizType"
            :key="quizTypeOption"
            :label="$t(quizTypeOption)"
            :value="quizTypeOption"
          />
        </v-radio-group>
      </div>

      <div class="settings-input">
        <v-radio-group
          v-model="quizSkillType"
          inline
          hide-details
          :label="$t('skill_quiz_type')"
        >
          <v-radio
            v-for="quizSkillTypeOption in skillQuizTypeOptions"
            :key="quizSkillTypeOption"
            :label="$t(quizSkillTypeOption)"
            :value="quizSkillTypeOption"
          />
        </v-radio-group>
      </div>

      <div v-if="isNumberQuizType" class="settings-input">
        <v-radio-group
          v-model="quizSubType"
          hide-details
          inline
          :label="$t('number_type')"
        >
          <v-radio
            v-for="quizNumberTypeOption in quizSettings.numberTypes"
            :key="quizNumberTypeOption"
            :label="$t(quizNumberTypeOption)"
            :value="quizNumberTypeOption"
          />
        </v-radio-group>
      </div>
      <div v-else class="settings-input">
        <v-radio-group
          v-model="quizSubType"
          inline
          hide-details
          :label="$t('date_quiz_type')"
        >
          <v-radio
            v-for="typeOption in quizSettings.dateQuizType"
            :key="typeOption"
            :label="$t(typeOption)"
            :value="typeOption"
          />
        </v-radio-group>
      </div>
      <div v-if="isNumberQuizType" class="settings-input">
        <v-radio-group
          v-model="maxNumber"
          inline
          hide-details
          :label="$t('max_value')"
        >
          <v-radio
            v-for="maxNumberOption in maxNumberLimit"
            :key="maxNumberOption"
            :label="maxNumberOption.toString()"
            :value="maxNumberOption"
          />
        </v-radio-group>
      </div>

      <div class="d-flex flex-column justify-center">
        <v-btn color="primary" @click="generate" append-icon="mdi-flash">
          {{ $t('generate_quiz') }}
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import quizSettings from '@/constants/settings'
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '@/stores/settings'
import { useQuizStore } from '@/stores/quiz'
import { useDisplay } from 'vuetify'

const settingsStore = useSettingsStore()
const quizStore = useQuizStore()

const {
  quizType,
  quizSkillType,
  quizSubType,
  maxNumber,
  isNumberQuizType,
  maxNumberLimit,
  isListeningCompatible,
} = storeToRefs(settingsStore)

const { generateQuiz } = quizStore

const { mobile } = useDisplay()

const emits = defineEmits(['toggle-drawer'])

const skillQuizTypeOptions = computed(() =>
  isListeningCompatible.value
    ? quizSettings.skillQuizType
    : [quizSettings.skillQuizType.WRITTEN]
)

const generate = () => {
  generateQuiz()

  if (mobile.value) {
    emits('toggle-drawer')
  }
}

watch([quizType, quizSkillType, quizSubType, maxNumber], () => {
  generateQuiz()
})
</script>

<style lang="scss" scoped>
.settings-input {
  margin-bottom: 1em;
}
</style>
