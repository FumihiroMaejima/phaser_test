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
