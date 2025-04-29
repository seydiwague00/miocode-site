'use client';

import { useState, useEffect, Suspense } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const NavigationStateTracker = ({
                                    onNavigationStart,
                                    onNavigationComplete,
                                }: {
    onNavigationStart: () => void;
    onNavigationComplete: () => void;
}) => {
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleStart = () => {
            onNavigationStart();
        };
        const handleComplete = () => {
            onNavigationComplete();
        };

        // On écoute les changements d'URL
        router.events?.on('routeChangeStart', handleStart);
        router.events?.on('routeChangeComplete', handleComplete);
        router.events?.on('routeChangeError', handleComplete);

        return () => {
            router.events?.off('routeChangeStart', handleStart);
            router.events?.off('routeChangeComplete', handleComplete);
            router.events?.off('routeChangeError', handleComplete);
        };
    }, [router, onNavigationStart, onNavigationComplete]);

    return null;
};

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Temps initial de chargement

        return () => clearTimeout(timer);
    }, []);

    const handleNavigationStart = () => {
        setIsLoading(true);
    };

    const handleNavigationComplete = () => {
        setIsLoading(false);
    };

    // Vérification pour éviter la redirection infinie
    useEffect(() => {
        if (router.asPath !== pathname) {
            router.push(pathname); // Simule un changement de route, mais seulement si l'URL est différente
        }
    }, [pathname, router]);

    return (
        <>
            <Suspense fallback={null}>
                <NavigationStateTracker
                    onNavigationStart={handleNavigationStart}
                    onNavigationComplete={handleNavigationComplete}
                />
            </Suspense>

            <AnimatePresence mode="wait">
                {isLoading ? (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 z-50"
                    >
                        <div className="text-center">
                            <div
                                className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-blue-600 dark:border-blue-400 border-t-transparent dark:border-t-transparent"
                                role="status"
                            >
                                <span className="sr-only">Chargement...</span>
                            </div>
                            <p className="mt-4 text-lg font-semibold text-blue-600 dark:text-blue-400">
                                Chargement...
                            </p>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="animate-fade-in"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
