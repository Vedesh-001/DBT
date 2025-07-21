import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/users.js';
import movieRoutes from './routes/movies.js';
import theaterRoutes from './routes/theaters.js';
import ticketRoutes from './routes/tickets.js';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/theaters', theaterRoutes);
app.use('/api/tickets', ticketRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));