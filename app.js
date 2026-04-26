const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// routes
const animeRoutes = require('./routes/movies');
const userRoutes = require('./routes/users');

app.use('/api/anime', animeRoutes);
app.use('/api/users', userRoutes);

// ✅ ADD THIS ROOT ROUTE
app.get('/', (req, res) => {
  res.send('Anime API is running 🚀');
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});