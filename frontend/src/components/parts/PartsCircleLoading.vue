<template>
  <div class="parts-circle-loading" v-show="open">
    <div class="parts-circle-loading__content">
      <div class="parts-circle-loading__spinner"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

type Props = {
  open: boolean
}

export default defineComponent({
  name: 'PartsCircleLoading',
  components: {},
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {}
  },
})
</script>
<style lang="scss" scoped>
.parts-circle-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.4);
  pointer-events: auto;
  transition: 0.3s linear;

  &__content {
    position: fixed;
    top: 45%;
    left: 45%;
  }

  &__spinner {
    cursor: progress;

    &::before {
      content: '';
      position: absolute;
      width: 5em;
      height: 5em;
      border-radius: 50%;
      border: 0.25em solid #ccc;
      border-top-color: #333;
      animation: spinner 1s linear infinite;
    }
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
