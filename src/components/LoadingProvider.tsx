'use client';

import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  // Start with loading true to show loading state on initial page load
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Handle initial page load
  useEffect(() => {
    // Hide loading after a delay on initial load to ensure content is fully loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Longer delay for initial load to ensure everything is ready

    return () => clearTimeout(timer);
  }, []);

  // Track navigation state changes
  useEffect(() => {
    // Skip the first render (handled by initial load effect)
    if (pathname === null) return;

    // This will run on every navigation
    let showLoadingTimeout: NodeJS.Timeout;
    let hideLoadingTimeout: NodeJS.Timeout;

    // Delay showing loading state to avoid flickering for fast navigations
    showLoadingTimeout = setTimeout(() => {
      setIsLoading(true);

      // Hide loading after navigation completes
      hideLoadingTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 800); // Slightly longer delay for navigation to ensure smooth transitions
    }, 150); // Small delay before showing loading

    return () => {
      clearTimeout(showLoadingTimeout);
      clearTimeout(hideLoadingTimeout);
    };
  }, [pathname, searchParams]);

  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 z-50">
          <div className="text-center">
            <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-blue-600 dark:border-blue-400 border-t-transparent dark:border-t-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Chargement...</span>
            </div>
            <p className="mt-4 text-lg font-semibold text-blue-600 dark:text-blue-400">Chargement...</p>
          </div>
        </div>
      ) : (
        <div className="animate-fade-in">
          {children}
        </div>
      )}
    </>
  );
}
