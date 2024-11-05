<script setup></script>

<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AboutPage',
  setup() {
    const hover = ref(false); // 定義 hover 狀態
    const navItems = ref([
      { text: '首頁', path: '/' },
      { text: '研發紀錄', path: '/research' },
      { text: '認識我們', path: '/about' },
      { text: '聯絡我們', path: '/contact' },
    ]);

    return {
      hover,
      navItems,
    };
  },
});
</script>

<style scoped>
.icon-container {
  position: relative;
  display: inline-block;
}

.image {
  width: 300px; /* 調整圖片大小 */
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5); /* 初始半透明背景 */
  color: white;
  opacity: 0.8;
  transition: background-color 0.3s; /* 背景顏色過渡 */
}

.overlay.hover {
  background-color: rgba(0, 0, 0, 0.8); /* 懸停時加深顏色 */
}

.icon {
  margin-right: 8px; /* 圖標與文字之間的距離 */
  font-size: 24px; /* 調整圖標大小 */
}
</style>