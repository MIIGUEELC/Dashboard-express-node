import express from "express";
import dotenv from 'dotenv';

dotenv.config();


// Import auth middleware for private routes
import { authenticateToken } from './middleware/auth';

// Import routes
import { loginRoute } from './controllers/login.controller';
import { bookingRoutes } from './routes/booking.routes'
import { roomRoutes } from './routes/room.routes';
import { userRoutes } from './routes/user.routes';
import { contactRoutes } from './routes/contact.routes';
import { infoController } from "./controllers/information.controller";

export const app = express();

const port = 3000;
// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Public routes
app.get('/', (req, res) => {
    res.send('API running on root path');
});
app.use('/info', infoController);
app.use('/login', loginRoute);

// Private routes with authenticate token
app.use('/bookings', authenticateToken, bookingRoutes);
app.use('/rooms', authenticateToken, roomRoutes);
app.use('/users', authenticateToken, userRoutes);
app.use('/contacts', authenticateToken, contactRoutes);

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})