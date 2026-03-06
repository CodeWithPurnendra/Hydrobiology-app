
import { useState, useEffect } from "react";
function AquaticSpecies() {
  const [species, setSpecies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        setIsLoading(true);

        const res = await fetch(
          `https://api.inaturalist.org/v1/taxa?q=fish&per_page=6&page=${page}&rank=species&photos=true`
        );

        const data = await res.json();

        setSpecies((prev) => [...prev, ...data.results]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchSpecies();
  }, [page]);

  return (
    <div>
  <section className="bg-slate-100 py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-8">
        Explore Aquatic Species
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {species.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <img
                src={item.default_photo?.medium_url}
                alt={item.preferred_common_name}
                className="w-full h-64 object-cover rounded-xl mb-4"
              />

              <h3 className="text-xl font-semibold text-cyan-700 mb-2 capitalize">
                {item.preferred_common_name || item.name}
              </h3>

              <p className="text-slate-600 italic text-sm">{item.name}</p>
            </div>
          );
        })}
      </div>

      {isLoading && (
        <div className="flex justify-center items-center py-10">
          <div className="relative w-20 h-20">
            <span className="absolute inset-0 rounded-full border-4 border-cyan-400 opacity-70 animate-ping"></span>
            <span className="absolute inset-2 rounded-full border-4 border-cyan-500 opacity-70 animate-ping"></span>
            <span className="absolute inset-4 rounded-full border-4 border-cyan-600 opacity-70 animate-ping"></span>
          </div>
        </div>
      )}

      {!isLoading && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full shadow-lg transition hover:scale-105"
          >
            View More Species
          </button>
        </div>
      )}
    </div>
  </section>
</div>
  );
}

export default AquaticSpecies;