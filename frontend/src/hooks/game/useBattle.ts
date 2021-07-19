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
import { getRoundingRandomInt } from '@/util'

import {
  IAppConfig,
  ServerRequestResponseType,
  ServerErrorResponseType,
} from '@/types'

const config: IAppConfig = require('@/config/data')

export type BattleActionTypes = 'attack' | 'heal' | 'escape'

export type ActionResponseType = Record<'message', string> &
  Record<'isFinished' | 'isVictory', boolean>

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
   * make navigation message about battle.
   * @param {BattleActionTypes} type
   * @param {PlayerType | EnemyType} first first attacker
   * @param {PlayerType | EnemyType} second second attacker
   * @return {string}
   */
  const makeActionNavigationMessage = (
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
   * make navigation message about battle action.
   * @param {boolean} isAttack
   * @param {PlayerType | EnemyType} first first attacker
   * @param {PlayerType | EnemyType} second second attacker
   * @return {string}
   */
  const makeBattleActionMessage = (
    isAttack: boolean,
    first: PlayerType | EnemyType,
    second: PlayerType | EnemyType
  ): string => {
    return isAttack
      ? `${first.name}は${second.name}に${first.offence}のダメージを与えた！`
      : `${first.name}は${second.name}から${second.offence}のダメージを受けた！`
  }

  /**
   * make navigation message about heal action.
   * @param {PlayerType | EnemyType} first first attacker
   * @param {number} value
   * @return {string}
   */
  const makeHealActionMessage = (
    target: PlayerType | EnemyType,
    value: number
  ): string => {
    return `${target.name}は回復呪文を唱えた！体力が${value}ポイント回復した！`
  }

  /**
   * make multi line string.
   * @param {string} fistLine
   * @param {string} nextLine
   * @return {string}
   */
  const makeMuitlLineMessage = (fistLine: string, nextLine: string): string => {
    return `${fistLine}<br>${nextLine}`
  }

  /**
   * player battle acrtion
   * @param {PlayerType} player
   * @param {EnemyType} enemy
   * @return {Promise<ActionResponseType>}
   */
  const playerBattleAction = async (
    player: PlayerType,
    enemy: EnemyType
  ): Promise<ActionResponseType> => {
    const value = { message: '', isFinished: false, isVictory: false }

    updateEnemyNumberValue('hp', enemy.hp - player.offence)
    value.message = makeBattleActionMessage(true, getPlayer(), getEnemy())
    if (getEnemy().hp < 0) {
      value.message = makeMuitlLineMessage(value.message, 'プレイヤーの勝ち!')
      value.isFinished = true
      value.isVictory = true
      return value
    }

    updatePlayerNumberValue('hp', player.hp - enemy.offence)
    value.message = makeMuitlLineMessage(
      value.message,
      makeBattleActionMessage(false, getPlayer(), getEnemy())
    )
    if (getPlayer().hp < 0) {
      value.message = makeMuitlLineMessage(value.message, 'プレイヤーの負け!')
      value.isFinished = true
      return value
    }

    return value
  }

  /**
   * enemy acrtion
   * @param {PlayerType} player
   * @param {EnemyType} enemy
   * @return {Promise<ActionResponseType>}
   */
  const enemyBattleAction = async (
    player: PlayerType,
    enemy: EnemyType
  ): Promise<ActionResponseType> => {
    const value = { message: '', isFinished: false, isVictory: false }

    updatePlayerNumberValue('hp', player.hp - enemy.offence)
    value.message = makeBattleActionMessage(false, getPlayer(), getEnemy())
    if (getPlayer().hp < 0) {
      value.message = makeMuitlLineMessage(value.message, 'プレイヤーの負け!')
      value.isFinished = true
      return value
    }

    updateEnemyNumberValue('hp', enemy.hp - player.offence)
    value.message = makeMuitlLineMessage(
      value.message,
      makeBattleActionMessage(true, getPlayer(), getEnemy())
    )
    if (getEnemy().hp < 0) {
      value.message = makeMuitlLineMessage(value.message, 'プレイヤーの勝ち!')
      value.isFinished = true
      value.isVictory = true
      return value
    }

    return value
  }

  /**
   * player heal acrtion
   * @param {PlayerType} player
   * @param {EnemyType} enemy
   * @return {Promise<ActionResponseType>}
   */
  const playerHealAction = async (
    player: PlayerType,
    enemy: EnemyType
  ): Promise<ActionResponseType> => {
    const value = { message: '', isFinished: false, isVictory: false }

    // プレイヤーのHPの回復
    const refreshValue = 50
    updatePlayerNumberValue('hp', refreshValue)
    value.message = makeHealActionMessage(getPlayer(), refreshValue)

    //   敵キャラクターの攻撃
    updatePlayerNumberValue('hp', player.hp - enemy.offence)
    value.message = makeMuitlLineMessage(
      value.message,
      makeBattleActionMessage(false, getPlayer(), getEnemy())
    )
    if (getPlayer().hp < 0) {
      value.message = makeMuitlLineMessage(value.message, 'プレイヤーの負け!')
      value.isFinished = true
      return value
    }

    return value
  }

  /**
   * start battle
   * @param {boolean} isAdvantageous
   * @param {PlayerType} player
   * @param {EnemyType} enemy
   * @return {Promise<ActionResponseType>}
   */
  const startBattle = async (
    isAdvantageous: boolean,
    player: PlayerType,
    enemy: EnemyType
  ): Promise<ActionResponseType> => {
    let value: ActionResponseType

    if (isAdvantageous) {
      // プレイヤーの先行
      value = await playerBattleAction(player, enemy)
    } else {
      // 敵キャラクターの先行
      value = await enemyBattleAction(player, enemy)
    }

    return value
  }

  /**
   * start heal
   * @param {boolean} isAdvantageous
   * @param {PlayerType} player
   * @param {EnemyType} enemy
   * @return {Promise<ActionResponseType>}
   */
  const startHeal = async (
    isAdvantageous: boolean,
    player: PlayerType,
    enemy: EnemyType
  ): Promise<ActionResponseType> => {
    let value: ActionResponseType

    if (isAdvantageous) {
      // プレイヤーの先行
      value = await playerHealAction(player, enemy)
    } else {
      // 敵キャラクターの先行
      value = await enemyBattleAction(player, enemy)
    }

    return value
  }

  /**
   * start action
   * @param {BattleActionTypes} type
   * @return {void}
   */
  const startAction = async (
    type: BattleActionTypes = 'attack'
  ): Promise<ActionResponseType> => {
    const player = getPlayer()
    const enemy = getEnemy()

    let value = { message: '', isFinished: false, isVictory: false }

    // console.log('random: ' + JSON.stringify(getRoundingRandomInt(2), null, 2))
    // console.log('floor: ' + JSON.stringify(Math.round(3.4), null, 2))

    switch (type) {
      case 'attack':
        value = await startBattle(player.speed >= enemy.speed, player, enemy)
        break
      case 'heal':
        value = await startHeal(player.speed >= enemy.speed, player, enemy)
        break
      case 'escape':
        value.message = 'But, Couldn`t Escape...'
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
    makeActionNavigationMessage,
    makeMuitlLineMessage,
    makeBattleActionMessage,
    makeHealActionMessage,
    playerBattleAction,
    playerHealAction,
    enemyBattleAction,
    startBattle,
    startHeal,
    startAction,
  }
}

// make provide/inject key
export type UseBattleType = ReturnType<typeof useBattle>
export const GameBattleStateKey: InjectionKey<UseBattleType> =
  Symbol('gameBattleState')
