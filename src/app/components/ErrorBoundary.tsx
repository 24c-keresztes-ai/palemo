import { useRouteError, Link } from 'react-router';

export function ErrorBoundary() {
  const error = useRouteError() as Error;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-[#F28C28] mb-4">Oops!</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Something went wrong</h2>
        <p className="text-gray-600 mb-8">
          {error?.message || 'An unexpected error occurred'}
        </p>
        <Link 
          to="/" 
          className="inline-block bg-[#F28C28] text-white px-6 py-3 rounded-lg hover:bg-[#d97a1f] transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
