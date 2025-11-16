import { AirQualityData } from './types'

/**
 * Air Quality Monitoring
 * Tracks air pollution exposure and potential health impacts
 */
export class AirQualityMonitor {
  /**
   * Calculate Air Quality Index (AQI)
   */
  static calculateAQI(data: AirQualityData): {
    aqi: number
    category: string
    healthImplications: string
  } {
    // Simplified AQI calculation based on PM2.5
    const pm25 = data.pm25

    if (pm25 <= 12) {
      return {
        aqi: Math.round((50 / 12) * pm25),
        category: 'Good',
        healthImplications: 'Air quality is satisfactory'
      }
    } else if (pm25 <= 35.4) {
      return {
        aqi: Math.round(50 + ((100 - 50) / (35.4 - 12.1)) * (pm25 - 12.1)),
        category: 'Moderate',
        healthImplications: 'Acceptable for most, sensitive individuals may experience issues'
      }
    } else {
      return {
        aqi: 150,
        category: 'Unhealthy',
        healthImplications: 'General public may experience health effects'
      }
    }
  }

  /**
   * Assess long-term exposure impact
   */
  static assessLongTermImpact(
    exposureHistory: Array<{ date: Date; data: AirQualityData }>
  ): {
    averageExposure: number
    risk: 'low' | 'medium' | 'high'
    recommendations: string[]
  } {
    const avgPM25 = exposureHistory.reduce((sum, e) => sum + e.data.pm25, 0) / exposureHistory.length

    if (avgPM25 <= 12) {
      return {
        averageExposure: avgPM25,
        risk: 'low',
        recommendations: ['Continue current practices']
      }
    } else if (avgPM25 <= 35) {
      return {
        averageExposure: avgPM25,
        risk: 'medium',
        recommendations: [
          'Consider air purifier for indoor spaces',
          'Limit outdoor exercise on high pollution days'
        ]
      }
    } else {
      return {
        averageExposure: avgPM25,
        risk: 'high',
        recommendations: [
          'Use air purifiers indoors',
          'Wear mask on high pollution days',
          'Consider relocation if possible'
        ]
      }
    }
  }
}
