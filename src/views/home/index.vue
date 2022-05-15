<script setup lang="ts">
import { ref } from 'vue'
import user from '@/api/user'

defineProps<{ msg: string }>()
const count = ref(0)
</script>

<template>
  <h1 onclick="onclick">首页</h1>

  <img src="@/assets/logo.png" alt="" />
</template>

<style scoped lang="scss">
h1 {
  color: $color;
}
</style>
