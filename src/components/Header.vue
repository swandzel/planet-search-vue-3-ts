<template>
  <header class="header">
    Planet Search <img :src="Logo" alt="Planet Search Logo" />
  </header>
</template>

<script lang="ts" setup>
import Logo from "../assets/svg/logo.svg";
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Tiny5&display=swap");

.header {
  background-color: $dark-blue;
  font-family: "Tiny5", sans-serif;
  font-size: 3rem;
  line-height: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 20px;
}
</style>
