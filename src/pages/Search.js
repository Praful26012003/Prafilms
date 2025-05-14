import { Card } from "../components";
import { useSearchParams } from "react-router-dom";
import { useSearch } from "../hooks/useSearch";
import { useTitle } from "../hooks/useTitle";

export const Search = ({apiPath, title}) => {
  const [seachParam] = useSearchParams();
  const queryParam = seachParam.get("q");
  const {data : movies} = useSearch(apiPath, queryParam)
  useTitle(`Search for ${queryParam}`)
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">{ movies.length === 0 ? `No result found for '${queryParam}'` : `Results for '${queryParam}'` }</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}
