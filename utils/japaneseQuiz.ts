import { ref, computed } from 'vue'

const kanjiToNumber: { [key: string]: number } = {
  零: 0,
  一: 1,
  二: 2,
  三: 3,
  四: 4,
  五: 5,
  六: 6,
  七: 7,
  八: 8,
  九: 9,
  十: 10,
  百: 100,
  千: 1000,
  万: 10000,
}

const numberToKanji: { [key: number]: string } = Object.fromEntries(
  Object.entries(kanjiToNumber).map(([k, v]) => [v, k])
)

type Mode = 'toJapanese' | 'toArabic'

function toJapaneseNumber(n: number): string {
  if (n === 0) return numberToKanji[0]

  let result = ''
  let remaining = n

  const units = [
    { value: 10000, kanji: '万' },
    { value: 1000, kanji: '千' },
    { value: 100, kanji: '百' },
    { value: 10, kanji: '十' },
    { value: 1, kanji: '' },
  ]

  for (const { value, kanji } of units) {
    const digit = Math.floor(remaining / value)
    if (digit > 0) {
      if (value !== 1 && digit === 1 && value >= 10) {
        result += kanji
      } else {
        result += numberToKanji[digit] + kanji
      }
      remaining -= digit * value
    }
  }

  return result
}

function fromJapaneseNumber(str: string): number {
  let total = 0
  let current = 0
  let tmp = 0

  for (const char of str) {
    const val = kanjiToNumber[char]
    if (val === undefined) continue

    if (val === 10000) {
      total += (current + tmp || 1) * 10000
      current = 0
      tmp = 0
    } else if (val >= 10) {
      tmp += (current || 1) * val
      current = 0
    } else {
      current = val
    }
  }

  return total + tmp + current
}

export function useJapaneseQuiz(mode: Mode = 'toJapanese') {
  const currentNumber = ref(generateNumber())
  const userAnswer = ref('')
  const isCorrect = computed(() => {
    const normalizedUser = normalize(userAnswer.value)
    const correct =
      mode === 'toJapanese'
        ? normalize(toJapaneseNumber(currentNumber.value))
        : String(currentNumber.value)

    if (mode === 'toArabic') {
      const parsed = fromJapaneseNumber(normalizedUser)
      return parsed === currentNumber.value
    }

    return normalizedUser === correct
  })

  const displayQuestion = computed(() => {
    return mode === 'toJapanese'
      ? String(currentNumber.value)
      : toJapaneseNumber(currentNumber.value)
  })

  function generateNumber(): number {
    return Math.floor(Math.random() * 100000)
  }

  function normalize(str: string): string {
    return str.trim().replace(/\s+/g, '')
  }

  function next() {
    currentNumber.value = generateNumber()
    userAnswer.value = ''
  }

  return {
    mode,
    currentNumber,
    userAnswer,
    isCorrect,
    displayQuestion,
    toJapaneseNumber,
    fromJapaneseNumber,
    next,
  }
}
