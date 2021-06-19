<template>
  <div class="container mx-auto">
    <h1 class="italic my-2">About</h1>
    <parts-contents-board
      class="grid rounded md:grid-cols-1 sm:grid-cols-1 gap-4"
    >
      <parts-label-header text="このWebサイトについて" color="blue" />
      <div
        class="md:px-4 grid md:grid-cols-1s sm:grid-cols-1 gap-2"
        v-html="aboutMessage.main"
      ></div>

      <parts-label-header text="このサイトを作った人" color="blue" />
      <div
        class="md:px-4 grid md:grid-cols-1 sm:grid-cols-1 gap-2"
        v-html="aboutMessage.author"
      ></div>

      <parts-label-header text="お問合せについて" color="blue" />
      <div
        class="md:px-4 grid md:grid-cols-1 sm:grid-cols-1 gap-2"
        v-html="aboutMessage.contact"
      ></div>
    </parts-contents-board>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import PartsContentsBoard from '@/components/parts/PartsContentsBoard.vue'
import PartsLabelHeader from '@/components/parts/PartsLabelHeader.vue'

import { IAppConfig, AboutMessageType } from '@/types'
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const config: IAppConfig = require('@/config/data')

export default defineComponent({
  name: 'About',
  components: {
    PartsContentsBoard,
    PartsLabelHeader,
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
<!-- <style lang="scss" scoped>
.about {}
</style> -->
