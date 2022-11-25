import { useState, useEffect } from "react";
import { USAstates } from "../data/usState";
import { useDebounce } from "../hooks/debounce";
import { useLocationSearchQuery } from "../store/flights/flights.api";

export function HomePage() {
  const [dropdawn, setDropdawn] = useState(false)
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search);
  const { isLoading, isError, data } = useLocationSearchQuery(
    {
      query: debounced,
      locale: "en_US",
    },
    {
      skip: debounced.length < 4,
    }
  );

  const stateListLeftClassName = dropdawn ? "left-[-300px]" : "left-0";
  const bstateListClasses = ["list-none absolute top-[70px] right-0 max-h-[200px] shadow-md bg-white overflow-y-scroll shadow", stateListLeftClassName];

  useEffect(() => {
    console.log(dropdawn);
    setDropdawn(debounced.length > 4 && data?.length! > 0)
  }, [debounced, data]);
  return (
    <div className="flex justify-center pt-10 mx-auto h-screen">
      {isError && (
        <p className="text-center text-red-600">You have an error!!!</p>
      )}
      <div className="relative w-[560px]">
        <ul className={bstateListClasses.join(" ")}>
            {USAstates.map((state) => (
                <li key={state.id} className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer" onClick={() => setSearch(state.name)}>
                    {state.name}
                </li>
            ))}

        </ul>
        <label className="text-red-400" htmlFor="">
          REQUIRED Name of cities, districts, places, etc…
        </label>
        <input
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="Search airports..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul className="list-none absolute top-[70px] left-0 right-0 max-h-[200px] shadow-md bg-white overflow-y-scroll shadow">
          {isLoading && <p className="text-center">Loading...</p>}
          {data?.map(flight => (
            <li key={flight.code} className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer">
                {flight.display_name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
