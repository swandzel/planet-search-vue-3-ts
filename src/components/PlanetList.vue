<template>
  <div class="planet-list">
    <SearchInput :initialSearch="search" @update:search="handleSearch" />
    <SortOptions @update:sort="sortBy" />

    <div class="planet-list__content">
      <div v-if="!errorMessage">
        <Loading v-if="isLoading" />
        <div class="planet-list__cards">
          <Planet v-for="planet in sortedPlanets" :key="planet.url" :planet="planet" />
        </div>
      </div>
      <ErrorDisplay v-else  :message="errorMessage" />
    </div>

    <Pagination v-if="!isLoading && !errorMessage" :hasPrev="!!prev" :hasNext="!!next" @prev-page="prevPage" @next-page="nextPage" />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

import { useFetchPlanets } from '../hooks/useFetchPlanets';

import SearchInput from './SearchInput.vue';
import SortOptions from './SortOptions.vue';
import ErrorDisplay from './ErrorDisplay.vue';
import Planet from './Planet.vue';
import Pagination from './Pagination.vue';
import Loading from "./Loading.vue";

const search = ref('');
const currentPage = ref(1);
const sortKey = ref<string>('');
const sortOrder = ref<'asc' | 'desc'>('asc');

const { planets, next, prev, errorMessage, fetchPlanets } = useFetchPlanets();

const handleSearch = (newSearch: string) => {
  search.value = newSearch;
  currentPage.value = 1;
  fetchPlanets(search.value, currentPage.value);
};

const sortBy = (key: keyof InstanceType<typeof planets.value[0]>) => {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortKey.value = key;
    sortOrder.value = 'asc';
  }
};

const sortedPlanets = computed(() => {
  return planets.value.slice().sort((a, b) => {
    if (a[sortKey.value] < b[sortKey.value]) return sortOrder.value === 'asc' ? -1 : 1;
    if (a[sortKey.value] > b[sortKey.value]) return sortOrder.value === 'asc' ? 1 : -1;
    return 0;
  });
});

const isLoading = computed(() => {
  return sortedPlanets.value.length === 0
})

const nextPage = () => {
  if (next.value) {
    currentPage.value++;
    fetchPlanets(search.value, currentPage.value);
  }
};

const prevPage = () => {
  if (prev.value) {
    currentPage.value--;
    fetchPlanets(search.value, currentPage.value);
  }
};

fetchPlanets(search.value, currentPage.value);
</script>

<style lang="scss" scoped>
.planet-list {
  background-color: $background-color;
  color: $text-color;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;

  &__content {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  &__cards {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
  }
}
</style>