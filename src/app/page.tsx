export default function Home() {
  return (
    <div className="w-screen h-screen p-4">
      <div className="w-full h-full border-2 border-sky-400 border-x-8 p-4 rounded-lg">
        <h1 className="max-w-full text-lg text-primary/90 text-center font-bold uppercase">
          Hello World
        </h1>
        <p className="text-sm text-red-600/50 text-center truncate my-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
          exercitationem totam sapiente, placeat, nulla aspernatur obcaecati
          nesciunt debitis voluptates quasi eaque cupiditate. Est, ipsum
          cupiditate. Maiores commodi nobis temporibus iste?
        </p>
        <blockquote>
          <p className="text-sm text-sky-600/60 text-center my-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            exercitationem totam sapiente, placeat, nulla aspernatur obcaecati
          </p>
        </blockquote>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4"
        >
          Link para: http:// ... .com .br
        </a>
        <input type="text" name="" id="" className="outline-red-900" />
        <address className="w-full text-lg text-primary text-center">
          Made by Marcus with Love ❤️
        </address>
        <button
          type="button"
          className="inline-block cursor-pointer px-5 py-2 bg-blue-500 text-white rounded-lg"
        >
          Clique Aqui
        </button>
      </div>
    </div>
  );
}
