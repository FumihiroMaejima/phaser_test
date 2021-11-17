<template>
  <input
    class="
      rounded
      shadow-inner
      focus:outline-none
      focus:ring-2
      focus:border-transparent
      py-1
      px-2
    "
    :class="`focus:ring-${color}-600 ${font} ${option}`"
    :type="type"
    :placeholder="placeholder"
    :maxlength="maxLength"
    :disabled="disabled"
    v-model="inputValue"
  />
</template>

<script lang="ts">
import { defineComponent, computed, SetupContext } from 'vue'

type Props = {
  modelValue: string | number | boolean | any
  color: string
  type: string
  placeholder: string
  maxLength: number | undefined
  disabled: boolean
  font: string
  option: string
}

export default defineComponent({
  name: 'AppInput',
  props: {
    modelValue: {
      type: [String, Number, Boolean, Object],
      default: '',
    },
    color: {
      type: String,
      default: 'blue',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    maxLength: {
      type: Number,
      required: false,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    font: {
      type: String,
      default: 'font-sans', // font-mono, font-semibold, font-serif, font-sans
    },
    option: {
      type: String,
      default: '',
    },
  },
  setup(props: Props, context: SetupContext) {
    // computed
    const inputValue = computed({
      get: () => props.modelValue,
      set: (val) => {
        context.emit('update:modelValue', val)
      },
    })

    return {
      inputValue,
    }
  },
})
</script>
