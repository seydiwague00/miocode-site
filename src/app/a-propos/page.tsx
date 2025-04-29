import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'À propos de Miocode | Notre histoire et nos valeurs',
  description: 'Découvrez l\'histoire de Miocode, notre équipe et nos valeurs. Nous sommes spécialisés dans le développement web & mobile et la formation en programmation.',
};

export default function AboutPage() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              À propos de <span className="text-blue-600 dark:text-blue-400">Miocode</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
              Découvrez notre histoire, notre équipe et nos valeurs
            </p>
          </div>
        </div>
      </section>

      {/* Notre Histoire Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-500 dark:text-white mb-6">Notre Histoire</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Fondée en 2020, Miocode est née de la passion pour le développement web et mobile et d'une volonté de partager nos connaissances.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Ce qui a commencé comme une petite équipe de développeurs passionnés s'est rapidement transformé en une entreprise dynamique offrant des solutions numériques complètes et des formations de qualité.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Aujourd'hui, nous sommes fiers de collaborer avec des entreprises de toutes tailles et d'aider des centaines d'apprenants à maîtriser les compétences numériques essentielles dans le monde d'aujourd'hui.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 flex justify-center">
              <div className="relative w-full max-w-md h-80 rounded-lg overflow-hidden shadow-xl">
                {/* Placeholder for an image - replace with your actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                  Notre parcours
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Équipe Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Notre Équipe</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Des professionnels passionnés et expérimentés dédiés à votre réussite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="p-6 text-center">
                <div className="w-32 h-32 mx-auto bg-gray-200 dark:bg-gray-600 rounded-full mb-6 flex items-center justify-center">
                  {/* Placeholder for team member photo */}
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Sophie Martin</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">Fondatrice & Développeuse Full-Stack</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Passionnée par les technologies web et l'enseignement, Sophie a plus de 10 ans d'expérience en développement.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="p-6 text-center">
                <div className="w-32 h-32 mx-auto bg-gray-200 dark:bg-gray-600 rounded-full mb-6 flex items-center justify-center">
                  {/* Placeholder for team member photo */}
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Thomas Dubois</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">Développeur Mobile</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Spécialiste des applications iOS et Android, Thomas crée des expériences mobiles intuitives et performantes.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="p-6 text-center">
                <div className="w-32 h-32 mx-auto bg-gray-200 dark:bg-gray-600 rounded-full mb-6 flex items-center justify-center">
                  {/* Placeholder for team member photo */}
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Léa Bernard</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">Formatrice & UX Designer</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Avec son expertise en design et en pédagogie, Léa conçoit des interfaces utilisateur exceptionnelles et des formations accessibles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Nos Valeurs</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nous nous engageons à fournir des solutions et des formations de la plus haute qualité, en restant à la pointe des technologies et des meilleures pratiques.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nous croyons au pouvoir du travail d'équipe et de la communication ouverte, tant au sein de notre équipe qu'avec nos clients et nos apprenants.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nous encourageons la créativité et l'exploration de nouvelles idées pour résoudre les défis complexes et créer des solutions qui se démarquent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Vision Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Notre Vision</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Chez Miocode, nous aspirons à rendre la technologie accessible à tous. Notre vision est de créer un monde où chacun peut participer à la révolution numérique, que ce soit en tant qu'utilisateur ou créateur.
            </p>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Nous nous efforçons de démystifier le code et de donner aux individus et aux entreprises les outils dont ils ont besoin pour prospérer dans l'économie numérique.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}