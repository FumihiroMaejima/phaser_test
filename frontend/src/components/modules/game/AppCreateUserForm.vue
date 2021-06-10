<template>
  <div class="flex items-center justify-center">
    <div class="w-full max-w-md">
      <div class="create-user-form__form-area shadow-md rounded mt-8 mb-4">
        <h2 class="italic bg-gray-600 text-white rounded-t-lg px-2 py-2">
          Game Start Form
        </h2>
        <div
          class="
            create-user-form__form-content
            shadow-lg
            rounded-b-lg
            px-12
            pt-6
            pb-8
            mb-4
          "
        >
          <grid-cols :mdCols="1" option="py-2 px-2">
            <p>名前(カタカナ)を入力してください。</p>
            <app-input
              placeholder="test@example.com"
              @app-input="catchAppInputEvent"
            />
            <app-button text="Start Game" />
          </grid-cols>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import AppButton from '@/components/parts/AppButton.vue'
import AppInput from '@/components/parts/AppInput.vue'
import GridCols from '@/components/parts/GridCols.vue'

import { IAppConfig, AboutMessageType } from '@/types'
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const config: IAppConfig = require('@/config/data')

export default defineComponent({
  name: 'AppCreateUserForm',
  components: {
    AppButton,
    AppInput,
    GridCols,
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
.create-user-form {
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
