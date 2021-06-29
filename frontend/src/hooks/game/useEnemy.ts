/* eslint-disable @typescript-eslint/no-var-requires */
import { Ref, reactive, InjectionKey } from 'vue'
import { IAppConfig } from '@/types'
import { validateName } from '@/util/validation'

export const valideteNameSceme = (value: string): boolean => {
  const message = validateName(value, 10)
  return message === ''
}

const config: IAppConfig = require('@/config/data')

const enemyData = {
  id: 0,
  name: '',
  level: 1,
  hp: 100,
  mp: 0,
  offence: 0,
  defense: 0,
  speed: 0,
  magic: 0,
}

export type PlayerType = typeof enemyData
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
  enemy: PlayerType
  form: PlayerFormType
  isStart: boolean
}

export const useEnemy = () => {
  const state = reactive<usePlayerStateType>({
    enemy: { ...enemyData },
    form: { ...playerFormData },
    isStart: false,
  })

  /**
   * return enemy data
   * @return {PlayerType} state.enemy
   */
  const getEnemy = (): PlayerType => {
    return state.enemy
  }

  /**
   * return enemy form data
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
   * set enemy data to state
   * @param {PlayerType} value
   * @return {void}
   */
  const setEnemy = (value: PlayerType) => {
    state.enemy = value
  }

  /**
   * set enemy form data to state
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
   * reset enemy data
   * @return {void}
   */
  const resetPlayer = () => {
    state.enemy = { ...enemyData }
  }

  /**
   * reset game start flag
   * @return {void}
   */
  const resetIsStart = () => {
    state.isStart = false
  }

  /**
   * reset enemy form data
   * @return {void}
   */
  const resetPlayerForm = () => {
    state.form = { ...playerFormData }
  }

  /**
   * update enemy text value
   * @param {PlayerTextKeys} key
   * @param {string} value
   * @return {void}
   */
  const updatePlayerTextValue = (key: PlayerTextKeys, value: string) => {
    state.enemy[key] = value
  }

  /**
   * update enemy number value
   * @param {PlayerNumberKeys} key
   * @param {number} value
   * @return {void}
   */
  const updatePlayerNumberValue = (key: PlayerNumberKeys, value: number) => {
    state.enemy[key] = value
  }

  /**
   * update enemy form text value
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
    getEnemy,
    getPlayerForm,
    getIsStart,
    setEnemy,
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
export type UseEnemyType = ReturnType<typeof useEnemy>
export const GameEnemyStateKey: InjectionKey<UseEnemyType> =
  Symbol('gameEnemyState')
