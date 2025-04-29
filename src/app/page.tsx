import Link from "next/link";

export default function Home() {
  return (
    <div className="font-geist">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:bg-gradient-to-b dark:from-gray-800 dark:via-gray-900 dark:to-gray-700 dark:animate-gradient-y py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
              Solutions numériques <span className="text-blue-600 dark:text-blue-400">innovantes</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
              Développement web & mobile sur mesure et formations en programmation pour tous niveaux
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all transform hover:scale-105 shadow-md">
                Nous contacter
              </Link>
              <Link href="/services" className="px-8 py-3 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-lg border border-blue-600 transition-all transform hover:scale-105 shadow-md dark:bg-gray-800 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-700">
                Découvrir nos services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-400 dark:text-white mb-4">Nos services</h2>
            <p className="text-lg text-gray-500 dark:text-gray-300 max-w-3xl mx-auto">
              Des solutions adaptées à vos besoins, de la conception à la réalisation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web & Mobile Development Card */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-gray-700 dark:to-gray-900 dark:animate-gradient-xy rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Web & Mobile</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Sites vitrines, applications web et mobiles sur mesure pour répondre à vos besoins spécifiques.
                </p>
                <Link href="/services/dev-web" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                  En savoir plus →
                </Link>
              </div>
            </div>

            {/* Formations Card */}
            <div className="bg-white dark:bg-gradient-to-bl dark:from-gray-700 dark:to-gray-900 dark:animate-gradient-xy rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Formations</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Apprenez à coder avec nos formations adaptées à tous les niveaux, du débutant à l'expert.
                </p>
                <Link href="/formations" className="text-green-600 dark:text-green-400 font-medium hover:underline">
                  En savoir plus →
                </Link>
              </div>
            </div>

            {/* Custom Solutions Card */}
            <div className="bg-white dark:bg-gradient-to-tr dark:from-gray-700 dark:to-gray-900 dark:animate-gradient-xy rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Solutions sur mesure</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Des solutions personnalisées pour répondre aux défis spécifiques de votre entreprise.
                </p>
                <Link href="/services" className="text-purple-600 dark:text-purple-400 font-medium hover:underline">
                  En savoir plus →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-gradient-to-r dark:from-blue-900 dark:via-blue-800 dark:to-blue-900 dark:animate-gradient-x py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Prêt à concrétiser votre projet ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <Link href="/contact" className="px-8 py-3 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-lg transition-all transform hover:scale-105 shadow-md inline-block">
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </div>
  );
}
