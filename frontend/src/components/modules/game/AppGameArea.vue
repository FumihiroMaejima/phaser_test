<template>
  <div
    class="
      app-game-area__content-area
      grid
      rounded
      md:grid-cols-1
      sm:grid-cols-1
      gap-4
    "
  >
    <div class="bg-gray-900 rounded">
      <div class="bg-gray-600 rounded my-2 mx-2">
        <div class="bg-gray-600 rounded app-game-area__screen-area py-2">
          <div class="grid rounded md:grid-cols-4 sm:grid-cols-1 gap-1">
            <div class="app-game-area__status-area">
              <p>Name:</p>
              <p>HP:</p>
            </div>
          </div>
          <div class="app-game-area__status-area">
            <p>Name:</p>
            <p>HP:</p>
          </div>
          <img
            class="app-game-area__monster-icon"
            src="../../../assets/img/monsterBackGround.svg"
            alt="monster icon"
          />
        </div>
      </div>
    </div>

    <div class="app-game-area__message-area">
      <p>Game Message</p>
      <div class="grid rounded md:grid-cols-12 sm:grid-cols-1 gap-1">
        <button class="app-game-area__action-button">test</button>
        <button class="app-game-area__action-button">test</button>
        <button class="app-game-area__action-button">test</button>
        <button class="app-game-area__action-button">test</button>
      </div>
    </div>
    <!-- <div class="grid rounded md:grid-cols-12 sm:grid-cols-1 gap-1">
      <button class="app-game-area__action-button">test</button>
      <button class="app-game-area__action-button">test</button>
      <button class="app-game-area__action-button">test</button>
      <button class="app-game-area__action-button">test</button>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import { IAppConfig, AboutMessageType } from '@/types'
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const config: IAppConfig = require('@/config/data')

export default defineComponent({
  name: 'AppGameArea',
  components: {},
  setup() {
    // computed
    const aboutMessage = computed((): AboutMessageType => config.aboutMessage)

    // methods
    /**
     * catch app-input event
     * @return {void}
     */
    const catchAppInputEvent = (event: any) => {
      console.log('catchAppInputEvent: ' + JSON.stringify(event, null, 2))
    }
    return {
      aboutMessage,
      catchAppInputEvent,
    }
  },
})
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/mixins.scss';

.app-game-area {
  &__content-area {
    background-color: #f4f2db;
    padding: 20px 20px;
    margin: 10px 0;
    border-bottom: solid 3px #8f8d80;
    border-radius: 9px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
  }

  &__screen-area {
    // 他の画像との配置関係の設定
    position: relative;
    height: 300px;
    // 背景設定
    background-image: url('../../../assets/img/gameBackGround.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    .app-game-area__status-area {
      margin: 0 8px;
      padding: 8px 8px;
      color: #f4f2db;
      background-color: #601f1c;
      border: 2px dashed #f4f2db;
      border-radius: 5px;
      box-shadow: 0 0 0 4px #601f1c;
    }

    .app-game-area__monster-icon {
      position: absolute;
      top: calc(50% - 150px);
      left: calc(50% - 150px);
    }
  }

  &__message-area {
    margin: 0 8px;
    padding: 8px 8px;
    color: #f4f2db;
    background-color: #601f1c;
    border: 2px dashed #f4f2db;
    border-radius: 5px;
    box-shadow: 0 0 0 4px #601f1c;
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
