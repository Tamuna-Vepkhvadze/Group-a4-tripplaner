
import React, { useEffect, useState } from "react";
import { useFatchCountry } from "../../hooks/useFatchCountry";

const ExplorePlaces: React.FC = () => {
  const { data, isLoading } = useFatchCountry();
  const [searchMain, setSearchMain] = useState("");
  const [searchQuick, setSearchQuick] = useState("All");
  const [showFavOnly, setShowFavOnly] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("favCountries");
      if (raw) setFavorites(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("favCountries", JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  const toggleFavorite = (cca3: string) => {
    setFavorites((prev) =>
      prev.includes(cca3) ? prev.filter((c) => c !== cca3) : [...prev, cca3]
    );
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <h1 className="text-center text-xl font-semibold">Loading ...</h1>
      </div>
    );

  const all = data ?? [];
  const filtered = all.filter((el: any) => {
    const name = String(el?.name?.official ?? "").toLowerCase();
    if (showFavOnly && !favorites.includes(el?.cca3)) return false;
    const q1 = searchMain.trim().toLowerCase();
    const q2 = searchQuick.trim();
    if ((!q1 && (q2 === "All" || !q2))) return true;
    if (q1 && name.includes(q1)) return true;
    if (q2 && q2 !== "All" && name.includes(q2.toLowerCase())) return true;
    return false;
  });

  return (
    <div className="min-h-screen bg-[#f5f7fb] py-10 px-6 flex justify-center">
      <div className="max-w-[1200px] w-full flex flex-col items-start gap-4">
       
        <div className="flex flex-col md:flex-row items-center justify-start gap-4 flex-wrap w-full mb-2">
    
          <div className="relative w-[350px]">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z"
                />
              </svg>
              <span className="text-gray-400 text-sm">Search countries...</span>
            </span>
            <input
              value={searchMain}
              onChange={(e) => setSearchMain(e.target.value)}
              className="h-12 w-full pl-28 pr-4 rounded-lg border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
          </div>

          
          <div className="relative w-[350px]">
            <select
              value={searchQuick}
              onChange={(e) => setSearchQuick(e.target.value)}
              className="h-12 w-full pl-4 pr-4 rounded-lg border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm appearance-none"
            >
              <option>All</option>
              {all.map((el: any) => (
                <option key={el.cca3} value={el.name.official}>
                  {el.name.official}
                </option>
              ))}
            </select>
          </div>

          <label className="flex items-center gap-2 cursor-pointer select-none mt-2">
            <input
              type="checkbox"
              checked={showFavOnly}
              onChange={(e) => setShowFavOnly(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300"
            />
            <span className="text-red-500">❤️</span>
            <span className="text-sm text-gray-700">Show favorites only</span>
          </label>
        </div>

        <div className="w-full text-left mb-4">
          <span className="text-gray-700 text-sm font-medium">
            Showing {filtered.length} of {all.length} countries
          </span>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-start">
          {filtered.map((el: any) => {
            const cca3 =
              el?.cca3 ?? el?.name?.official ?? Math.random().toString();
            const isFav = favorites.includes(cca3);

            return (
              <article
                key={cca3}
                className="h-[330px] w-full max-w-[300px] bg-white rounded-xl shadow-md overflow-hidden flex flex-col relative m-2"
              >
             
                <div className="absolute top-3 right-3 flex gap-2 z-10">
                  <button
                    onClick={() => toggleFavorite(cca3)}
                    className={`p-2 rounded-full border bg-gray-100 flex items-center justify-center w-8 h-8 border-gray-300 hover:bg-red-100`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill={isFav ? "currentColor" : "none"}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 21s-7.072-4.868-9.532-7.175C-1.05 10.52 2.3 6 6.5 6c1.962 0 3.653.976 4.5 2.09C11.847 6.976 13.538 6 15.5 6 19.7 6 24.05 10.52 21.532 13.825 19.072 16.132 12 21 12 21z"
                      />
                    </svg>
                  </button>
                  <button className="p-2 rounded-full border border-gray-300 bg-gray-100 flex items-center justify-center w-8 h-8 hover:bg-red-100">
                    <span className="text-gray-600 font-bold">+</span>
                  </button>
                </div>

               
                <div className="h-44 w-full bg-gray-100">
                  <img
                    src={
                      el?.flags?.svg ??
                      el?.flags?.png ??
                      "https://via.placeholder.com/300x160?text=Flag"
                    }
                    alt={el?.name?.official ?? "flag"}
                    className="h-full w-full object-cover"
                  />
                </div>

                
                <div className="flex-1 flex flex-col justify-start gap-1.5 px-4 pt-2 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mt-2 ml-0">
                    {el?.name?.official ?? "—"}
                  </h3>

                  
                  <div className="text-sm text-gray-600 flex flex-col gap-1 mt-1 ml-0">
                    <div className="flex items-center gap-1">
                     
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z" />
                      </svg>
                      Capital: {el?.capital?.[0] ?? "N/A"}
                    </div>
                    <div className="flex items-center gap-1">
                      
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 17.93V20h-2v-.07A8.001 8.001 0 014.07 13H4v-2h.07A8.001 8.001 0 0111 4.07V4h2v.07A8.001 8.001 0 0119.93 11H20v2h-.07A8.001 8.001 0 0113 19.93z" />
                      </svg>
                      Region: {el?.region ?? "—"}
                    </div>
                    <div className="flex items-center gap-1">
                    
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 2.09 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                      </svg>
                      {el?.population
                        ? (el.population / 1_000_000).toFixed(1) + "M people"
                        : "—"}
                    </div>
                  </div>

               
                  <div className="flex justify-start mt-2">
                    <span className="inline-block w-1/3 bg-[#d6e8ff] text-[#0b61c3] rounded-full px-4 py-2 text-sm font-medium text-center">
                      {el?.continents?.[0] ?? "—"}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExplorePlaces;
