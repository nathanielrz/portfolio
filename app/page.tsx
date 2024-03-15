import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex items-center justify-center min-h-screen p-24 text-center text-white bg-gradient-to-b from-[#151515] to-[#111]">
        <div>
          <h1 className="font-bold text-2xl hover:scale-105 hover:underline transition cursor-pointer mb-10 inline-block">
            Nathaniel's Portfolio
          </h1>
          <p className="mb-2 text-sm">A few of my programming skills: </p>
          <div className="bg-zinc-900 rounded-xl p-10 text-left grid gap-3 grid-rows-2 grid-cols-3">
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
                <div className="w-[92%] h-full bg-emerald-400"></div>
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
                <div className="w-[83%] h-full bg-emerald-400"></div>
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
                <div className="w-[80%] h-full bg-emerald-400"></div>
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
                <div className="w-[75%] h-full bg-emerald-400"></div>
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
                <div className="w-[59%] h-full bg-emerald-400"></div>
              </div>
            </div>
            <div>
              <p className="text-sm p-2 flex gap-1">
                C# <span className="text-zinc-500">28%</span>
              </p>
              <div className="w-60 h-5 bg-slate-300 rounded-xl overflow-hidden">
                <div className="w-[28%] h-full bg-emerald-400"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
