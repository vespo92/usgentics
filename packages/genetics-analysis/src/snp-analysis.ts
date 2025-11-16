import { SNP, Trait, GeneticAdaptation } from './types'

/**
 * SNP (Single Nucleotide Polymorphism) Analysis
 * Analyzes individual genetic variants for traits and health markers
 */
export class SNPAnalyzer {
  /**
   * Analyze SNPs for specific traits
   */
  static analyzeTraits(snps: SNP[]): Trait[] {
    const traits: Trait[] = []

    // Example trait analysis
    // In production, this would reference databases like SNPedia, ClinVar, etc.

    // Lactose tolerance (rs4988235)
    const lactoseSNP = snps.find(s => s.rsId === 'rs4988235')
    if (lactoseSNP) {
      traits.push({
        name: 'Lactose Tolerance',
        genotype: lactoseSNP.genotype,
        phenotype: this.interpretLactoseTolerance(lactoseSNP.genotype),
        confidence: 'High'
      })
    }

    // Muscle performance (rs1815739, ACTN3)
    const muscleSNP = snps.find(s => s.rsId === 'rs1815739')
    if (muscleSNP) {
      traits.push({
        name: 'Muscle Performance',
        genotype: muscleSNP.genotype,
        phenotype: this.interpretMusclePerformance(muscleSNP.genotype),
        confidence: 'High'
      })
    }

    return traits
  }

  private static interpretLactoseTolerance(genotype: string): string {
    const interpretations: Record<string, string> = {
      'CC': 'Likely lactose tolerant',
      'CT': 'Possibly lactose tolerant',
      'TT': 'Likely lactose intolerant'
    }
    return interpretations[genotype] || 'Unknown'
  }

  private static interpretMusclePerformance(genotype: string): string {
    const interpretations: Record<string, string> = {
      'CC': 'More fast-twitch muscle fibers (sprint/power)',
      'CT': 'Mixed fast/slow twitch',
      'TT': 'More slow-twitch muscle fibers (endurance)'
    }
    return interpretations[genotype] || 'Unknown'
  }

  /**
   * Analyze genetic adaptations
   */
  static analyzeAdaptations(snps: SNP[]): GeneticAdaptation[] {
    const adaptations: GeneticAdaptation[] = []

    // High altitude adaptation (EPAS1, EGLN1)
    const epas1SNP = snps.find(s => s.chromosome === '2' && s.position >= 46000000 && s.position <= 46500000)
    adaptations.push({
      name: 'High Altitude Adaptation',
      status: epas1SNP ? 'Present' : 'Not present',
      genes: ['EPAS1', 'EGLN1'],
      description: 'Tibetan/Andean high-altitude adaptation for low oxygen environments'
    })

    // Diving adaptation (PDE10A)
    // Found in Bajau sea nomads and Korean Haenyo divers
    const divingSNP = snps.find(s => s.chromosome === '6' && s.position >= 165000000 && s.position <= 166000000)
    adaptations.push({
      name: 'Diving Adaptation (Enlarged Spleen)',
      status: divingSNP ? 'Present' : 'Not present',
      genes: ['PDE10A'],
      description: 'Associated with enlarged spleen for longer breath-holding, found in diving populations'
    })

    // Malaria resistance (HBB - sickle cell)
    const hbbSNP = snps.find(s => s.rsId === 'rs334')
    adaptations.push({
      name: 'Malaria Resistance',
      status: hbbSNP && hbbSNP.genotype.includes('T') ? 'Present' : 'Not present',
      genes: ['HBB'],
      description: 'Sickle cell trait provides protection against malaria'
    })

    return adaptations
  }

  /**
   * Analyze health-related markers
   */
  static analyzeHealthMarkers(snps: SNP[]): Array<{
    condition: string
    risk: string
    confidence: string
    snps: string[]
  }> {
    // In production, this would analyze multiple SNPs for polygenic risk scores
    // and consult databases like ClinVar, GWAS catalog, etc.

    return [
      {
        condition: 'Type 2 Diabetes',
        risk: 'Average',
        confidence: 'Medium',
        snps: ['rs7903146', 'rs12255372']
      },
      {
        condition: 'Cardiovascular Disease',
        risk: 'Slightly elevated',
        confidence: 'Medium',
        snps: ['rs1333049', 'rs10757278']
      }
    ]
  }
}

/**
 * Analyzes unique genetic phenomena and outliers
 */
export class PhenomenonAnalyzer {
  /**
   * Detect rare or unique genetic variants
   */
  static detectUniquePhenomena(snps: SNP[]): Array<{
    name: string
    description: string
    genes: string[]
    rarity: string
  }> {
    const phenomena: Array<any> = []

    // Check for Haenyo-like diving adaptations
    const divingGenes = snps.filter(s =>
      (s.chromosome === '6' && s.position >= 165000000 && s.position <= 166000000) ||
      (s.chromosome === '1' && s.position >= 237000000 && s.position <= 238000000)
    )

    if (divingGenes.length > 0) {
      phenomena.push({
        name: 'Diving Adaptation',
        description: 'Genetic variants associated with enhanced diving capability, similar to Korean Haenyo divers',
        genes: ['PDE10A', 'other diving-related genes'],
        rarity: 'Very rare (found in < 1% of population)'
      })
    }

    // Additional rare phenomena could be added here

    return phenomena
  }
}
