export interface EnvironmentalProfile {
  userId: string
  diet: DietProfile
  location: LocationProfile
  lifestyle: LifestyleProfile
  exposures: ExposureProfile
}

export interface DietProfile {
  primaryCuisine: string[]
  diversityScore: number
  globalFoodExposure: boolean
  restrictions: string[]
  fermentedFoods: boolean
}

export interface LocationProfile {
  current: {
    city: string
    state?: string
    country: string
    altitude: number
    airQuality: string
  }
  history: Array<{
    location: string
    years: number
  }>
}

export interface LifestyleProfile {
  exerciseFrequency: string
  sunExposure: string
  occupationalHazards: string[]
}

export interface ExposureProfile {
  radiation: RadiationExposure
  airQuality: AirQualityData
  chemicals: ChemicalExposure
}

export interface RadiationExposure {
  uvIndex: string
  medicalImaging: string
  altitude: string
}

export interface AirQualityData {
  pm25: number
  pm10: number
  ozone: string
}

export interface ChemicalExposure {
  waterQuality: string
  householdProducts: string
  workplaceExposure: string
}

export interface GutMicrobiomeData {
  diversity: string
  dominantPhyla: string[]
  diversityScore: number
  lastUpdated: Date
}
