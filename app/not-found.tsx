import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex items-center justify-center min-h-screen text-center text-white bg-neutral-950">
      <div>
        <h1 className="font-bold text-lg">404</h1>
        <p className="text-sm text-neutral-400">Page not found</p>
        <Link href="/">
          <button className="text-sm bg-neutral-800 p-2 rounded-lg mt-3 transition ease-in-out hover:bg-neutral-900">
            Back home
          </button>
        </Link>
      </div>
    </main>
  );
}
