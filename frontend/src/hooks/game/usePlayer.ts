/* eslint-disable @typescript-eslint/no-var-requires */
import { Ref, reactive, InjectionKey } from 'vue'
import { IAppConfig } from '@/types'

const config: IAppConfig = require('@/config/data')

export const editableRole = ['master', 'administrator']

const playerData = {
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

export type PlayerType = typeof playerData
export type PlayerTypeKeys = keyof PlayerType
export type PlayerTextKeys = Extract<PlayerTypeKeys, 'name'>
export type PlayerNumberKeys = Exclude<PlayerTypeKeys, 'id' | PlayerTextKeys>
export type PlayerSelectKeys = Exclude<PlayerTypeKeys, PlayerTextKeys | 'id'>

export type usePlayerStateType = {
  player: PlayerType
}

export const usePlayer = () => {
  const state = reactive<usePlayerStateType>({
    player: { ...playerData },
  })

  /**
   * return player data
   * @return {PlayerType} state.player
   */
  const getPlayer = (): PlayerType => {
    return state.player
  }

  /**
   * insert player data to state
   * @param {PlayerType} value
   * @return {void}
   */
  const setPlayer = (value: PlayerType) => {
    state.player = value
  }

  /**
   * reset player data
   * @return {void}
   */
  const resetPlayer = () => {
    state.player = { ...playerData }
  }

  /**
   * update player text value
   * @param {PlayerTextKeys} key
   * @param {string} value
   * @return {void}
   */
  const updateStateTextValue = (key: PlayerTextKeys, value: string) => {
    state.player[key] = value
  }

  /**
   * update player number value
   * @param {PlayerNumberKeys} key
   * @param {number} value
   * @return {void}
   */
  const updateStateNumberValue = (key: PlayerNumberKeys, value: number) => {
    state.player[key] = value
  }

  return {
    state,
    getPlayer,
    setPlayer,
    resetPlayer,
    updateStateTextValue,
    updateStateNumberValue,
  }
}

// make provide/inject key
export type usePlayerType = ReturnType<typeof usePlayer>
export const GamePlayerStateKey: InjectionKey<usePlayerType> =
  Symbol('gameState')
