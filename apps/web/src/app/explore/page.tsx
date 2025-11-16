import Link from 'next/link'

export default function ExplorePage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-6">Explore Genetic Diversity</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Understanding Haplogroups</h2>
          <p className="text-lg mb-6">
            Haplogroups are genetic populations that share a common ancestor. They help us trace
            human migration patterns and understand our deep ancestral origins.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Y-DNA Haplogroups</h3>
              <p className="text-gray-600 mb-4">
                Passed from father to son, Y-DNA haplogroups trace your paternal lineage.
              </p>
              <div className="space-y-2">
                <p><strong>Major Groups:</strong></p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>A, B - African origins</li>
                  <li>C, D, E - African and Asian distribution</li>
                  <li>R1a, R1b - European and Central Asian</li>
                  <li>O - East and Southeast Asian</li>
                  <li>Q - Native American</li>
                </ul>
              </div>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">mtDNA Haplogroups</h3>
              <p className="text-gray-600 mb-4">
                Passed from mother to all children, mtDNA traces your maternal lineage.
              </p>
              <div className="space-y-2">
                <p><strong>Major Groups:</strong></p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>L0, L1, L2, L3 - African origins</li>
                  <li>M, N - Out-of-Africa founders</li>
                  <li>H, J, K, T, U, V, W - European</li>
                  <li>A, B, C, D - Asian and Native American</li>
                  <li>X - Rare, found in multiple regions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Migration Patterns</h2>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="mb-4">
              By analyzing haplogroups across populations, we can trace the great human migrations:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="font-semibold mr-2">70,000 years ago:</span>
                <span>Out of Africa migration begins</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">50,000 years ago:</span>
                <span>Settlement of Asia and Australia</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">40,000 years ago:</span>
                <span>Migration into Europe</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">15,000 years ago:</span>
                <span>Crossing into the Americas</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Unique Genetic Adaptations</h2>
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold mb-2">High-Altitude Adaptations</h3>
              <p className="text-gray-700">
                Tibetan populations have evolved unique genetic variants (EPAS1, EGLN1) that help
                them thrive at high altitudes with low oxygen levels.
              </p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold mb-2">Lactose Tolerance</h3>
              <p className="text-gray-700">
                The ability to digest lactose in adulthood evolved independently in multiple
                populations with dairy farming traditions.
              </p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold mb-2">Diving Adaptations</h3>
              <p className="text-gray-700">
                The Bajau people of Southeast Asia and Korean Haenyo divers show genetic adaptations
                affecting spleen size, enabling longer breath-holding underwater.
              </p>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold mb-2">Malaria Resistance</h3>
              <p className="text-gray-700">
                Genetic variants like sickle cell trait provide protection against malaria in
                regions where the disease is endemic.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Interactive Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Haplogroup Tree</h3>
              <p className="text-gray-600 mb-4">
                Explore the phylogenetic tree of human haplogroups
              </p>
              <button className="text-blue-600 hover:underline">Coming Soon</button>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Migration Map</h3>
              <p className="text-gray-600 mb-4">
                Visualize human migration patterns over time
              </p>
              <button className="text-blue-600 hover:underline">Coming Soon</button>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Population Stats</h3>
              <p className="text-gray-600 mb-4">
                View haplogroup distributions by region
              </p>
              <button className="text-blue-600 hover:underline">Coming Soon</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
