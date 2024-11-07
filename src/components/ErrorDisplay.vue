<template>
  <div class="error-display">
    {{ message }}
  </div>
</template>

<script lang="ts" setup>
const { message } = defineProps<{ message: string }>();
</script>

<style scoped lang="scss">
.error-display {
  color: $error-color;
  text-align: center;
  font-size: 1.2rem;
  padding: 15px;
  margin-bottom: 20px;
}
</style>
