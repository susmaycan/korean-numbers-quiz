export const useQuiz = () => {
  const list = useState<NumberResult[]>('list', () => [])
  const allCorrectAnswers = useState<boolean>('allCorrectAnswers', () => false)
  const isLoading = useState<boolean>('isLoading', () => false)

  const {
    elementCount,
    isKoreanQuizType,
    isListeningQuiz,
    isNumberQuizType,
    isTimeDateQuizType,
    languageType,
    maxNumber,
    quizSubType,
    showResults,
  } = useSettings()

  // Common

  const addNumber = (number: number | string, result: string) => {
    list.value = [
      ...list.value,
      {
        number,
        result,
        userInput: null,
        error: false,
        success: false,
      },
    ]
  }

  const removeSpaces = (value: string) => {
    return value.replace(/ /g, '')
  }

  // Game generators

  const generateNumberQuiz = () => {
    for (let i = 0; i < elementCount.value; i++) {
      const randomNumber = generateRandomNumber(maxNumber.value)
      if (
        randomNumber > 0 &&
        list.value.findIndex(
          (element: NumberResult) => element.number === randomNumber
        ) === -1
      ) {
        const result = isListeningQuiz.value
          ? randomNumber.toString()
          : getNumber(quizSubType.value, randomNumber, false)

        addNumber(randomNumber, result)
      }
    }
  }

  const generateTimeDateQuiz = () => {
    for (let i = 0; i < elementCount.value; i++) {
      let hour = generateRandomNumber(12)
      let minute = generateRandomNumber(60)
      const period = generateRandomNumber(3)

      const { resultTime, displayedTime } = isKoreanQuizType.value
        ? getKoreanTime(hour, minute, period)
        : getJapaneseTime(hour, minute, period)

      if (isListeningQuiz.value) {
        addNumber(displayedTime, displayedTime)
      } else {
        addNumber(displayedTime, resultTime)
      }
    }
  }

  const generateDateDateQuiz = () => {
    for (let i = 0; i < elementCount.value; i++) {
      const date = generateRandomDate(new Date(2000, 0, 1, 3), new Date())

      const { resultDate, displayedDate } = isKoreanQuizType.value
        ? getKoreanDate(date)
        : getJapaneseDate(date)

      if (isListeningQuiz.value) {
        addNumber(displayedDate, displayedDate)
      } else {
        addNumber(displayedDate, resultDate)
      }
    }
  }

  // Quiz actions

  const checkResults = () => {
    let allSuccess = true
    let isCorrect = true
    list.value.forEach((element, index) => {
      const { userInput, result } = element

      if (!userInput) {
        isCorrect = false
      } else {
        isCorrect = removeSpaces(result) === removeSpaces(userInput)
      }
      if (!isCorrect) {
        allSuccess = false
      }

      list.value[index] = { ...element, error: !isCorrect, success: isCorrect }
    })

    allCorrectAnswers.value = allSuccess
  }

  const generateQuiz = () => {
    isLoading.value = true

    resetQuiz()
    if (isNumberQuizType.value) {
      generateNumberQuiz()
    } else if (isTimeDateQuizType.value) {
      generateTimeDateQuiz()
    } else {
      generateDateDateQuiz()
    }

    setTimeout(() => {
      isLoading.value = false
    }, 300)
  }

  const resetQuiz = () => {
    list.value = []
    allCorrectAnswers.value = false
    showResults.value = false
  }

  const clearQuiz = () => {
    allCorrectAnswers.value = false
    showResults.value = false
    list.value = list.value.map((element) => ({
      ...element,
      error: false,
      success: false,
      userInput: null,
    }))
  }

  // Computed

  const hasCheckedResults = computed(() => {
    let hasCheckedResults = false
    list.value.forEach((element, index) => {
      const { error, success } = element

      if (error !== false || success !== false) {
        hasCheckedResults = true
      }
    })

    return hasCheckedResults
  })

  return {
    allCorrectAnswers,
    checkResults,
    clearQuiz,
    generateQuiz,
    hasCheckedResults,
    isLoading,
    list,
  }
}
