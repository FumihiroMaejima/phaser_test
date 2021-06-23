<template>
  <div class="parts-message-area my-2">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PartsMessageArea',
  props: {},
  setup() {
    return {}
  },
})
</script>
<!--
<style lang="scss" scoped>
.parts-message-area {
}
</style>
-->
