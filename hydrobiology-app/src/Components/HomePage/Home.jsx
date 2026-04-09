import AquaticSpecies from "./AquaticSpecies";
function Home() {
  return (
    <main className="w-full">

      <section className="relative h-screen w-full overflow-hidden">
        <img
          src="/Images/Hero.jpg"
          alt="Underwater aquatic ecosystem"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl leading-tight mb-6">
            Explore the
            <span className="block text-cyan-300">
              Hidden World of Water
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mb-8">
            Dive into aquatic ecosystems and discover the beauty of hydrobiology
            through immersive learning.
          </p>

          <div className="flex gap-4 flex-col sm:flex-row">
            <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full shadow-xl transition duration-300 hover:scale-105">
              Start Exploring
            </button>

            <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-slate-900 font-semibold rounded-full transition duration-300">
              Learn More
            </button>
          </div>

        </div>
      </section>
      <AquaticSpecies/>
    </main>
  );
}

export default Home;