export const useSettings = () => {
  const elementCount = useState<number>('elementCount', () => 10)
  const languageType = useState<string>(
    'languageType',
    () => settings.languageType.KOREAN
  )
  const maxNumber = useState<number>(
    'maxNumber',
    () =>
      settings.maxNumbers[languageType.value][
        settings.koreanNumberTypes.KOREAN
      ][0]
  )

  const quizType = useState<string>('quizType', () => settings.quizType.NUMBERS)
  const quizSkillType = useState<string>(
    'quizSkillType',
    () => settings.skillQuizType.WRITTEN
  )
  const quizSubType = useState<string>(
    'quizSubType',
    () => settings.koreanNumberTypes.KOREAN
  )

  const voiceSpeed = useState<number>('voiceSpeed', () => 0.5)
  const showResults = useState<boolean>('showResults', () => false)

  // Computed

  const isNumberQuizType = computed(
    () => quizType.value === settings.quizType.NUMBERS
  )
  const isKoreanQuizType = computed(
    () => languageType.value === settings.languageType.KOREAN
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
  const maxNumberLimit = computed(
    () => settings.maxNumbers[languageType.value][quizSubType.value]
  )

  const rowPlaceHolder = computed(
    () =>
      settings.placeholders[quizType.value][quizSubType.value][
        quizSkillType.value
      ]
  )

  // Watchers
  watch(quizType, (newVal, oldVal) => {
    if (newVal === oldVal) return
    if (isKoreanQuizType.value) {
      quizSubType.value =
        newVal === settings.quizType.NUMBERS
          ? settings.koreanNumberTypes.KOREAN
          : settings.dateQuizType.DATE
    } else {
      quizSubType.value = settings.japaneseNumberTypes.JAPANESE
    }
  })
  watch(languageType, (newVal, oldVal) => {
    if (newVal === oldVal) return
    if (isKoreanQuizType.value) {
      quizSubType.value =
        quizType.value === settings.quizType.NUMBERS
          ? settings.koreanNumberTypes.KOREAN
          : settings.dateQuizType.DATE
    } else {
      quizSubType.value = settings.japaneseNumberTypes.JAPANESE
    }
  })
  watch(quizSubType, (newVal, oldVal) => {
    if (newVal === oldVal) return
    if (isNumberQuizType.value) {
      maxNumber.value = settings.maxNumbers[languageType.value][newVal][0]
    }
  })

  return {
    elementCount,
    isDateQuizType,
    isKoreanQuizType,
    isListeningQuiz,
    isNumberQuizType,
    isTimeDateQuizType,
    isWrittenQuiz,
    languageType,
    maxNumber,
    maxNumberLimit,
    quizSkillType,
    quizSubType,
    quizType,
    rowPlaceHolder,
    showResults,
    voiceSpeed,
  }
}
