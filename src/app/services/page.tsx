import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Services | Miocode - Développement Web & Mobile et Formations',
  description: 'Découvrez nos services de développement web & mobile et nos formations en programmation. Solutions sur mesure pour particuliers et entreprises.',
};

export default function ServicesPage() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Nos <span className="text-blue-600 dark:text-blue-400">Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
              Des solutions numériques adaptées à vos besoins et des formations pour tous les niveaux
            </p>
          </div>
        </div>
      </section>

      {/* Web & Mobile Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-300 dark:text-white mb-6">Web & Mobile</h2>
              <p className="text-lg text-gray-400 dark:text-gray-300 mb-6">
                Nous concevons et développons des solutions web et mobiles sur mesure pour répondre aux besoins spécifiques de votre entreprise.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-400">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-500 dark:text-gray-300">
                    <span className="font-medium text-gray-300 dark:text-white">Sites vitrines</span> - Présentez votre entreprise avec un site web professionnel et attractif.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-400">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-500 dark:text-gray-300">
                    <span className="font-medium text-gray-300 dark:text-white">Applications web</span> - Des applications web performantes et évolutives pour optimiser vos processus métier.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-400">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-500 dark:text-gray-300">
                    <span className="font-medium text-gray-300 dark:text-white">Applications mobiles</span> - Des applications iOS et Android natives ou cross-platform pour atteindre vos utilisateurs sur tous les appareils.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/services/dev-web" className="px-6 py-3 mb-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all transform hover:scale-105 shadow-md inline-block">
                  En savoir plus
                </Link>
              </div>
            </div>
            <div className="mb-10 lg:mb-0 order-1 lg:order-2">
              <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                {/* Placeholder for an image - replace with your actual image */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white text-2xl font-bold p-4 text-center">
                  Solutions Web & Mobile sur mesure
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formations Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-10 lg:mb-0">
              <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                {/* Placeholder for an image - replace with your actual image */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center text-white text-2xl font-bold p-4 text-center">
                  Formations en programmation pour tous niveaux
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Formations</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Apprenez à coder avec nos formations adaptées à tous les niveaux, du débutant à l'expert. Nos cours sont dispensés par des professionnels expérimentés.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-green-600 dark:text-green-400">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-600 dark:text-gray-300">
                    <span className="font-medium text-gray-900 dark:text-white">Programmation</span> - JavaScript, Python, PHP et autres langages populaires.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-green-600 dark:text-green-400">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-600 dark:text-gray-300">
                    <span className="font-medium text-gray-900 dark:text-white">Création de site</span> - Apprenez à créer et gérer votre propre site web.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-green-600 dark:text-green-400">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-600 dark:text-gray-300">
                    <span className="font-medium text-gray-900 dark:text-white">Développement mobile</span> - Créez des applications mobiles pour iOS et Android.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/formations" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all transform hover:scale-105 shadow-md inline-block">
                  Voir nos formations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-300 dark:text-white mb-4">Notre Processus</h2>
            <p className="text-lg text-gray-400 dark:text-gray-300 max-w-3xl mx-auto">
              Une approche méthodique pour garantir la réussite de votre projet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Consultation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nous discutons de vos besoins, objectifs et contraintes pour comprendre parfaitement votre projet.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Planification</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nous élaborons une stratégie détaillée, définissons les fonctionnalités et établissons un calendrier.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Développement</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Notre équipe développe votre solution avec des points de contrôle réguliers pour assurer la qualité.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Livraison & Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nous déployons votre solution et fournissons un support continu pour assurer son succès à long terme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à démarrer votre projet ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-lg transition-all transform hover:scale-105 shadow-md inline-block">
              Demander un devis
            </Link>
            <Link href="/portfolio" className="px-8 py-3 bg-transparent hover:bg-blue-700 text-white font-medium rounded-lg border border-white transition-all transform hover:scale-105 shadow-md inline-block">
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}