<template>
  <h1 class="parts-main-header"><slot /></h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PartsMainHeader',
  props: {},
  setup() {
    return {}
  },
})
</script>
<style lang="scss" scoped>
.parts-main-header {
  position: relative;
  display: inline-block;
  padding: 0.5rem 1rem 0.5rem 2rem;
  border-radius: 100vh 0 0 100vh;
  background: #601f1c;
  color: #f4f2db;

  &:before {
    position: absolute;
    top: calc(50% - 7px);
    left: 10px;
    width: 14px;
    height: 14px;
    content: '';
    border-radius: 50%;
    background: #f4f2db;
  }
}
</style>
