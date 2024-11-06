<template>
  <div id="app">
    <Header />
    <PlanetList />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from './components/Header.vue';
import PlanetList from './components/PlanetList.vue';
import Footer from './components/Footer.vue';
</script>

<style lang="scss">
#app {
  background-color: $background-color;
  color: $text-color;
  min-height: 100vh;
  text-align: center;
}
</style>