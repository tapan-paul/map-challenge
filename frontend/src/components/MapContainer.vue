<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import L from 'leaflet';
import type { MapLocation } from '../types';

const store = useStore();
const mapDiv = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!mapDiv.value) return;
  const map = L.map(mapDiv.value).setView([0, 0], 2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

  map.on('click', async (e) => {
    const { lat, lng } = e.latlng;
    
    // Reverse Geocoding (Nominatim API)
    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
    const data = await res.json();
    const address = data.display_name;

    const newLoc: MapLocation = { address, lat, lng };
    await store.dispatch('saveLocation', newLoc);
    
    L.marker([lat, lng]).addTo(map).bindPopup(address).openPopup();
  });
});
</script>

<template>
  <div ref="mapDiv" class="map-box"></div>
</template>

<style scoped>
.map-box {
  height: 500px; /* Force visibility */
  width: 100%;
  background-color: #f0f0f0; /* See the box even before map tiles load */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  z-index: 1; /* Ensures it stays behind popups but above backgrounds */
}
</style>
