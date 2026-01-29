<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

// Grab the locations from our Vuex Store
const locations = computed(() => store.state.locations);

// Fetch data from the Backend when the component loads
onMounted(() => {
  store.dispatch('fetchLocations');
});
</script>

<template>
  <div class="history-panel">
    <h3>Saved Locations</h3>
    <div v-if="locations.length === 0" class="empty-state">
      No locations saved yet. Click the map!
    </div>
    <ul class="location-list">
      <li v-for="loc in locations" :key="loc.id" class="location-item">
        <div class="info">
          <p class="address">{{ loc.address }}</p>
          <code class="coords">{{ loc.lat.toFixed(4) }}, {{ loc.lng.toFixed(4) }}</code>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.history-panel {
  padding: 1rem;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  max-height: 500px;
  overflow-y: auto;
}
.location-list { list-style: none; padding: 0; }
.location-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
}
.address { font-size: 0.9rem; font-weight: 600; margin: 0; color: #333; }
.coords { font-size: 0.75rem; color: #666; }
.empty-state { color: #999; font-style: italic; text-align: center; margin-top: 20px; }
</style>
