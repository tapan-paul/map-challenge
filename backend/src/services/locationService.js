import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const dbPromise = open({
  filename: './locations.db',
  driver: sqlite3.Database
});

export const initDb = async () => {
  const db = await dbPromise;
  await db.exec(`CREATE TABLE IF NOT EXISTS locations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    address TEXT, lat REAL, lng REAL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
};

export const locationService = {
  async getAll() {
    const db = await dbPromise;
    return db.all('SELECT * FROM locations ORDER BY created_at DESC');
  },
  async create(loc) {
    const db = await dbPromise;
    const result = await db.run(
      'INSERT INTO locations (address, lat, lng) VALUES (?, ?, ?)',
      [loc.address, loc.lat, loc.lng]
    );
    return result.lastID;
  }
};
