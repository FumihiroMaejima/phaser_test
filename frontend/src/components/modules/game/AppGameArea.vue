<template>
  <parts-contents-board
    class="grid rounded md:grid-cols-1 sm:grid-cols-1 gap-4"
  >
    <div class="bg-gray-900 rounded">
      <div class="bg-gray-600 rounded my-2 mx-2">
        <div class="bg-gray-600 rounded app-game-area__screen-area py-2">
          <div class="grid rounded md:grid-cols-4 sm:grid-cols-1 gap-1">
            <parts-message-area>
              <p>Name: {{ getPlayer.name }}</p>
              <p>HP: {{ getPlayer.hp }}</p>
            </parts-message-area>
          </div>
          <img
            class="app-game-area__monster-icon"
            src="../../../assets/img/monsterBackGround.svg"
            alt="monster icon"
          />
        </div>
      </div>
    </div>

    <parts-message-area>
      <p>Game Message</p>
      <app-action-buttons />
    </parts-message-area>
  </parts-contents-board>
</template>

<script lang="ts">
import { defineComponent, computed, inject } from 'vue'
import AppActionButtons from '@/components/modules/game/AppActionButtons.vue'
import PartsContentsBoard from '@/components/parts/PartsContentsBoard.vue'
import PartsMessageArea from '@/components/parts/PartsMessageArea.vue'
import {
  PlayerType,
  usePlayerType,
  GamePlayerStateKey,
} from '@/hooks/game/usePlayer'
import { IAppConfig } from '@/types'
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const config: IAppConfig = require('@/config/data')

export default defineComponent({
  name: 'AppGameArea',
  components: {
    AppActionButtons,
    PartsContentsBoard,
    PartsMessageArea,
  },
  setup() {
    // data

    // inject
    const playerService = inject(GamePlayerStateKey) as usePlayerType

    // computed
    const getPlayer = computed((): PlayerType => playerService.getPlayer())

    // methods
    /**
     * catch app-input event
     * @return {void}
     */
    const catchAppInputEvent = (event: any) => {
      console.log('catchAppInputEvent: ' + JSON.stringify(event, null, 2))
    }
    return {
      getPlayer,
      catchAppInputEvent,
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
