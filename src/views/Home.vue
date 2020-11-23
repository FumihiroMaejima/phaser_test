<template>
  <div class="container mx-auto">
    <div class="bg-gray-500 my-1 sm:mx-1">
      test
      <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    </div>
    <button
      class="border-2 rounded border-purple-500 hover:border-gray-500 ..."
    >
      Button
    </button>
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
