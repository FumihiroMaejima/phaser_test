<template>
  <div class="container mx-auto">
    <div class="bg-gray-500 my-1 sm:mx-1">
      test
      <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    </div>
    <div class="my-2">
      <button class="border-2 rounded border-purple-500 hover:border-gray-500">
        Button
      </button>
    </div>
    <div class="grid rounded md:grid-cols-3 sm:grid-cols-1 gap-4">
      <div class="bg-gray-500 rounded">1</div>
      <div class="bg-gray-500 rounded">2</div>
      <div class="bg-gray-500 rounded">3</div>
      <div class="bg-gray-500 rounded">4</div>
      <div class="bg-gray-500 rounded">5</div>
      <div class="bg-gray-500 rounded">6</div>
      <div class="bg-gray-500 rounded">7</div>
      <div class="bg-gray-500 rounded">8</div>
      <div class="bg-gray-500 rounded">9</div>
    </div>

    <h1 class="italic my-2">testゲーム</h1>

    <div class="grid rounded md:grid-cols-3 sm:grid-cols-1 gap-4">
      <div class="flex">
        <div class="bg-gray-500 rounded">1</div>
        <div class="bg-gray-500 rounded">2</div>
        <div class="bg-gray-500 rounded">3</div>
      </div>

      <div class="flex justify-center">
        <div class="bg-gray-500 rounded">1</div>
        <div class="bg-gray-500 rounded">2</div>
        <div class="bg-gray-500 rounded">3</div>
      </div>

      <div class="flex justify-end">
        <div class="bg-gray-500 rounded">1</div>
        <div class="bg-gray-500 rounded">2</div>
        <div class="bg-gray-500 rounded">3</div>
      </div>
      <!-- <div class="bg-gray-500 rounded">1</div> -->
      <div class="bg-gray-500 rounded">2</div>
      <div class="bg-green-500 rounded">3</div>
      <div class="bg-yellow-500 rounded">4</div>
      <div class="bg-gray-500 rounded">5</div>
      <div class="bg-pink-500 rounded">6</div>
      <div class="bg-gray-500 rounded">7</div>
      <div class="bg-blue-500 rounded">8</div>
      <div class="bg-gray-500 rounded">9</div>
    </div>

    <div class="grid grid-flow-col rounded bg-gray-200 my-1 mx-1">
      <button
        class="bg-red-500 hover:bg-red-600 border-yellow-900 text-white text-sm py-2 px-4 rounded"
      >
        testボタン
      </button>
    </div>

    <div class="grid rounded md:grid-cols-3 sm:grid-cols-1 gap-4">
      <div
        class="bg-clip-border p-4 border-4 border-dashed border-purple-800 bg-purple-500"
      ></div>
      <div
        class="bg-clip-padding p-4 border-4 border-dashed border-purple-800 bg-purple-500"
      ></div>
      <div
        class="bg-clip-content p-4 border-4 border-dashed border-purple-800 bg-purple-500"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    // HelloWorld
  },
  setup() {
    return {}
  }
})
</script>
