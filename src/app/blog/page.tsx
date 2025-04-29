import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Blog | Miocode - Astuces de développement et tendances tech',
  description: 'Découvrez nos articles sur le développement web, mobile, les tendances technologiques et des tutoriels pour améliorer vos compétences.',
};

export default function BlogPage() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Notre <span className="text-indigo-600 dark:text-indigo-400">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
              Astuces de développement, tendances tech et tutoriels pour améliorer vos compétences
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-10 lg:mb-0">
              <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                {/* Placeholder for an image - replace with your actual image */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold p-4 text-center">
                  Les tendances web en 2023
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300 mr-2">Tendances</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">15 avril 2023 • 10 min de lecture</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-400 dark:text-white mb-4">Les tendances du développement web à surveiller en 2023</h2>
              <p className="text-lg text-gray-500 dark:text-gray-300 mb-6">
                Découvrez les technologies et méthodologies qui façonnent l'avenir du développement web cette année. De React 18 à l'IA générative, voici ce que vous devez savoir.
              </p>
              <Link href="#" className="inline-flex items-center text-indigo-300 dark:text-indigo-500 font-medium hover:underline">
                Lire l'article complet
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Nos Articles Récents</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explorez nos derniers articles sur le développement, les technologies et les bonnes pratiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48 bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center text-white text-xl font-bold">
                React Hooks
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 mr-2">React</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">10 avril 2023</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Maîtriser les React Hooks : Guide complet</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Apprenez à utiliser efficacement les Hooks de React pour simplifier votre code et améliorer les performances de vos applications.
                </p>
                <Link href="#" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline">
                  Lire l'article
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48 bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center text-white text-xl font-bold">
                Python Data Science
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 mr-2">Python</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">5 avril 2023</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Introduction à la Data Science avec Python</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Découvrez comment utiliser Python et ses bibliothèques pour analyser des données et créer des visualisations percutantes.
                </p>
                <Link href="#" className="inline-flex items-center text-green-600 dark:text-green-400 font-medium hover:underline">
                  Lire l'article
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48 bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white text-xl font-bold">
                SEO pour développeurs
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300 mr-2">SEO</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">1 avril 2023</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">SEO pour développeurs : Optimisez vos sites web</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Apprenez les techniques de référencement que tout développeur devrait connaître pour créer des sites web performants et bien classés.
                </p>
                <Link href="#" className="inline-flex items-center text-yellow-600 dark:text-yellow-400 font-medium hover:underline">
                  Lire l'article
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Article 4 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48 bg-gradient-to-r from-red-400 to-pink-500 flex items-center justify-center text-white text-xl font-bold">
                Mobile Development
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 mr-2">Mobile</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">25 mars 2023</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Flutter vs React Native : Quel framework choisir en 2023 ?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Comparaison détaillée des deux frameworks de développement mobile les plus populaires pour vous aider à faire le bon choix.
                </p>
                <Link href="#" className="inline-flex items-center text-red-600 dark:text-red-400 font-medium hover:underline">
                  Lire l'article
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Article 5 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48 bg-gradient-to-r from-purple-400 to-indigo-500 flex items-center justify-center text-white text-xl font-bold">
                DevOps
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 mr-2">DevOps</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">20 mars 2023</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Introduction à Docker pour les développeurs web</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Découvrez comment Docker peut simplifier votre workflow de développement et améliorer la collaboration au sein de votre équipe.
                </p>
                <Link href="#" className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:underline">
                  Lire l'article
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Article 6 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48 bg-gradient-to-r from-gray-400 to-blue-gray-500 flex items-center justify-center text-white text-xl font-bold">
                Cybersécurité
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 mr-2">Sécurité</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">15 mars 2023</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">10 pratiques essentielles pour sécuriser vos applications web</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Protégez vos applications contre les vulnérabilités courantes avec ces bonnes pratiques de sécurité web.
                </p>
                <Link href="#" className="inline-flex items-center text-gray-600 dark:text-gray-400 font-medium hover:underline">
                  Lire l'article
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all transform hover:scale-105 shadow-md inline-block">
              Charger plus d'articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-50 dark:bg-gray-700 rounded-lg shadow-md p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Restez informé</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Abonnez-vous à notre newsletter pour recevoir nos derniers articles et actualités directement dans votre boîte mail.
              </p>
            </div>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                  placeholder="Votre adresse email" 
                  required 
                />
                <button 
                  type="submit" 
                  className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                >
                  S'abonner
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}