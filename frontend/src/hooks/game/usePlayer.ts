/* eslint-disable @typescript-eslint/no-var-requires */
import { Ref, reactive, InjectionKey } from 'vue'
import { IAppConfig } from '@/types'
import { validateName } from '@/util/validation'

export const valideteNameSceme = (value: string): boolean => {
  const message = validateName(value, 10)
  return message === ''
}

const config: IAppConfig = require('@/config/data')

export const playerData = {
  id: 0,
  name: '',
  level: 1,
  hp: 100,
  mp: 0,
  offence: 30,
  defense: 0,
  speed: 10,
  magic: 30,
}

export type PlayerType = typeof playerData
export type PlayerTypeKeys = keyof PlayerType
export type PlayerTextKeys = Extract<PlayerTypeKeys, 'name'>
export type PlayerNumberKeys = Exclude<PlayerTypeKeys, 'id' | PlayerTextKeys>
export type PlayerSelectKeys = Exclude<PlayerTypeKeys, PlayerTextKeys | 'id'>

const playerFormData = {
  name: '',
}

export type PlayerFormType = typeof playerFormData
export type PlayerFormTypeKeys = keyof PlayerFormType

export type usePlayerStateType = {
  player: PlayerType
  form: PlayerFormType
  isStart: boolean
}

export const usePlayer = () => {
  const state = reactive<usePlayerStateType>({
    player: { ...playerData },
    form: { ...playerFormData },
    isStart: false,
  })

  /**
   * return player data
   * @return {PlayerType} state.player
   */
  const getPlayer = (): PlayerType => {
    return state.player
  }

  /**
   * return player form data
   * @return {PlayerFormType} state.form
   */
  const getPlayerForm = (): PlayerFormType => {
    return state.form
  }

  /**
   * return game start flag
   * @return {boolean} state.isStart
   */
  const getIsStart = (): boolean => {
    return state.isStart
  }

  /**
   * set player data to state
   * @param {PlayerType} value
   * @return {void}
   */
  const setPlayer = (value: PlayerType) => {
    state.player = value
  }

  /**
   * set player form data to state
   * @param {PlayerFormType} value
   * @return {void}
   */
  const setPlayerForm = (value: PlayerFormType) => {
    state.form = value
  }

  /**
   * set game start flag to state
   * @param {boolean} value
   * @return {void}
   */
  const setIsStart = (value: boolean) => {
    state.isStart = value
  }

  /**
   * reset player data
   * @return {void}
   */
  const resetPlayer = () => {
    state.player = { ...playerData }
  }

  /**
   * reset game start flag
   * @return {void}
   */
  const resetIsStart = () => {
    state.isStart = false
  }

  /**
   * reset player form data
   * @return {void}
   */
  const resetPlayerForm = () => {
    state.form = { ...playerFormData }
  }

  /**
   * update player text value
   * @param {PlayerTextKeys} key
   * @param {string} value
   * @return {void}
   */
  const updatePlayerTextValue = (key: PlayerTextKeys, value: string) => {
    state.player[key] = value
  }

  /**
   * update player number value
   * @param {PlayerNumberKeys} key
   * @param {number} value
   * @return {void}
   */
  const updatePlayerNumberValue = (key: PlayerNumberKeys, value: number) => {
    state.player[key] = value
  }

  /**
   * update player form text value
   * @param {PlayerFormTypeKeys} key
   * @param {string} value
   * @return {void}
   */
  const updateFormTextValue = (key: PlayerFormTypeKeys, value: string) => {
    state.form[key] = value
  }

  /**
   * start game & refresh form data
   * @return {void}
   */
  const startGame = () => {
    const value = getPlayerForm().name
    if (!valideteNameSceme(value)) {
      // バリデーションエラー時はリロード
      history.go(0)
    } else {
      updatePlayerTextValue('name', value)
      setIsStart(true)
      resetPlayerForm()
    }
  }

  return {
    state,
    getPlayer,
    getPlayerForm,
    getIsStart,
    setPlayer,
    setPlayerForm,
    setIsStart,
    resetPlayer,
    resetPlayerForm,
    resetIsStart,
    updatePlayerTextValue,
    updatePlayerNumberValue,
    updateFormTextValue,
    startGame,
  }
}

// make provide/inject key
export type UsePlayerType = ReturnType<typeof usePlayer>
export const GamePlayerStateKey: InjectionKey<UsePlayerType> =
  Symbol('gamePlayerState')
