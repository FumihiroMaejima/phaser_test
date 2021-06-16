<template>
  <div class="container mx-auto">
    <h1 class="italic my-2">Game</h1>
    <app-create-user-form />

    <app-game-area />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, provide } from 'vue'
import AppCreateUserForm from '@/components/modules/game/AppCreateUserForm.vue'
import AppGameArea from '@/components/modules/game/AppGameArea.vue'
import {
  usePlayer,
  usePlayerType,
  GamePlayerStateKey,
} from '@/hooks/game/usePlayer'
import { IAppConfig, AboutMessageType } from '@/types'
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const config: IAppConfig = require('@/config/data')

export default defineComponent({
  name: 'Game',
  components: {
    AppCreateUserForm,
    AppGameArea,
  },
  setup() {
    // data
    const playerService = usePlayer()

    // provide
    provide(GamePlayerStateKey, playerService)

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
.game {
  &__content-area {
    background-color: #f4f2db;
    padding: 20px 20px;
    margin: 10px 0;
    border-bottom: solid 3px #8f8d80;
    border-radius: 9px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
  }

  &__form-area {
    h2 {
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
    }
  }

  &__form-content {
    background-color: #f4f2db;
    padding: 20px 20px;
    border-bottom: solid 3px #8f8d80;
    // border-radius: 9px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
  }
}
</style>
