import Link from 'next/link'

export default function ResearchPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-6">Research Databases</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Comprehensive Genetic Research</h2>
          <p className="text-lg mb-6">
            Explore our extensive databases of documented genetic adaptations, neuroscience traits,
            and population-specific phenomena. All data is based on peer-reviewed scientific research.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="font-semibold mb-2">Important Scientific Framework:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>All humans share 99.9% of DNA - variations are minimal</li>
              <li>Individual variation within populations exceeds between-population differences</li>
              <li>These are ADAPTATIONS to environments, not markers of superiority</li>
              <li>Environment, culture, and opportunity are primary determinants of outcomes</li>
              <li>See our <Link href="/scientific-framework" className="text-blue-600 underline">Scientific Framework</Link> for detailed explanation</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Research Categories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/research/adaptations" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Genetic Adaptations</h3>
              <p className="text-gray-600 mb-4">
                Documented adaptations across populations including high-altitude, diving,
                disease resistance, and dietary specializations.
              </p>
              <p className="text-sm text-blue-600">Explore Adaptations →</p>
            </Link>

            <Link href="/research/neuroscience" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Neuroscience & Cognition</h3>
              <p className="text-gray-600 mb-4">
                Genetic variations affecting neurotransmitters, learning, sleep, stress
                response, and cognitive traits.
              </p>
              <p className="text-sm text-blue-600">Explore Neuroscience →</p>
            </Link>

            <Link href="/research/pharmacogenomics" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Pharmacogenomics</h3>
              <p className="text-gray-600 mb-4">
                How genetic variations affect drug metabolism and response - critical for
                personalized medicine.
              </p>
              <p className="text-sm text-blue-600">Explore Pharmacogenomics →</p>
            </Link>

            <Link href="/research/athletic-performance" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Athletic Performance</h3>
              <p className="text-gray-600 mb-4">
                Genetic factors in athletic performance including endurance, power, and
                specialized physical adaptations.
              </p>
              <p className="text-sm text-blue-600">Explore Athletics →</p>
            </Link>

            <Link href="/research/disease-susceptibility" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Disease Susceptibility</h3>
              <p className="text-gray-600 mb-4">
                Population-specific disease risks important for screening, prevention,
                and personalized healthcare.
              </p>
              <p className="text-sm text-blue-600">Explore Disease Risk →</p>
            </Link>

            <Link href="/research/metabolic" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Metabolic & Dietary</h3>
              <p className="text-gray-600 mb-4">
                Adaptations to different diets including lactose persistence, starch
                digestion, and fat metabolism.
              </p>
              <p className="text-sm text-blue-600">Explore Metabolism →</p>
            </Link>

            <Link href="/podcasts" className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-purple-50">
              <h3 className="text-xl font-semibold mb-2">🎙️ Podcast References</h3>
              <p className="text-gray-600 mb-4">
                Curated podcast episodes from Huberman Lab, Peter Attia, Lex Fridman,
                and more discussing genetics and neuroscience.
              </p>
              <p className="text-sm text-blue-600">Listen & Learn →</p>
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Featured Adaptations</h2>

          <div className="space-y-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Tibetan High-Altitude Adaptation</h3>
              <p className="text-gray-700 mb-2">
                <strong>Genes:</strong> EPAS1, EGLN1, PPARA
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Adaptation:</strong> Enhanced oxygen efficiency at extreme altitudes (>4,000m)
              </p>
              <p className="text-gray-700">
                Tibetan populations have evolved unique genetic variants allowing sustained life at
                high altitudes through more efficient oxygen use and reduced hemoglobin levels
                (preventing blood thickening). This represents one of the fastest documented human
                adaptations, occurring in just ~3,000 years.
              </p>
            </div>

            <div className="p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Bajau Sea Nomad Diving Adaptation</h3>
              <p className="text-gray-700 mb-2">
                <strong>Genes:</strong> PDE10A
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Adaptation:</strong> Enlarged spleens enabling extended breath-hold diving
              </p>
              <p className="text-gray-700">
                The Bajau people of Southeast Asia have spleens up to 50% larger than average,
                providing an extended oxygen reservoir for diving. Some can dive to 70m depth and
                hold their breath for up to 13 minutes. Similar adaptations found in Korean Haenyo divers.
              </p>
            </div>

            <div className="p-6 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">APOL1 Kidney Disease Risk</h3>
              <p className="text-gray-700 mb-2">
                <strong>Population:</strong> West African descent
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Trade-off:</strong> Protection against sleeping sickness vs. kidney disease risk
              </p>
              <p className="text-gray-700">
                APOL1 G1/G2 variants provide strong protection against African sleeping sickness
                (trypanosomiasis) but increase risk of kidney disease in modern environments. This
                illustrates the concept of evolutionary trade-offs and the medical importance of
                understanding population-specific genetics.
              </p>
            </div>

            <div className="p-6 bg-orange-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">East African Endurance Running</h3>
              <p className="text-gray-700 mb-2">
                <strong>Populations:</strong> Kalenjin (Kenya), Ethiopian highlands
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Factors:</strong> Genetic (PPARGC1A, ACE, ACTN3) + Environmental + Cultural
              </p>
              <p className="text-gray-700">
                The dominance of East African runners in distance events involves: favorable muscle
                fiber composition, limb proportions, altitude training effects, cultural emphasis on
                running, economic incentives, and selection effects. Demonstrates that elite performance
                is multifactorial with genetics as ONE component.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Medical Applications</h2>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Why This Research Matters for Healthcare:</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Pharmacogenomics</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Personalized drug selection and dosing</li>
                  <li>Avoid adverse drug reactions</li>
                  <li>Optimize medication effectiveness</li>
                  <li>Prevent dangerous hypersensitivity reactions</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Disease Screening</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Targeted screening for high-risk conditions</li>
                  <li>Early detection saves lives</li>
                  <li>Carrier screening for family planning</li>
                  <li>Prevention strategies for genetic risks</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Treatment Optimization</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Understanding variable treatment responses</li>
                  <li>Predicting medication efficacy</li>
                  <li>Avoiding ineffective treatments</li>
                  <li>Precision medicine approaches</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Public Health</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Population health screening programs</li>
                  <li>Addressing health disparities</li>
                  <li>Newborn screening optimization</li>
                  <li>Genetic counseling services</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Scientific Integrity</h2>
          <p className="mb-4">
            All data in our research databases is:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Based on peer-reviewed scientific publications</li>
            <li>Cited with full references to original research</li>
            <li>Updated as new research becomes available</li>
            <li>Presented with appropriate context and limitations</li>
            <li>Framed ethically to prevent misuse</li>
          </ul>

          <div className="flex gap-4">
            <Link href="/scientific-framework" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Read Scientific Framework
            </Link>
            <Link href="/ethics" className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50">
              Read Ethical Guidelines
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
