import { useState, useEffect } from "react";

function Dashboard() {
  const [species, setSpecies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        const res = await fetch(
          "https://api.inaturalist.org/v1/taxa?q=fish&per_page=8&rank=species&photos=true"
        );
        const data = await res.json();
        setSpecies(data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchSpecies();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 px-6 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-cyan-400">
            Hydrobiology Research Dashboard
          </h1>
          <p className="text-slate-400 mt-2">
            Aquatic biodiversity insights powered by global observation data
          </p>
        </div>

        {/* Scientific Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-14">

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <p className="text-sm text-slate-400">Species Loaded</p>
            <h2 className="text-3xl font-bold text-cyan-400 mt-2">
              {species.length}
            </h2>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <p className="text-sm text-slate-400">Taxonomic Rank</p>
            <h2 className="text-3xl font-bold text-cyan-400 mt-2">
              Species
            </h2>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <p className="text-sm text-slate-400">Data Source</p>
            <h2 className="text-xl font-semibold text-cyan-400 mt-2">
              iNaturalist API
            </h2>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <p className="text-sm text-slate-400">Category</p>
            <h2 className="text-2xl font-bold text-cyan-400 mt-2">
              Aquatic Fish
            </h2>
          </div>

        </div>

        {/* Species Panel */}
        <h2 className="text-2xl font-semibold mb-8 text-slate-300">
          Recorded Aquatic Species
        </h2>

        {isLoading ? (
          <div className="flex justify-center py-16">
            <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {species.map((item) => (
              <div
                key={item.id}
                className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500 transition"
              >
                <img
                  src={item.default_photo?.medium_url}
                  alt={item.preferred_common_name}
                  className="w-full h-44 object-cover"
                />

                <div className="p-4">
                  <h3 className="font-semibold text-cyan-400 capitalize">
                    {item.preferred_common_name || item.name}
                  </h3>

                  <p className="text-sm text-slate-400 italic mt-1">
                    {item.name}
                  </p>

                  <p className="text-xs text-slate-500 mt-2">
                    Rank: {item.rank}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}

export default Dashboard;