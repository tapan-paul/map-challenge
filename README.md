# Full-Stack Map History Tracker

A professional coding challenge implementation featuring a responsive map interface, persistent location storage, and a real-time history feed.

## 🚀 Tech Stack
- **Frontend:** Vue 3 (Composition API), TypeScript, Vuex, Leaflet, Axios.
- **Backend:** Node.js, Express (ES Modules), SQLite3.
- **Tools:** Vite, Geocoding via Nominatim API.

## 🛠️ Setup Instructions

### Backend
1. `cd backend`
2. `npm install`
3. `npm run dev` (Runs on http://localhost:3000)

### Frontend
1. `cd frontend`
2. `npm install`
3. `npm run dev` (Runs on http://localhost:5173)

## 🏗️ Architecture Features
- **Separation of Concerns:** Backend uses a Service/Controller pattern.
- **Type Safety:** Shared TypeScript interfaces for location data.
- **Persistence:** SQLite database ensures data survives server restarts.
- **Responsiveness:** Grid-based layout for seamless desktop/mobile use.
