import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Portfolio | Miocode - Nos réalisations et études de cas',
  description: 'Découvrez nos projets réalisés, témoignages clients et études de cas. Sites web, applications mobiles et formations en développement.',
};

export default function PortfolioPage() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Nos <span className="text-purple-600 dark:text-purple-400">Réalisations</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
              Découvrez nos projets, témoignages clients et études de cas
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-300 dark:text-white mb-4">Projets à la Une</h2>
            <p className="text-lg text-gray-400 dark:text-gray-300 max-w-3xl mx-auto">
              Une sélection de nos meilleures réalisations
            </p>
          </div>

          {/* Featured Project 1 */}
          <div className="mb-24">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mb-10 lg:mb-0">
                <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                  {/* Placeholder for an image - replace with your actual image */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 flex items-center justify-center text-white text-2xl font-bold p-4 text-center">
                    E-commerce Premium
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-400 dark:text-white mb-4">Boutique en Ligne Luxe</h3>
                <p className="text-lg text-gray-500 dark:text-gray-300 mb-6">
                  Développement d'une plateforme e-commerce haut de gamme pour une marque de luxe, avec une expérience utilisateur exceptionnelle et des fonctionnalités avancées.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full dark:bg-purple-900 dark:text-purple-300">React</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full dark:bg-purple-900 dark:text-purple-300">Node.js</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full dark:bg-purple-900 dark:text-purple-300">MongoDB</span>
                </div>
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-300 font-bold">
                      LC
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900 dark:text-white">Luxe Collection</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Paris, France</p>
                  </div>
                </div>
                <Link href="#" className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:underline">
                  Voir l'étude de cas
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Featured Project 2 */}
          <div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-gray-400 dark:text-white mb-4">Application Mobile de Livraison</h3>
                <p className="text-lg text-gray-500 dark:text-gray-300 mb-6">
                  Conception et développement d'une application mobile permettant de suivre en temps réel les livraisons et de gérer les commandes pour une entreprise de logistique.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full dark:bg-blue-900 dark:text-blue-300">React Native</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full dark:bg-blue-900 dark:text-blue-300">Firebase</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full dark:bg-blue-900 dark:text-blue-300">Google Maps API</span>
                </div>
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-300 font-bold">
                      RL
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900 dark:text-white">Rapid Logistics</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Lyon, France</p>
                  </div>
                </div>
                <Link href="#" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline">
                  Voir l'étude de cas
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
              <div className="mb-10 lg:mb-0 order-1 lg:order-2">
                <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                  {/* Placeholder for an image - replace with your actual image */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold p-4 text-center">
                    Application Mobile de Livraison
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Tous Nos Projets</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez l'ensemble de nos réalisations dans différents domaines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48 bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center text-white text-xl font-bold">
                Site Vitrine Architecte
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Cabinet d'Architectes</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Site vitrine élégant pour un cabinet d'architectes, mettant en valeur leurs projets et leur expertise.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded dark:bg-green-900 dark:text-green-300">Next.js</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded dark:bg-green-900 dark:text-green-300">Tailwind CSS</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48 bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white text-xl font-bold">
                Application de Réservation
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Système de Réservation</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Application web permettant la gestion des réservations pour un réseau de restaurants.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded dark:bg-yellow-900 dark:text-yellow-300">Vue.js</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded dark:bg-yellow-900 dark:text-yellow-300">Node.js</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded dark:bg-yellow-900 dark:text-yellow-300">PostgreSQL</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48 bg-gradient-to-r from-red-400 to-pink-500 flex items-center justify-center text-white text-xl font-bold">
                Plateforme E-learning
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Plateforme de Formation</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Plateforme e-learning complète avec gestion des cours, quiz, et suivi de progression des étudiants.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded dark:bg-red-900 dark:text-red-300">React</span>
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded dark:bg-red-900 dark:text-red-300">Django</span>
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded dark:bg-red-900 dark:text-red-300">AWS</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all transform hover:scale-105 shadow-md inline-block">
              Discuter de votre projet
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-400 dark:text-white mb-4">Témoignages Clients</h2>
            <p className="text-lg text-gray-500 dark:text-gray-300 max-w-3xl mx-auto">
              Ce que nos clients disent de notre travail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold">
                    SL
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900 dark:text-white">Sophie Laurent</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Directrice, Luxe Collection</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "L'équipe de Miocode a créé une boutique en ligne qui dépasse toutes nos attentes. Le design est élégant, l'expérience utilisateur est fluide, et nos ventes ont augmenté de 40% depuis le lancement."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                    TD
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900 dark:text-white">Thomas Dubois</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CEO, Rapid Logistics</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "Notre application de livraison développée par Miocode a révolutionné notre façon de travailler. Nos chauffeurs gagnent un temps précieux et nos clients sont ravis du suivi en temps réel."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 dark:bg-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à concrétiser votre projet ?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <Link href="/contact" className="px-8 py-3 bg-white hover:bg-gray-100 text-purple-600 font-medium rounded-lg transition-all transform hover:scale-105 shadow-md inline-block">
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </div>
  );
}