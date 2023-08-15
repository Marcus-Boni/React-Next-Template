export default function Home() {
  return (
    <div className="flex h-screen flex-col bg-black px-2 pt-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="ml-2 h-8 w-8 cursor-pointer"
      >
        <path
          fillRule="evenodd"
          d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
          clipRule="evenodd"
        />
      </svg>
      <div className="flex flex-1">
        <aside className="">
          <div className="m-2 ml-0 rounded-md bg-zinc-900">
            <div className="flex gap-5 p-5 pb-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              <a href="" className="w-64 text-lg font-bold text-white">
                Início
              </a>
            </div>
            <div className="group flex gap-5 p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-zinc-400 transition-all duration-500 group-hover:text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clipRule="evenodd"
                />
              </svg>
              <a
                href=""
                className="transition-al w-64 text-lg font-bold text-zinc-400 transition-all duration-500 group-hover:text-white"
              >
                Buscar
              </a>
            </div>
          </div>
          <div className="m-2 ml-0 flex flex-col bg-zinc-900">
            <div className="flex justify-between p-5 pb-0">
              <a
                href="http://"
                className="flex gap-4 font-bold text-zinc-400 hover:text-white"
                title="Ocultar sua biblioteca"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
                Sua Biblioteca
              </a>
              <div className="flex gap-5">
                <a href="http://" className="-mt-1 rounded-full p-1 transition-all hover:bg-zinc-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </a>
                <a href="http://" className="-mt-1 rounded-full p-1 transition-all hover:bg-zinc-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <ul className="flex gap-5 p-5 text-sm">
                <li className="rounded-full bg-zinc-800 px-4 py-2">Playlists</li>
                <li className="rounded-full bg-zinc-800 p-2">Álbuns</li>
                <li className="rounded-full bg-zinc-800 p-2">Artistas</li>
              </ul>
            </div>
            <div></div>
          </div>
        </aside>
        <main className="flex-1 bg-slate-600">Main</main>
      </div>
      <footer className="bg-gray-800">Footer</footer>
    </div>
  );
}
