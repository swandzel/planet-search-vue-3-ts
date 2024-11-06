<template>
  <div class="sort-options">
    <span class="sort-options__title">Sort by:</span>
    <button
        v-for="field in fields"
        :key="field"
        @click="$emit('update:sort', field)"
        class="sort-options__button"
    >
      {{ field }}
    </button>
  </div>
</template>

<script lang="ts" setup>
const fields = ['name', 'population', 'rotation_period', 'climate', 'gravity', 'created']
</script>

<style scoped lang="scss">
.sort-options {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  &__title {
    font-size: 1.5rem;
  }

  &__button {
    background-color: $light-blue;
    color: $text-color;
    font-size: 16px;
    text-align: center;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;

    &:hover {
      background-color: $accent-blue;
    }
  }
}
</style>