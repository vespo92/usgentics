import { Router } from 'express'
import { environmentalController } from '../controllers/environmentalController'

const router = Router()

// Create or update environmental profile
router.post('/profile', environmentalController.createProfile)

// Get environmental profile
router.get('/profile/:userId', environmentalController.getProfile)

// Add environmental data point
router.post('/data', environmentalController.addDataPoint)

// Get environmental analysis
router.get('/analysis/:userId', environmentalController.getAnalysis)

export default router
