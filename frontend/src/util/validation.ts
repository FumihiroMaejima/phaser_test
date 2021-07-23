/**
 * check text length exclude space.
 * @param {string} value
 * @return {boolean}
 */
export const checkTextLength = (value: string): boolean => {
  // null or undefined
  if (!value) {
    return false
  }
  // string length check
  return value.trim().length > 0
}

/**
 * check text max length.
 * @param {string} value
 * @param {null | number} maxlength
 * @return {boolean}
 */
export const checkTextMaxLength = (
  value: string,
  maxlength: null | number = null
): boolean => {
  if (maxlength === null) {
    return true
  }
  return value.length <= maxlength
}

/**
 * check text min length.
 * @param {string} value
 * @param {number} minlength
 * @return {boolean}
 */
export const checkTextMinLength = (value: string, minlength = 0): boolean => {
  return value.length >= minlength
}

/**
 * check two text value is equals.
 * @param {string} value
 * @param {string} comparedValue
 * @return {boolean}
 */
export const checkTextEquals = (
  value: string,
  comparedValue: string
): boolean => {
  return value === comparedValue
}

/**
 * check katakana regex.
 * @param {string} value
 * @return {boolean}
 */
export const checkKatakana = (value: string): boolean => {
  // 文字の範囲で指定する場合は^[ァ-?]+$
  const regex = /^[\u30A0-\u30FF]+$/
  return regex.test(value)
}

/**
 * validate name.
 * @param {string} value
 * @param {number} textSize
 * @return {string} message
 */
export const validateName = (value: string, textSize = 10): string => {
  let message = ''
  if (!checkTextLength(value)) {
    return (message = 'This is required')
  } else if (!checkTextMaxLength(value, textSize)) {
    return (message = `input over ${textSize} length text`)
  }
  // TODO カタカナ制御は後で外す
  /*  else if (!checkKatakana(value)) {
    return (message = `input katakana text`)
  } */
  return message
}
