<template>
  <div class="planet-list">
    <SearchInput :initialSearch="search" @update:search="handleSearch" />
    <SortOptions @update:sort="sortBy" />

    <div class="planet-list__content">
      <div v-if="!errorMessage">
        <Loading v-if="isLoading" />
        <div class="planet-list__cards">
          <Planet
            v-for="planet in sortedPlanets"
            :key="planet.url"
            :planet="planet"
          />
        </div>
      </div>
      <ErrorDisplay v-else :message="errorMessage" />
    </div>

    <Pagination
      v-if="!isLoading && !errorMessage"
      :hasPrev="!!prev"
      :hasNext="!!next"
      @prev-page="prevPage"
      @next-page="nextPage"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

import SearchInput from "./SearchInput.vue";
import SortOptions from "./SortOptions.vue";
import ErrorDisplay from "./ErrorDisplay.vue";
import Planet from "./Planet.vue";
import Pagination from "./Pagination.vue";
import Loading from "./Loading.vue";

import { useFetchPlanets } from "../hooks/useFetchPlanets";

const search = ref("");
const currentPage = ref(1);
const sortKey = ref<string>("");
const sortOrder = ref<SortOrder>(SortOrder.Ascending);

import type { PlanetApi } from "../types/types";
import { SortOrder } from "../types/types";

const { planets, next, prev, errorMessage, fetchPlanets } = useFetchPlanets();

const handleSearch = (newSearch: string) => {
  search.value = newSearch;
  currentPage.value = 1;
  fetchPlanets(search.value, currentPage.value);
};

const sortBy = (key: keyof PlanetApi) => {
  if (sortKey.value === key) {
    sortOrder.value =
      sortOrder.value === SortOrder.Ascending
        ? SortOrder.Descending
        : SortOrder.Ascending;
  } else {
    sortKey.value = key;
    sortOrder.value = SortOrder.Ascending;
  }
};

const sortedPlanets = computed(() => {
  return planets.value.slice().sort((a, b) => {
    const key = sortKey.value as keyof PlanetApi;
    if (a[key] < b[key])
      return sortOrder.value === SortOrder.Ascending ? -1 : 1;
    if (a[key] > b[key])
      return sortOrder.value === SortOrder.Ascending ? 1 : -1;
    return 0;
  });
});

const isLoading = computed(() => {
  return sortedPlanets.value.length === 0;
});

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
  }

  &__cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 16px;
  }
}
</style>
