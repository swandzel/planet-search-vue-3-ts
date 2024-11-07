<template>
  <footer class="footer">developed by swandzel in Vue3 & Typescript</footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: $dark-blue;
  position: fixed;
  bottom: 0;
  font-size: 0.875rem;
  text-align: center;
  padding: 10px;
  width: 100%;

  @media (max-width: 600px) {
    position: static;
  }
}
</style>
