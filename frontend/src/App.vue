<template>
  <dev>
    <global-header />
    <router-view />
    <global-footer />
  </dev>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GlobalHeader from '@/components/_global/GlobalHeader.vue'
import GlobalFooter from '@/components/_global/GlobalFooter.vue'

export default defineComponent({
  components: {
    GlobalHeader,
    GlobalFooter,
  },
  setup() {
    return {}
  },
})
</script>
<style lang="scss">
body {
  // background: url('./assets/img/testGrid.svg') repeat;
  background-image: url('./assets/img/mainBackGround.svg');
  background-repeat: no-repeat;
  background-position: center;
  // 画面をスクロールする際、 背景画像をその位置に固定
  background-attachment: fixed;
  // 画像の縦横比を崩すことなく画像ができるだけ大きくなるよう拡大縮小させる
  background-size: cover;
  // 背景画像が読み込まれる前に表示される背景のカラー
  background-color: #002b40;
}
</style>
