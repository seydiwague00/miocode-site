import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Développement Web & Mobile | Miocode',
  description: 'Services de développement web et mobile sur mesure. Sites vitrines, applications web et mobiles pour particuliers et entreprises.',
};

export default function WebDevPage() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Développement <span className="text-blue-600 dark:text-blue-400">Web & Mobile</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
              Des solutions numériques sur mesure pour concrétiser vos projets
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Nos Services Web & Mobile</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nous proposons une gamme complète de services de développement pour répondre à tous vos besoins numériques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Sites Vitrines</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Présentez votre entreprise, vos produits et services avec un site web professionnel, responsive et optimisé pour le référencement.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Design personnalisé
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Responsive (mobile, tablette, desktop)
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Optimisation SEO
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="p-6">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Applications Web</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Des applications web performantes et évolutives pour optimiser vos processus métier et améliorer votre productivité.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Interfaces utilisateur intuitives
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Fonctionnalités sur mesure
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Intégration avec vos systèmes existants
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Applications Mobiles</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Des applications iOS et Android natives ou cross-platform pour atteindre vos utilisateurs sur tous les appareils.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Applications iOS et Android
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Expérience utilisateur optimisée
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Fonctionnalités natives (GPS, caméra, etc.)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Nos Technologies</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nous utilisons les technologies les plus récentes et les plus performantes pour développer vos projets
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Technology 1 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-md transition-transform hover:scale-105">
              <div className="text-4xl mb-2">🌐</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">HTML/CSS/JavaScript</h3>
            </div>

            {/* Technology 2 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-md transition-transform hover:scale-105">
              <div className="text-4xl mb-2">⚛️</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">React</h3>
            </div>

            {/* Technology 3 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-md transition-transform hover:scale-105">
              <div className="text-4xl mb-2">🔄</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Next.js</h3>
            </div>

            {/* Technology 4 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-md transition-transform hover:scale-105">
              <div className="text-4xl mb-2">🐍</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Python</h3>
            </div>

            {/* Technology 5 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-md transition-transform hover:scale-105">
              <div className="text-4xl mb-2">🍃</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Node.js</h3>
            </div>

            {/* Technology 6 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-md transition-transform hover:scale-105">
              <div className="text-4xl mb-2">📱</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">React Native</h3>
            </div>

            {/* Technology 7 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-md transition-transform hover:scale-105">
              <div className="text-4xl mb-2">🗄️</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">MongoDB</h3>
            </div>

            {/* Technology 8 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-md transition-transform hover:scale-105">
              <div className="text-4xl mb-2">🐬</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">MySQL</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Nos Réalisations</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez quelques-uns de nos projets récents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xl font-bold">
                Projet E-commerce
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Boutique en ligne</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Développement d'une plateforme e-commerce complète avec gestion des produits, panier d'achat et paiement en ligne.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded dark:bg-blue-900 dark:text-blue-300">React</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded dark:bg-blue-900 dark:text-blue-300">Node.js</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded dark:bg-blue-900 dark:text-blue-300">MongoDB</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48 bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center text-white text-xl font-bold">
                Application Mobile
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">App de livraison</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Application mobile permettant de suivre en temps réel les livraisons et de gérer les commandes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded dark:bg-purple-900 dark:text-purple-300">React Native</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded dark:bg-purple-900 dark:text-purple-300">Firebase</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded dark:bg-purple-900 dark:text-purple-300">Google Maps API</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48 bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center text-white text-xl font-bold">
                Site Vitrine
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Cabinet d'architectes</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Site vitrine élégant pour un cabinet d'architectes, mettant en valeur leurs projets et leur expertise.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded dark:bg-green-900 dark:text-green-300">Next.js</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded dark:bg-green-900 dark:text-green-300">Tailwind CSS</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded dark:bg-green-900 dark:text-green-300">Framer Motion</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all transform hover:scale-105 shadow-md inline-block">
              Voir tous nos projets
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à concrétiser votre projet ?</h2>
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