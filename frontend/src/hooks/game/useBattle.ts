/* eslint-disable @typescript-eslint/no-var-requires */
import { Ref, reactive, InjectionKey } from 'vue'
import { useRequest, UseRequestType } from '@/hooks/useRequest'
import {
  PlayerType,
  usePlayer,
  UsePlayerType,
  GamePlayerStateKey,
} from '@/hooks/game/usePlayer'
import {
  EnemyType,
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
  value: undefined
}

export const useBattle = () => {
  const state = reactive<UseBattleStateType>({
    value: undefined,
  })

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
    player.hp = player.hp - enemy.offence
    if (player.hp < 0) {
      return true
    }

    enemy.hp = enemy.hp - player.offence
    return enemy.hp < 0
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
    enemy.hp = enemy.hp - player.offence
    if (enemy.hp < 0) {
      return true
    }

    player.hp = player.hp - enemy.offence
    return player.hp < 0
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
  const startBattle = async (player: PlayerType, enemy: EnemyType) => {
    let result = false
    const value = { message: '', color: 'success' }
    if (player.speed >= enemy.speed) {
      // プレイヤーの先行
      if (await playerAction(player, enemy)) {
        result = await checkHP(player, enemy)
        value.message = result ? 'プレイヤーの勝ち' : 'プレイヤーの負け'
        value.color = result ? 'success' : 'success'
      }
    } else {
      // 敵キャラクターーの先行
      if (await enemyAction(player, enemy)) {
        result = await checkHP(player, enemy)
        value.message = result ? 'プレイヤーの勝ち' : 'プレイヤーの負け'
        value.color = result ? 'success' : 'success'
      }
    }

    return value
  }

  return {
    state,
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
