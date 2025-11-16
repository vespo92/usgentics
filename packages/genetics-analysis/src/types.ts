export interface Haplogroup {
  haplogroup: string
  subclade: string
  confidence: number
  description: string
  origin?: string
  migrationPath?: string[]
}

export interface MtDNAResult {
  haplogroup: string
  macrohaplogroup: string
  age: string
  region: string
  frequency: {
    global: number
    europe: number
    asia: number
    africa: number
    americas: number
  }
  mutations: Mutation[]
}

export interface Mutation {
  position: number
  mutation: string
}

export interface SNP {
  rsId: string
  chromosome: string
  position: number
  genotype: string
  reference: string
  alternate: string
}

export interface Trait {
  name: string
  genotype: string
  phenotype: string
  confidence: 'Low' | 'Medium' | 'High'
}

export interface GeneticAdaptation {
  name: string
  status: 'Present' | 'Not present' | 'Heterozygous'
  genes: string[]
  description?: string
}

export interface AncestryComposition {
  region: string
  percentage: number
}

export interface PopulationMatch {
  name: string
  percentage: number
}
