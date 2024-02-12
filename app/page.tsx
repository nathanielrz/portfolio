export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div>
        <h1 className="font-bold text-2xl hover:scale-105 hover:underline transition cursor-pointer mb-10">
          Nathaniel's Portfolio
        </h1>
        <p className="mb-2 text-sm">A few of my programming skills: </p>
        <div className="bg-zinc-900 rounded-xl p-10 text-left grid gap-3 grid-rows-3 grid-cols-3">
          <div>
            <p className="text-sm">
              HTML <span className="text-zinc-500">92%</span>
            </p>
            <div className="w-60 h-5 bg-slate-300 rounded-xl overflow-hidden">
              <div className="w-11/12 h-full bg-emerald-400"></div>
            </div>
          </div>
          <div>
            <p className="text-sm">
              JavaScript <span className="text-zinc-500">83%</span>
            </p>
            <div className="w-60 h-5 bg-slate-300 rounded-xl overflow-hidden">
              <div className="w-10/12 h-full bg-emerald-400"></div>
            </div>
          </div>
          <div>
            <p className="text-sm">
              TypeScript <span className="text-zinc-500">80%</span>
            </p>
            <div className="w-60 h-5 bg-slate-300 rounded-xl overflow-hidden">
              <div className="w-4/5 h-full bg-emerald-400"></div>
            </div>
          </div>
          <div>
            <p className="text-sm">
              CSS😩 <span className="text-zinc-500">75%</span>
            </p>
            <div className="w-60 h-5 bg-slate-300 rounded-xl overflow-hidden">
              <div className="w-3/4 h-full bg-emerald-400"></div>
            </div>
          </div>
          <div>
            <p className="text-sm">
              Python <span className="text-zinc-500">59%</span>
            </p>
            <div className="w-60 h-5 bg-slate-300 rounded-xl overflow-hidden">
              <div className="w-7/12 h-full bg-emerald-400"></div>
            </div>
          </div>
          <div>
            <p className="text-sm">
              C# <span className="text-zinc-500">28%</span>
            </p>
            <div className="w-60 h-5 bg-slate-300 rounded-xl overflow-hidden">
              <div className="w-2/6 h-full bg-emerald-400"></div>
            </div>
          </div>
          <div>
            <p className="text-sm">
              C++ <span className="text-zinc-500">17%</span>
            </p>
            <div className="w-60 h-5 bg-slate-300 rounded-xl overflow-hidden">
              <div className="w-1/6 h-full bg-emerald-400"></div>
            </div>
          </div>
        </div>
        <p className="mt-5 text-sm">Socials: </p>
        <div className="flex gap-4 items-center justify-center">
          <a href="https://youtube.com/@nathanielrz" target="_blank">
            <button className="bg-zinc-900 rounded-xl p-2 transition hover:scale-105 hover:bg-zinc-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                height={25}
                width={25}
              >
                <path
                  fill="#fff"
                  d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                />
              </svg>
            </button>
          </a>
          <a href="https://github.com/nathanielrz" target="_blank">
            <button className="bg-zinc-900 rounded-xl p-2 transition hover:scale-105 hover:bg-zinc-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                height={25}
                width={25}
              >
                <path
                  fill="#fff"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                />
              </svg>
            </button>
          </a>
          <a href="https://dsc.gg/vexongames" target="_blank">
            <button className="bg-zinc-900 rounded-xl p-2 transition hover:scale-105 hover:bg-zinc-800">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height={25} width={25}>
                <path fill="#fff" d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}
