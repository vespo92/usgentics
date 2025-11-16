/**
 * Podcast References Database
 *
 * Comprehensive catalog of podcast episodes discussing genetics, neuroscience,
 * performance, and human variation from credible science communicators.
 *
 * These podcasts provide accessible explanations of complex scientific topics
 * and often feature leading researchers in their fields.
 */

export interface PodcastReference {
  id: string
  podcastName: string
  episodeTitle: string
  host: string
  guest?: string
  episodeNumber?: string
  releaseDate: string
  duration: string
  url: string
  spotifyUrl?: string
  youtubeUrl?: string
  appleUrl?: string
  description: string
  keyTopics: string[]
  relatedResearch: string[]
  timestamps?: PodcastTimestamp[]
  credibility: 'high' | 'medium'
  category: PodcastCategory
}

export interface PodcastTimestamp {
  time: string
  topic: string
  description: string
}

export type PodcastCategory =
  | 'genetics'
  | 'neuroscience'
  | 'performance'
  | 'health'
  | 'evolution'
  | 'nutrition'
  | 'sleep'
  | 'longevity'

/**
 * Andrew Huberman Lab Podcast Episodes
 *
 * Stanford neuroscientist discussing science-based tools for everyday life
 */
export const HUBERMAN_LAB_EPISODES: PodcastReference[] = [
  {
    id: 'huberman_dopamine',
    podcastName: 'Huberman Lab',
    episodeTitle: 'Controlling Your Dopamine For Motivation, Focus & Satisfaction',
    host: 'Dr. Andrew Huberman',
    episodeNumber: '#39',
    releaseDate: '2021-09-27',
    duration: '2:16:00',
    url: 'https://hubermanlab.com/controlling-your-dopamine-for-motivation-focus-and-satisfaction/',
    youtubeUrl: 'https://www.youtube.com/watch?v=QmOF0crdyRU',
    description: 'Deep dive into dopamine neuroscience, including genetic variations (COMT, DRD4) affecting dopamine processing and their impact on motivation and focus',
    keyTopics: [
      'Dopamine dynamics and motivation',
      'COMT gene (warrior vs worrier)',
      'Baseline dopamine vs peaks',
      'Dopamine and addiction',
      'Cold exposure and dopamine',
      'Supplements affecting dopamine'
    ],
    relatedResearch: ['COMT Val158Met', 'DRD4 novelty seeking', 'dopamine neuroscience'],
    timestamps: [
      {
        time: '0:08:00',
        topic: 'What dopamine really does',
        description: 'Explains dopamine as motivation molecule, not pleasure molecule'
      },
      {
        time: '1:15:30',
        topic: 'Genetic variations in dopamine',
        description: 'Discussion of COMT gene and individual differences in dopamine processing'
      },
      {
        time: '1:45:00',
        topic: 'Optimizing dopamine',
        description: 'Practical tools for managing dopamine levels'
      }
    ],
    credibility: 'high',
    category: 'neuroscience'
  },

  {
    id: 'huberman_learning',
    podcastName: 'Huberman Lab',
    episodeTitle: 'How to Learn Skills Faster',
    host: 'Dr. Andrew Huberman',
    episodeNumber: '#20',
    releaseDate: '2021-05-03',
    duration: '1:52:00',
    url: 'https://hubermanlab.com/how-to-learn-skills-faster/',
    youtubeUrl: 'https://www.youtube.com/watch?v=xJ0IBzCjEPk',
    description: 'Neuroplasticity mechanisms and how BDNF gene variations affect learning capacity',
    keyTopics: [
      'Neuroplasticity mechanisms',
      'BDNF and learning',
      'Sleep and memory consolidation',
      'Focus and attention',
      'Age-related learning differences',
      'Exercise and neuroplasticity'
    ],
    relatedResearch: ['BDNF Val66Met', 'neuroplasticity', 'learning genetics'],
    timestamps: [
      {
        time: '0:25:00',
        topic: 'BDNF and neuroplasticity',
        description: 'How brain-derived neurotrophic factor enables learning'
      },
      {
        time: '1:10:00',
        topic: 'Exercise and BDNF',
        description: 'How exercise dramatically increases BDNF production'
      }
    ],
    credibility: 'high',
    category: 'neuroscience'
  },

  {
    id: 'huberman_sleep',
    podcastName: 'Huberman Lab',
    episodeTitle: 'Master Your Sleep & Be More Alert When Awake',
    host: 'Dr. Andrew Huberman',
    episodeNumber: '#2',
    releaseDate: '2021-01-11',
    duration: '1:38:00',
    url: 'https://hubermanlab.com/master-your-sleep-and-be-more-alert-when-awake/',
    youtubeUrl: 'https://www.youtube.com/watch?v=nm1TxQj9IsQ',
    description: 'Sleep neuroscience including genetic variations in sleep need and circadian rhythms',
    keyTopics: [
      'Circadian rhythm biology',
      'Sleep architecture',
      'Genetic sleep variations',
      'Light exposure timing',
      'Temperature and sleep',
      'Supplements for sleep'
    ],
    relatedResearch: ['PER3 gene', 'circadian genetics', 'sleep neuroscience'],
    timestamps: [
      {
        time: '0:42:00',
        topic: 'Individual sleep needs',
        description: 'Why some people need more or less sleep - genetic factors'
      },
      {
        time: '1:15:00',
        topic: 'Chronotypes',
        description: 'Morning vs evening people - genetic basis'
      }
    ],
    credibility: 'high',
    category: 'sleep'
  },

  {
    id: 'huberman_attia_exercise',
    podcastName: 'Huberman Lab',
    episodeTitle: 'Dr. Peter Attia: Exercise, Nutrition, Hormones for Vitality & Longevity',
    host: 'Dr. Andrew Huberman',
    guest: 'Dr. Peter Attia',
    episodeNumber: '#85',
    releaseDate: '2022-08-29',
    duration: '3:12:00',
    url: 'https://hubermanlab.com/dr-peter-attia-exercise-nutrition-hormones-for-vitality-and-longevity/',
    youtubeUrl: 'https://www.youtube.com/watch?v=DTCmprPCDqc',
    description: 'Discussion of genetic variations in athletic performance, APOE variants, and personalized health optimization',
    keyTopics: [
      'Exercise physiology',
      'APOE genetics and Alzheimers',
      'VO2 max and longevity',
      'Zone 2 training',
      'Strength training benefits',
      'Metabolic health'
    ],
    relatedResearch: ['APOE variants', 'athletic performance genetics', 'longevity genetics'],
    timestamps: [
      {
        time: '0:35:00',
        topic: 'APOE genetics',
        description: 'Impact of APOE4 on Alzheimers risk and what to do about it'
      },
      {
        time: '1:20:00',
        topic: 'Genetic testing for health',
        description: 'Which genetic tests are actually useful'
      }
    ],
    credibility: 'high',
    category: 'longevity'
  },

  {
    id: 'huberman_stress',
    podcastName: 'Huberman Lab',
    episodeTitle: 'Tools for Managing Stress & Anxiety',
    host: 'Dr. Andrew Huberman',
    episodeNumber: '#10',
    releaseDate: '2021-03-01',
    duration: '1:43:00',
    url: 'https://hubermanlab.com/tools-for-managing-stress-and-anxiety/',
    youtubeUrl: 'https://www.youtube.com/watch?v=ntfcfJ28eiU',
    description: 'Stress biology and genetic variations in stress response (NPY, cortisol)',
    keyTopics: [
      'Stress physiology',
      'Cortisol dynamics',
      'NPY and resilience',
      'Breathing techniques',
      'Real-time stress management',
      'Long-term stress reduction'
    ],
    relatedResearch: ['NPY stress resilience', 'cortisol genetics', 'stress response'],
    timestamps: [
      {
        time: '0:28:00',
        topic: 'Genetic stress resilience',
        description: 'Individual differences in stress response - NPY and other factors'
      },
      {
        time: '1:05:00',
        topic: 'Physiological sigh',
        description: 'Most effective real-time stress reduction tool'
      }
    ],
    credibility: 'high',
    category: 'neuroscience'
  }
]

/**
 * Peter Attia Drive Podcast Episodes
 *
 * Physician focused on longevity, performance, and personalized medicine
 */
export const PETER_ATTIA_EPISODES: PodcastReference[] = [
  {
    id: 'attia_genetics',
    podcastName: 'The Peter Attia Drive',
    episodeTitle: 'The state of genetic testing and what it can (and can't) tell you about longevity',
    host: 'Dr. Peter Attia',
    guest: 'Robert Green, M.D., M.P.H.',
    episodeNumber: '#227',
    releaseDate: '2022-09-19',
    duration: '2:15:00',
    url: 'https://peterattiamd.com/robertgreen/',
    description: 'Comprehensive discussion of genetic testing, APOE variants, polygenic risk scores, and limitations of genetic prediction',
    keyTopics: [
      'APOE genetics and Alzheimers',
      'Polygenic risk scores',
      'Actionability of genetic information',
      'Genetic testing limitations',
      'Disease risk prediction',
      'Pharmacogenomics'
    ],
    relatedResearch: ['APOE variants', 'polygenic risk', 'genetic testing'],
    credibility: 'high',
    category: 'genetics'
  },

  {
    id: 'attia_performance',
    podcastName: 'The Peter Attia Drive',
    episodeTitle: 'Iñigo San Millán, Ph.D.: Mitochondria, exercise, and metabolic health',
    host: 'Dr. Peter Attia',
    guest: 'Dr. Iñigo San Millán',
    episodeNumber: '#193',
    releaseDate: '2022-02-07',
    duration: '2:45:00',
    url: 'https://peterattiamd.com/inigosanmillan2/',
    description: 'Elite athletic performance, lactate metabolism, and genetic factors in endurance',
    keyTopics: [
      'Lactate as fuel source',
      'Mitochondrial function',
      'Zone 2 training',
      'Elite athlete physiology',
      'Metabolic flexibility',
      'Genetic endowment vs training'
    ],
    relatedResearch: ['athletic performance genetics', 'mitochondrial genetics', 'endurance physiology'],
    credibility: 'high',
    category: 'performance'
  },

  {
    id: 'attia_pharmacogenomics',
    podcastName: 'The Peter Attia Drive',
    episodeTitle: 'AMA #30: Cholesterol and cardiovascular disease—how does one inform the other?',
    host: 'Dr. Peter Attia',
    episodeNumber: '#173',
    releaseDate: '2021-09-13',
    duration: '1:38:00',
    url: 'https://peterattiamd.com/ama30/',
    description: 'Genetic variants affecting cholesterol metabolism and cardiovascular disease risk',
    keyTopics: [
      'APOB genetics',
      'Familial hypercholesterolemia',
      'PCSK9 variants',
      'Genetic cardiovascular risk',
      'Statin response genetics',
      'Lipoprotein(a) genetics'
    ],
    relatedResearch: ['APOB variants', 'PCSK9 genetics', 'cardiovascular genetics'],
    credibility: 'high',
    category: 'health'
  }
]

/**
 * Lex Fridman Podcast Episodes
 *
 * AI researcher interviewing leading scientists and thinkers
 */
export const LEX_FRIDMAN_EPISODES: PodcastReference[] = [
  {
    id: 'lex_reich',
    podcastName: 'Lex Fridman Podcast',
    episodeTitle: 'David Reich: Genetics, Ancient DNA, & the New History of the Human Race',
    host: 'Lex Fridman',
    guest: 'David Reich',
    episodeNumber: '#268',
    releaseDate: '2022-03-04',
    duration: '2:31:00',
    url: 'https://lexfridman.com/david-reich/',
    youtubeUrl: 'https://www.youtube.com/watch?v=BtEBMGSDq6o',
    description: 'Leading geneticist discusses ancient DNA, human migration, population genetics, and genetic differences between populations',
    keyTopics: [
      'Ancient DNA revolution',
      'Human migration patterns',
      'Population genetics',
      'Genetic ancestry',
      'Neanderthal admixture',
      'Genetic differences and controversy'
    ],
    relatedResearch: ['population genetics', 'ancient DNA', 'human migration'],
    timestamps: [
      {
        time: '0:45:00',
        topic: 'Genetic differences between populations',
        description: 'Nuanced discussion of population-level genetic variation'
      },
      {
        time: '1:35:00',
        topic: 'Ancient admixture events',
        description: 'How different human populations mixed throughout history'
      }
    ],
    credibility: 'high',
    category: 'genetics'
  },

  {
    id: 'lex_sapolsky',
    podcastName: 'Lex Fridman Podcast',
    episodeTitle: 'Robert Sapolsky: Neuroscience of Aggression, Free Will, & Behavioral Biology',
    host: 'Lex Fridman',
    guest: 'Robert Sapolsky',
    episodeNumber: '#390',
    releaseDate: '2023-07-05',
    duration: '3:07:00',
    url: 'https://lexfridman.com/robert-sapolsky-2/',
    youtubeUrl: 'https://www.youtube.com/watch?v=6MmyN63IXhE',
    description: 'Stanford neuroscientist on behavioral genetics, MAOA gene, testosterone, and biological basis of behavior',
    keyTopics: [
      'Behavioral genetics',
      'MAOA "warrior gene"',
      'Testosterone and aggression',
      'Gene-environment interactions',
      'Free will and biology',
      'Stress physiology'
    ],
    relatedResearch: ['MAOA gene', 'behavioral genetics', 'gene-environment interaction'],
    timestamps: [
      {
        time: '0:52:00',
        topic: 'MAOA gene and aggression',
        description: 'Why "warrior gene" is misleading - critical role of environment'
      },
      {
        time: '1:40:00',
        topic: 'Genetics and behavior',
        description: 'How genes influence but don\'t determine behavior'
      }
    ],
    credibility: 'high',
    category: 'neuroscience'
  }
]

/**
 * Rhonda Patrick FoundMyFitness Episodes
 *
 * PhD in biomedical science discussing nutrition, genetics, and health optimization
 */
export const FOUND_MY_FITNESS_EPISODES: PodcastReference[] = [
  {
    id: 'fmf_apoe',
    podcastName: 'FoundMyFitness',
    episodeTitle: 'APOE Gene: The Single Most Important Gene for Longevity',
    host: 'Dr. Rhonda Patrick',
    releaseDate: '2019-03-12',
    duration: '0:45:00',
    url: 'https://www.foundmyfitness.com/episodes/apoe-longevity',
    description: 'Deep dive into APOE genetics, Alzheimers risk, and actionable interventions',
    keyTopics: [
      'APOE4 and Alzheimers',
      'APOE variants explained',
      'Dietary interventions for APOE4',
      'Exercise and APOE',
      'Omega-3 and genetics',
      'Personalized prevention'
    ],
    relatedResearch: ['APOE variants', 'Alzheimers genetics', 'personalized nutrition'],
    credibility: 'high',
    category: 'genetics'
  },

  {
    id: 'fmf_mthfr',
    podcastName: 'FoundMyFitness',
    episodeTitle: 'MTHFR Gene Variants: What You Need to Know',
    host: 'Dr. Rhonda Patrick',
    releaseDate: '2018-11-20',
    duration: '0:38:00',
    url: 'https://www.foundmyfitness.com/episodes/mthfr',
    description: 'MTHFR genetic variants affecting folate metabolism and health implications',
    keyTopics: [
      'MTHFR variants',
      'Folate metabolism',
      'Methylation genetics',
      'Supplementation strategies',
      'Homocysteine and cardiovascular risk',
      'Population frequency'
    ],
    relatedResearch: ['MTHFR genetics', 'folate metabolism', 'nutrigenomics'],
    credibility: 'high',
    category: 'genetics'
  }
]

/**
 * Rich Roll Podcast Episodes
 *
 * Ultra-endurance athlete discussing performance, nutrition, and human potential
 */
export const RICH_ROLL_EPISODES: PodcastReference[] = [
  {
    id: 'richroll_noakes',
    podcastName: 'Rich Roll Podcast',
    episodeTitle: 'Tim Noakes On Extreme Performance, Genetics & Running',
    host: 'Rich Roll',
    guest: 'Dr. Tim Noakes',
    episodeNumber: '#315',
    releaseDate: '2017-11-20',
    duration: '2:18:00',
    url: 'https://www.richroll.com/podcast/tim-noakes-315/',
    description: 'Exercise physiologist discusses genetic factors in athletic performance, particularly endurance',
    keyTopics: [
      'Central governor theory',
      'Genetic limits of performance',
      'East African running dominance',
      'Training vs genetics',
      'VO2 max genetics',
      'Muscle fiber types'
    ],
    relatedResearch: ['athletic performance genetics', 'endurance genetics', 'VO2 max'],
    credibility: 'high',
    category: 'performance'
  }
]

/**
 * All Podcast References
 */
export function getAllPodcastReferences(): PodcastReference[] {
  return [
    ...HUBERMAN_LAB_EPISODES,
    ...PETER_ATTIA_EPISODES,
    ...LEX_FRIDMAN_EPISODES,
    ...FOUND_MY_FITNESS_EPISODES,
    ...RICH_ROLL_EPISODES
  ]
}

/**
 * Get podcasts by category
 */
export function getPodcastsByCategory(category: PodcastCategory): PodcastReference[] {
  return getAllPodcastReferences().filter(p => p.category === category)
}

/**
 * Get podcasts by topic
 */
export function getPodcastsByTopic(topic: string): PodcastReference[] {
  const lowerTopic = topic.toLowerCase()
  return getAllPodcastReferences().filter(p =>
    p.keyTopics.some(t => t.toLowerCase().includes(lowerTopic)) ||
    p.description.toLowerCase().includes(lowerTopic)
  )
}

/**
 * Get podcasts by host
 */
export function getPodcastsByHost(host: string): PodcastReference[] {
  return getAllPodcastReferences().filter(p =>
    p.host.toLowerCase().includes(host.toLowerCase())
  )
}

/**
 * Get podcasts related to research topic
 */
export function getPodcastsForResearch(researchTopic: string): PodcastReference[] {
  const lowerTopic = researchTopic.toLowerCase()
  return getAllPodcastReferences().filter(p =>
    p.relatedResearch.some(r => r.toLowerCase().includes(lowerTopic))
  )
}

/**
 * Search all podcasts
 */
export function searchPodcasts(query: string): PodcastReference[] {
  const lowerQuery = query.toLowerCase()
  return getAllPodcastReferences().filter(p =>
    p.episodeTitle.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.guest?.toLowerCase().includes(lowerQuery) ||
    p.keyTopics.some(t => t.toLowerCase().includes(lowerQuery))
  )
}
