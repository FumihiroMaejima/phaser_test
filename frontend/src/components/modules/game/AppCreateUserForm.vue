<template>
  <div class="flex items-center justify-center">
    <div class="w-full max-w-md">
      <div class="create-user-form__form-area shadow-md rounded mt-8 mb-4">
        <h2 class="italic bg-gray-600 text-white rounded-t-lg px-2 py-2">
          Game Start Form
        </h2>
        <div
          class="
            create-user-form__form-content
            shadow-lg
            rounded-b-lg
            px-12
            pt-6
            pb-8
            mb-4
          "
        >
          <grid-cols :mdCols="1" option="py-2 px-2">
            <p>名前(カタカナ)を入力してください。</p>
            <app-input
              v-model="textValue"
              placeholder="プレイヤーネーム"
              :maxLength="10"
            />
            <parts-button
              class="text-class test"
              :text="buttonLabel"
              @click="onClickHandler"
              :disabled="!isClickable"
            />
          </grid-cols>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, SetupContext } from 'vue'
import PartsButton from '@/components/parts/PartsButton.vue'
import AppInput from '@/components/parts/AppInput.vue'
import GridCols from '@/components/parts/GridCols.vue'

type Props = {
  modelValue: string
}

export default defineComponent({
  name: 'AppCreateUserForm',
  components: {
    PartsButton,
    AppInput,
    GridCols,
  },
  props: {
    modelValue: {
      type: String,
      required: true,
      default: '',
    },
  },
  setup(props: Props, ctx: SetupContext) {
    // computed
    const textValue = computed({
      get: (): string => props.modelValue,
      set: (value: string) => {
        ctx.emit('update:modelValue', value)
      },
    })

    const buttonLabel = computed((): string =>
      props.modelValue.trim().length !== 0 ? 'Start Game' : 'Input Name!'
    )

    const isClickable = computed(
      (): boolean => props.modelValue.trim().length !== 0
    )

    // methods
    /**
     * catch click event
     * @param {Event} event
     * @return {void}
     */
    const onClickHandler = (event: Event) => {
      ctx.emit('game-start', event)
    }

    return {
      textValue,
      buttonLabel,
      isClickable,
      onClickHandler,
    }
  },
})
</script>
<style lang="scss" scoped>
.create-user-form {
  &__form-area {
    h2 {
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
    }
  }

  &__form-content {
    background-color: #f4f2db;
    padding: 20px 20px;
    border-bottom: solid 3px #8f8d80;
    // border-radius: 9px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
  }
}
</style>
