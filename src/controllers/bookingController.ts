import { Request, Response } from 'express';
import * as BookingService from '../services/bookingService';

// Obtener todas las reservas
export const getAllBookings = (req: Request, res: Response): void => {
  const bookings = BookingService.getAllBookings();
  res.json(bookings);
};

// Obtener una reserva por ID
export const getBookingById = (req: Request, res: Response): void => {
  const { id } = req.params;
  const booking = BookingService.getBookingById(id);

  if (!booking) {
    res.status(404).json({ error: 'Booking not found' });
    return;
  }

  res.json(booking);
};

// Añadir una nueva reserva
export const addBooking = (req: Request, res: Response): void => {
  const newBooking = req.body;
  const createdBooking = BookingService.addBooking(newBooking);
  res.status(201).json(createdBooking);
};

// Editar una reserva existente
export const editBooking = (req: Request, res: Response): void => {
  const { id } = req.params;
  const updatedBooking = req.body;

  const updated = BookingService.editBooking(id, updatedBooking);

  if (!updated) {
    res.status(404).json({ error: 'Booking not found' });
    return;
  }

  res.json(updated);
};

// Eliminar una reserva
export const deleteBooking = (req: Request, res: Response): void => {
  const { id } = req.params;
  const isDeleted = BookingService.deleteBooking(id);

  if (!isDeleted) {
    res.status(404).json({ error: 'Booking not found' });
    return;
  }

  res.status(204).send();
};
