<template>
  <input
    class="search-input"
    v-model="searchQuery"
    @input="$emit('update:search', searchQuery)"
    placeholder="Search planets..."
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";

const { initialSearch } = defineProps<{ initialSearch: string }>();
const searchQuery = ref(initialSearch);
</script>

<style scoped lang="scss">
.search-input {
  background-color: $dark-blue;
  color: $text-color;
  font-size: 1.25rem;
  border: 1px solid $accent-blue;
  border-radius: 4px;
  transition: border-color 0.3s;
  width: 100%;
  max-width: 800px;
  padding: 8px;
  margin-bottom: 20px;

  &::placeholder {
    color: $placeholder-color;
  }

  &:focus {
    border-color: $text-color;
  }
}
</style>
