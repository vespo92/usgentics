export class RadiationTracker {
  /**
   * Calculate UV exposure risk
   */
  static calculateUVRisk(uvIndex: number, exposureHours: number): {
    risk: 'low' | 'medium' | 'high' | 'very high'
    recommendedProtection: string[]
  } {
    const exposureScore = uvIndex * exposureHours

    if (exposureScore < 20) {
      return {
        risk: 'low',
        recommendedProtection: ['Wear sunglasses on bright days']
      }
    } else if (exposureScore < 50) {
      return {
        risk: 'medium',
        recommendedProtection: ['Sunscreen SPF 30+', 'Sunglasses', 'Seek shade during peak hours']
      }
    } else {
      return {
        risk: 'high',
        recommendedProtection: [
          'Sunscreen SPF 50+',
          'Protective clothing',
          'Wide-brimmed hat',
          'Avoid midday sun'
        ]
      }
    }
  }

  /**
   * Estimate cosmic radiation exposure based on altitude and flight history
   */
  static estimateCosmicRadiation(
    altitudeMeters: number,
    flightHoursPerYear: number
  ): {
    annualDose: number
    comparison: string
  } {
    // Background radiation at sea level: ~3 mSv/year
    // Increases ~0.1 mSv per 100m altitude
    // Flight exposure: ~0.003 mSv per hour

    const altitudeDose = (altitudeMeters / 100) * 0.1
    const flightDose = flightHoursPerYear * 0.003
    const totalDose = 3 + altitudeDose + flightDose

    return {
      annualDose: totalDose,
      comparison: `${totalDose.toFixed(2)} mSv/year (average global background: ~3 mSv/year)`
    }
  }
}
