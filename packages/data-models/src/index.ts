/**
 * Shared data models and types for the USGentics platform
 */

export interface User {
  id: string
  email: string
  createdAt: Date
  updatedAt: Date
}

export interface GenomeUpload {
  id: string
  userId: string
  filename: string
  fileSize: number
  fileType: 'vcf' | '23andme' | 'ancestry' | 'fastq' | 'bam' | 'fasta' | 'other'
  uploadedAt: Date
  status: 'uploading' | 'processing' | 'completed' | 'failed'
  analysisId?: string
}

export interface GeneticAnalysis {
  id: string
  userId: string
  uploadId: string
  status: 'pending' | 'processing' | 'completed' | 'failed'
  createdAt: Date
  completedAt?: Date
  results?: AnalysisResults
}

export interface AnalysisResults {
  haplogroup?: HaplogroupResults
  mtDNA?: MtDNAResults
  ancestry?: AncestryResults
  traits?: TraitResults[]
  adaptations?: AdaptationResults[]
  health?: HealthResults[]
}

export interface HaplogroupResults {
  yDNA?: {
    haplogroup: string
    subclade: string
    confidence: number
    description: string
  }
  mtDNA?: {
    haplogroup: string
    subclade: string
    confidence: number
    description: string
  }
}

export interface MtDNAResults {
  haplogroup: string
  macrohaplogroup: string
  age: string
  region: string
  mutations: Array<{
    position: number
    mutation: string
  }>
}

export interface AncestryResults {
  composition: Array<{
    region: string
    percentage: number
  }>
  populations: Array<{
    name: string
    percentage: number
  }>
}

export interface TraitResults {
  name: string
  genotype: string
  phenotype: string
  confidence: string
}

export interface AdaptationResults {
  name: string
  status: string
  genes: string[]
  description?: string
}

export interface HealthResults {
  condition: string
  risk: string
  confidence: string
  snps: string[]
}

export interface EnvironmentalData {
  id: string
  userId: string
  timestamp: Date
  category: 'diet' | 'air_quality' | 'radiation' | 'materials' | 'other'
  data: Record<string, any>
}

export interface Phenomenon {
  id: string
  name: string
  description: string
  category: 'genetic_adaptation' | 'rare_variant' | 'population_specific' | 'other'
  frequency: number
  affectedGenes: string[]
  examples: string[]
}
