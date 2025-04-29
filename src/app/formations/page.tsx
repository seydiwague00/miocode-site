import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Formations en Programmation | Miocode',
  description: 'Découvrez nos formations en programmation pour tous niveaux. JavaScript, Python, création de site web, développement mobile et plus encore.',
};

export default function FormationsPage() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Nos <span className="text-green-600 dark:text-green-400">Formations</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
              Apprenez à coder avec nos formations adaptées à tous les niveaux, du débutant à l'expert
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#catalogue" className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all transform hover:scale-105 shadow-md">
                Voir le catalogue
              </Link>
              <Link href="/contact" className="px-8 py-3 bg-white hover:bg-gray-100 text-green-600 font-medium rounded-lg border border-green-600 transition-all transform hover:scale-105 shadow-md dark:bg-gray-800 dark:text-green-400 dark:border-green-400 dark:hover:bg-gray-700">
                Demander des informations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-300 dark:text-white mb-4">Pourquoi choisir nos formations ?</h2>
            <p className="text-lg text-gray-400 dark:text-gray-300 max-w-3xl mx-auto">
              Des formations de qualité dispensées par des professionnels expérimentés
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Contenu de qualité</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Des cours structurés et à jour avec les dernières technologies et bonnes pratiques du marché.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Formateurs experts</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Des professionnels passionnés avec une expérience concrète dans le développement et l'enseignement.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Flexibilité</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Des formations disponibles en présentiel ou en ligne, à temps plein ou à temps partiel selon vos disponibilités.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Suivi personnalisé</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Un accompagnement individuel pour vous aider à progresser à votre rythme et atteindre vos objectifs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalogue Section */}
      <section id="catalogue" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Notre Catalogue de Formations</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Des formations adaptées à tous les niveaux et à tous les besoins
            </p>
          </div>

          {/* Formation Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Category 1: Programming */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-l-4 border-green-500 pl-4">Programmation</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-900 dark:text-white">JavaScript Moderne</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Débutant - 35h - En ligne ou présentiel</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-900 dark:text-white">Python pour la Data Science</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Intermédiaire - 40h - En ligne ou présentiel</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-900 dark:text-white">PHP & MySQL</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Débutant - 30h - En ligne ou présentiel</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Category 2: Web Development */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-l-4 border-green-500 pl-4">Création de Site Web</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-900 dark:text-white">HTML, CSS & Responsive Design</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Débutant - 25h - En ligne ou présentiel</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-900 dark:text-white">WordPress Avancé</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Intermédiaire - 30h - En ligne ou présentiel</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-900 dark:text-white">React & Next.js</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Avancé - 40h - En ligne ou présentiel</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Development Category */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden mb-12">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-l-4 border-green-500 pl-4">Développement Mobile</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-900 dark:text-white">Développement iOS avec Swift</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Intermédiaire - 45h - En ligne ou présentiel</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-900 dark:text-white">Développement Android avec Kotlin</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Intermédiaire - 45h - En ligne ou présentiel</p>
                    </div>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-900 dark:text-white">React Native</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Intermédiaire - 40h - En ligne ou présentiel</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-900 dark:text-white">Flutter</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Intermédiaire - 40h - En ligne ou présentiel</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact" className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all transform hover:scale-105 shadow-md inline-block">
              Demander plus d'informations
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 dark:bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à développer vos compétences ?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Inscrivez-vous dès maintenant à l'une de nos formations et lancez-vous dans le monde du développement.
          </p>
          <Link href="/contact" className="px-8 py-3 bg-white hover:bg-gray-100 text-green-600 font-medium rounded-lg transition-all transform hover:scale-105 shadow-md inline-block">
            S'inscrire à une formation
          </Link>
        </div>
      </section>
    </div>
  );
}