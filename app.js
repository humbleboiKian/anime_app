const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const moviesRoutes = require('./routes/movies');
const usersRoutes = require('./routes/users');

app.use('/api/anime', moviesRoutes);
app.use('/api/users', usersRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});