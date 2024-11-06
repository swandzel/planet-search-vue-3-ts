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
  font-size: 1.5rem;
  width: 100%;
  max-width: 800px;
  border: 1px solid $accent-blue;
  border-radius: 4px;
  transition: border-color 0.3s;
  padding: 8px;
  margin-bottom: 20px;

  &::placeholder {
    color: rgba(232, 234, 246, 0.6);
  }

  &:focus {
    border-color: $text-color;
  }
}
</style>
