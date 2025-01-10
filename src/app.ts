import express from 'express';
import bookingRoutes from './routes/bookingroutes';

const app = express();
app.use(express.json());

// Rutas de bookings
app.use('/api/bookings', bookingRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
