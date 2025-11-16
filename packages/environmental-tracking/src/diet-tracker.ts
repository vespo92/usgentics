import { DietProfile, GutMicrobiomeData } from './types'

/**
 * Diet and Gut Microbiome Tracker
 * Monitors dietary patterns and their impact on gut microbiome
 */
export class DietTracker {
  /**
   * Calculate dietary diversity score
   */
  static calculateDiversityScore(cuisines: string[], foodTypes: string[]): number {
    // Simple diversity calculation
    // In production, would use Shannon diversity index or similar
    const uniqueCuisines = new Set(cuisines).size
    const uniqueFoodTypes = new Set(foodTypes).size

    return Math.min(10, (uniqueCuisines + uniqueFoodTypes) / 2)
  }

  /**
   * Assess gut microbiome impact from diet changes
   */
  static assessMicrobiomeImpact(
    currentDiet: DietProfile,
    previousDiet: DietProfile
  ): {
    change: 'positive' | 'negative' | 'neutral'
    description: string
  } {
    const currentScore = currentDiet.diversityScore
    const previousScore = previousDiet.diversityScore

    if (currentScore > previousScore + 1) {
      return {
        change: 'positive',
        description: 'Increased dietary diversity may improve microbiome health'
      }
    } else if (currentScore < previousScore - 1) {
      return {
        change: 'negative',
        description: 'Decreased dietary diversity may reduce microbiome diversity'
      }
    }

    return {
      change: 'neutral',
      description: 'No significant change in dietary diversity'
    }
  }

  /**
   * Analyze global food exposure impact
   */
  static analyzeGlobalExposure(cuisines: string[]): {
    exposureLevel: 'low' | 'medium' | 'high'
    benefits: string[]
    challenges: string[]
  } {
    const uniqueRegions = new Set(cuisines.map(c => this.getCuisineRegion(c)))

    if (uniqueRegions.size >= 4) {
      return {
        exposureLevel: 'high',
        benefits: [
          'Diverse microbiome exposure',
          'Broader range of nutrients',
          'Enhanced digestive adaptability'
        ],
        challenges: [
          'Potential for food sensitivities',
          'Adjustment period for gut bacteria',
          'Need to monitor digestive health'
        ]
      }
    }

    return {
      exposureLevel: 'medium',
      benefits: ['Moderate microbiome diversity'],
      challenges: ['Limited bacterial exposure']
    }
  }

  private static getCuisineRegion(cuisine: string): string {
    const regions: Record<string, string> = {
      'Italian': 'Mediterranean',
      'Greek': 'Mediterranean',
      'Chinese': 'East Asian',
      'Japanese': 'East Asian',
      'Indian': 'South Asian',
      'Thai': 'Southeast Asian',
      'Mexican': 'Latin American',
      'American': 'Western'
    }
    return regions[cuisine] || 'Unknown'
  }
}
