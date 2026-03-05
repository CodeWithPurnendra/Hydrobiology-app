import { useState, useEffect } from "react";

function AquaticSpecies() {
  const [species, setSpecies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        const res = await fetch(
          "https://api.inaturalist.org/v1/taxa?q=fish&per_page=6&rank=species&photos=true",
        );
        const data = await res.json();
        setSpecies(data.results.slice(0, 6));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchSpecies();
  }, []);

  return (
    <section className="bg-slate-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-8">
          Explore Aquatic Species
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {isLoading ? (
            <div className="col-span-3 flex justify-center items-center py-10">
              <div className="relative w-20 h-20">
                <span className="absolute inset-0 rounded-full border-4 border-cyan-400 opacity-70 animate-ping"></span>
                <span className="absolute inset-2 rounded-full border-4 border-cyan-500 opacity-70 animate-ping animation-delay-300"></span>
                <span className="absolute inset-4 rounded-full border-4 border-cyan-600 opacity-70 animate-ping animation-delay-600"></span>
              </div>
            </div>
          ) : (
            species.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
                >
                  <img
                    src={item.default_photo?.medium_url}
                    alt={item.preferred_commom_name}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <h3 className="text-xl font-semibold text-cyan-700 mb-2 capitalize">
                    {item.preferred_commom_name || item.name}
                  </h3>
                  <p className="text-slate-600 italic text-sm">{item.name}</p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}

export default AquaticSpecies;
