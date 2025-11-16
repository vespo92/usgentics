import Link from 'next/link'

export default function EnvironmentalPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-6">Environmental Factors & Epigenetics</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Understanding Environmental Impact</h2>
          <p className="text-lg mb-6">
            While our DNA provides the blueprint, environmental factors can influence how genes are
            expressed through epigenetic modifications. Understanding these interactions helps us
            comprehend human health and evolution in modern contexts.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Key Environmental Factors</h2>

          <div className="space-y-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Nutrition & Diet</h3>
              <p className="text-gray-700 mb-4">
                Our globalized food system exposes us to diverse dietary patterns, affecting gut
                microbiome composition and potentially influencing genetic expression.
              </p>
              <div className="bg-blue-50 p-4 rounded">
                <p className="font-semibold mb-2">Track:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Dietary patterns and food sources</li>
                  <li>Gut microbiome composition</li>
                  <li>Nutrient absorption variations</li>
                  <li>Food sensitivities and intolerances</li>
                </ul>
              </div>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Air Quality</h3>
              <p className="text-gray-700 mb-4">
                Exposure to pollutants, particulate matter, and varying air quality can affect
                respiratory health and potentially influence epigenetic markers.
              </p>
              <div className="bg-green-50 p-4 rounded">
                <p className="font-semibold mb-2">Track:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>PM2.5 and PM10 exposure levels</li>
                  <li>Ozone and nitrogen dioxide levels</li>
                  <li>Indoor vs outdoor air quality</li>
                  <li>Geographic location history</li>
                </ul>
              </div>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Radiation Exposure</h3>
              <p className="text-gray-700 mb-4">
                Both natural and artificial radiation sources, including UV exposure, background
                radiation, and medical imaging, can impact cellular processes.
              </p>
              <div className="bg-yellow-50 p-4 rounded">
                <p className="font-semibold mb-2">Track:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>UV exposure and sun habits</li>
                  <li>Geographic altitude (cosmic radiation)</li>
                  <li>Occupational radiation exposure</li>
                  <li>Medical imaging history</li>
                </ul>
              </div>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Materials & Chemicals</h3>
              <p className="text-gray-700 mb-4">
                Daily exposure to various materials, plastics, metals, and chemicals through consumer
                products, water, and the environment.
              </p>
              <div className="bg-purple-50 p-4 rounded">
                <p className="font-semibold mb-2">Track:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Plastic exposure (BPA, phthalates)</li>
                  <li>Heavy metal exposure</li>
                  <li>Drinking water quality</li>
                  <li>Household and personal care products</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Epigenetic Changes</h2>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="mb-4">
              Epigenetics studies how behaviors and environment can cause changes that affect the way
              your genes work. Unlike genetic changes, epigenetic changes are reversible and do not
              change your DNA sequence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">DNA Methylation</h4>
                <p className="text-sm text-gray-700">
                  Chemical tags added to DNA that can turn genes on or off
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Histone Modification</h4>
                <p className="text-sm text-gray-700">
                  Changes to proteins that DNA wraps around, affecting gene accessibility
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Modern Challenges</h2>
          <div className="space-y-4">
            <div className="p-4 bg-orange-50 rounded-lg">
              <h3 className="font-semibold mb-2">Rapid Globalization</h3>
              <p className="text-gray-700">
                Our species is experiencing unprecedented environmental changes in a very short
                evolutionary timeframe, creating unique adaptation challenges.
              </p>
            </div>

            <div className="p-4 bg-red-50 rounded-lg">
              <h3 className="font-semibold mb-2">Changing Microbiomes</h3>
              <p className="text-gray-700">
                Global food distribution means our gut bacteria encounter foods our ancestors never
                experienced, potentially affecting digestion and health.
              </p>
            </div>

            <div className="p-4 bg-teal-50 rounded-lg">
              <h3 className="font-semibold mb-2">Novel Exposures</h3>
              <p className="text-gray-700">
                Modern materials, chemicals, and technologies expose us to environmental factors
                that didn't exist during most of human evolution.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Start Tracking</h2>
          <div className="p-6 border rounded-lg">
            <p className="mb-4">
              Create a comprehensive environmental profile to understand how your surroundings might
              influence your genetic expression.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Create Environmental Profile (Coming Soon)
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}
