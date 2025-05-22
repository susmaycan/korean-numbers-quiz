export interface UnitsZero {
  '0': string
  '1': string
  '2': string
  '3': string
  '4': string
  '5': string
  '6': string
  '7': string
  '8': string
  '9': string
}
export interface Units {
  '1': string
  '2': string
  '3': string
  '4': string
  '5': string
  '6': string
  '7': string
  '8': string
  '9': string
}

export interface KoreanNumbers {
  units: UnitsZero
  unitsTime: UnitsZero
  tens: Units
}

export interface ChineseNumbers {
  '0': UnitsZero
  '1': string
  '2': string
  '3': string
  '4': string
  '5': string
  '6': string
}

export interface TimePeriod {
  1: string
  2: string
}

export interface IJapaneseNumbers {
  [key: string]: number
}
