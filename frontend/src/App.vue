<template>
  <div class="main-layout">
    <div class="map-container">
      <MapContainer />
    </div>
    <div class="history-container">
      <HistoryList />
    </div>
  </div>
</template>

<script setup lang="ts">
import MapContainer from './components/MapContainer.vue';
import HistoryList from './components/HistoryList.vue';
</script>

<style>
.main-layout {
  display: grid;
  grid-template-columns: 1fr 350px; /* Map takes most space, History takes 350px */
  gap: 20px;
  padding: 20px;
  height: 90vh;
}

@media (max-width: 768px) {
  .main-layout {
    grid-template-columns: 1fr; /* Stack them on mobile */
  }
}
</style>
