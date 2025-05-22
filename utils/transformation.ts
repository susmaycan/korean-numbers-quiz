const koreanNumbers: KoreanNumbers = {
  units: {
    '0': '',
    '1': '하나',
    '2': '둘',
    '3': '셋',
    '4': '넷',
    '5': '다섯',
    '6': '여섯',
    '7': '일곱',
    '8': '여덟',
    '9': '아홉',
  },
  unitsTime: {
    '0': '',
    '1': '한',
    '2': '두',
    '3': '세',
    '4': '네',
    '5': '다섯',
    '6': '여섯',
    '7': '일곱',
    '8': '여덟',
    '9': '아홉',
  },
  tens: {
    '1': '열',
    '2': '스물',
    '3': '서른',
    '4': '마흔',
    '5': '쉰',
    '6': '예순',
    '7': '일흔',
    '8': '여든',
    '9': '아흔',
  },
}

const chineseNumbers: ChineseNumbers = {
  '0': {
    '0': '',
    '1': '일',
    '2': '이',
    '3': '삼',
    '4': '사',
    '5': '오',
    '6': '육',
    '7': '칠',
    '8': '팔',
    '9': '구',
  },
  '1': '십',
  '2': '백',
  '3': '천',
  '4': '만',
  '5': '십',
  '6': '백',
}

const japaneseNumbers: IJapaneseNumbers = {
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

function nextFourDigitsHaveNonZero(index: number, inputString: string) {
  for (let j = index + 1; j <= index + 3; j++) {
    if (j < inputString.length && inputString.charAt(j) !== '0') {
      return true
    }
  }

  return false
}

function reverseString(str: string) {
  return str.split('').reverse().join('')
}

const getKoreanNumber = (number: number, hour: boolean = false) => {
  if (!number || number === 0 || number > 99) {
    return '-'
  }

  const reversedNumber = reverseString(number.toString())
  const units: string = reversedNumber.charAt(0)
  const tens: string = reversedNumber.charAt(1)
  let output = ''

  // First we set the units
  output = hour
    ? koreanNumbers.unitsTime[units as keyof UnitsZero]
    : koreanNumbers.units[units as keyof UnitsZero]

  // Then we set the tens
  if (tens) {
    output = koreanNumbers.tens[tens as keyof Units] + output
  }

  return output
}

const getChineseNumber = (number: number) => {
  if (!number || number === 0 || number > 999999999999999 || number < 1) {
    return '-'
  }

  const numberAsStringReversed = reverseString(number.toString())

  let output = ''

  const firstChar = numberAsStringReversed.charAt(0)

  output =
    (firstChar > '0' ? chineseNumbers['0'][firstChar as keyof Units] : '') +
    output

  for (let i = 1; i < numberAsStringReversed.length; i++) {
    const currentChar = numberAsStringReversed.charAt(i)

    const isBreakPoint = i === 4

    if (isBreakPoint) {
      output = ' ' + output
    }

    const new10XPart =
      currentChar > '0' ||
      (isBreakPoint && nextFourDigitsHaveNonZero(i, numberAsStringReversed))
        ? chineseNumbers[i.toString() as keyof ChineseNumbers]
        : ''

    output = new10XPart + output

    const new10XMultiplierPart =
      currentChar > '1' ||
      (isBreakPoint && nextFourDigitsHaveNonZero(i, numberAsStringReversed))
        ? chineseNumbers[0][currentChar as keyof Units]
        : ''

    output = new10XMultiplierPart + output
  }

  return output.trim()
}

const getJapaneseNumber = (arabicNumber: number) => {
  const numberToKanji: { [key: number]: string } = Object.fromEntries(
    Object.entries(japaneseNumbers).map(([k, v]) => [v, k])
  )

  if (arabicNumber === 0) return numberToKanji[0]

  let result = ''
  let remaining = arabicNumber

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

export const getNumber = (
  type: string,
  number: number,
  hour: boolean = false
) => {
  if (type === settings.japaneseNumberTypes.JAPANESE)
    return getJapaneseNumber(number)

  if (type === settings.koreanNumberTypes.KOREAN)
    return getKoreanNumber(number, hour)

  return getChineseNumber(number)
}
