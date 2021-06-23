<template>
  <div class="parts-message-board">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PartsMessageBoard',
  props: {},
  setup() {
    return {}
  },
})
</script>
<style lang="scss" scoped>
.parts-message-board {
  margin: 0 8px;
  padding: 8px 8px;
  color: #f4f2db;
  background-color: #601f1c;
  border: 2px dashed #f4f2db;
  border-radius: 5px;
  box-shadow: 0 0 0 4px #601f1c;
}
</style>
