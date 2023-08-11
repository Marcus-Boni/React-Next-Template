export default function Home() {
  return (
    <div className="mx-auto h-screen w-screen bg-gray-900 p-5 sm:bg-gray-800 md:bg-gray-700 lg:bg-gray-600 xl:bg-gray-500 2xl:bg-gray-400">
      <h1 className="my-8 text-4xl font-bold text-white">Sistema de Login</h1>
      <div className="w-full">
        <label htmlFor="email" className="block text-left text-lg">
          Endereço de e-mail
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="mb-4 mt-2 w-full rounded-md border border-gray-600 bg-gray-800 py-2 outline-yellow-500"
        />
      </div>
      <div className="w-full">
        <label htmlFor="password" className="block text-left text-lg">
          Senha
        </label>
        <input
          type="password"
          name="email"
          id="password"
          className="mt-2 w-full rounded-md border border-gray-600 bg-gray-800 py-2 outline-yellow-500"
        />
      </div>
      <button
        type="button"
        className="my-6 w-full rounded-md border-none bg-yellow-500 py-2 text-white"
      >
        Entrar
      </button>
      <div className="text-gray-400">
        Não é membro?
        <a href="#" className="ml-1 font-bold text-yellow-500">
          Faça seu cadastro agora!
        </a>
      </div>
      <div className="grid grid-cols-3 gap-1">
        <div className="col-span-full rounded-md bg-blue-500 p-4">01</div>
        <div className="col-span-2 rounded-md bg-blue-500 p-4">02</div>
        <div className="rounded-md bg-blue-500 p-4">03</div>
        <div className="rounded-md bg-blue-500 p-4">04</div>
        <div className="col-start-1 col-end-3 row-start-1 rounded-md bg-blue-500 p-4">
          05
        </div>
        <div className="rounded-md bg-blue-500 p-4">06</div>
        <div className="rounded-md bg-blue-500 p-4">07</div>
        <div className="rounded-md bg-blue-500 p-4">08</div>
        <div className="col-span-full rounded-md bg-blue-500 p-4">09</div>
      </div>
    </div>
  );
}
