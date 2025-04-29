'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ClientAreaPage() {
  const [activeTab, setActiveTab] = useState('login');
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRegisterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the login data to your backend
    alert('Connexion réussie! Dans une application réelle, vous seriez redirigé vers votre tableau de bord.');
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the registration data to your backend
    alert('Inscription réussie! Dans une application réelle, vous seriez redirigé vers votre tableau de bord.');
  };

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Espace <span className="text-indigo-600 dark:text-indigo-400">Client</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
              Connectez-vous pour accéder à vos formations, documents et factures
            </p>
          </div>
        </div>
      </section>

      {/* Login/Register Section */}
      <section className="py-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              <button
                className={`flex-1 py-4 px-6 text-center ${
                  activeTab === 'login'
                    ? 'border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('login')}
              >
                Connexion
              </button>
              <button
                className={`flex-1 py-4 px-6 text-center ${
                  activeTab === 'register'
                    ? 'border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('register')}
              >
                Inscription
              </button>
            </div>

            {/* Login Form */}
            {activeTab === 'login' && (
              <div className="p-6">
                <form onSubmit={handleLoginSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={loginData.email}
                      onChange={handleLoginChange}
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                      placeholder="votre.email@exemple.com" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                    <input 
                      type="password" 
                      id="password" 
                      name="password"
                      value={loginData.password}
                      onChange={handleLoginChange}
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                      placeholder="••••••••" 
                      required 
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input 
                        id="rememberMe" 
                        name="rememberMe"
                        type="checkbox" 
                        checked={loginData.rememberMe}
                        onChange={handleLoginChange}
                        className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                      />
                      <label htmlFor="rememberMe" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Se souvenir de moi</label>
                    </div>
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400">Mot de passe oublié?</a>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                  >
                    Se connecter
                  </button>
                </form>
              </div>
            )}

            {/* Register Form */}
            {activeTab === 'register' && (
              <div className="p-6">
                <form onSubmit={handleRegisterSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prénom</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        value={registerData.firstName}
                        onChange={handleRegisterChange}
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                        placeholder="Prénom" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName"
                        value={registerData.lastName}
                        onChange={handleRegisterChange}
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                        placeholder="Nom" 
                        required 
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="registerEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input 
                      type="email" 
                      id="registerEmail" 
                      name="email"
                      value={registerData.email}
                      onChange={handleRegisterChange}
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                      placeholder="votre.email@exemple.com" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="registerPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                    <input 
                      type="password" 
                      id="registerPassword" 
                      name="password"
                      value={registerData.password}
                      onChange={handleRegisterChange}
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                      placeholder="••••••••" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmer le mot de passe</label>
                    <input 
                      type="password" 
                      id="confirmPassword" 
                      name="confirmPassword"
                      value={registerData.confirmPassword}
                      onChange={handleRegisterChange}
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                      placeholder="••••••••" 
                      required 
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input 
                        id="acceptTerms" 
                        name="acceptTerms"
                        type="checkbox" 
                        checked={registerData.acceptTerms}
                        onChange={handleRegisterChange}
                        className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                        required
                      />
                    </div>
                    <label htmlFor="acceptTerms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      J'accepte les <a href="#" className="text-indigo-600 hover:underline dark:text-indigo-400">conditions d'utilisation</a>
                    </label>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                  >
                    Créer un compte
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Avantages de l'espace client</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez tous les avantages de votre espace personnel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Accès à vos formations</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Retrouvez toutes vos formations en cours et terminées, suivez votre progression et accédez aux supports de cours.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Gestion des documents</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Téléchargez vos certificats, attestations et supports de cours. Tous vos documents sont centralisés et accessibles à tout moment.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Suivi de facturation</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Consultez et téléchargez vos factures, suivez vos paiements et gérez vos informations de facturation en toute simplicité.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
