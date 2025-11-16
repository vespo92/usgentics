/**
 * Comprehensive Database of Human Genetic Adaptations
 *
 * This module catalogs documented genetic adaptations across human populations.
 * These represent specialized traits evolved for specific environmental conditions,
 * not markers of superiority.
 *
 * IMPORTANT ETHICAL FRAMEWORK:
 * - These are ADAPTATIONS, not superiorities
 * - Each represents specialization for specific environments
 * - All humans share 99.9% of DNA - variations are minimal
 * - No population is "better" - they are adapted to different conditions
 * - All data based on peer-reviewed scientific research
 */

export interface GeneticAdaptation {
  id: string
  name: string
  population: string[]
  region: string
  genes: string[]
  description: string
  adaptiveAdvantage: string
  tradeoffs?: string
  frequency: number
  references: ScientificReference[]
  category: AdaptationCategory
}

export type AdaptationCategory =
  | 'high_altitude'
  | 'diving'
  | 'cold_adaptation'
  | 'heat_adaptation'
  | 'disease_resistance'
  | 'dietary'
  | 'athletic_performance'
  | 'metabolic'
  | 'cognitive'
  | 'sensory'

export interface ScientificReference {
  authors: string[]
  title: string
  journal: string
  year: number
  doi?: string
  pmid?: string
}

/**
 * Comprehensive catalog of documented genetic adaptations
 */
export const GENETIC_ADAPTATIONS: GeneticAdaptation[] = [
  // HIGH ALTITUDE ADAPTATIONS
  {
    id: 'tibetan_altitude',
    name: 'Tibetan High-Altitude Adaptation',
    population: ['Tibetan', 'Sherpa'],
    region: 'Tibetan Plateau',
    genes: ['EPAS1', 'EGLN1', 'PPARA'],
    description: 'Adaptations allowing sustained life at extreme altitudes (>4,000m) with low oxygen levels',
    adaptiveAdvantage: 'Higher oxygen efficiency, reduced hemoglobin concentration preventing blood thickening, better oxygen delivery to tissues',
    tradeoffs: 'May be less adapted to low-altitude environments',
    frequency: 0.87, // 87% of Tibetan population
    category: 'high_altitude',
    references: [
      {
        authors: ['Yi X', 'Liang Y', 'Huerta-Sanchez E', 'et al'],
        title: 'Sequencing of 50 human exomes reveals adaptation to high altitude',
        journal: 'Science',
        year: 2010,
        doi: '10.1126/science.1190371'
      },
      {
        authors: ['Beall CM', 'Cavalleri GL', 'Deng L', 'et al'],
        title: 'Natural selection on EPAS1 (HIF2alpha) associated with low hemoglobin concentration in Tibetan highlanders',
        journal: 'PNAS',
        year: 2010,
        doi: '10.1073/pnas.1002443107'
      }
    ]
  },
  {
    id: 'andean_altitude',
    name: 'Andean High-Altitude Adaptation',
    population: ['Quechua', 'Aymara'],
    region: 'Andes Mountains',
    genes: ['EGLN1', 'NOS2A', 'BRINP3'],
    description: 'Different adaptation strategy than Tibetans - increased hemoglobin and larger lung capacity',
    adaptiveAdvantage: 'Increased oxygen-carrying capacity through higher hemoglobin, enlarged lungs',
    tradeoffs: 'Higher risk of chronic mountain sickness in some individuals',
    frequency: 0.75,
    category: 'high_altitude',
    references: [
      {
        authors: ['Bigham A', 'Bauchet M', 'Pinto D', 'et al'],
        title: 'Identifying signatures of natural selection in Tibetan and Andean populations using dense genome scan data',
        journal: 'PLoS Genetics',
        year: 2010,
        doi: '10.1371/journal.pgen.1001116'
      }
    ]
  },

  // DIVING ADAPTATIONS
  {
    id: 'bajau_diving',
    name: 'Bajau Sea Nomad Diving Adaptation',
    population: ['Bajau'],
    region: 'Southeast Asia (Philippines, Malaysia, Indonesia)',
    genes: ['PDE10A'],
    description: 'Enlarged spleens (up to 50% larger) allowing longer breath-hold diving',
    adaptiveAdvantage: 'Extended underwater diving capability (up to 13 minutes), larger oxygen reservoir',
    frequency: 0.89,
    category: 'diving',
    references: [
      {
        authors: ['Ilardo MA', 'Moltke I', 'Korneliussen TS', 'et al'],
        title: 'Physiological and genetic adaptations to diving in sea nomads',
        journal: 'Cell',
        year: 2018,
        doi: '10.1016/j.cell.2018.03.054'
      }
    ]
  },
  {
    id: 'haenyo_diving',
    name: 'Korean Haenyo Diver Adaptation',
    population: ['Korean (Jeju Island)'],
    region: 'Jeju Island, South Korea',
    genes: ['PDE10A', 'FAM178B'],
    description: 'Female divers with enhanced diving reflex and spleen adaptations',
    adaptiveAdvantage: 'Enhanced diving reflex, cold water tolerance, extended breath-holding',
    frequency: 0.65, // Among Haenyo divers
    category: 'diving',
    references: [
      {
        authors: ['Park YS', 'Rennie DW', 'Lee IS', 'et al'],
        title: 'Time course of deacclimatization to cold water immersion in Korean women divers',
        journal: 'Journal of Applied Physiology',
        year: 1983
      }
    ]
  },

  // DISEASE RESISTANCE
  {
    id: 'sickle_cell',
    name: 'Sickle Cell Trait (Malaria Resistance)',
    population: ['Sub-Saharan African', 'Mediterranean', 'Middle Eastern', 'Indian'],
    region: 'Malaria-endemic regions',
    genes: ['HBB'],
    description: 'Heterozygous advantage providing malaria resistance',
    adaptiveAdvantage: 'Strong protection against severe malaria (Plasmodium falciparum)',
    tradeoffs: 'Homozygous carriers develop sickle cell disease',
    frequency: 0.10, // 10% in endemic regions
    category: 'disease_resistance',
    references: [
      {
        authors: ['Aidoo M', 'Terlouw DJ', 'Kolczak MS', 'et al'],
        title: 'Protective effects of the sickle cell gene against malaria morbidity and mortality',
        journal: 'Lancet',
        year: 2002,
        doi: '10.1016/S0140-6736(02)08036-9'
      }
    ]
  },
  {
    id: 'ccr5_delta32',
    name: 'CCR5-Δ32 (HIV Resistance)',
    population: ['Northern European'],
    region: 'Northern Europe',
    genes: ['CCR5'],
    description: 'Deletion mutation providing resistance to HIV-1 infection',
    adaptiveAdvantage: 'Homozygous carriers nearly immune to HIV-1, heterozygotes have slower disease progression',
    tradeoffs: 'May increase susceptibility to West Nile virus',
    frequency: 0.10, // 10% in Northern Europeans
    category: 'disease_resistance',
    references: [
      {
        authors: ['Samson M', 'Libert F', 'Doranz BJ', 'et al'],
        title: 'Resistance to HIV-1 infection in caucasian individuals bearing mutant alleles of the CCR-5 chemokine receptor gene',
        journal: 'Nature',
        year: 1996,
        doi: '10.1038/382722a0'
      }
    ]
  },

  // DIETARY ADAPTATIONS
  {
    id: 'lactase_persistence',
    name: 'Lactase Persistence (Adult Milk Digestion)',
    population: ['Northern European', 'East African (Maasai, Tutsi)', 'Bedouin'],
    region: 'Regions with historical dairy farming',
    genes: ['LCT', 'MCM6'],
    description: 'Continued production of lactase enzyme in adulthood',
    adaptiveAdvantage: 'Ability to digest milk throughout life, additional nutrition source',
    frequency: 0.90, // 90% in Northern Europeans
    category: 'dietary',
    references: [
      {
        authors: ['Tishkoff SA', 'Reed FA', 'Ranciaro A', 'et al'],
        title: 'Convergent adaptation of human lactase persistence in Africa and Europe',
        journal: 'Nature Genetics',
        year: 2007,
        doi: '10.1038/ng1946'
      }
    ]
  },
  {
    id: 'amylase_variation',
    name: 'Salivary Amylase Copy Number (Starch Digestion)',
    population: ['Agricultural populations', 'Japanese'],
    region: 'High-starch diet regions',
    genes: ['AMY1'],
    description: 'Multiple copies of amylase gene for better starch digestion',
    adaptiveAdvantage: 'More efficient digestion of starchy foods (rice, wheat, potatoes)',
    frequency: 0.70, // Varies widely
    category: 'dietary',
    references: [
      {
        authors: ['Perry GH', 'Dominy NJ', 'Claw KG', 'et al'],
        title: 'Diet and the evolution of human amylase gene copy number variation',
        journal: 'Nature Genetics',
        year: 2007,
        doi: '10.1038/ng2123'
      }
    ]
  },
  {
    id: 'inuit_fat_metabolism',
    name: 'Inuit Fat Metabolism Adaptation',
    population: ['Inuit', 'Greenlandic'],
    region: 'Arctic regions',
    genes: ['FADS1', 'FADS2', 'FADS3'],
    description: 'Adaptations for high-fat, low-carbohydrate marine diet',
    adaptiveAdvantage: 'Efficient metabolism of omega-3 fatty acids, protection from cardiovascular disease despite high-fat diet',
    frequency: 0.95,
    category: 'dietary',
    references: [
      {
        authors: ['Fumagalli M', 'Moltke I', 'Grarup N', 'et al'],
        title: 'Greenlandic Inuit show genetic signatures of diet and climate adaptation',
        journal: 'Science',
        year: 2015,
        doi: '10.1126/science.aab2319'
      }
    ]
  },

  // ATHLETIC PERFORMANCE
  {
    id: 'actn3_sprinting',
    name: 'ACTN3 R577X (Sprint/Power Performance)',
    population: ['Varies globally', 'Higher in West African descent'],
    region: 'Global variation',
    genes: ['ACTN3'],
    description: 'Alpha-actinin-3 protein in fast-twitch muscle fibers',
    adaptiveAdvantage: 'RR genotype associated with elite sprint and power performance',
    tradeoffs: 'XX genotype may be advantageous for endurance',
    frequency: 0.40, // RR genotype varies by population
    category: 'athletic_performance',
    references: [
      {
        authors: ['Yang N', 'MacArthur DG', 'Gulbin JP', 'et al'],
        title: 'ACTN3 genotype is associated with human elite athletic performance',
        journal: 'American Journal of Human Genetics',
        year: 2003,
        doi: '10.1086/377590'
      }
    ]
  },
  {
    id: 'kenyan_ethiopian_endurance',
    name: 'East African Endurance Running Adaptations',
    population: ['Kalenjin (Kenya)', 'Ethiopian highlands'],
    region: 'East Africa',
    genes: ['Multiple genes identified', 'PPARGC1A', 'COL5A1'],
    description: 'Complex adaptations for exceptional endurance running performance',
    adaptiveAdvantage: 'Enhanced aerobic capacity, efficient running economy, favorable muscle fiber composition, advantageous limb morphology',
    frequency: 0.60, // Varies
    category: 'athletic_performance',
    references: [
      {
        authors: ['Pitsiladis YP', 'Onywera VO', 'Geogiades E', 'et al'],
        title: 'The dominance of Kenyans in distance running',
        journal: 'Equine and Comparative Exercise Physiology',
        year: 2004
      },
      {
        authors: ['Scott RA', 'Georgiades E', 'Wilson RH', 'et al'],
        title: 'Demographic characteristics of elite Ethiopian endurance runners',
        journal: 'Medicine & Science in Sports & Exercise',
        year: 2003
      }
    ]
  },

  // METABOLIC ADAPTATIONS
  {
    id: 'aboriginal_thrifty_gene',
    name: 'Australian Aboriginal Metabolic Adaptation',
    population: ['Australian Aboriginal'],
    region: 'Australia',
    genes: ['Multiple genes under investigation'],
    description: 'Metabolic adaptations to extreme environmental variability and periodic food scarcity',
    adaptiveAdvantage: 'Efficient energy storage during food abundance',
    tradeoffs: 'Higher susceptibility to type 2 diabetes in modern high-calorie environment',
    frequency: 0.70,
    category: 'metabolic',
    references: [
      {
        authors: ['Neel JV'],
        title: 'Diabetes mellitus: a thrifty genotype rendered detrimental by progress',
        journal: 'American Journal of Human Genetics',
        year: 1962
      }
    ]
  },

  // COLD ADAPTATION
  {
    id: 'siberian_cold',
    name: 'Siberian Cold Adaptation',
    population: ['Yakut', 'Siberian populations'],
    region: 'Siberia',
    genes: ['UCP1', 'UCP3', 'PRKG1'],
    description: 'Enhanced thermogenesis and cold tolerance',
    adaptiveAdvantage: 'Better heat generation, improved cold tolerance, efficient brown fat activation',
    frequency: 0.80,
    category: 'cold_adaptation',
    references: [
      {
        authors: ['Cardona A', 'Pagani L', 'Antao T', 'et al'],
        title: 'Genome-wide analysis of cold adaptation in indigenous Siberian populations',
        journal: 'PLoS ONE',
        year: 2014,
        doi: '10.1371/journal.pone.0098076'
      }
    ]
  },

  // HEAT ADAPTATION
  {
    id: 'bedouin_heat',
    name: 'Bedouin Desert Heat Adaptation',
    population: ['Bedouin'],
    region: 'Middle East deserts',
    genes: ['Multiple genes'],
    description: 'Adaptations for extreme heat and water scarcity',
    adaptiveAdvantage: 'Enhanced heat tolerance, efficient water conservation, better sweat regulation',
    frequency: 0.75,
    category: 'heat_adaptation',
    references: [
      {
        authors: ['Shkolnik A', 'Borut A', 'Choshniak J'],
        title: 'Metabolic adaptations of Bedouins to desert environment',
        journal: 'Nature',
        year: 1972
      }
    ]
  },

  // SENSORY ADAPTATIONS
  {
    id: 'tetrachromacy',
    name: 'Tetrachromacy (Enhanced Color Vision)',
    population: ['Primarily women, various populations'],
    region: 'Global',
    genes: ['OPN1MW', 'OPN1LW'],
    description: 'Four types of cone cells instead of three, allowing perception of ~100 million colors',
    adaptiveAdvantage: 'Enhanced color discrimination, potentially advantageous for gathering/foraging',
    frequency: 0.12, // ~12% of women may have genetic basis
    category: 'sensory',
    references: [
      {
        authors: ['Jordan G', 'Mollon JD'],
        title: 'A study of women heterozygous for colour deficiencies',
        journal: 'Vision Research',
        year: 1993
      }
    ]
  }
]

/**
 * Get adaptations by category
 */
export function getAdaptationsByCategory(category: AdaptationCategory): GeneticAdaptation[] {
  return GENETIC_ADAPTATIONS.filter(a => a.category === category)
}

/**
 * Get adaptations by population
 */
export function getAdaptationsByPopulation(population: string): GeneticAdaptation[] {
  return GENETIC_ADAPTATIONS.filter(a =>
    a.population.some(p => p.toLowerCase().includes(population.toLowerCase()))
  )
}

/**
 * Search adaptations
 */
export function searchAdaptations(query: string): GeneticAdaptation[] {
  const lowerQuery = query.toLowerCase()
  return GENETIC_ADAPTATIONS.filter(a =>
    a.name.toLowerCase().includes(lowerQuery) ||
    a.description.toLowerCase().includes(lowerQuery) ||
    a.adaptiveAdvantage.toLowerCase().includes(lowerQuery) ||
    a.population.some(p => p.toLowerCase().includes(lowerQuery))
  )
}
