<template>
  <parts-contents-board
    class="grid rounded md:grid-cols-1 sm:grid-cols-1 gap-4"
  >
    <div class="bg-gray-900 rounded">
      <div class="bg-gray-600 rounded my-2 mx-2">
        <div class="bg-gray-600 rounded app-game-area__screen-area py-2">
          <div class="grid rounded md:grid-cols-4 sm:grid-cols-1 gap-1">
            <parts-message-board>
              <p>Name: {{ getPlayer.name }}</p>
              <p>HP: {{ getPlayer.hp }}</p>
            </parts-message-board>
          </div>
          <img
            class="app-game-area__monster-icon"
            src="../../../assets/img/monsterBackGround.svg"
            alt="monster icon"
          />
        </div>
      </div>
    </div>

    <parts-message-board>
      <parts-message-area :text="textMessage" />
    </parts-message-board>
    <app-action-buttons
      @attack-event="attackEventEventHandler"
      @heal-event="healEventEventHandler"
      @escape-event="escapeEventEventHandler"
    />
  </parts-contents-board>
</template>

<script lang="ts">
import { defineComponent, ref, computed, inject } from 'vue'
import AppActionButtons from '@/components/modules/game/AppActionButtons.vue'
import PartsContentsBoard from '@/components/parts/PartsContentsBoard.vue'
import PartsMessageArea from '@/components/parts/PartsMessageArea.vue'
import PartsMessageBoard from '@/components/parts/PartsMessageBoard.vue'
import {
  PlayerType,
  UsePlayerType,
  GamePlayerStateKey,
} from '@/hooks/game/usePlayer'
import {
  useEnemy,
  UseEnemyType,
  GameEnemyStateKey,
} from '@/hooks/game/useEnemy'
import {
  useBattle,
  UseBattleType,
  GameBattleStateKey,
} from '@/hooks/game/useBattle'
import {
  useNavigationMessage,
  UseNavigationMessageType,
  UseNavigationMessageStateType,
  GameNavigationMessageStateKey,
} from '@/hooks/game/useNavigationMessage'
import { IAppConfig } from '@/types'
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const config: IAppConfig = require('@/config/data')

export default defineComponent({
  name: 'AppGameArea',
  components: {
    AppActionButtons,
    PartsContentsBoard,
    PartsMessageArea,
    PartsMessageBoard,
  },
  setup() {
    // data
    const navigationService = useNavigationMessage()
    // const battleService = useBattle()

    // inject
    const battleService = inject(GameBattleStateKey) as UseBattleType
    const playerService = inject(GamePlayerStateKey) as UsePlayerType
    const enemyService = inject(GameEnemyStateKey) as UseEnemyType

    // computed
    const getPlayer = computed((): PlayerType => battleService.getPlayer())
    const textMessage = computed((): string => navigationService.getMessage())

    // methods
    /**
     * attack event handling
     * @return {void}
     */
    const attackEventEventHandler = async (event: any) => {
      const data = await battleService.startBattle()
      navigationService.setMessage(`attack!  ${data.message}`)
    }

    /**
     * heal event handling
     * @return {void}
     */
    const healEventEventHandler = (event: any) => {
      console.log('healEventEventHandler: ' + JSON.stringify(event, null, 2))
      navigationService.setMessage('heal!')
    }

    /**
     * escape event handling
     * @return {void}
     */
    const escapeEventEventHandler = (event: any) => {
      console.log('escapeEventEventHandler: ' + JSON.stringify(event, null, 2))
      navigationService.setMessage('Don`t Escape!')
    }

    return {
      getPlayer,
      textMessage,
      attackEventEventHandler,
      healEventEventHandler,
      escapeEventEventHandler,
    }
  },
})
</script>
<style lang="scss" scoped>
.app-game-area {
  &__screen-area {
    position: relative;
    height: 300px;
    // 背景設定
    background-image: url('../../../assets/img/gameBackGround.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    .app-game-area__monster-icon {
      position: absolute;
      top: calc(50% - 150px);
      left: calc(50% - 150px);
    }
  }
}
</style>
