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
    <h1 class="italic my-2">grid-cols</h1>
    <div class="grid rounded md:grid-cols-3 sm:grid-cols-1 gap-4">
      <div class="bg-gray-500 rounded">grid-cols-3 1</div>
      <div class="bg-gray-500 rounded">grid-cols-3 2</div>
      <div class="bg-gray-500 rounded">grid-cols-3 3</div>
      <div class="bg-gray-500 rounded">grid-cols-3 4</div>
      <div class="bg-gray-500 rounded">grid-cols-3 5</div>
      <div class="bg-gray-500 rounded">grid-cols-3 6</div>
      <div class="bg-gray-500 rounded">grid-cols-3 7</div>
      <div class="bg-gray-500 rounded">grid-cols-3 8</div>
      <div class="bg-gray-500 rounded">grid-cols-3 9</div>
    </div>

    <h1 class="italic my-2">grid-cols flex</h1>

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

    <h1 class="italic my-2">grid-rows</h1>
    <div class="my-2 grid md:grid-rows-3 sm:grid-rows-1 grid-flow-col gap-4">
      <div class="bg-gray-500 rounded">grid-flow-col1</div>
      <div class="bg-gray-500 rounded">grid-flow-col2</div>
      <div class="bg-green-500 rounded">grid-flow-col3</div>
      <div class="bg-yellow-500 rounded">grid-flow-col4</div>
      <div class="bg-gray-500 rounded">grid-flow-col5</div>
      <div class="bg-pink-500 rounded">grid-flow-col6</div>
      <div class="bg-gray-500 rounded">grid-flow-col7</div>
      <div class="bg-blue-500 rounded">grid-flow-col8</div>
      <div class="bg-gray-500 rounded">grid-flow-col9</div>
    </div>

    <h1 class="italic my-2">grid-flow-col button</h1>
    <div class="grid grid-flow-col rounded bg-gray-200 my-1 mx-1">
      <button
        class="bg-red-500 hover:bg-red-600 border-yellow-900 text-white text-sm py-2 px-4 rounded"
      >
        testボタン
      </button>
    </div>

    <h1 class="italic my-2">grid-cols bg-clip-border</h1>
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

    <h1 class="italic my-2">buttons</h1>
    <div class="grid rounded md:grid-cols-3 sm:grid-cols-1 gap-4">
      <button class="rounded bg-purple-400 ring-4 ring-indigo-300">
        Button
      </button>
      <button class="rounded bg-purple-300 ring-yellow-500 ring-opacity-50">
        Button
      </button>
      <button
        class="rounded transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 text-white"
      >
        Hover me
      </button>
    </div>

    <h1 class="italic my-2">input</h1>
    <div
      class="grid rounded md:grid-cols-3 sm:grid-cols-1 gap-4 bg-purple-100 py-2 px-2"
    >
      <form>
        <input
          class="rounded border border-transparent shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        />
        <button
          class="ml-2 rounded bg-purple-600 hover:bg-purple-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 text-white"
        >
          Sign up
        </button>
      </form>
    </div>

    <div class="mt-10 grid rounded md:grid-cols-3 sm:grid-cols-1 gap-4"></div>
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
