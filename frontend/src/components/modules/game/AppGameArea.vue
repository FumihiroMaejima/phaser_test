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
    <!-- <label-header text="このWebサイトについて" color="blue" />
    <div
      class="md:px-4 grid md:grid-cols-1s sm:grid-cols-1 gap-2"
      v-html="aboutMessage.main"
    ></div>

    <label-header text="このサイトを作った人" color="blue" />
    <div
      class="md:px-4 grid md:grid-cols-1 sm:grid-cols-1 gap-2"
      v-html="aboutMessage.author"
    ></div>

    <label-header text="お問合せについて" color="blue" />
    <div
      class="md:px-4 grid md:grid-cols-1 sm:grid-cols-1 gap-2"
      v-html="aboutMessage.contact"
    ></div> -->

    <div class="bg-gray-900 rounded">test</div>

    <div class="grid rounded md:grid-cols-12 sm:grid-cols-1 gap-1">
      <button class="app-game-area__action-button">test</button>
      <button class="app-game-area__action-button">test</button>
      <button class="app-game-area__action-button">test</button>
      <!-- <div class="app-game-area__action-button-wrapper"><button class="app-game-area__action-button">test</button></div>
      <div class="app-game-area__action-button-wrapper"><button class="app-game-area__action-button">test</button></div> -->
      <!-- <button class="app-game-area__action-button">test</button>
      <button class="app-game-area__action-button">test</button> -->
    </div>

    <!-- <div class="space-x-4 ...">
      <div class="inline-block bg-gray-500">1</div>
      <div class="inline-block bg-gray-500">2</div>
      <div class="inline-block bg-gray-500">3</div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import LabelHeader from '@/components/parts/LabelHeader.vue'

// import { $btn-border-radius } '@/assets/scss/_variables.scss'
// import * from '@/assets/scss/_variables.scss'
// import '@/assets/scss/_variables.scss'

import { IAppConfig, AboutMessageType } from '@/types'
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const config: IAppConfig = require('@/config/data')

export default defineComponent({
  name: 'AppGameArea',
  components: {
    // LabelHeader,
  },
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
// @use '../../../assets/scss/_variables.scss';

.app-game-area {
  &__content-area {
    background-color: #f4f2db;
    padding: 20px 20px;
    margin: 10px 0;
    border-bottom: solid 3px #8f8d80;
    border-radius: 9px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
  }

  &__action-button {
    width: 100%;
    padding: 25% 0 25% 0;
    border-radius: 0.25rem;
    background-color: rgba(107, 114, 128, 0.5);

    border-bottom: solid 3px #8f8d80;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);

    &:hover {
      background-color: rgba(107, 114, 128, 1);
    }

    &:active {
      background-color: rgba(107, 114, 128, 0.2);
      border-bottom: initial;
    }
  }
}
</style>
