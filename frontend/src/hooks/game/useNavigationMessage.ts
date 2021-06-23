import { reactive, InjectionKey } from 'vue'

export type UseNavigationMessageStateType = {
  message: string
}

export const useNavigationMessage = () => {
  const state = reactive<UseNavigationMessageStateType>({
    message: 'Game Start!',
  })

  /**
   * return message
   * @return {string} state.message
   */
  const getMessage = (): string => {
    return state.message
  }

  /**
   * set message
   * @param {string} value
   * @return {void}
   */
  const setMessage = (value: string) => {
    state.message = value
  }

  /**
   * reset message
   * @return {void}
   */
  const resetMessage = () => {
    state.message = ''
  }

  return {
    state,
    getMessage,
    setMessage,
    resetMessage,
  }
}

// make provide/inject key
export type UseNavigationMessageType = ReturnType<typeof useNavigationMessage>
export const GameNavigationMessageStateKey: InjectionKey<UseNavigationMessageType> =
  Symbol('gameNavigationMessageState')
