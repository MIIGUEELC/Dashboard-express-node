import { Router } from 'express';
import * as bookingController from '../controllers/bookingController';

const router = Router();


router.get('/', bookingController.getAllBookings); 
router.get('/:id', bookingController.getBookingById);
router.post('/', bookingController.addBooking);
router.put('/:id', bookingController.editBooking);
router.delete('/:id', bookingController.deleteBooking);

export default router;
