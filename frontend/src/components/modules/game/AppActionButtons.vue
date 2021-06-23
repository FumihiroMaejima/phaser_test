<template>
  <div class="grid rounded md:grid-cols-12 sm:grid-cols-1 gap-1">
    <button
      class="app-action-buttons__button app-action-buttons__attack"
      @click="clickAttackButtonHandler"
    >
      Attack
    </button>
    <button
      class="app-action-buttons__button app-action-buttons__heal"
      @click="clickHealButtonHandler"
    >
      Heal
    </button>
    <button
      class="app-action-buttons__button app-action-buttons__escape"
      @click="clickEscapeButtonHandler"
    >
      Escape
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, SetupContext } from 'vue'

export default defineComponent({
  name: 'AppActionButtons',
  components: {},
  setup(_, ctx: SetupContext) {
    // data

    // computed
    // const getPlayer = computed((): string => value)

    // methods

    /**
     * attack event handling
     * @return {void}
     */
    const clickAttackButtonHandler = (event: Event) => {
      console.log('clickAttackButtonHandler: ' + JSON.stringify(event, null, 2))
      ctx.emit('attack-event', event)
    }

    /**
     * heal event handling
     * @return {void}
     */
    const clickHealButtonHandler = (event: Event) => {
      console.log('clickHealButtonHandler: ' + JSON.stringify(event, null, 2))
      ctx.emit('heal-event', event)
    }

    /**
     * escape event handling
     * @return {void}
     */
    const clickEscapeButtonHandler = (event: Event) => {
      console.log('clickEscapeButtonHandler: ' + JSON.stringify(event, null, 2))
      ctx.emit('escape-event', event)
    }
    return {
      clickAttackButtonHandler,
      clickHealButtonHandler,
      clickEscapeButtonHandler,
    }
  },
})
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/mixins.scss';

.app-action-buttons {
  &__button {
    width: 100%;
    border-radius: 0.25rem;
    background-color: rgba(107, 114, 128, 0.5);
    border-bottom: solid 3px #8f8d80;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);

    /* &:hover {
      // background-color: rgba(107, 114, 128, 1);
    } */

    @include min-screen($tailwind-breakpoint-tablet) {
      padding: 25% 0 25% 0;

      &:active {
        // background-color: rgba(107, 114, 128, 0.2);
        border-bottom: initial;
        box-shadow: initial;
      }
    }

    @include max-screen(var($tailwind-breakpoint-tablet - 1)) {
      padding: 5% 0 5% 0;

      &:active {
        // background-color: rgba(107, 114, 128, 0.2);
        border-bottom: initial;
        box-shadow: initial;
      }
    }
  }

  &__attack {
    //background-color: #6CB2D3;
    background-color: rgba(108, 178, 211, 1);
    &:hover {
      background-color: rgba(108, 178, 211, 0.7);
    }

    &:active {
      background-color: rgba(108, 178, 211, 0.5);
    }
  }

  &__heal {
    // background-color: #87C9AB;
    background-color: rgba(135, 201, 171, 1);
    &:hover {
      background-color: rgba(135, 201, 171, 0.7);
    }

    &:active {
      background-color: rgba(135, 201, 171, 0.5);
    }
  }

  &__escape {
    // background-color: #BA5434;
    background-color: rgba(186, 83, 52, 1);
    &:hover {
      background-color: rgba(186, 83, 52, 0.7);
    }

    &:active {
      background-color: rgba(186, 83, 52, 0.5);
    }
  }
}
</style>
