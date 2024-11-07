<template>
  <div class="planet-card">
    <div class="planet-card__title">{{ planet.name }}</div>
    <p class="planet-card__detail">
      <strong>Population:</strong> {{ planet.population }}
    </p>
    <p class="planet-card__detail">
      <strong>Rotation Period:</strong> {{ planet.rotation_period }}
    </p>
    <p class="planet-card__detail">
      <strong>Climate:</strong> {{ planet.climate }}
    </p>
    <p class="planet-card__detail">
      <strong>Gravity:</strong> {{ planet.gravity }}
    </p>
    <p class="planet-card__detail">
      <strong>Created:</strong>
      {{ new Date(planet.created).toLocaleDateString() }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import type { Planet } from "../types/types.ts";

const { planet } = defineProps<{
  planet: Planet;
}>();
</script>

<style lang="scss" scoped>
.planet-card {
  background-color: $dark-blue;
  text-align: left;
  transition: transform 0.3s;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 100%;
  max-width: 300px;

  &__title {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    font-weight: 800;
  }

  &__detail {
    font-size: 0.875rem;
    margin: 0 0 0.25rem 0;

    strong {
      color: $text-color-light-blue;
      font-weight: 600;
    }
  }
}

@media (min-width: 600px) {
  .planet-card {
    flex: 1 1 48%;
    max-width: 48%;
  }
}

@media (max-width: 600px) {
  .planet-card {
    flex: 1 1 100%;
    max-width: 100%;
  }
}

@media (min-width: 900px) {
  .planet-card {
    flex: 1 1 32%;
    max-width: 32%;
  }
}
</style>
