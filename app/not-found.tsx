import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-sm flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-7xl font-bold tracking-tight text-gray-100 lg:text-9xl">
        404
      </h1>
      <p className="mb-4 text-3xl font-semibold tracking-tight text-gray-200  md:text-4xl">
        Page Not Found
      </p>
      <p className="mb-4 text-lg font-light text-gray-300">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        aria-label="Back to Home"
        className="medium-14 gradient-button bold-16 md:medium-16 lg:medium-18  w-[50%] rounded-full py-2 text-white md:px-4"
        href="/"
      >
        Back to Home
      </Link>
    </div>
  );
}
