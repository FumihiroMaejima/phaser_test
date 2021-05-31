<template>
  <footer class="w-full block items-center flex w-auto justify-end px-2">
    <address class="text-sm text-gray-300">
      Copyright(C){{ currentYear }} calicocat.tokyo,Allright Reserved.
    </address>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GlobalFooter',
  setup() {
    const currentYear = process.env.VUE_APP_CURRENT_YEAR || 2021

    return {
      currentYear,
    }
  },
})
</script>
<style lang="scss" scoped>
.global-footer {
  background-color: rgba(75, 85, 99, 0.1);
}
</style>
