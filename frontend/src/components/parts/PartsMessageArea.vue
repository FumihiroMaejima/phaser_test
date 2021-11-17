<template>
  <div class="parts-message-area my-2" v-html="messageText"></div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

type Props = {
  text: string
}

export default defineComponent({
  name: 'PartsMessageArea',
  props: {
    text: {
      type: String,
      required: false,
      default: '',
    },
  },
  setup(props: Props) {
    // computed
    const messageText = computed((): string => props.text)
    return {
      messageText,
    }
  },
})
</script>
<!--
<style lang="scss" scoped>
.parts-message-area {
}
</style>
-->
