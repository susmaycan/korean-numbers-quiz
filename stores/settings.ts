import settings from '@/constants/settings'

export const useSettingsStore = defineStore('settings', () => {
  const elementCount = ref(10)
  const maxNumber = ref(settings.maxNumbers[settings.numberTypes.KOREAN][0])
  const quizType = ref(settings.quizType.NUMBERS)
  const quizSkillType = ref(settings.skillQuizType.WRITTEN)
  const quizSubType = ref(settings.numberTypes.KOREAN)
  const voiceSpeed = ref(0.5)
  const showResults = ref(false)
  const isListeningCompatible = ref(false)

  // Computed

  const isNumberQuizType = computed(
    () => quizType.value === settings.quizType.NUMBERS
  )
  const isListeningQuiz = computed(
    () => quizSkillType.value === settings.skillQuizType.LISTENING
  )
  const isWrittenQuiz = computed(
    () => quizSkillType.value === settings.skillQuizType.WRITTEN
  )
  const isDateQuizType = computed(
    () => quizType.value === settings.quizType.DATES
  )
  const isTimeDateQuizType = computed(
    () => quizSubType.value === settings.dateQuizType.TIME
  )
  const maxNumberLimit = computed(() => settings.maxNumbers[quizSubType.value])
  const maxNumberStep = computed(() => settings.maxStep[quizSubType.value])

  const rowPlaceHolder = computed(
    () =>
      settings.placeholders[quizType.value][quizSubType.value][
        quizSkillType.value
      ]
  )

  // Watchers
  watch(quizType, (newVal) => {
    quizSubType.value =
      newVal === settings.quizType.NUMBERS
        ? settings.numberTypes.KOREAN
        : settings.dateQuizType.DATE
  })
  watch(quizSubType, (newVal) => {
    if (isNumberQuizType.value) {
      maxNumber.value = settings.maxNumbers[newVal][0]
    }
  })

  return {
    elementCount,
    maxNumber,
    quizType,
    quizSkillType,
    quizSubType,
    voiceSpeed,
    isNumberQuizType,
    isDateQuizType,
    isListeningQuiz,
    isWrittenQuiz,
    showResults,
    maxNumberLimit,
    isListeningCompatible,
    isTimeDateQuizType,
    rowPlaceHolder,
    maxNumberStep,
  }
})
