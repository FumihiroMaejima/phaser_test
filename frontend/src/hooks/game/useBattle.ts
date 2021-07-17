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
   * player acrtion
   * @param {PlayerType} player
   * @param {EnemyType} enemy
   * @return {Promise<boolean>}
   */
  const playerAction = async (
    player: PlayerType,
    enemy: EnemyType
  ): Promise<boolean> => {
    // player.hp = player.hp - enemy.offence
    state.player.hp = player.hp - enemy.offence
    if (getPlayer().hp < 0) {
      return true
    }

    // enemy.hp = enemy.hp - player.offence
    state.enemy.hp = enemy.hp - player.offence
    return getEnemy().hp < 0
  }

  /**
   * enemy acrtion
   * @param {PlayerType} player
   * @param {EnemyType} enemy
   * @return {Promise<boolean>}
   */
  const enemyAction = async (
    player: PlayerType,
    enemy: EnemyType
  ): Promise<boolean> => {
    // enemy.hp = enemy.hp - player.offence
    state.enemy.hp = enemy.hp - player.offence
    if (getEnemy().hp < 0) {
      return true
    }

    // player.hp = player.hp - enemy.offence
    state.player.hp = player.hp - enemy.offence
    return getPlayer().hp < 0
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
   * start battle
   * @param {PlayerType} player
   * @param {EnemyType} enemy
   * @return {void}
   */
  const startBattle = async () => {
    let result = false
    const player = getPlayer()
    const enemy = getEnemy()

    const value = { message: '', color: 'success' }
    if (player.speed >= enemy.speed) {
      // プレイヤーの先行
      if (await playerAction(player, enemy)) {
        result = await checkHP(getPlayer(), getEnemy())
        value.message = result ? 'プレイヤーの勝ち' : 'プレイヤーの負け'
        value.color = result ? 'success' : 'success'
      }
    } else {
      // 敵キャラクターーの先行
      if (await enemyAction(player, enemy)) {
        result = await checkHP(getPlayer(), getEnemy())
        value.message = result ? 'プレイヤーの勝ち' : 'プレイヤーの負け'
        value.color = result ? 'success' : 'success'
      }
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
    playerAction,
    enemyAction,
    checkHP,
    startBattle,
  }
}

// make provide/inject key
export type UseBattleType = ReturnType<typeof useBattle>
export const GameBattleStateKey: InjectionKey<UseBattleType> =
  Symbol('gameBattleState')
