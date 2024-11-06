import { ref, Ref } from 'vue';
import axios from 'axios';
import { PlanetApi } from '../types/planetTypes';

interface UseFetchPlanets {
  planets: Ref<PlanetApi[]>;
  next: Ref<string | null>;
  prev: Ref<string | null>;
  errorMessage: Ref<string>;
  fetchPlanets: (search: string, page: number) => void;
}

export function useFetchPlanets(): UseFetchPlanets {
  const planets = ref<PlanetApi[]>([]);
  const next = ref<string | null>(null);
  const prev = ref<string | null>(null);
  const errorMessage = ref<string>('');

  let fetchTimeout: ReturnType<typeof setTimeout> | null = null;

  const fetchPlanets = (search: string, page: number) => {
    if (fetchTimeout) {
      clearTimeout(fetchTimeout);
    }

    fetchTimeout = setTimeout(async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/planets/?search=${search}&page=${page}`);
        planets.value = response.data.results;
        next.value = response.data.next;
        prev.value = response.data.previous;

        if (planets.value.length === 0) {
          errorMessage.value = 'No planets found. Please try a different search.';
        } else {
          errorMessage.value = '';
        }
      } catch (error) {
        planets.value = [];
        next.value = null;
        prev.value = null;
        errorMessage.value = 'There was an error fetching the data. Please try again later.';
      }
    }, 300);
  };

  return {
    planets,
    next,
    prev,
    errorMessage,
    fetchPlanets,
  };
}