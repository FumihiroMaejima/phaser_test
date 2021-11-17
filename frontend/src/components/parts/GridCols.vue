<template>
  <div
    class="grid rounded"
    :class="`md:grid-cols-${mdCols} sm:grid-cols-${smCols} gap-${gap} ${option}`"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

type Props = {
  mdCols: number
  smCols: number
  gap: number
  option: string
}

export default defineComponent({
  name: 'GridCols',
  props: {
    mdCols: {
      type: Number,
      default: 3,
    },
    smCols: {
      type: Number,
      default: 1,
    },
    gap: {
      type: Number,
      default: 4,
    },
    option: {
      type: String,
      default: '',
    },
  },
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  setup(props: Props) {
    return {}
  },
})
</script>
