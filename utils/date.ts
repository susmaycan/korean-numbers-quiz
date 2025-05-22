export const getJapaneseDate = (
  date: Date
): { resultDate: string; displayedDate: string } => {
  const year = date.getUTCFullYear()
  let month = date.getMonth() + 1
  let day = date.getUTCDate()

  let stringMonth = month.toString()
  if (month < 10) {
    stringMonth = '0' + stringMonth
  }
  let stringDay = day.toString()
  if (day < 10) {
    stringDay = '0' + stringDay
  }
  const displayedDate = `${stringDay}/${stringMonth}/${year}`

  const resultYear = getNumber(
    settings.japaneseNumberTypes.JAPANESE,
    year,
    false
  )
  const resultMonth = getNumber(
    settings.japaneseNumberTypes.JAPANESE,
    month,
    false
  )
  const resultDay = getNumber(settings.japaneseNumberTypes.JAPANESE, day, false)

  const resultDate = `${resultYear}年 ${resultMonth}月 ${resultDay}日`

  return { displayedDate, resultDate }
}

export const getKoreanDate = (
  date: Date
): { resultDate: string; displayedDate: string } => {
  const year = date.getUTCFullYear()
  let month = date.getMonth() + 1
  let day = date.getUTCDate()

  const resultYear = getNumber(settings.koreanNumberTypes.CHINESE, year, false)
  const resultMonth = getNumber(
    settings.koreanNumberTypes.CHINESE,
    month,
    false
  )
  const resultDay = getNumber(settings.koreanNumberTypes.CHINESE, day, false)

  const resultDate = `${resultYear}년 ${resultMonth}월 ${resultDay}일`

  let stringMonth = month.toString()
  if (month < 10) {
    stringMonth = '0' + stringMonth
  }
  let stringDay = day.toString()
  if (day < 10) {
    stringDay = '0' + stringDay
  }
  const displayedDate = `${stringDay}/${stringMonth}/${year}`

  return { resultDate, displayedDate }
}

export const getKoreanTime = (
  hour: number,
  minute: number,
  period: number
): { resultTime: string; displayedTime: string } => {
  const resultHour = getNumber(settings.koreanNumberTypes.KOREAN, hour, true)
  const resultMinute =
    minute > 0
      ? getNumber(settings.koreanNumberTypes.CHINESE, minute, true)
      : ''
  const resultPeriod = settings.timePeriodKorean[period as keyof TimePeriod]

  const resultTime = `${resultPeriod} ${resultHour}시 ${resultMinute}분`

  let stringHour = hour.toString()
  if (hour < 10) {
    stringHour = '0' + stringHour
  }
  let stringMinute = minute.toString()
  if (minute < 10) {
    stringMinute = '0' + stringMinute
  }
  const displayedTime = `${stringHour}:${stringMinute} ${
    settings.timePeriod[period as keyof TimePeriod]
  }`

  return { resultTime, displayedTime }
}

export const getJapaneseTime = (
  hour: number,
  minute: number,
  period: number
): { resultTime: string; displayedTime: string } => {
  const resultHour = getNumber(
    settings.japaneseNumberTypes.JAPANESE,
    hour,
    false
  )
  const resultMinute =
    minute > 0
      ? getNumber(settings.japaneseNumberTypes.JAPANESE, minute, false)
      : ''
  const resultPeriod = settings.timePeriodJapanese[period as keyof TimePeriod]

  const resultTime = `${resultPeriod} ${resultHour}時 ${resultMinute}分`

  let stringHour = hour.toString()
  if (hour < 10) {
    stringHour = '0' + stringHour
  }
  let stringMinute = minute.toString()
  if (minute < 10) {
    stringMinute = '0' + stringMinute
  }
  const displayedTime = `${stringHour}:${stringMinute} ${
    settings.timePeriod[period as keyof TimePeriod]
  }`

  return { resultTime, displayedTime }
}
