/* eslint-disable @typescript-eslint/no-var-requires */
import { reactive, InjectionKey } from 'vue'
// import { useRequest, UseRequestType } from '@/hooks/useRequest'
import {
  playerData,
  PlayerType,
  PlayerNumberKeys,
} from '@/hooks/game/usePlayer'
import { enemyData, EnemyType, EnemyNumberKeys } from '@/hooks/game/useEnemy'
import { getRoundingRandomInt } from '@/util'

/* import {
  IAppConfig,
  ServerRequestResponseType,
  ServerErrorResponseType,
} from '@/types' */

// const config: IAppConfig = require('@/config/data')

export type BattleActionTypes = 'attack' | 'heal' | 'escape'

export type ActionResponseType = Record<'message', string> &
  Record<'isFinished' | 'isVictory', boolean>

export type UseBattleStateType = {
  player: PlayerType
  enemy: EnemyType
}

/* eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types */
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
   * make navigation message about battle action of magic.
   * @param {PlayerType | EnemyType} first first attacker
   * @param {PlayerType | EnemyType} second second attacker
   * @return {string}
   */
  const makeMagicActionMessage = (
    first: PlayerType | EnemyType,
    second: PlayerType | EnemyType
  ): string => {
    return `${first.name}は不思議な呪文を唱えた！<br>${second.name}に${first.magic}のダメージを与えた！`
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
   * get player action response
   * @param {number} {BattleActionTypes} type
   * @param {PlayerType} player
   * @param {EnemyType} enemy
   * @return {string}
   */
  const getPlayerActionResponse = (
    type: BattleActionTypes = 'attack',
    player: PlayerType,
    enemy: EnemyType
  ): string => {
    let message = ''

    switch (type) {
      case 'attack':
        // 攻撃
        updateEnemyNumberValue('hp', enemy.hp - player.offence)
        message = makeBattleActionMessage(true, getPlayer(), getEnemy())
        break
      case 'heal':
        // 回復
        updatePlayerNumberValue('hp', player.hp + player.magic)
        message = makeHealActionMessage(getPlayer(), player.magic)
        break
      case 'escape':
        message = `${player.name}は逃げようとした！しかし、周り込まれてしまった...。`
        break
      default:
        // 何もしない
        message = `${player.name}は何もしなかった！`
        break
    }

    return message
  }

  /**
   * get enemy action response
   * @param {number} value
   * @param {PlayerType} player
   * @param {EnemyType} enemy
   * @return {string}
   */
  const getEnemyActionResponse = (
    value: number,
    player: PlayerType,
    enemy: EnemyType
  ): string => {
    let message = ''

    switch (value) {
      case 0:
        // 攻撃
        updatePlayerNumberValue('hp', player.hp - enemy.offence)
        message = makeBattleActionMessage(false, getPlayer(), getEnemy())
        break
      case 1:
        // 魔法攻撃
        updatePlayerNumberValue('hp', player.hp - enemy.magic)
        message = makeMagicActionMessage(getEnemy(), getPlayer())
        break
      default:
        // 何もしない
        message = `${enemy.name}は何もしなかった！`
        break
    }

    return message
  }

  /**
   * player battle acrtion
   * @param {BattleActionTypes} type
   * @param {PlayerType} player
   * @param {EnemyType} enemy
   * @return {Promise<ActionResponseType>}
   */
  const playerPriorityAction = async (
    type: BattleActionTypes = 'attack',
    player: PlayerType,
    enemy: EnemyType
  ): Promise<ActionResponseType> => {
    const value = { message: '', isFinished: false, isVictory: false }

    // プレイヤーのアクション
    value.message = getPlayerActionResponse(type, player, enemy)
    if (getEnemy().hp < 0) {
      value.message = makeMuitlLineMessage(value.message, 'プレイヤーの勝ち!')
      value.isFinished = true
      value.isVictory = true
      return value
    }

    // 敵キャラクターのアクション
    value.message = makeMuitlLineMessage(
      value.message,
      getEnemyActionResponse(getRoundingRandomInt(2), getPlayer(), getEnemy())
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
   * @param {BattleActionTypes} type
   * @param {PlayerType} player
   * @param {EnemyType} enemy
   * @return {Promise<ActionResponseType>}
   */
  const enemyPriorityAction = async (
    type: BattleActionTypes,
    player: PlayerType,
    enemy: EnemyType
  ): Promise<ActionResponseType> => {
    const value = { message: '', isFinished: false, isVictory: false }

    // 敵キャラクターのアクション
    value.message = getEnemyActionResponse(
      getRoundingRandomInt(2),
      player,
      enemy
    )
    if (getPlayer().hp < 0) {
      value.message = makeMuitlLineMessage(value.message, 'プレイヤーの負け!')
      value.isFinished = true
      return value
    }

    // プレイヤーのアクションs
    value.message = makeMuitlLineMessage(
      value.message,
      getPlayerActionResponse(type, getPlayer(), getEnemy())
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
   * start action
   * @param {BattleActionTypes} type
   * @return {Promise<ActionResponseType>}
   */
  const startAction = async (
    type: BattleActionTypes = 'attack'
  ): Promise<ActionResponseType> => {
    const player = getPlayer()
    const enemy = getEnemy()

    let value = { message: '', isFinished: false, isVictory: false }

    if (player.speed >= enemy.speed) {
      // プレイヤーの先行
      value = await playerPriorityAction(type, player, enemy)
    } else {
      // 敵キャラクターの先行
      value = await enemyPriorityAction(type, player, enemy)
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
    makeMagicActionMessage,
    getPlayerActionResponse,
    makeHealActionMessage,
    getEnemyActionResponse,
    playerPriorityAction,
    enemyPriorityAction,
    startAction,
  }
}

// make provide/inject key
export type UseBattleType = ReturnType<typeof useBattle>
export const GameBattleStateKey: InjectionKey<UseBattleType> =
  Symbol('gameBattleState')
