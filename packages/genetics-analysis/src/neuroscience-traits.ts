/**
 * Neuroscience and Cognitive Trait Analysis
 *
 * Based on research from neuroscience (including work discussed by Andrew Huberman and others)
 * about genetic variations affecting cognition, behavior, and neurological traits.
 *
 * CRITICAL FRAMING:
 * - These are VARIATIONS, not rankings
 * - No population is inherently "smarter" or "better"
 * - Cognitive traits are highly polygenic and environmental
 * - Individual variation within populations far exceeds between-population differences
 * - Culture, education, and environment are primary determinants of outcomes
 */

export interface CognitiveTraitVariation {
  id: string
  name: string
  genes: string[]
  description: string
  variations: GeneticVariation[]
  environmentalFactors: string[]
  populationDistribution: PopulationDistribution[]
  functionalImpact: string
  references: ScientificReference[]
}

export interface GeneticVariation {
  variant: string
  frequency: number
  associatedWith: string[]
  tradeoffs?: string
}

export interface PopulationDistribution {
  population: string
  frequency: number
  notes?: string
}

export interface ScientificReference {
  authors: string[]
  title: string
  journal: string
  year: number
  doi?: string
}

/**
 * Neurotransmitter System Variations
 */
export const NEUROTRANSMITTER_VARIATIONS: CognitiveTraitVariation[] = [
  {
    id: 'comt_dopamine',
    name: 'COMT Val158Met (Dopamine Processing)',
    genes: ['COMT'],
    description: 'Affects dopamine clearance in prefrontal cortex, influencing executive function and stress response',
    variations: [
      {
        variant: 'Val/Val',
        frequency: 0.25,
        associatedWith: [
          'Better performance under stress',
          'Lower baseline dopamine (warrior gene)',
          'Better in dynamic, changing environments',
          'More resilient to pain'
        ],
        tradeoffs: 'May have reduced performance on complex cognitive tasks in low-stress situations'
      },
      {
        variant: 'Met/Met',
        frequency: 0.25,
        associatedWith: [
          'Better executive function and working memory',
          'Higher baseline dopamine (worrier gene)',
          'Enhanced cognitive performance in stable conditions',
          'Better attention and focus'
        ],
        tradeoffs: 'More sensitive to stress, may perform worse under pressure'
      },
      {
        variant: 'Val/Met',
        frequency: 0.50,
        associatedWith: ['Intermediate phenotype', 'Balanced cognitive-stress profile'],
      }
    ],
    environmentalFactors: [
      'Stress levels',
      'Task complexity',
      'Sleep quality',
      'Caffeine intake',
      'Environmental predictability'
    ],
    populationDistribution: [
      { population: 'European', frequency: 0.48, notes: 'Met allele' },
      { population: 'Asian', frequency: 0.70, notes: 'Met allele - higher frequency' },
      { population: 'African', frequency: 0.29, notes: 'Met allele' }
    ],
    functionalImpact: 'Influences prefrontal cortex dopamine levels, affecting executive function, working memory, and stress resilience',
    references: [
      {
        authors: ['Egan MF', 'Goldberg TE', 'Kolachana BS', 'et al'],
        title: 'Effect of COMT Val108/158 Met genotype on frontal lobe function and risk for schizophrenia',
        journal: 'PNAS',
        year: 2001,
        doi: '10.1073/pnas.111134598'
      },
      {
        authors: ['Mattay VS', 'Goldberg TE', 'Fera F', 'et al'],
        title: 'Catechol O-methyltransferase val158-met genotype and individual variation in the brain response to amphetamine',
        journal: 'PNAS',
        year: 2003
      }
    ]
  },

  {
    id: 'maoa_aggression',
    name: 'MAOA (Monoamine Oxidase A)',
    genes: ['MAOA'],
    description: 'Affects breakdown of neurotransmitters including dopamine, serotonin, and norepinephrine',
    variations: [
      {
        variant: 'High-activity MAOA',
        frequency: 0.60,
        associatedWith: [
          'More efficient neurotransmitter breakdown',
          'Lower aggression in adverse environments',
          'Better emotional regulation'
        ]
      },
      {
        variant: 'Low-activity MAOA',
        frequency: 0.40,
        associatedWith: [
          'Slower neurotransmitter breakdown',
          'Higher risk of antisocial behavior IF exposed to childhood maltreatment',
          'Normal behavior in supportive environments'
        ],
        tradeoffs: 'Highly dependent on environmental factors - gene-environment interaction'
      }
    ],
    environmentalFactors: [
      'Childhood environment (CRITICAL)',
      'Trauma exposure',
      'Social support',
      'Stress levels'
    ],
    populationDistribution: [
      { population: 'European', frequency: 0.34, notes: 'Low-activity variant' },
      { population: 'Asian', frequency: 0.61, notes: 'Low-activity variant - higher frequency' },
      { population: 'African', frequency: 0.59, notes: 'Low-activity variant' }
    ],
    functionalImpact: 'Classic gene-environment interaction - variant only associated with negative outcomes in adverse environments',
    references: [
      {
        authors: ['Caspi A', 'McClay J', 'Moffitt TE', 'et al'],
        title: 'Role of genotype in the cycle of violence in maltreated children',
        journal: 'Science',
        year: 2002,
        doi: '10.1126/science.1072290'
      }
    ]
  },

  {
    id: 'bdnf_learning',
    name: 'BDNF Val66Met (Learning and Neuroplasticity)',
    genes: ['BDNF'],
    description: 'Brain-Derived Neurotrophic Factor affects neuroplasticity, learning, and memory',
    variations: [
      {
        variant: 'Val/Val',
        frequency: 0.70,
        associatedWith: [
          'Enhanced activity-dependent BDNF secretion',
          'Better episodic memory',
          'Enhanced hippocampal function',
          'Better response to exercise for cognitive enhancement'
        ]
      },
      {
        variant: 'Met carriers (Val/Met or Met/Met)',
        frequency: 0.30,
        associatedWith: [
          'Reduced activity-dependent BDNF secretion',
          'May have different learning strategies',
          'Potential advantages in certain cognitive domains',
          'May respond differently to cognitive training'
        ]
      }
    ],
    environmentalFactors: [
      'Exercise (CRITICAL for BDNF production)',
      'Learning activities',
      'Stress management',
      'Sleep quality',
      'Social interaction'
    ],
    populationDistribution: [
      { population: 'European', frequency: 0.20, notes: 'Met allele' },
      { population: 'Asian', frequency: 0.40, notes: 'Met allele - higher frequency' },
      { population: 'African', frequency: 0.04, notes: 'Met allele - very low' }
    ],
    functionalImpact: 'Affects neuroplasticity and learning - highly modifiable through exercise and environmental enrichment',
    references: [
      {
        authors: ['Egan MF', 'Kojima M', 'Callicott JH', 'et al'],
        title: 'The BDNF val66met polymorphism affects activity-dependent secretion of BDNF and human memory and hippocampal function',
        journal: 'Cell',
        year: 2003,
        doi: '10.1016/S0092-8674(03)00035-7'
      }
    ]
  },

  {
    id: 'serotonin_transporter',
    name: '5-HTTLPR (Serotonin Transporter)',
    genes: ['SLC6A4'],
    description: 'Affects serotonin reuptake, influencing mood, anxiety, and stress response',
    variations: [
      {
        variant: 'Long (L) allele',
        frequency: 0.60,
        associatedWith: [
          'More efficient serotonin reuptake',
          'Lower anxiety in general',
          'Less reactive to negative stimuli'
        ]
      },
      {
        variant: 'Short (S) allele',
        frequency: 0.40,
        associatedWith: [
          'Reduced serotonin reuptake',
          'Higher anxiety IF in negative environment',
          'Greater environmental sensitivity',
          'May have advantages in stable, supportive environments'
        ],
        tradeoffs: 'Environmental sensitivity can be advantage or disadvantage depending on context'
      }
    ],
    environmentalFactors: [
      'Childhood environment',
      'Chronic stress',
      'Social support',
      'Sunlight exposure',
      'Exercise'
    ],
    populationDistribution: [
      { population: 'European', frequency: 0.42, notes: 'S allele' },
      { population: 'Asian', frequency: 0.79, notes: 'S allele - much higher' },
      { population: 'African', frequency: 0.27, notes: 'S allele' }
    ],
    functionalImpact: 'Differential susceptibility - S allele carriers more responsive to both negative AND positive environments',
    references: [
      {
        authors: ['Lesch KP', 'Bengel D', 'Heils A', 'et al'],
        title: 'Association of anxiety-related traits with a polymorphism in the serotonin transporter gene regulatory region',
        journal: 'Science',
        year: 1996
      }
    ]
  }
]

/**
 * Sleep and Circadian Rhythm Variations
 */
export const SLEEP_CIRCADIAN_VARIATIONS: CognitiveTraitVariation[] = [
  {
    id: 'per3_sleep',
    name: 'PER3 (Sleep Duration and Quality)',
    genes: ['PER3'],
    description: 'Affects circadian rhythm and sleep homeostasis',
    variations: [
      {
        variant: 'PER3⁴',
        frequency: 0.90,
        associatedWith: [
          'Shorter sleep need (can function on less sleep)',
          'Morning chronotype tendency',
          'Better cognitive performance after sleep deprivation'
        ]
      },
      {
        variant: 'PER3⁵',
        frequency: 0.10,
        associatedWith: [
          'Longer sleep need',
          'Evening chronotype tendency',
          'More affected by sleep deprivation',
          'May have enhanced creative thinking'
        ]
      }
    ],
    environmentalFactors: [
      'Light exposure timing',
      'Work schedule',
      'Caffeine intake',
      'Exercise timing',
      'Screen time before bed'
    ],
    populationDistribution: [
      { population: 'Global', frequency: 0.10, notes: 'PER3⁵ variant' }
    ],
    functionalImpact: 'Influences optimal sleep duration and circadian preference',
    references: [
      {
        authors: ['Viola AU', 'Archer SN', 'James LM', 'et al'],
        title: 'PER3 polymorphism predicts sleep structure and waking performance',
        journal: 'Current Biology',
        year: 2007
      }
    ]
  },

  {
    id: 'drd4_novelty',
    name: 'DRD4 (Dopamine D4 Receptor - Novelty Seeking)',
    genes: ['DRD4'],
    description: 'Affects novelty seeking, risk-taking, and ADHD susceptibility',
    variations: [
      {
        variant: '7R allele (long)',
        frequency: 0.20,
        associatedWith: [
          'Higher novelty seeking',
          'Greater risk-taking behavior',
          'ADHD association',
          'May be advantageous in changing/dynamic environments',
          'Associated with human migration patterns'
        ]
      },
      {
        variant: '4R allele (short)',
        frequency: 0.65,
        associatedWith: [
          'Lower novelty seeking',
          'More cautious behavior',
          'Better suited for stable environments'
        ]
      }
    ],
    environmentalFactors: [
      'Environmental novelty',
      'Structured vs. unstructured settings',
      'Risk/reward balance in environment'
    ],
    populationDistribution: [
      { population: 'South American indigenous', frequency: 0.70, notes: '7R allele - highest globally' },
      { population: 'European', frequency: 0.20, notes: '7R allele' },
      { population: 'Asian', frequency: 0.01, notes: '7R allele - very rare' },
      { population: 'East African', frequency: 0.20, notes: '7R allele' }
    ],
    functionalImpact: 'Associated with exploratory behavior and migration - frequency correlates with historical migration distance',
    references: [
      {
        authors: ['Chen C', 'Burton M', 'Greenberger E', 'Dmitrieva J'],
        title: 'Population migration and the variation of dopamine D4 receptor (DRD4) allele frequencies around the globe',
        journal: 'Evolution and Human Behavior',
        year: 1999
      }
    ]
  }
]

/**
 * Language and Communication Variations
 */
export const LANGUAGE_VARIATIONS: CognitiveTraitVariation[] = [
  {
    id: 'foxp2_language',
    name: 'FOXP2 (Language and Speech)',
    genes: ['FOXP2'],
    description: 'Critical for language acquisition and speech motor control',
    variations: [
      {
        variant: 'Modern human variant',
        frequency: 0.995,
        associatedWith: [
          'Normal language development',
          'Complex speech capability',
          'Fine motor control of speech organs'
        ]
      }
    ],
    environmentalFactors: [
      'Language exposure in critical period',
      'Social interaction',
      'Educational input'
    ],
    populationDistribution: [
      { population: 'All modern humans', frequency: 0.995 }
    ],
    functionalImpact: 'One of the few genes where modern humans differ from Neanderthals - essential for speech',
    references: [
      {
        authors: ['Lai CS', 'Fisher SE', 'Hurst JA', 'et al'],
        title: 'A forkhead-domain gene is mutated in a severe speech and language disorder',
        journal: 'Nature',
        year: 2001,
        doi: '10.1038/35097076'
      }
    ]
  }
]

/**
 * Performance Under Pressure Variations
 */
export const STRESS_PERFORMANCE_VARIATIONS: CognitiveTraitVariation[] = [
  {
    id: 'npy_stress',
    name: 'NPY (Neuropeptide Y - Stress Resilience)',
    genes: ['NPY'],
    description: 'Affects stress resilience and anxiety regulation',
    variations: [
      {
        variant: 'High NPY expression',
        frequency: 0.70,
        associatedWith: [
          'Better stress resilience',
          'Lower anxiety',
          'Better performance under pressure',
          'Found in higher frequency in special forces soldiers'
        ]
      },
      {
        variant: 'Low NPY expression',
        frequency: 0.30,
        associatedWith: [
          'Higher stress reactivity',
          'May be more cautious in dangerous situations'
        ]
      }
    ],
    environmentalFactors: [
      'Chronic stress exposure',
      'Social support',
      'Exercise (increases NPY)',
      'Sleep quality'
    ],
    populationDistribution: [
      { population: 'Varies across populations', frequency: 0.70 }
    ],
    functionalImpact: 'Critical for stress resilience - studied in elite military personnel',
    references: [
      {
        authors: ['Morgan CA', 'Rasmusson AM', 'Wang S', 'et al'],
        title: 'Neuropeptide-Y, cortisol, and subjective distress in humans exposed to acute stress',
        journal: 'Biological Psychiatry',
        year: 2002
      }
    ]
  }
]

/**
 * Get all neuroscience trait variations
 */
export function getAllNeuroscienceTraits(): CognitiveTraitVariation[] {
  return [
    ...NEUROTRANSMITTER_VARIATIONS,
    ...SLEEP_CIRCADIAN_VARIATIONS,
    ...LANGUAGE_VARIATIONS,
    ...STRESS_PERFORMANCE_VARIATIONS
  ]
}

/**
 * Calculate individual's cognitive profile based on genotypes
 */
export function calculateCognitiveProfile(genotypes: Map<string, string>): {
  traits: CognitiveTraitVariation[]
  recommendations: string[]
  environmentalOptimizations: string[]
} {
  // This would analyze actual genotypes to provide personalized insights
  // Placeholder implementation
  return {
    traits: [],
    recommendations: [
      'Optimize environment based on genetic predispositions',
      'Exercise enhances BDNF production regardless of genotype',
      'Sleep quality affects all cognitive traits',
      'Stress management critical for optimal performance'
    ],
    environmentalOptimizations: [
      'Match work environment to stress-response profile',
      'Align sleep schedule with chronotype',
      'Leverage genetic strengths while compensating for vulnerabilities'
    ]
  }
}
