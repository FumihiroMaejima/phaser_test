<template>
  <button
    class="
      rounded-lg
      shadow-md
      py-2
      px-4
      font-semibold
      text-white
      border-green-600
    "
    :class="{
      'bg-green-500 hover:bg-green-700 border-green-600 active:bg-green-300':
        !disabled,
      'bg-green-800 parts-button__disabled': disabled,
    }"
    :disabled="disabled"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue'

type Props = {
  text: string
  disabled: boolean
  color: string
  textColor: string
  font: string
  option: string
}

export default defineComponent({
  name: 'PartsButton',
  props: {
    text: {
      type: String,
      default: 'button text',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'green',
    },
    textColor: {
      type: String,
      default: 'text-white',
    },
    font: {
      type: String,
      default: 'font-semibold',
    },
    option: {
      type: String,
      default: '',
    },
  },
  setup(_, ctx: SetupContext) {
    // methods
    /**
     * catch click event
     * buttonタグのみなので。emitしなくても親コンポーネントでclickイベントをcatch出来る
     * @param {Event} event
     * @return {void}
     */
    const onClickHandler = (event: Event) => {
      ctx.emit('click', event)
    }

    return {
      onClickHandler,
    }
  },
})
</script>
<style lang="scss" scoped>
.parts-button {
  &__disabled {
    cursor: not-allowed;
  }
}
</style>
