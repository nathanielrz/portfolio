import Footer from "../components/Footer";

export default function Projects() {
  return (
    <>
      <main className="flex items-center justify-center min-h-screen p-24 text-center text-white bg-gradient-to-b from-[#151515] to-[#111]">
        <div>
          <h1 className="font-bold text-xl mb-10 inline-block">Projects</h1>
          <div className="grid grid-rows-2 grid-cols-3 items-center justify-center gap-x-2 gap-y-1">
            <a href="https://github.com/nathanielrz/console-os" target="_blank">
              <div className="bg-zinc-900 rounded-xl p-4 inline-block w-80 hover:scale-95 hover:bg-zinc-800 transition ease-in-out duration-150">
                <p className="font-bold text-lg mb-2">Console OS</p>
                <p className="text-sm text-zinc-400 w-60 inline-block text-left">
                  A console-based operating system created in Python.
                </p>
              </div>
            </a>
            <a href="https://vexon.games" target="_blank">
              <div className="bg-zinc-900 rounded-xl p-4 inline-block w-80 hover:scale-95 hover:bg-zinc-800 transition ease-in-out duration-150">
                <p className="font-bold text-lg mb-2">VexonGames</p>
                <p className="text-sm text-zinc-400 w-60 inline-block text-left">
                  A free-to-play online game website available to everyone in
                  every countr...
                </p>
              </div>
            </a>
            <a
              href="https://github.com/nathanielrz/calculator-in-react"
              target="_blank"
            >
              <div className="bg-zinc-900 rounded-xl p-4 inline-block w-80 hover:scale-95 hover:bg-zinc-800 transition ease-in-out duration-150">
                <p className="font-bold text-lg mb-2">Calculator in React</p>
                <p className="text-sm text-zinc-400 w-60 inline-block text-left">
                  A remake of apple's calculator in react - contributions are
                  appreciated
                </p>
              </div>
            </a>
            <a
              href="https://github.com/nathanielrz/discord-profile-status"
              target="_blank"
            >
              <div className="bg-zinc-900 rounded-xl p-4 inline-block w-80 hover:scale-95 hover:bg-zinc-800 transition ease-in-out duration-150">
                <p className="font-bold text-lg mb-2">Discord Profile Status</p>
                <p className="text-sm text-zinc-400 w-60 inline-block text-left">
                  A react package for using Discord's profile picture and
                  statuses in your websites
                </p>
              </div>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
