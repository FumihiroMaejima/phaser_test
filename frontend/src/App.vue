<template>
  <dev>
    <global-header />
    <router-view />
  </dev>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GlobalHeader from '@/components/_global/GlobalHeader.vue'

export default defineComponent({
  components: {
    GlobalHeader
  },
  setup() {
    return {}
  }
})
</script>
