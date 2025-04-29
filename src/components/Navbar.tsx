'use client';

import {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import MiocodeLogoImage from '@/app/images/miocode-logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <nav
            className="bg-white dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 dark:animate-gradient-x fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center h-16 overflow-hidden">
                    {/*<Image*/}
                    {/*    src={MiocodeLogoImage}*/}
                    {/*    alt="Miocode Logo"*/}
                    {/*    width={160}*/}
                    {/*    height={80}*/}
                    {/*    className="h-16 w-auto"*/}
                    {/*/>*/}

                    <span className="text-2xl font-semibold whitespace-nowrap text-blue-600 dark:text-blue-400">MIOCODE</span>

                </Link>

                <div className="flex md:order-2">
                    <Link href="/contact"
                          className={`font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 ${
                              isActive('/contact')
                              ? 'text-white bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-700 dark:focus:ring-blue-800'
                              : 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                          }`}
                          aria-current={isActive('/contact') ? 'page' : undefined}>
                        Nous contacter
                    </Link>
                    <button
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        onClick={toggleMenu}
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Ouvrir le menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>

                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}
                    id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 md:dark:bg-gradient-to-r md:dark:from-gray-800 md:dark:via-gray-900 md:dark:to-gray-800 dark:animate-gradient-x dark:border-gray-700">
                        <li>
                            <Link href="/"
                                  className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                                      isActive('/') 
                                      ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500' 
                                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                  }`}
                                  aria-current={isActive('/') ? 'page' : undefined}>Accueil</Link>
                        </li>
                        <li>
                            <Link href="/a-propos"
                                  className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                                      isActive('/a-propos') 
                                      ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500' 
                                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                  }`}
                                  aria-current={isActive('/a-propos') ? 'page' : undefined}>À propos</Link>
                        </li>
                        <li>
                            <Link href="/services"
                                  className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                                      isActive('/services') 
                                      ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500' 
                                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                  }`}
                                  aria-current={isActive('/services') ? 'page' : undefined}>Services</Link>
                        </li>
                        <li>
                            <Link href="/formations"
                                  className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                                      isActive('/formations') 
                                      ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500' 
                                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                  }`}
                                  aria-current={isActive('/formations') ? 'page' : undefined}>Formations</Link>
                        </li>
                        <li>
                            <Link href="/portfolio"
                                  className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                                      isActive('/portfolio') 
                                      ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500' 
                                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                  }`}
                                  aria-current={isActive('/portfolio') ? 'page' : undefined}>Portfolio</Link>
                        </li>
                        <li>
                            <Link href="/blog"
                                  className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                                      isActive('/blog') 
                                      ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500' 
                                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                  }`}
                                  aria-current={isActive('/blog') ? 'page' : undefined}>Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
