import express from 'express';
import cors from 'cors';
import { locationService, initDb } from './src/services/locationService.js';

const app = express();
app.use(cors());
app.use(express.json());

initDb(); // Setup SQLite table

app.get('/api/locations', async (req, res) => {
  const data = await locationService.getAll();
  res.json(data);
});

app.post('/api/locations', async (req, res) => {
  const id = await locationService.create(req.body);
  res.status(201).json({ id });
});

app.listen(3000, () => console.log('✅ Backend: http://localhost:3000'));
