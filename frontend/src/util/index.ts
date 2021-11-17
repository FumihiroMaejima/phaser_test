import { Ref } from 'vue'

/**
 * inversion boolean flag.
 * @param {Ref<boolean>} value
 * @return {void}
 */
export const inversionFlag = (flag: Ref): void => {
  flag.value = !flag.value
}

/**
 * get rounding random number value.(四捨五入)
 * @param {number} maxNumber
 * @return {number}
 */
export const getRoundingRandomInt = (maxNumber: number): number => {
  return Math.round(Math.random() * maxNumber)
}

/**
 * get floor random value.(切り捨て)
 * @param {number} maxNumber
 * @return {number}
 */
export const getFloorRandomInt = (maxNumber: number): number => {
  return Math.floor(Math.random() * maxNumber)
}

/**
 * ファイルの読み込みとデータをテキストとして取得
 * @param {File} file
 * @return {Promise<string | ArrayBuffer | null>}
 */
export const readFileDataAsText = async (
  file: File
): Promise<string | ArrayBuffer | null> => {
  return new Promise(
    (resolve: (param: string | ArrayBuffer | null) => void) => {
      const reader = new FileReader()
      // reader.onload = (e: ProgressEvent) => {
      reader.onload = () => {
        // 読み込んだ結果をresolve(解決)する
        resolve(reader.result)
      }
      // 読み込み
      reader.readAsText(file)
    }
  )
}

/**
 * ファイルの読み込みとデータをデータURLとして取得
 * @param {File} file
 * @return {Promise<string | ArrayBuffer | null>}
 */
export const readFileDataAsDataURL = async (
  file: File
): Promise<string | ArrayBuffer | null> => {
  return new Promise(
    (resolve: (param: string | ArrayBuffer | null) => void) => {
      const reader = new FileReader()
      // reader.onload = (e: ProgressEvent) => {
      reader.onload = () => {
        // 読み込んだ結果をresolve(解決)する
        resolve(reader.result)
      }
      // 読み込み
      reader.readAsDataURL(file)
    }
  )
}

/**
 * 日付の形式(yyyy/mm/dd)のチェック
 * @param {string} value
 * @return {boolean}
 */
export const checkDateFormat = (value: string): boolean => {
  return value.match(/^[0-9]{4}\/[0-9]{2}\/[0-9]{2}/u) !== null
}

/**
 * 日時の形式(yyyy/mm/dd hh:mm:ss)のチェック
 * @param {string} value
 * @return {boolean}
 */
export const checkDateTimeFormat = (value: string): boolean => {
  return (
    value.match(
      /^[0-9]{4}\/[0-9]{2}\/[0-9]{2}\s[0-9]{2}:[0-9]{2}:[0-9]{2}/u
    ) !== null
  )
}

/**
 * invalid type error class.
 * @param {Ref<boolean>} value
 * @return {void}
 */
export class InvalidStateErrorUtil extends Error {
  constructor(value: never, message?: string) {
    super(message)
  }
}
