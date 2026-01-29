import { createStore } from 'vuex';
import axios from 'axios';

// 1. Define the TypeScript Interface for our Location
export interface MapLocation {
  id?: number;
  address: string;
  lat: number;
  lng: number;
  created_at?: string;
}

// 2. Define the Shape of the State
export interface State {
  locations: MapLocation[];
}

export default createStore<State>({
  state: {
    locations: []
  },
  
  mutations: {
    // Sets the entire history (used on page load)
    SET_LOCATIONS(state, list: MapLocation[]) {
      state.locations = list;
    },
    // Adds a single new click to the top of the list
    ADD_LOCATION(state, loc: MapLocation) {
      state.locations.unshift(loc);
    }
  },
  
  actions: {
    // GET: Fetch all saved locations from the Node.js backend
    async fetchLocations({ commit }) {
      try {
        const res = await axios.get<MapLocation[]>('http://localhost:3000/api/locations');
        commit('SET_LOCATIONS', res.data);
      } catch (error) {
        console.error("Error fetching location history:", error);
      }
    },

    // POST: Save a new location to the SQLite database
    async saveLocation({ commit }, loc: MapLocation) {
      try {
        const res = await axios.post<{ id: number }>('http://localhost:3000/api/locations', loc);
        // Add to local state so the UI updates instantly
        commit('ADD_LOCATION', { ...loc, id: res.data.id });
      } catch (error) {
        console.error("Error saving location:", error);
      }
    }
  }
});
