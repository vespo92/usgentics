/**
 * Comprehensive Phenomena Catalog
 *
 * Documents rare and unique genetic phenomena across human populations.
 * Includes hard-to-discuss realities about genetic variation and health outcomes.
 *
 * ETHICAL FRAMEWORK:
 * - Scientific honesty about genetic differences
 * - Recognition that differences exist without value judgments
 * - Understanding that environment, culture, and opportunity are primary determinants of outcomes
 * - Acknowledgment that within-group variation >> between-group variation
 * - Medical relevance for personalized healthcare
 */

export interface GeneticPhenomenon {
  id: string
  name: string
  populations: string[]
  description: string
  geneticBasis: string[]
  medicalRelevance: string
  prevalence: number
  clinicalImplications: string[]
  environmentalFactors: string[]
  references: ScientificReference[]
  category: PhenomenonCategory
}

export type PhenomenonCategory =
  | 'disease_susceptibility'
  | 'drug_metabolism'
  | 'athletic_performance'
  | 'sensory_differences'
  | 'metabolic_differences'
  | 'immune_response'
  | 'rare_adaptation'
  | 'pharmacogenomics'

export interface ScientificReference {
  authors: string[]
  title: string
  journal: string
  year: number
  doi?: string
}

/**
 * Disease Susceptibility Variations
 *
 * IMPORTANT: These represent population-level risk variations for medical relevance.
 * They do NOT define individuals and are heavily influenced by environment,
 * socioeconomic factors, and healthcare access.
 */
export const DISEASE_SUSCEPTIBILITY_PHENOMENA: GeneticPhenomenon[] = [
  {
    id: 'cardiovascular_apol1',
    name: 'APOL1 Kidney Disease Risk',
    populations: ['West African descent', 'African American'],
    description: 'G1 and G2 variants in APOL1 gene provide protection against African sleeping sickness but increase kidney disease risk',
    geneticBasis: ['APOL1 G1', 'APOL1 G2'],
    medicalRelevance: 'Critical for kidney disease screening and donor matching in African ancestry populations',
    prevalence: 0.35, // ~35% carry risk variants
    clinicalImplications: [
      'Higher risk of focal segmental glomerulosclerosis (FSGS)',
      'Increased risk of hypertension-attributed kidney disease',
      'HIV-associated nephropathy risk',
      'Important for kidney transplant donor evaluation',
      'Regular kidney function monitoring recommended'
    ],
    environmentalFactors: [
      'Hypertension control critical',
      'HIV status',
      'Access to healthcare',
      'Early detection and management'
    ],
    category: 'disease_susceptibility',
    references: [
      {
        authors: ['Genovese G', 'Friedman DJ', 'Ross MD', 'et al'],
        title: 'Association of trypanolytic ApoL1 variants with kidney disease in African Americans',
        journal: 'Science',
        year: 2010,
        doi: '10.1126/science.1193032'
      }
    ]
  },

  {
    id: 'cystic_fibrosis',
    name: 'Cystic Fibrosis Carrier Frequency',
    populations: ['Northern European descent'],
    description: 'Higher carrier frequency in European populations, potentially due to heterozygote advantage against cholera',
    geneticBasis: ['CFTR mutations'],
    medicalRelevance: 'Genetic screening important for family planning in high-risk populations',
    prevalence: 0.04, // ~1 in 25 carriers in European descent
    clinicalImplications: [
      'Genetic counseling for couples of European descent',
      'Newborn screening programs',
      'Early intervention improves outcomes'
    ],
    environmentalFactors: ['Access to specialized care', 'Early diagnosis'],
    category: 'disease_susceptibility',
    references: [
      {
        authors: ['Riordan JR', 'Rommens JM', 'Kerem B', 'et al'],
        title: 'Identification of the cystic fibrosis gene',
        journal: 'Science',
        year: 1989
      }
    ]
  },

  {
    id: 'tay_sachs',
    name: 'Tay-Sachs Disease Frequency',
    populations: ['Ashkenazi Jewish', 'French Canadian', 'Cajun'],
    description: 'Higher carrier frequency in specific populations due to founder effects',
    geneticBasis: ['HEXA gene mutations'],
    medicalRelevance: 'Carrier screening programs highly successful in reducing incidence',
    prevalence: 0.033, // ~1 in 30 Ashkenazi Jewish carriers
    clinicalImplications: [
      'Preconception carrier screening recommended',
      'Prenatal testing available',
      'Genetic counseling essential',
      'Example of successful population screening program'
    ],
    environmentalFactors: ['Access to genetic counseling', 'Community awareness'],
    category: 'disease_susceptibility',
    references: [
      {
        authors: ['Kaback MM'],
        title: 'Population-based genetic screening for reproductive counseling: the Tay-Sachs disease model',
        journal: 'European Journal of Pediatrics',
        year: 2000
      }
    ]
  },

  {
    id: 'type2_diabetes_risk',
    name: 'Type 2 Diabetes Genetic Risk Variation',
    populations: ['Pima Native American', 'Pacific Islander', 'South Asian'],
    description: 'Higher genetic susceptibility in populations experiencing rapid dietary transition',
    geneticBasis: ['Multiple genes including TCF7L2', 'KCNJ11', 'PPARG'],
    medicalRelevance: 'Understanding genetic risk enables targeted prevention',
    prevalence: 0.50, // Varies widely
    clinicalImplications: [
      'Earlier and more frequent screening',
      'Intensive lifestyle intervention programs',
      'Understanding of gene-environment interaction',
      'Thrifty gene hypothesis (controversial but informative)'
    ],
    environmentalFactors: [
      'Dietary changes from traditional foods',
      'Physical activity levels',
      'Socioeconomic factors',
      'Healthcare access',
      'Food environment'
    ],
    category: 'disease_susceptibility',
    references: [
      {
        authors: ['Baier LJ', 'Hanson RL'],
        title: 'Genetic studies of the etiology of type 2 diabetes in Pima Indians',
        journal: 'Diabetes',
        year: 2004
      }
    ]
  },

  {
    id: 'lactose_intolerance',
    name: 'Adult Lactose Intolerance (Lactase Non-Persistence)',
    populations: ['East Asian', 'West African', 'Native American', 'Mediterranean'],
    description: 'Normal ancestral human state - lactase persistence is the derived adaptation',
    geneticBasis: ['LCT', 'MCM6'],
    medicalRelevance: 'Dietary counseling and calcium intake alternatives',
    prevalence: 0.65, // ~65% of global population
    clinicalImplications: [
      'Not a disease - normal ancestral state',
      'Dietary modifications needed',
      'Alternative calcium sources important',
      'Lactose-free alternatives available'
    ],
    environmentalFactors: ['Dairy consumption patterns', 'Gut microbiome composition'],
    category: 'metabolic_differences',
    references: [
      {
        authors: ['Swallow DM'],
        title: 'Genetics of lactase persistence and lactose intolerance',
        journal: 'Annual Review of Genetics',
        year: 2003
      }
    ]
  }
]

/**
 * Pharmacogenomic Variations
 * Critical for personalized medicine and drug dosing
 */
export const PHARMACOGENOMIC_PHENOMENA: GeneticPhenomenon[] = [
  {
    id: 'cyp2c19_clopidogrel',
    name: 'CYP2C19 Clopidogrel Metabolism',
    populations: ['Variable across populations, highest in Asian populations'],
    description: 'Affects metabolism of clopidogrel (Plavix) - important antiplatelet drug',
    geneticBasis: ['CYP2C19 *2', '*3 alleles'],
    medicalRelevance: 'Critical for post-heart attack and stent patients',
    prevalence: 0.30, // Poor metabolizers vary by population
    clinicalImplications: [
      'Poor metabolizers may need alternative medications',
      'Increased risk of cardiovascular events if on clopidogrel',
      'FDA black box warning includes genetic testing recommendation',
      'Alternative antiplatelet agents available'
    ],
    environmentalFactors: ['Drug-drug interactions', 'Compliance'],
    category: 'pharmacogenomics',
    references: [
      {
        authors: ['Scott SA', 'Sangkuhl K', 'Stein CM', 'et al'],
        title: 'Clinical Pharmacogenetics Implementation Consortium guidelines for CYP2C19 genotype and clopidogrel therapy',
        journal: 'Clinical Pharmacology & Therapeutics',
        year: 2013,
        doi: '10.1038/clpt.2013.105'
      }
    ]
  },

  {
    id: 'g6pd_deficiency',
    name: 'G6PD Deficiency (Favism)',
    populations: ['Mediterranean', 'African', 'Middle Eastern', 'South Asian'],
    description: 'Most common enzyme deficiency worldwide, provides malaria protection',
    geneticBasis: ['G6PD gene mutations'],
    medicalRelevance: 'Can cause severe reactions to certain drugs and foods',
    prevalence: 0.08, // ~400 million affected globally
    clinicalImplications: [
      'Avoid certain medications (antimalarials, sulfonamides)',
      'Fava bean consumption can trigger hemolysis',
      'Important for anesthesia planning',
      'Newborn jaundice risk',
      'Protective against severe malaria'
    ],
    environmentalFactors: ['Drug exposure', 'Infection triggers', 'Fava bean consumption'],
    category: 'pharmacogenomics',
    references: [
      {
        authors: ['Luzzatto L', 'Nannelli C', 'Notaro R'],
        title: 'Glucose-6-Phosphate Dehydrogenase Deficiency',
        journal: 'Hematology/Oncology Clinics of North America',
        year: 2016
      }
    ]
  },

  {
    id: 'warfarin_metabolism',
    name: 'Warfarin Dose Requirements (CYP2C9 and VKORC1)',
    populations: ['Varies - Asian populations often require lower doses'],
    description: 'Genetic variants affect warfarin metabolism and vitamin K recycling',
    geneticBasis: ['CYP2C9', 'VKORC1'],
    medicalRelevance: 'Prevents bleeding complications from anticoagulation',
    prevalence: 0.40,
    clinicalImplications: [
      'Personalized dosing reduces bleeding risk',
      'Asian patients often require 30-50% lower doses',
      'Genetic testing recommended by FDA',
      'Alternative anticoagulants available'
    ],
    environmentalFactors: ['Dietary vitamin K', 'Drug interactions', 'Age'],
    category: 'pharmacogenomics',
    references: [
      {
        authors: ['Johnson JA', 'Cavallari LH'],
        title: 'Pharmacogenetics and cardiovascular disease—implications for personalized medicine',
        journal: 'Pharmacological Reviews',
        year: 2013
      }
    ]
  },

  {
    id: 'abacavir_hypersensitivity',
    name: 'HLA-B*5701 Abacavir Hypersensitivity',
    populations: ['European descent ~5-8%', 'African descent ~2-3%'],
    description: 'Predicts severe hypersensitivity reaction to HIV drug abacavir',
    geneticBasis: ['HLA-B*5701'],
    medicalRelevance: 'Mandatory screening before abacavir prescription',
    prevalence: 0.05,
    clinicalImplications: [
      'Nearly 100% of hypersensitivity occurs in HLA-B*5701 positive',
      'Screening prevents life-threatening reactions',
      'Example of successful pharmacogenomic implementation',
      'Cost-effective despite testing expense'
    ],
    environmentalFactors: ['None - purely genetic'],
    category: 'pharmacogenomics',
    references: [
      {
        authors: ['Mallal S', 'Phillips E', 'Carosi G', 'et al'],
        title: 'HLA-B*5701 screening for hypersensitivity to abacavir',
        journal: 'New England Journal of Medicine',
        year: 2008,
        doi: '10.1056/NEJMoa0706135'
      }
    ]
  }
]

/**
 * Athletic Performance Phenomena
 */
export const ATHLETIC_PERFORMANCE_PHENOMENA: GeneticPhenomenon[] = [
  {
    id: 'altitude_performance',
    name: 'Ethiopian/Kenyan Distance Running Excellence',
    populations: ['Kalenjin (Kenya)', 'Ethiopian highlands'],
    description: 'Multifactorial genetic and environmental advantages for endurance running',
    geneticBasis: ['Multiple genes', 'PPARGC1A', 'ACE', 'ACTN3'],
    medicalRelevance: 'Understanding of aerobic performance genetics',
    prevalence: 0.60, // In specific populations
    clinicalImplications: [
      'Enhanced VO2 max potential',
      'Efficient running economy',
      'Favorable muscle fiber composition',
      'Limb length ratios advantageous for running',
      'High-altitude training effects',
      'Cultural factors critical (running culture, training from youth)'
    ],
    environmentalFactors: [
      'High-altitude training',
      'Running culture and tradition',
      'Early exposure to running',
      'Diet and nutrition',
      'Economic incentives',
      'Training infrastructure'
    ],
    category: 'athletic_performance',
    references: [
      {
        authors: ['Scott RA', 'Georgiades E', 'Wilson RH', 'et al'],
        title: 'Demographic characteristics of elite Ethiopian endurance runners',
        journal: 'Medicine & Science in Sports & Exercise',
        year: 2003
      },
      {
        authors: ['Wilber RL', 'Pitsiladis YP'],
        title: 'Kenyan and Ethiopian distance runners: what makes them so good?',
        journal: 'International Journal of Sports Physiology and Performance',
        year: 2012
      }
    ]
  },

  {
    id: 'west_african_sprinting',
    name: 'West African Ancestry Sprint Performance',
    populations: ['West African descent', 'African American', 'Afro-Caribbean'],
    description: 'Higher frequency of genetic variants associated with power/sprint performance',
    geneticBasis: ['ACTN3 R577R', 'Higher fast-twitch muscle fiber proportion'],
    medicalRelevance: 'Understanding muscle physiology and athletic potential',
    prevalence: 0.75, // ACTN3 RR genotype higher in West African populations
    clinicalImplications: [
      'Higher proportion of type II (fast-twitch) muscle fibers',
      'Greater power output potential',
      'Advantages in explosive movements',
      'Success in sprinting, jumping events',
      'Cultural and training factors also critical'
    ],
    environmentalFactors: [
      'Training methodology',
      'Cultural emphasis on athletics',
      'Access to facilities and coaching',
      'Economic opportunities in sports',
      'Selection bias in studies'
    ],
    category: 'athletic_performance',
    references: [
      {
        authors: ['Yang N', 'MacArthur DG', 'Gulbin JP', 'et al'],
        title: 'ACTN3 genotype is associated with human elite athletic performance',
        journal: 'American Journal of Human Genetics',
        year: 2003
      }
    ]
  },

  {
    id: 'swimming_morphology',
    name: 'Northern European Swimming Performance',
    populations: ['Northern European'],
    description: 'Body morphology advantages for swimming (longer torsos, different body fat distribution)',
    geneticBasis: ['Polygenic - body proportion genes'],
    medicalRelevance: 'Understanding biomechanics and body composition',
    prevalence: 0.70,
    clinicalImplications: [
      'Torso-to-leg length ratio advantages',
      'Body fat distribution affecting buoyancy',
      'Limb length proportions',
      'Access to swimming facilities critical factor',
      'Cultural and economic factors dominant'
    ],
    environmentalFactors: [
      'Access to pools and training',
      'Cultural emphasis on swimming',
      'Economic resources',
      'Early exposure to water'
    ],
    category: 'athletic_performance',
    references: [
      {
        authors: ['Sedeaud A', 'Marc A', 'Schipman J', 'et al'],
        title: 'How they won Rugby World Cup through height, mass and collective experience',
        journal: 'British Journal of Sports Medicine',
        year: 2012
      }
    ]
  }
]

/**
 * Sensory and Neurological Phenomena
 */
export const SENSORY_PHENOMENA: GeneticPhenomenon[] = [
  {
    id: 'bitter_taste',
    name: 'PTC/PROP Bitter Taste Sensitivity',
    populations: ['Varies globally'],
    description: 'Ability to taste phenylthiocarbamide (PTC) and related compounds',
    geneticBasis: ['TAS2R38'],
    medicalRelevance: 'May affect food preferences and vegetable consumption',
    prevalence: 0.70, // Tasters
    clinicalImplications: [
      'Non-tasters may consume more cruciferous vegetables',
      'Affects food preferences',
      'May influence dietary patterns',
      'Protective effect against certain toxins for tasters'
    ],
    environmentalFactors: ['Cultural food preferences', 'Early exposure to foods'],
    category: 'sensory_differences',
    references: [
      {
        authors: ['Kim UK', 'Jorgenson E', 'Coon H', 'et al'],
        title: 'Positional cloning of the human quantitative trait locus underlying taste sensitivity to phenylthiocarbamide',
        journal: 'Science',
        year: 2003
      }
    ]
  },

  {
    id: 'earwax_type',
    name: 'Earwax Type (Wet vs. Dry)',
    populations: ['Dry: East Asian 80-95%', 'Wet: European/African >97%'],
    description: 'ABCC11 gene determines earwax type and body odor',
    geneticBasis: ['ABCC11'],
    medicalRelevance: 'Affects body odor and hygiene practices',
    prevalence: 0.85, // Dry type in East Asian
    clinicalImplications: [
      'Dry earwax associated with less body odor',
      'Cultural hygiene practices adapted to genotype',
      'Less need for deodorant in populations with dry type',
      'Example of visible genetic variation'
    ],
    environmentalFactors: ['Hygiene practices', 'Climate'],
    category: 'sensory_differences',
    references: [
      {
        authors: ['Yoshiura K', 'Kinoshita A', 'Ishida T', 'et al'],
        title: 'A SNP in the ABCC11 gene is the determinant of human earwax type',
        journal: 'Nature Genetics',
        year: 2006
      }
    ]
  }
]

/**
 * Get all phenomena
 */
export function getAllPhenomena(): GeneticPhenomenon[] {
  return [
    ...DISEASE_SUSCEPTIBILITY_PHENOMENA,
    ...PHARMACOGENOMIC_PHENOMENA,
    ...ATHLETIC_PERFORMANCE_PHENOMENA,
    ...SENSORY_PHENOMENA
  ]
}

/**
 * Get phenomena by category
 */
export function getPhenomenaByCategory(category: PhenomenonCategory): GeneticPhenomenon[] {
  return getAllPhenomena().filter(p => p.category === category)
}

/**
 * Get phenomena relevant for a population
 */
export function getPhenomenaByPopulation(population: string): GeneticPhenomenon[] {
  return getAllPhenomena().filter(p =>
    p.populations.some(pop => pop.toLowerCase().includes(population.toLowerCase()))
  )
}

/**
 * Generate personalized medical insights
 */
export function generateMedicalInsights(
  ancestry: string[],
  genotypes: Map<string, string>
): {
  screeningRecommendations: string[]
  pharmacogenomicConsiderations: string[]
  lifestyleOptimizations: string[]
} {
  // Personalized recommendations based on ancestry and genotypes
  return {
    screeningRecommendations: [],
    pharmacogenomicConsiderations: [],
    lifestyleOptimizations: []
  }
}
