/* eslint-disable @typescript-eslint/no-var-requires */
import { Ref, reactive, InjectionKey } from 'vue'
import { useRequest, UseRequestType } from '@/hooks/useRequest'
import {
  IAppConfig,
  ServerRequestResponseType,
  ServerErrorResponseType,
} from '@/types'

const config: IAppConfig = require('@/config/data')

export const enemyData = {
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

export type EnemyType = typeof enemyData
export type EnemyTypeKeys = keyof EnemyType
export type EnemyTextKeys = Extract<EnemyTypeKeys, 'name'>
export type EnemyNumberKeys = Exclude<EnemyTypeKeys, 'id' | EnemyTextKeys>
export type EnemySelectKeys = Exclude<EnemyTypeKeys, EnemyTextKeys | 'id'>

export type GetEnemyRequestResponse = Record<'data', EnemyType[]>

const playerFormData = {
  name: '',
}

export type PlayerFormType = typeof playerFormData
export type PlayerFormTypeKeys = keyof PlayerFormType

export type usePlayerStateType = {
  enemy: EnemyType
}

export const useEnemy = () => {
  const state = reactive<usePlayerStateType>({
    enemy: { ...enemyData },
  })

  /**
   * return enemy data
   * @return {EnemyType} state.enemy
   */
  const getEnemy = (): EnemyType => {
    return state.enemy
  }

  /**
   * set enemy data to state
   * @param {EnemyType} value
   * @return {void}
   */
  const setEnemy = (value: EnemyType) => {
    state.enemy = value
  }

  /**
   * reset enemy data
   * @return {void}
   */
  const resetEnemy = () => {
    state.enemy = { ...enemyData }
  }

  /**
   * get enemy data request
   * @return {void}
   */
  const getEnemyDataRequest = async () => {
    await useRequest()
      .getRequest<GetEnemyRequestResponse>('/api/v1/game/demo/enemies')
      .then((response) => {
        console.log('then: ' + JSON.stringify(response, null, 2))
        const data = response.data as GetEnemyRequestResponse
        setEnemy(data.data[0])
      })
      .catch((error: ServerErrorResponseType) => {
        console.log('catch: ' + JSON.stringify(error, null, 2))
      })
  }

  return {
    state,
    getEnemy,
    setEnemy,
    resetEnemy,
    getEnemyDataRequest,
  }
}

// make provide/inject key
export type UseEnemyType = ReturnType<typeof useEnemy>
export const GameEnemyStateKey: InjectionKey<UseEnemyType> =
  Symbol('gameEnemyState')
