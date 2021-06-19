<template>
  <button
    class="rounded-lg shadow-md py-2 px-4"
    :class="`bg-${color}-500 hover:bg-${color}-700 border-${color}-600 active:bg-${color}-300 ${font} ${textColor} ${option}`"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue'

type Props = {
  text: string
  color: string
  textColor: string
  font: string
  option: string
}

export default defineComponent({
  name: 'AppButton',
  props: {
    text: {
      type: String,
      default: 'button text',
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
