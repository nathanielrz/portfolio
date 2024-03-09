import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-screen h-16 backdrop-blur-sm text-center text-white text-sm bg-[rgba(255,255,255,0.02)] z-10 flex justify-center items-center">
      <div className="flex justify-between items-center w-[90%]">
        <div>
          <Link href="/">
            <button className="font-bold text-base">
              Nathaniel's Portfolio
            </button>
          </Link>
        </div>
        <div className="flex gap-8">
          <Link href="/">
            <button>Home</button>
          </Link>
          <Link href="/about">
            <button>About</button>
          </Link>
          <Link href="/projects">
            <button>Projects</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
