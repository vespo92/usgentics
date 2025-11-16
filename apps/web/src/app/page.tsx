import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">USGentics</h1>
          <p className="text-xl text-gray-600">
            Exploring Human Genetic Diversity and Evolution
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            USGentics is a non-biased, scientific platform dedicated to understanding human genetic diversity,
            ancestry, and the environmental factors that shape our evolution as a species.
          </p>
          <p className="text-lg">
            We provide tools to explore:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Haplogroups and ancestral origins</li>
            <li>Mitochondrial DNA (mtDNA) lineages</li>
            <li>Environmental impacts (food, air quality, radiation, materials)</li>
            <li>Genetic adaptations and unique phenotypes</li>
            <li>The ongoing evolution of our species</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/upload" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Upload Genome</h3>
              <p className="text-gray-600">
                Upload your genetic data from 23andMe, Ancestry, or other providers
              </p>
            </Link>

            <Link href="/explore" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Explore Data</h3>
              <p className="text-gray-600">
                Discover insights about haplogroups and genetic diversity
              </p>
            </Link>

            <Link href="/environmental" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Environmental Factors</h3>
              <p className="text-gray-600">
                Track how diet, environment, and lifestyle affect genetic expression
              </p>
            </Link>

            <Link href="/research" className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-blue-50">
              <h3 className="text-xl font-semibold mb-2">Research Databases</h3>
              <p className="text-gray-600">
                Explore comprehensive genetic adaptations and scientific research
              </p>
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Understanding Modern Genetic Changes</h2>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold mb-2">Changing Gut Biomes</h3>
              <p className="text-gray-700">
                As humanity becomes more globally connected, our gut microbiomes are adapting to
                diverse food sources from around the world, creating unique challenges and opportunities.
              </p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold mb-2">Rapid Interbreeding</h3>
              <p className="text-gray-700">
                Global migration and cultural exchange are leading to unprecedented genetic diversity
                in populations worldwide.
              </p>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold mb-2">Unique Genetic Adaptations</h3>
              <p className="text-gray-700">
                We study remarkable examples like the Haenyo Korean diver women, who have unique
                genetic profiles affecting their spleen that enable deeper diving capabilities.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Ethical Commitment</h2>
          <p className="text-lg">
            We are committed to scientific integrity, privacy protection, and presenting genetic
            information in a responsible, non-biased manner. All data is handled with the highest
            standards of security and ethics.
          </p>
        </section>
      </div>
    </main>
  )
}
