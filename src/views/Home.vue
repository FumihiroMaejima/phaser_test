<template>
  <div class="container mx-auto">
    <div class="bg-gray-500 my-1 sm:mx-1">
      test
      <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

import { appGameConfig } from '@/config/game'
import Phaser from 'phaser'

export default defineComponent({
  name: 'Home',
  components: {
    // HelloWorld
  },
  setup() {
    const config = appGameConfig
    // update Type
    config.type = Phaser.AUTO
    const game = new Phaser.Game(config)

    return {
      game
    }
  }
})
</script>
