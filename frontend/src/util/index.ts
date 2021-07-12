import { Ref } from 'vue'

/**
 * inversion boolean flag.
 * @param {Ref<boolean>} value
 * @return {void}
 */
export function inversionFlag(flag: Ref) {
  flag.value = !flag.value
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
