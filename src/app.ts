import express from "express";
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import privatedRoutes from './routes/privateRoutes';
import publicRoutes from "./routes/publicRoutes";
import bookingRouter from "./routes/bookingsRoutes"; // Importa bookingRouter

dotenv.config();

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api', publicRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/protected', privatedRoutes);
app.use('/api/bookings', bookingRouter); 

// Inicia el servidor
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
