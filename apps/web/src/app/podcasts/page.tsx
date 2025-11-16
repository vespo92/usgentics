import Link from 'next/link'

export default function PodcastsPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link href="/research" className="text-blue-600 hover:underline">
            ← Back to Research
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-6">Podcast References</h1>

        <section className="mb-12">
          <p className="text-lg mb-6">
            Explore podcast episodes from leading science communicators discussing genetics,
            neuroscience, performance, and human variation. These episodes provide accessible
            explanations of complex scientific topics and often feature world-class researchers.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="font-semibold mb-2">Why Podcasts Matter:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Accessible explanations of peer-reviewed research</li>
              <li>Direct interviews with leading researchers</li>
              <li>Practical applications of scientific findings</li>
              <li>Nuanced discussions of complex topics</li>
              <li>Free and widely available</li>
            </ul>
          </div>
        </section>

        {/* Huberman Lab */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Huberman Lab</h2>
          <p className="text-gray-600 mb-6">
            Dr. Andrew Huberman, Stanford neuroscientist, discusses science-based tools for everyday life
          </p>

          <div className="space-y-6">
            {/* Dopamine Episode */}
            <div className="p-6 border rounded-lg bg-white hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">
                Controlling Your Dopamine For Motivation, Focus & Satisfaction
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Neuroscience</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">COMT Gene</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">DRD4 Gene</span>
              </div>
              <p className="text-gray-700 mb-4">
                Deep dive into dopamine neuroscience, including genetic variations (COMT, DRD4) affecting
                dopamine processing and their impact on motivation and focus. Discusses "warrior" vs "worrier"
                gene variants and practical applications.
              </p>
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">Key Topics:</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                  <li>COMT gene (warrior vs worrier) - 1:15:30</li>
                  <li>Dopamine dynamics and motivation</li>
                  <li>Baseline dopamine vs peaks</li>
                  <li>Optimizing dopamine - 1:45:00</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://hubermanlab.com/controlling-your-dopamine-for-motivation-focus-and-satisfaction/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Website →
                </a>
                <a
                  href="https://www.youtube.com/watch?v=QmOF0crdyRU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline text-sm"
                >
                  YouTube →
                </a>
                <span className="text-gray-500 text-sm">Episode #39 • 2:16:00</span>
              </div>
            </div>

            {/* Learning Episode */}
            <div className="p-6 border rounded-lg bg-white hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">
                How to Learn Skills Faster
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Neuroscience</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">BDNF Gene</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Learning</span>
              </div>
              <p className="text-gray-700 mb-4">
                Neuroplasticity mechanisms and how BDNF gene variations affect learning capacity.
                Discusses how exercise dramatically increases BDNF production regardless of genotype.
              </p>
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">Key Topics:</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                  <li>BDNF and neuroplasticity - 0:25:00</li>
                  <li>Exercise and BDNF production - 1:10:00</li>
                  <li>Sleep and memory consolidation</li>
                  <li>Age-related learning differences</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://hubermanlab.com/how-to-learn-skills-faster/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Website →
                </a>
                <a
                  href="https://www.youtube.com/watch?v=xJ0IBzCjEPk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline text-sm"
                >
                  YouTube →
                </a>
                <span className="text-gray-500 text-sm">Episode #20 • 1:52:00</span>
              </div>
            </div>

            {/* Sleep Episode */}
            <div className="p-6 border rounded-lg bg-white hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">
                Master Your Sleep & Be More Alert When Awake
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Sleep</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">PER3 Gene</span>
              </div>
              <p className="text-gray-700 mb-4">
                Sleep neuroscience including genetic variations in sleep need (PER3 gene) and
                circadian rhythms. Why some people are morning larks vs night owls.
              </p>
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">Key Topics:</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                  <li>Individual sleep needs (genetic factors) - 0:42:00</li>
                  <li>Chronotypes (genetic basis) - 1:15:00</li>
                  <li>Circadian rhythm biology</li>
                  <li>Light exposure timing</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://hubermanlab.com/master-your-sleep-and-be-more-alert-when-awake/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Website →
                </a>
                <a
                  href="https://www.youtube.com/watch?v=nm1TxQj9IsQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline text-sm"
                >
                  YouTube →
                </a>
                <span className="text-gray-500 text-sm">Episode #2 • 1:38:00</span>
              </div>
            </div>

            {/* Stress Episode */}
            <div className="p-6 border rounded-lg bg-white hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">
                Tools for Managing Stress & Anxiety
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Neuroscience</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">NPY Gene</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Stress</span>
              </div>
              <p className="text-gray-700 mb-4">
                Stress biology and genetic variations in stress response (NPY gene). Individual differences
                in stress resilience and practical tools for management.
              </p>
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">Key Topics:</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                  <li>Genetic stress resilience (NPY) - 0:28:00</li>
                  <li>Physiological sigh technique - 1:05:00</li>
                  <li>Cortisol dynamics</li>
                  <li>Real-time stress management</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://hubermanlab.com/tools-for-managing-stress-and-anxiety/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Website →
                </a>
                <a
                  href="https://www.youtube.com/watch?v=ntfcfJ28eiU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline text-sm"
                >
                  YouTube →
                </a>
                <span className="text-gray-500 text-sm">Episode #10 • 1:43:00</span>
              </div>
            </div>

            {/* Peter Attia Guest Episode */}
            <div className="p-6 border rounded-lg bg-white hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">
                Dr. Peter Attia: Exercise, Nutrition, Hormones for Vitality & Longevity
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Longevity</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">APOE Gene</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Performance</span>
              </div>
              <p className="text-gray-700 mb-4">
                Guest: Dr. Peter Attia. Discussion of genetic variations in athletic performance,
                APOE variants and Alzheimer's risk, and personalized health optimization.
              </p>
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">Key Topics:</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                  <li>APOE genetics and Alzheimer's - 0:35:00</li>
                  <li>Genetic testing utility - 1:20:00</li>
                  <li>VO2 max and longevity</li>
                  <li>Exercise physiology</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://hubermanlab.com/dr-peter-attia-exercise-nutrition-hormones-for-vitality-and-longevity/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Website →
                </a>
                <a
                  href="https://www.youtube.com/watch?v=DTCmprPCDqc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline text-sm"
                >
                  YouTube →
                </a>
                <span className="text-gray-500 text-sm">Episode #85 • 3:12:00</span>
              </div>
            </div>
          </div>
        </section>

        {/* Peter Attia Drive */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">The Peter Attia Drive</h2>
          <p className="text-gray-600 mb-6">
            Dr. Peter Attia, physician focused on longevity and personalized medicine
          </p>

          <div className="space-y-6">
            <div className="p-6 border rounded-lg bg-white hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">
                The state of genetic testing and what it can (and can't) tell you about longevity
              </h3>
              <p className="text-gray-600 mb-2">Guest: Robert Green, M.D., M.P.H.</p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Genetics</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">APOE</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Testing</span>
              </div>
              <p className="text-gray-700 mb-4">
                Comprehensive discussion of genetic testing, APOE variants, polygenic risk scores,
                and limitations of genetic prediction. What genetic information is actually actionable.
              </p>
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">Key Topics:</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                  <li>APOE genetics and Alzheimer's</li>
                  <li>Polygenic risk scores</li>
                  <li>Actionability of genetic information</li>
                  <li>Pharmacogenomics</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://peterattiamd.com/robertgreen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Website →
                </a>
                <span className="text-gray-500 text-sm">Episode #227 • 2:15:00</span>
              </div>
            </div>

            <div className="p-6 border rounded-lg bg-white hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">
                Iñigo San Millán, Ph.D.: Mitochondria, exercise, and metabolic health
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Performance</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Elite Athletes</span>
              </div>
              <p className="text-gray-700 mb-4">
                Elite athletic performance, lactate metabolism, and genetic factors in endurance.
                Discussion of what separates elite performers from good athletes.
              </p>
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">Key Topics:</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                  <li>Elite athlete physiology</li>
                  <li>Genetic endowment vs training</li>
                  <li>Mitochondrial function</li>
                  <li>Zone 2 training</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://peterattiamd.com/inigosanmillan2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Website →
                </a>
                <span className="text-gray-500 text-sm">Episode #193 • 2:45:00</span>
              </div>
            </div>
          </div>
        </section>

        {/* Lex Fridman */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Lex Fridman Podcast</h2>
          <p className="text-gray-600 mb-6">
            Lex Fridman, AI researcher, interviewing leading scientists and thinkers
          </p>

          <div className="space-y-6">
            <div className="p-6 border rounded-lg bg-white hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">
                David Reich: Genetics, Ancient DNA, & the New History of the Human Race
              </h3>
              <p className="text-gray-600 mb-2">Guest: David Reich, Harvard geneticist</p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Genetics</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Ancient DNA</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Evolution</span>
              </div>
              <p className="text-gray-700 mb-4">
                Leading geneticist discusses ancient DNA, human migration, population genetics, and
                genetic differences between populations. Nuanced discussion of controversial topics.
              </p>
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">Key Topics:</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                  <li>Population genetic variation - 0:45:00</li>
                  <li>Ancient admixture events - 1:35:00</li>
                  <li>Neanderthal admixture</li>
                  <li>Human migration patterns</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://lexfridman.com/david-reich/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Website →
                </a>
                <a
                  href="https://www.youtube.com/watch?v=BtEBMGSDq6o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline text-sm"
                >
                  YouTube →
                </a>
                <span className="text-gray-500 text-sm">Episode #268 • 2:31:00</span>
              </div>
            </div>

            <div className="p-6 border rounded-lg bg-white hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">
                Robert Sapolsky: Neuroscience of Aggression, Free Will, & Behavioral Biology
              </h3>
              <p className="text-gray-600 mb-2">Guest: Robert Sapolsky, Stanford neuroscientist</p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Neuroscience</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">MAOA Gene</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Behavior</span>
              </div>
              <p className="text-gray-700 mb-4">
                Behavioral genetics, MAOA "warrior gene", and critical discussion of why genetic
                determinism is wrong. Emphasis on gene-environment interactions.
              </p>
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">Key Topics:</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                  <li>MAOA gene and aggression - 0:52:00</li>
                  <li>Genetics and behavior - 1:40:00</li>
                  <li>Gene-environment interactions</li>
                  <li>Testosterone and aggression</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://lexfridman.com/robert-sapolsky-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Website →
                </a>
                <a
                  href="https://www.youtube.com/watch?v=6MmyN63IXhE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline text-sm"
                >
                  YouTube →
                </a>
                <span className="text-gray-500 text-sm">Episode #390 • 3:07:00</span>
              </div>
            </div>
          </div>
        </section>

        {/* FoundMyFitness */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FoundMyFitness</h2>
          <p className="text-gray-600 mb-6">
            Dr. Rhonda Patrick, PhD in biomedical science, discussing nutrition and genetics
          </p>

          <div className="space-y-6">
            <div className="p-6 border rounded-lg bg-white hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">
                APOE Gene: The Single Most Important Gene for Longevity
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Genetics</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">APOE</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Longevity</span>
              </div>
              <p className="text-gray-700 mb-4">
                Deep dive into APOE genetics, Alzheimer's risk, and actionable interventions.
                Personalized prevention strategies based on genotype.
              </p>
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">Key Topics:</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                  <li>APOE4 and Alzheimer's risk</li>
                  <li>Dietary interventions for APOE4</li>
                  <li>Exercise and APOE</li>
                  <li>Omega-3 and genetics</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.foundmyfitness.com/episodes/apoe-longevity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Website →
                </a>
                <span className="text-gray-500 text-sm">0:45:00</span>
              </div>
            </div>

            <div className="p-6 border rounded-lg bg-white hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">
                MTHFR Gene Variants: What You Need to Know
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Genetics</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">MTHFR</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Nutrition</span>
              </div>
              <p className="text-gray-700 mb-4">
                MTHFR genetic variants affecting folate metabolism and health implications.
                Supplementation strategies and population frequency.
              </p>
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">Key Topics:</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                  <li>MTHFR variants explained</li>
                  <li>Folate metabolism</li>
                  <li>Supplementation strategies</li>
                  <li>Cardiovascular risk</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.foundmyfitness.com/episodes/mthfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Website →
                </a>
                <span className="text-gray-500 text-sm">0:38:00</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Browse by Topic</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 border rounded-lg text-center hover:bg-gray-50 cursor-pointer">
              <p className="font-semibold">Genetics</p>
              <p className="text-sm text-gray-600">8 episodes</p>
            </div>
            <div className="p-4 border rounded-lg text-center hover:bg-gray-50 cursor-pointer">
              <p className="font-semibold">Neuroscience</p>
              <p className="text-sm text-gray-600">6 episodes</p>
            </div>
            <div className="p-4 border rounded-lg text-center hover:bg-gray-50 cursor-pointer">
              <p className="font-semibold">Performance</p>
              <p className="text-sm text-gray-600">4 episodes</p>
            </div>
            <div className="p-4 border rounded-lg text-center hover:bg-gray-50 cursor-pointer">
              <p className="font-semibold">Sleep</p>
              <p className="text-sm text-gray-600">2 episodes</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Why These Sources?</h2>
          <p className="mb-4">
            We curate podcasts from hosts with strong scientific credentials and guests who are
            leading researchers in their fields:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Andrew Huberman</strong> - Stanford neuroscience professor</li>
            <li><strong>Peter Attia</strong> - MD focused on longevity and evidence-based medicine</li>
            <li><strong>Rhonda Patrick</strong> - PhD in biomedical science</li>
            <li><strong>Lex Fridman</strong> - MIT/AI researcher interviewing top scientists</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            All episodes feature discussion of peer-reviewed research and include references to
            original scientific papers. Links connect to official podcast sources - we don't profit
            from these referrals.
          </p>
        </section>
      </div>
    </main>
  )
}
