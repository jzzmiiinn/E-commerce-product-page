import { Link } from "react-router";

export const NotFoundPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-12">
      <div className="w-full max-w-md text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
          404 Error
        </p>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>

        <p className="mb-8 leading-relaxed text-gray-500">
          Sorry, we couldn't find the page you're looking for. It may have been
          moved or the URL might be incorrect.
        </p>

        <Link
          to="/"
          className="inline-flex min-h-14 items-center justify-center rounded-lg bg-orange-500 px-8 py-4 font-bold text-gray-900 transition hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
        >
          Back to shopping
        </Link>
      </div>
    </main>
  );
};
