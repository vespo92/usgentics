import { Router } from 'express'
import { analysisController } from '../controllers/analysisController'

const router = Router()

// Get analysis results by ID
router.get('/:analysisId', analysisController.getAnalysis)

// Get haplogroup information
router.get('/:analysisId/haplogroup', analysisController.getHaplogroup)

// Get mtDNA information
router.get('/:analysisId/mtdna', analysisController.getMtDNA)

// Get ancestry breakdown
router.get('/:analysisId/ancestry', analysisController.getAncestry)

// Get genetic markers
router.get('/:analysisId/markers', analysisController.getMarkers)

export default router
