const languageType = {
  KOREAN: 'korean',
  JAPANESE: 'japanese',
}

const koreanNumberTypes = {
  KOREAN: 'korean',
  CHINESE: 'chinese',
}

const japaneseNumberTypes = {
  JAPANESE: 'japanese',
}
const skillQuizType = {
  WRITTEN: 'written',
  LISTENING: 'listening',
}
const quizType = {
  NUMBERS: 'numbers',
  DATES: 'dates',
}
const dateQuizType = {
  DATE: 'date',
  TIME: 'time',
}

const maxNumbers = {
  [languageType.KOREAN]: {
    [koreanNumberTypes.KOREAN]: [10, 100],
    [koreanNumberTypes.CHINESE]: [10, 100, 1000, 10000, 100000, 1000000],
  },
  [languageType.JAPANESE]: {
    [japaneseNumberTypes.JAPANESE]: [10, 100, 1000, 10000, 100000, 1000000],
  },
}

const timePeriod: TimePeriod = {
  1: 'AM',
  2: 'PM',
}

const timePeriodKorean: TimePeriod = {
  1: '오전',
  2: '오후',
}

const timePeriodJapanese: TimePeriod = {
  1: '午前',
  2: '午後',
}

export const placeholders = {
  [quizType.DATES]: {
    [dateQuizType.DATE]: {
      [languageType.KOREAN]: {
        [skillQuizType.LISTENING]: '02/05/2000',
        [skillQuizType.WRITTEN]: '이천년 오월 이일',
      },
      [languageType.JAPANESE]: {
        [skillQuizType.LISTENING]: '02/05/2000',
        [skillQuizType.WRITTEN]: '二千年 二月 五日',
      },
    },
    [dateQuizType.TIME]: {
      [languageType.KOREAN]: {
        [skillQuizType.LISTENING]: '05:10 PM',
        [skillQuizType.WRITTEN]: '오후 다섯시 십분',
      },

      [languageType.JAPANESE]: {
        [skillQuizType.LISTENING]: '05:10 PM',
        [skillQuizType.WRITTEN]: '午後 ご時 十分',
      },
    },
  },
  [quizType.NUMBERS]: {
    [koreanNumberTypes.CHINESE]: {
      [skillQuizType.LISTENING]: '10300',
      [skillQuizType.WRITTEN]: '일만 삼백',
    },
    [koreanNumberTypes.KOREAN]: {
      [skillQuizType.LISTENING]: '10',
      [skillQuizType.WRITTEN]: '열',
    },
    [japaneseNumberTypes.JAPANESE]: {
      [skillQuizType.LISTENING]: '10',
      [skillQuizType.WRITTEN]: '十',
    },
  },
}

export default {
  dateQuizType,
  japaneseNumberTypes,
  koreanNumberTypes,
  languageType,
  maxNumbers,
  placeholders,
  quizType,
  skillQuizType,
  timePeriod,
  timePeriodJapanese,
  timePeriodKorean,
}
