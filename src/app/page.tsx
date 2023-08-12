export default function Home() {
  return (
    <div className="h-screen w-screen bg-white">
      <div className="flex h-72 items-end justify-center transition-all">
        <div className="container flex h-full w-full flex-col items-center justify-center rounded-lg bg-gray-800 p-5 md:flex-row md:p-0">
          <div className="flex items-center justify-center">
            <img
              src="https://source.unsplash.com/random/?model"
              alt=""
              srcSet=""
              className="mx-auto h-24 w-24 rounded-full object-cover md:h-full md:w-full md:rounded-lg"
            />
          </div>
          <div>
            <blockquote className="my-5 text-center">
              Me fale e eu esqueço. Me ensine e eu lembro. Me envolva e eu
              aprendo de verdade
            </blockquote>
            <h2 className="text-sky-400">Benjamin Franklin</h2>
            <p className="text-gray-400">Político, EUA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
