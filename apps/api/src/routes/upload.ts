import { Router } from 'express'
import multer from 'multer'
import { uploadController } from '../controllers/uploadController'

const router = Router()

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname)
  }
})

const upload = multer({
  storage,
  limits: {
    fileSize: 100 * 1024 * 1024, // 100MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedExtensions = [
      '.txt', '.zip', '.vcf', '.gz', '.fastq', '.fq',
      '.bam', '.fasta', '.fa', '.23andme', '.ancestry'
    ]
    const ext = file.originalname.toLowerCase().substring(file.originalname.lastIndexOf('.'))
    if (allowedExtensions.includes(ext) || ext === '.gz') {
      cb(null, true)
    } else {
      cb(new Error('Invalid file type'))
    }
  }
})

router.post('/', upload.single('genome'), uploadController.handleUpload)

export default router
