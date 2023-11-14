import MovieCard from "@/components/MovieCard";
import getMovie from "@/services/movie.service";
import Movie from "@/interface/movie.interface";

const MoviePage = async () => {
  const res = await (await getMovie()).json();
  const movies: Movie[] = res.results;

  return (
    <div className="container mx-auto p-4">
      <div className="grid justify-between grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {movies.map((movie) => (
          <MovieCard movie={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default MoviePage;
