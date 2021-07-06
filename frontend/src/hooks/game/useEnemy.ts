/* eslint-disable @typescript-eslint/no-var-requires */
import { Ref, reactive, InjectionKey } from 'vue'
import { useRequest, UseRequestType } from '@/hooks/useRequest'
import {
  IAppConfig,
  ServerRequestResponseType,
  ServerErrorResponseType,
} from '@/types'

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
  isStart: boolean
}

export const useEnemy = () => {
  const state = reactive<usePlayerStateType>({
    enemy: { ...enemyData },
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
  const resetEnemy = () => {
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
   * get enemy data request
   * @return {void}
   */
  const getEnemyDataRequest = async () => {
    await useRequest()
      .getRequest('/api/v1/tesst')
      .then((response) => {
        console.log('then: ' + JSON.stringify(response, null, 2))
      })
      .catch((error) => {
        console.log('catch: ' + JSON.stringify(error, null, 2))
      })
  }

  /**
   * start game & refresh form data
   * @return {void}
   */
  /* const startGame = () => {
    const value = getEnemyForm().name
    if (!valideteNameSceme(value)) {
      // バリデーションエラー時はリロード
      history.go(0)
    } else {
      updatePlayerTextValue('name', value)
      setIsStart(true)
      resetPlayerForm()
    }
  } */

  return {
    state,
    getEnemy,
    getIsStart,
    setEnemy,
    setIsStart,
    resetEnemy,
    resetIsStart,
    getEnemyDataRequest,
  }
}

// make provide/inject key
export type UseEnemyType = ReturnType<typeof useEnemy>
export const GameEnemyStateKey: InjectionKey<UseEnemyType> =
  Symbol('gameEnemyState')
