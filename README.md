# Full-Stack Map History Tracker

A professional coding challenge implementation featuring a responsive map interface, persistent location storage, and a real-time history feed.

## 🚀 Tech Stack
- **Frontend:** Vue 3 (Composition API), TypeScript, Vuex, Leaflet, Axios.
- **Backend:** Node.js, Express (ES Modules), SQLite3.
- **Tools:** Vite, Geocoding via Nominatim API.

---

## 🛠️ Setup Instructions
Follow these steps to get the project running on your local machine.

### 1. Clone the Repository
```bash
git clone https://github.com/tapan-paul/map-challenge.git
cd map-challenge
```
---

### Backend
1. `cd backend`
2. `npm install`
3. `npm run dev` (Runs on http://localhost:3000)

---

### Frontend
1. `cd frontend`
2. `npm install`
3. `npm run dev` (Runs on http://localhost:5173)

---

## 📡 API Reference

The backend provides a RESTful API to manage location data. All requests and responses use **JSON** format.

### Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/locations` | Retrieves the full history of saved coordinates and addresses. |
| `POST` | `/api/locations` | Saves a new geocoded location to the SQLite database. |

#### 1. Get History
**Request:** `GET /api/locations`  
**Description:** Retrieves a list of all previously saved locations from the database, typically used to populate the history feed on startup.
**Response (200 OK):**
```json
[
  {
    "id": 1,
    "lat": 51.505,
    "lng": -0.09,
    "address": "London, United Kingdom",
    "created_at": "2023-10-27 10:00:00"
  }
]
```
### 2. Save Location
**Endpoint:** `POST /api/locations`
**Description:** Accepts a new location and persists it to the SQLite database.
**Request Body:**
```json
{
  "lat": 40.7128,
  "lng": -74.0060,
  "address": "New York, NY, USA"
}
```
**Response (201 Created):**
```json
{
  "id": 10
}
```
---

## 🏗️ Architecture Features
- **Separation of Concerns:** Backend uses a Service/Controller pattern; see server.js and locationService.js
- **Type Safety:** Shared TypeScript interfaces for location data.
- **Persistence:** SQLite database ensures data survives server restarts.
- **Responsiveness:** Grid-based layout for seamless desktop/mobile use.
