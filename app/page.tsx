import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex items-center justify-center min-h-screen p-24 text-center text-white bg-neutral-950">
        <div>
          <h1 className="font-bold text-2xl hover:scale-105 hover:underline transition cursor-pointer mb-10">
            Nathaniel's Portfolio
          </h1>
          <p className="mb-2 text-sm">A few of my programming skills: </p>
          <div className="bg-zinc-900 rounded-xl p-10 text-left grid gap-3 grid-rows-3 grid-cols-3">
            <div>
              <p className="text-sm p-2 flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  height={20}
                  width={20}
                >
                  <path
                    fill="#fff"
                    d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"
                  />
                </svg>
                HTML <span className="text-zinc-500">92%</span>
              </p>
              <div className="w-60 h-5 bg-slate-300 rounded-xl overflow-hidden">
                <div className="w-11/12 h-full bg-emerald-400"></div>
              </div>
            </div>
            <div>
              <p className="text-sm p-2 flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={20}
                  width={20}
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#fff"
                    d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"
                  />
                </svg>{" "}
                JavaScript <span className="text-zinc-500">83%</span>
              </p>
              <div className="w-60 h-5 bg-slate-300 rounded-xl overflow-hidden">
                <div className="w-10/12 h-full bg-emerald-400"></div>
              </div>
            </div>
            <div>
              <p className="text-sm p-2 flex gap-1">
                <svg
                  id="typescript"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  height={20}
                  width={20}
                >
                  <defs></defs>
                  <title>Artboard 3</title>
                  <g id="original">
                    <rect x="22.67" y="47" width="99.67" height="73.67" />
                    <path
                      id="original-2"
                      data-name="original"
                      fill="#fff"
                      d="M1.5,63.91v62.5h125V1.41H1.5Zm100.73-5a15.56,15.56,0,0,1,7.82,4.5,20.58,20.58,0,0,1,3,4c0,.16-5.4,3.81-8.69,5.85-.12.08-.6-.44-1.13-1.23a7.09,7.09,0,0,0-5.87-3.53c-3.79-.26-6.23,1.73-6.21,5a4.58,4.58,0,0,0,.54,2.34c.83,1.73,2.38,2.76,7.24,4.86,8.95,3.85,12.78,6.39,15.16,10,2.66,4,3.25,10.46,1.45,15.24-2,5.2-6.9,8.73-13.83,9.9a38.32,38.32,0,0,1-9.52-.1,23,23,0,0,1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34,9.34,0,0,1,1.15-.73L82,101l3.59-2.08.75,1.11a16.78,16.78,0,0,0,4.74,4.54c4,2.1,9.46,1.81,12.16-.62a5.43,5.43,0,0,0,.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48,16.48,0,0,1-3.43-6.25,25,25,0,0,1-.22-8c1.33-6.23,6-10.58,12.82-11.87A31.66,31.66,0,0,1,102.23,58.93ZM72.89,64.15l0,5.12H56.66V115.5H45.15V69.26H28.88v-5A49.19,49.19,0,0,1,29,59.09C29.08,59,39,59,51,59L72.83,59Z"
                    />
                  </g>
                </svg>
                TypeScript <span className="text-zinc-500">80%</span>
              </p>
              <div className="w-60 h-5 bg-slate-300 rounded-xl overflow-hidden">
                <div className="w-4/5 h-full bg-emerald-400"></div>
              </div>
            </div>
            <div>
              <p className="text-sm p-2 flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  height={20}
                  width={20}
                >
                  <path
                    fill="#fff"
                    d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"
                  />
                </svg>
                CSS <span className="text-zinc-500">75%</span>
              </p>
              <div className="w-60 h-5 bg-slate-300 rounded-xl overflow-hidden">
                <div className="w-3/4 h-full bg-emerald-400"></div>
              </div>
            </div>
            <div>
              <p className="text-sm p-2 flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  height={20}
                  width={20}
                >
                  <path
                    fill="#fff"
                    d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4 .1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8 .1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3 .1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"
                  />
                </svg>
                Python <span className="text-zinc-500">59%</span>
              </p>
              <div className="w-60 h-5 bg-slate-300 rounded-xl overflow-hidden">
                <div className="w-7/12 h-full bg-emerald-400"></div>
              </div>
            </div>
            <div>
              <p className="text-sm p-2 flex gap-1">
                C# <span className="text-zinc-500">28%</span>
              </p>
              <div className="w-60 h-5 bg-slate-300 rounded-xl overflow-hidden">
                <div className="w-2/6 h-full bg-emerald-400"></div>
              </div>
            </div>
            <div>
              <p className="text-sm p-2">
                C++ <span className="text-zinc-500">17%</span>
              </p>
              <div className="w-60 h-5 bg-slate-300 rounded-xl overflow-hidden">
                <div className="w-1/6 h-full bg-emerald-400"></div>
              </div>
            </div>
          </div>
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
                <p className="font-bold text-lg mb-2">
                  <Image
                    src="https://vexon.games/logo.svg"
                    alt="logo"
                    width={25}
                    height={25}
                    className="align-middle inline-block"
                  ></Image>{" "}
                  VexonGames
                </p>
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
      <footer className="bg-zinc-900 w-full h-24 text-white p-12 pb-48 relative">
        <div className="flex gap-24 flex-row justify-center">
          <div>
            <h2 className="text-lg font-bold">For Developers</h2>
            <p className="text-zinc-500 text-sm w-32">
              Source code is available {""}
              <a
                href="https://github.com/nathanielrz/portfolio"
                target="_blank"
                className="text-sky-700"
              >
                GitHub
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold">About</h2>
            <p className="text-zinc-500 text-sm w-32">
              Programmed in TypeScript, Next.JS, and Tailwind CSS
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold">Find me</h2>
            <div className="grid gap-3 items-center justify-center mt-2 grid-cols-3 grid-rows-2">
              <a href="https://youtube.com/@nathanielrz" target="_blank">
                <button className="bg-red-700 rounded-lg p-1 transition hover:scale-105 hover:bg-red-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    height={20}
                    width={20}
                  >
                    <path
                      fill="#fff"
                      d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                    />
                  </svg>
                </button>
              </a>
              <a href="https://github.com/nathanielrz" target="_blank">
                <button className="bg-zinc-950 rounded-lg p-1 transition hover:scale-105 hover:bg-zinc-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    height={20}
                    width={20}
                  >
                    <path
                      fill="#fff"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    />
                  </svg>
                </button>
              </a>
              <a href="https://dsc.gg/vexongames" target="_blank">
                <button className="bg-indigo-700 rounded-lg p-1 transition hover:scale-105 hover:bg-indigo-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    height={20}
                    width={20}
                  >
                    <path
                      fill="#fff"
                      d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"
                    />
                  </svg>
                </button>
              </a>
              <a
                href="https://stackoverflow.com/users/22692600/nathaniel"
                target="_blank"
              >
                <button className="bg-zinc-900 rounded-lg p-1 transition hover:scale-105 hover:bg-zinc-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    height={20}
                    width={20}
                  >
                    <path
                      fill="#fff"
                      d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"
                    />
                  </svg>
                </button>
              </a>
              <a href="https://replit.com/@nathanielrz" target="_blank">
                <button className="bg-zinc-900 rounded-lg p-1 transition hover:scale-105 hover:bg-zinc-800">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 5.5C7 4.67157 7.67157 4 8.5 4H15.5C16.3284 4 17 4.67157 17 5.5V12H8.5C7.67157 12 7 11.3284 7 10.5V5.5Z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M17 12H25.5C26.3284 12 27 12.6716 27 13.5V18.5C27 19.3284 26.3284 20 25.5 20H17V12Z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M7 21.5C7 20.6716 7.67157 20 8.5 20H17V26.5C17 27.3284 16.3284 28 15.5 28H8.5C7.67157 28 7 27.3284 7 26.5V21.5Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-12 bg-zinc-800 text-sm flex justify-center items-center">
          <p>&copy; nathanielrz 2024. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}
