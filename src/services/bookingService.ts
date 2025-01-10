import { BookingType, BookingTypeID } from '../interfaces/BookingType';
import { booking } from '../data/bookings';

let idCounter = 1;
const generateId = (): string => (idCounter++).toString();

//let bookings: BookingTypeID[] = [];

let bookings: BookingTypeID[] = [  // pongo esto para probar
  {
    id: generateId(),
    name: "John Doe",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    check_in: "2025-01-15",
    check_out: "2025-01-20",
    room: 101,
    price: 500,
    status: "Paid",
    requests: "Extra pillows",
    booking_date: "2025-01-10",
  },
  {
    id: generateId(),
    name: "Jane Smith",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    check_in: "2025-01-10",
    check_out: "2025-01-12",
    room: 102,
    price: 300,
    status: "Pending",
    requests: "No dairy",
    booking_date: "2025-01-05",
  },
];




// Obtener todas las reservas
export const getAllBookings = (): BookingTypeID[] => {
  return bookings;
};

// Obtener una reserva por ID
export const getBookingById = (id: string): BookingTypeID | null => {
  return bookings.find(booking => booking.id === id) || null;
};

// Añadir una nueva reserva
export const addBooking = (newBooking: BookingType): BookingTypeID => {
  const bookingWithId: BookingTypeID = { ...newBooking, id: generateId() };
  bookings.push(bookingWithId);
  return bookingWithId;
};

// Editar una reserva existente
export const editBooking = (id: string, updatedBooking: Partial<BookingType>): BookingTypeID | null => {
  const index = bookings.findIndex(booking => booking.id === id);

  if (index === -1) {
    return null;
  }

  // Actualizar solo los campos proporcionados
  bookings[index] = { ...bookings[index], ...updatedBooking };
  return bookings[index];
};

// Eliminar una reserva
export const deleteBooking = (id: string): boolean => {
  const initialLength = bookings.length;
  bookings = bookings.filter(booking => booking.id !== id);
  return bookings.length < initialLength;
};
