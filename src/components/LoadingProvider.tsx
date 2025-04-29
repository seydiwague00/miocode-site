'use client';

import { useState, useEffect, Suspense } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsLoading(true);

        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 500); // durée simulée du chargement

        return () => clearTimeout(timeout);
    }, [pathname]);

    return (
        <>
            <Suspense fallback={null} />
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
