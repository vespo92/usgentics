import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import uploadRoutes from './routes/upload'
import analysisRoutes from './routes/analysis'
import environmentalRoutes from './routes/environmental'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/upload', uploadRoutes)
app.use('/api/analysis', analysisRoutes)
app.use('/api/environmental', environmentalRoutes)

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.listen(PORT, () => {
  console.log(`USGentics API server running on port ${PORT}`)
})

export default app
