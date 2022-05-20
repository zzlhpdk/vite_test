<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()
const count = ref(0)
const value2 = ''
</script>

<template>
  <h1 onclick="onclick">首页</h1>
  <!-- <el-button type="primary">Primary</el-button>
  <el-date-picker v-model="value2" type="date" placeholder="Pick a day" /> -->
</template>

<style scoped lang="scss">
h1 {
  color: $color;
}
</style>
