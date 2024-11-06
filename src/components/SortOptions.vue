<template>
  <div class="sort-options">
    <span class="sort-options__title">Sort by:</span>
    <button
      v-for="{ key, label } in fields"
      :key="key"
      @click="$emit('update:sort', key)"
      class="sort-options__button"
    >
      {{ label }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { Field } from "../types/types";

const fields: Field[] = [
  { key: "name", label: "Name" },
  { key: "population", label: "Population" },
  { key: "rotation_period", label: "Rotation Period" },
  { key: "climate", label: "Climate" },
  { key: "gravity", label: "Gravity" },
  { key: "created", label: "Created" },
];
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
