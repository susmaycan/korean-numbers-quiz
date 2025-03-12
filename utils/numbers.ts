const generateRandomNumber = (maxVal: number, minVal: number = 1) => {
  return Math.floor(Math.random() * (maxVal - minVal) + minVal)
}

const generateRandomDate = (start: Date, end: Date) => {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
  const noTimeDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  )
  return noTimeDate
}

export { generateRandomNumber, generateRandomDate }
