const numberTypes = {
  KOREAN: 'korean',
  CHINESE: 'chinese',
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
  [numberTypes.KOREAN]: [10, 100],
  [numberTypes.CHINESE]: [10, 100, 1000, 10000, 100000, 1000000],
}

const maxStep = {
  [numberTypes.KOREAN]: 10,
  [numberTypes.CHINESE]: 1000,
}

const timePeriod: TimePeriod = {
  1: 'AM',
  2: 'PM',
}

const timePeriodKorean: TimePeriod = {
  1: '오전',
  2: '오후',
}

export const placeholders = {
  [quizType.DATES]: {
    [dateQuizType.DATE]: {
      [skillQuizType.LISTENING]: '02/05/2000',
      [skillQuizType.WRITTEN]: '이천년 오월 이일',
    },
    [dateQuizType.TIME]: {
      [skillQuizType.LISTENING]: '05:10 PM',
      [skillQuizType.WRITTEN]: '오후 다섯시 십분',
    },
  },
  [quizType.NUMBERS]: {
    [numberTypes.CHINESE]: {
      [skillQuizType.LISTENING]: '10300',
      [skillQuizType.WRITTEN]: '일만 삼백',
    },
    [numberTypes.KOREAN]: {
      [skillQuizType.LISTENING]: '10',
      [skillQuizType.WRITTEN]: '열',
    },
  },
}

export default {
  numberTypes,
  skillQuizType,
  quizType,
  dateQuizType,
  maxNumbers,
  timePeriod,
  timePeriodKorean,
  placeholders,
  maxStep,
}
