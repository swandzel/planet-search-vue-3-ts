<template>
  <header class="header">
      Planet Search <img :src="Logo" alt="Planet Search Logo" />
  </header>
</template>

<script lang="ts" setup>
import Logo from '../assets/svg/logo.svg'
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Tiny5&display=swap');

.header {
  font-family: "Tiny5", sans-serif;
  background-color: $dark-blue;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 3rem;
  text-align: center;
  padding: 20px;
}
</style>