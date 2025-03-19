import express from 'express';	
const router = express.Router();

import PaymentController from '../controllers/payment.controller.js';

router.post('/payment', PaymentController.createPayment);
router.patch('/payment/:id', PaymentController.updatePayment);

export default router;


