<template>
  <div class="pagination">
    <button
      class="pagination__button"
      @click="$emit('prev-page')"
      :disabled="!hasPrev"
    >
      Prev
    </button>
    <button
      class="pagination__button"
      @click="$emit('next-page')"
      :disabled="!hasNext"
    >
      Next
    </button>
  </div>
</template>

<script lang="ts" setup>
const { hasPrev, hasNext } = defineProps<{
  hasPrev: boolean;
  hasNext: boolean;
}>();
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 20px 0 40px 0;

  &__button {
    background-color: $light-blue;
    color: $text-color;
    font-size: 1rem;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid $accent-blue;
    transition: background-color 0.3s;

    &:hover:not(:disabled) {
      background-color: $accent-blue;
    }

    &:disabled {
      background-color: $background-color;
      cursor: not-allowed;
    }
  }

  @media (max-width: 600px) {
    margin: 20px 0 0 0;
  }
}
</style>
