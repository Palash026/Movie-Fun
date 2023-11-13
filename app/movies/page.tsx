import MovieCard from "@/components/MovieCard";

interface Movie {
  id: string;
  name: string;
  overview: string;
  first_air_date: Date;
}

const MoviePage = async () => {
  const url = "https://api.themoviedb.org/3/trending/all/day?language=en-US";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer "+process.env.token,
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const movies: Movie[] = data.results;

  return (
    <div className="container mx-auto bg-red-400 p-4">
        <div className="grid justify-between grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {movies.map(movie => <MovieCard></MovieCard>)}
        </div>
        <MovieCard></MovieCard>
      {/* {movies.map(movie => <p>{movie.name}</p>)} */}
    </div>
  );
}

export default MoviePage