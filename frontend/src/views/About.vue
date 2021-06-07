<template>
  <div class="container mx-auto">
    <h1 class="italic my-2">About</h1>
    <div
      class="
        about__content-area
        grid
        rounded
        md:grid-cols-1
        sm:grid-cols-1
        gap-4
      "
    >
      <label-header text="このWebサイトについて" color="blue" />
      <div
        class="md:px-4 grid md:grid-cols-1s sm:grid-cols-1 gap-4"
        v-html="aboutMessage.main"
      ></div>

      <label-header text="このサイトを作った人" color="blue" />
      <div
        class="md:px-4 grid md:grid-cols-1 sm:grid-cols-1 gap-4"
        v-html="aboutMessage.author"
      ></div>

      <label-header text="お問合せについて" color="blue" />
      <div
        class="md:px-4 grid md:grid-cols-1 sm:grid-cols-1 gap-4"
        v-html="aboutMessage.contact"
      ></div>
    </div>

    <!-- <div
      class="my-2 py-2 about__content-area grid rounded grid-flow-col md:grid-rows-1 sm:grid-rows-1 gap-4"
    >
      <div class="about__label-header">
        <p>このページについて</p>
      </div>
      <h2 class="about__label-header">
        このページについてh2
      </h2>
      <label-header text="このページについて" color="blue"/>
      <div
        class="my-2 py-2 about__content-area grid rounded grid-flow-col md:grid-rows-1 sm:grid-rows-1 gap-4"
      >
        <label-header text="このページについて" color="blue"/>
      </div>

      <div
        class="
          max-w-md
          mx-auto
          bg-white
          rounded-md
          shadow-md
          overflow-hidden
          md:max-w-2xl
        "
      >
        <div class="md:flex">
          <div class="md:flex-shrink-0">
          </div>
          <div class="p-8">
            <div
              class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
            >
              Card Header
            </div>
            <p class="mt-2 text-gray-500">This is Card Text.This is Card Text.</p>
          </div>
        </div>
      </div>
    </div> -->
    <app-button> test </app-button>
    <grid-cols>
      <app-button> test </app-button>
    </grid-cols>

    <div class="mt-10 grid rounded md:grid-cols-3 sm:grid-cols-1 gap-4"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import AppButton from '@/components/parts/AppButton.vue'
import GridCols from '@/components/parts/GridCols.vue'
import LabelHeader from '@/components/parts/LabelHeader.vue'

import { IAppConfig, AboutMessageType } from '@/types'
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const config: IAppConfig = require('@/config/data')

export default defineComponent({
  name: 'About',
  components: {
    AppButton,
    GridCols,
    LabelHeader,
  },
  setup() {
    // computed
    const aboutMessage = computed((): AboutMessageType => config.aboutMessage)

    // methods
    /**
     * catch app-input event
     * @return {void}
     */
    const catchAppInputEvent = (event: any) => {
      console.log('catchAppInputEvent: ' + JSON.stringify(event, null, 2))
    }
    return {
      aboutMessage,
      catchAppInputEvent,
    }
  },
})
</script>
<style lang="scss" scoped>
.about {
  &__content-area {
    background-color: #f4f2db;
    padding: 0.5em 1em;
    margin: 10px 0;
    border-bottom: solid 3px #8f8d80;
    border-radius: 9px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
  }

  &__label-header {
    font-size: 15px;
    line-height: 27px;
    position: relative;
    text-indent: 20px;
    &::before {
      content: '';
      background-color: #1565c0;
      border-radius: 2px;
      display: block;
      height: 27px;
      position: absolute;
      width: 8px;
    }
  }
}
</style>
