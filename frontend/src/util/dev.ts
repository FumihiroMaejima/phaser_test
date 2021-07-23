/**
 * output console.log.
 * @param {any} value - string number object array etc...
 * @param {string} text - log title. defalut 'test'
 * @return {void}
 */
/* eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types */
export function dd(value: any, text = 'test'): void {
  console.log(`${text}: ${JSON.stringify(value, null, 2)}`)
}
