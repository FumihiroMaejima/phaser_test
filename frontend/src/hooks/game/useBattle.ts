/* eslint-disable @typescript-eslint/no-var-requires */
import { Ref, reactive, InjectionKey } from 'vue'
import { useRequest, UseRequestType } from '@/hooks/useRequest'
import {
  playerData,
  PlayerType,
  PlayerNumberKeys,
  usePlayer,
  UsePlayerType,
  GamePlayerStateKey,
} from '@/hooks/game/usePlayer'
import {
  enemyData,
  EnemyType,
  EnemyNumberKeys,
  useEnemy,
  UseEnemyType,
  GameEnemyStateKey,
} from '@/hooks/game/useEnemy'

import {
  IAppConfig,
  ServerRequestResponseType,
  ServerErrorResponseType,
} from '@/types'

const config: IAppConfig = require('@/config/data')

export type UseBattleStateType = {
  player: PlayerType
  enemy: EnemyType
}

export type BattleActionTypes = 'attack' | 'heal' | 'escape'

export const useBattle = () => {
  const state = reactive<UseBattleStateType>({
    player: { ...playerData },
    enemy: { ...enemyData },
  })

  /**
   * reset player data
   * @return {void}
   */
  const resetPlayer = () => {
    state.player = { ...playerData }
  }

  /**
   * reset enemy data
   * @return {void}
   */
  const resetEnemy = () => {
    state.enemy = { ...enemyData }
  }

  /**
   * return player data
   * @return {PlayerType} state.player
   */
  const getPlayer = (): PlayerType => {
    return state.player
  }

  /**
   * return enemy data
   * @return {EnemyType} state.enemy
   */
  const getEnemy = (): EnemyType => {
    return state.enemy
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
   * set enemy data to state
   * @param {EnemyType} value
   * @return {void}
   */
  const setEnemy = (value: EnemyType) => {
    state.enemy = value
  }

  /**
   * set player number data to state
   * @param {PlayerNumberKeys} key
   * @param {number} value
   * @return {void}
   */
  const updatePlayerNumberValue = (key: PlayerNumberKeys, value: number) => {
    state.player[key] = value
  }

  /**
   * set enemy number data to state
   * @param {EnemyNumberKeys} key
   * @param {number} value
   * @return {void}
   */
  const updateEnemyNumberValue = (key: EnemyNumberKeys, value: number) => {
    state.enemy[key] = value
  }

  /**
   * player acrtion
   * @param {PlayerType} player
   * @param {EnemyType} enemy
   * @return {Promise<boolean>}
   */
  const playerBattleAction = async (
    player: PlayerType,
    enemy: EnemyType
  ): Promise<boolean> => {
    updateEnemyNumberValue('hp', enemy.hp - player.offence)
    if (getEnemy().hp < 0) {
      return true
    }

    updatePlayerNumberValue('hp', player.hp - enemy.offence)
    return getPlayer().hp < 0
  }

  /**
   * enemy acrtion
   * @param {PlayerType} player
   * @param {EnemyType} enemy
   * @return {Promise<boolean>}
   */
  const enemyBattleAction = async (
    player: PlayerType,
    enemy: EnemyType
  ): Promise<boolean> => {
    updatePlayerNumberValue('hp', player.hp - enemy.offence)
    if (getPlayer().hp < 0) {
      return true
    }

    updateEnemyNumberValue('hp', enemy.hp - player.offence)
    return getEnemy().hp < 0
  }

  /**
   * check hit point
   * @param {PlayerType} player
   * @param {EnemyType} enemy
   * @return {void}
   */
  const checkHP = async (
    player: PlayerType,
    enemy: EnemyType
  ): Promise<boolean> => {
    return player.hp > enemy.hp
  }

  /**
   * make navigation message about battle.
   * @param {BattleActionTypes} type
   * @param {PlayerType | EnemyType} first first attacker
   * @param {PlayerType | EnemyType} second second attacker
   * @return {void}
   */
  const makeBattleNavigationMessage = (
    type: BattleActionTypes,
    first: PlayerType | EnemyType,
    second: PlayerType | EnemyType
  ): string => {
    let message = ''
    switch (type) {
      case 'attack':
        message = `${second.name}は${first.offence}のダメージを受けた！</br>${first.name}は${second.offence}のダメージを受けた！`
        break
      case 'heal':
        message = 'test'
        break
      case 'escape':
        message = 'test'
        break
      default:
        break
    }
    return message
  }

  /**
   * start battle
   * @param {boolean} isAdvantageous
   * @param {PlayerType} player
   * @param {EnemyType} enemy
   * @return {void}
   */
  const startBattle = async (
    isAdvantageous: boolean,
    player: PlayerType,
    enemy: EnemyType
  ) => {
    const value = { message: '', color: 'success' }
    // プレイヤーの先行
    if (isAdvantageous) {
      // バトルを実行し、どちらかのHPが0になった時
      if (await playerBattleAction(player, enemy)) {
        const result = await checkHP(getPlayer(), getEnemy())
        value.message = result ? 'プレイヤーの勝ち' : 'プレイヤーの負け'
        value.color = result ? 'success' : 'error'
      } else {
        // バトル継続中
        value.message = makeBattleNavigationMessage(
          'attack',
          getPlayer(),
          getEnemy()
        )
        value.color = 'success'
      }
    } else {
      // 敵キャラクターーの先行
      // バトルを実行し、どちらかのHPが0になった時
      if (await enemyBattleAction(player, enemy)) {
        const result = await checkHP(getPlayer(), getEnemy())
        value.message = result ? 'プレイヤーの勝ち' : 'プレイヤーの負け'
        value.color = result ? 'success' : 'error'
      } else {
        // バトル継続中
        value.message = makeBattleNavigationMessage(
          'attack',
          getEnemy(),
          getPlayer()
        )
        value.color = 'success'
      }
    }

    return value
  }

  /**
   * start action
   * @param {BattleActionTypes} type
   * @return {void}
   */
  const startAction = async (type: BattleActionTypes = 'attack') => {
    const player = getPlayer()
    const enemy = getEnemy()

    let value = { message: '', color: 'success' }

    switch (type) {
      case 'attack':
        value = await startBattle(player.speed >= enemy.speed, player, enemy)
        break
      case 'heal':
        value = await startBattle(player.speed >= enemy.speed, player, enemy)
        break
      case 'escape':
        value = await startBattle(player.speed >= enemy.speed, player, enemy)
        break
      default:
        break
    }

    return value
  }

  return {
    state,
    resetPlayer,
    resetEnemy,
    getPlayer,
    getEnemy,
    setPlayer,
    setEnemy,
    updatePlayerNumberValue,
    updateEnemyNumberValue,
    playerBattleAction,
    enemyBattleAction,
    checkHP,
    makeBattleNavigationMessage,
    startBattle,
    startAction,
  }
}

// make provide/inject key
export type UseBattleType = ReturnType<typeof useBattle>
export const GameBattleStateKey: InjectionKey<UseBattleType> =
  Symbol('gameBattleState')
