<template>
  <div class="app-result-contents">
    <parts-label-header text="Result" color="blue" />
    <div
      class="
        app-result-contents__result-message
        md:px-4
        grid
        md:grid-cols-1
        sm:grid-cols-1
        gap-2
      "
    >
      victory!
    </div>
    <parts-label-header text="Detail" color="blue" />
    <div
      class="
        app-result-contents__result-message
        md:px-4
        grid
        md:grid-cols-1
        sm:grid-cols-1
        gap-2
      "
    >
      victory!
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent /* , computed */ } from 'vue'
// import PartsContentsBoard from '@/components/parts/PartsContentsBoard.vue'
import PartsLabelHeader from '@/components/parts/PartsLabelHeader.vue'

// import { IAppConfig, AboutMessageType } from '@/types'
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
// const config: IAppConfig = require('@/config/data')

export default defineComponent({
  name: 'AppResultContents',
  components: {
    PartsLabelHeader,
  },
  setup() {
    // computed
    // const aboutMessage = computed((): AboutMessageType => config.aboutMessage)

    // methods
    /**
     * catch app-input event
     * @return {void}
     */
    const catchAppInputEvent = (event: Event) => {
      console.log('catchAppInputEvent: ' + JSON.stringify(event, null, 2))
    }
    return {
      catchAppInputEvent,
    }
  },
})
</script>
<style lang="scss" scoped>
.app-result-contents {
  &__result-message {
    margin: 8px 0 8px 0;
  }
}
</style>
