<template>
  <div class="container mx-auto">
    <h1 class="italic my-2">login</h1>
    <grid-cols mdCols="1" option="bg-blue-100 py-2 md:px-20 sm:px-2">
      <grid-cols mdCols="1" option="bg-purple-100 py-2 px-2">
        <h1 class="italic my-2 bg-gray-500 text-white rounded px-2 py-2">Login フォーム</h1>
        <app-input
          placeholder="test@example.com"
          @app-input="catchAppInputEvent"
        />
        <app-input
          placeholder="password"
          type="password"
          @app-input="catchAppInputEvent"
        />
        <app-button text="Login" />

        <div
          class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
        >
          <h1 class="italic bg-gray-500 text-white rounded px-2 py-2">Login フォーム</h1>
          <grid-cols mdCols="1" option="bg-green-100 py-2 px-2">
            <app-input
              placeholder="test@example.com"
              @app-input="catchAppInputEvent"
            />
            <app-input
              placeholder="password"
              type="password"
              @app-input="catchAppInputEvent"
            />
            <app-button text="Login" />
          </grid-cols>

          <div class="md:flex">
            <div class="p-8">
              <div
                class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
              >
                Card Header
              </div>
              <a
                href="#"
                class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >Text Header</a
              >
              <p class="mt-2 text-gray-500">
                This is Card Text.This is Card Text.
              </p>
            </div>
          </div>
        </div>
      </grid-cols>
    </grid-cols>

    <div class="mt-10 grid rounded md:grid-cols-3 sm:grid-cols-1 gap-4"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppButton from '@/components/parts/AppButton.vue'
import AppInput from '@/components/parts/AppInput.vue'
import Card from '@/components/parts/Card.vue'
import GridCols from '@/components/parts/GridCols.vue'
import GridRows from '@/components/parts/GridRows.vue'

export default defineComponent({
  name: 'Login',
  components: {
    AppButton,
    AppInput,
    GridCols
  },
  setup() {
    // methods
    /**
     * catch app-input event
     * @return {void}
     */
    const catchAppInputEvent = (event: any) => {
      console.log('catchAppInputEvent: ' + JSON.stringify(event, null, 2))
    }
    return {
      catchAppInputEvent
    }
  }
})
</script>
