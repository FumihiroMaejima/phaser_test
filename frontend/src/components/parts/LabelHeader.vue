<template>
  <h2 class="label-header" :class="labelColor">{{ text }}</h2>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'

type ColorType = 'blue' | 'green' | 'red'
type Props = {
  text: string
  color: ColorType
}

export default defineComponent({
  name: 'LabelHeader',
  props: {
    text: {
      type: String,
      default: 'label text',
    },
    color: {
      type: String as PropType<ColorType>,
      default: 'green',
    }
  },
  setup(props: Props) {
    const labelColor = computed((): string => `label-header__${props.color}`)

    return {
      labelColor
    }
  },
})
</script>
<style lang="scss" scoped>
.label-header {
  font-size: 15px;
  line-height: 27px;
  position: relative;
  text-indent: 20px;
  &::before {
    content: '';
    // background-color: #1565c0;
    border-radius: 2px;
    display: block;
    height: 27px;
    position: absolute;
    width: 8px;
  }

  &__blue {
    &::before {
      background-color: #1565c0;
    }

  }

  &__green {
    &::before {
      background-color: #006F5F;
    }

  }

  &__red {
    &::before {
      background-color: #AC291D;
    }

  }
}
</style>

