export default function EspaceLoading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80 z-50">
      <div className="text-center">
        <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-indigo-600 dark:border-indigo-400 border-t-transparent dark:border-t-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Chargement de l'espace client...</span>
        </div>
        <p className="mt-4 text-lg font-semibold text-indigo-600 dark:text-indigo-400">Chargement de l'espace client...</p>
      </div>
    </div>
  );
}