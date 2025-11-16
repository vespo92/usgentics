'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState<string>('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setUploadStatus('')
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setUploading(true)
    setUploadStatus('Uploading and processing your genetic data...')

    try {
      const formData = new FormData()
      formData.append('genome', file)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        const data = await response.json()
        setUploadStatus(`Success! Analysis ID: ${data.analysisId}`)
      } else {
        setUploadStatus('Upload failed. Please try again.')
      }
    } catch (error) {
      setUploadStatus('An error occurred during upload.')
    } finally {
      setUploading(false)
    }
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-6">Upload Your Genome</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Supported File Formats</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>23andMe raw data (.txt, .zip)</li>
            <li>AncestryDNA raw data (.txt, .zip)</li>
            <li>VCF files (.vcf, .vcf.gz)</li>
            <li>FASTQ files (.fastq, .fq)</li>
            <li>BAM files (.bam)</li>
            <li>FASTA files (.fasta, .fa)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Privacy & Security</h2>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="mb-2">
              <strong>Your data is secure:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>All data is encrypted in transit and at rest</li>
              <li>You maintain full ownership of your genetic data</li>
              <li>You can delete your data at any time</li>
              <li>We never share your data without explicit consent</li>
              <li>All analysis is done anonymously when contributing to research</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Upload Your File</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
            <input
              type="file"
              onChange={handleFileChange}
              accept=".txt,.zip,.vcf,.vcf.gz,.fastq,.fq,.bam,.fasta,.fa,.23andme,.ancestry"
              className="mb-4"
            />

            {file && (
              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  Selected file: <strong>{file.name}</strong> ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </p>
              </div>
            )}

            <button
              onClick={handleUpload}
              disabled={!file || uploading}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {uploading ? 'Uploading...' : 'Upload and Analyze'}
            </button>

            {uploadStatus && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p>{uploadStatus}</p>
              </div>
            )}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">What Happens Next?</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-1">Upload & Validation</h3>
                <p className="text-gray-600">
                  Your file is securely uploaded and validated for correct format.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-1">Haplogroup Analysis</h3>
                <p className="text-gray-600">
                  We identify your Y-DNA and mtDNA haplogroups to trace your ancestral origins.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-1">Genetic Markers</h3>
                <p className="text-gray-600">
                  Analysis of specific SNPs related to health, traits, and ancestry.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-semibold mb-1">Environmental Correlations</h3>
                <p className="text-gray-600">
                  Optional tracking of environmental factors and their potential genetic impacts.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
