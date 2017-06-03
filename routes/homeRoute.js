import express, { Router } from 'express';
// Import index action from movies controller
import { index } from '../controllers/homeController';

// Initialize the router
const router = Router();

// Handle /homes.json route with index action from home controller
router.route('/homes.json')
  .get(index);

export default router;
