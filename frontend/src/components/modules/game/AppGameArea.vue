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
      <div class="grid rounded md:grid-cols-12 sm:grid-cols-1 gap-1">
        <button class="app-game-area__action-button">test</button>
        <button class="app-game-area__action-button">test</button>
        <button class="app-game-area__action-button">test</button>
        <button class="app-game-area__action-button">test</button>
      </div>
    </parts-message-area>
    <!-- <div class="grid rounded md:grid-cols-12 sm:grid-cols-1 gap-1">
      <button class="app-game-area__action-button">test</button>
      <button class="app-game-area__action-button">test</button>
      <button class="app-game-area__action-button">test</button>
      <button class="app-game-area__action-button">test</button>
    </div> -->
  </parts-contents-board>
</template>

<script lang="ts">
import { defineComponent, computed, inject } from 'vue'
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
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/mixins.scss';

.app-game-area {
  &__screen-area {
    // 他の画像との配置関係の設定
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

  &__action-button {
    width: 100%;
    border-radius: 0.25rem;
    background-color: rgba(107, 114, 128, 0.5);
    border-bottom: solid 3px #8f8d80;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);

    &:hover {
      background-color: rgba(107, 114, 128, 1);
    }

    @include min-screen($tailwind-breakpoint-tablet) {
      padding: 25% 0 25% 0;

      &:active {
        background-color: rgba(107, 114, 128, 0.2);
        border-bottom: initial;
        box-shadow: initial;
      }
    }

    @include max-screen(var($tailwind-breakpoint-tablet - 1)) {
      padding: 5% 0 5% 0;

      &:active {
        background-color: rgba(107, 114, 128, 0.2);
        border-bottom: initial;
        box-shadow: initial;
      }
    }
  }
}
</style>
