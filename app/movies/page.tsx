import getMovie from "@/services/movie.service";
import Movie from "@/interface/movie.interface";
import MovieList from "@/components/MovieList";

export default async function MoviesPage() {
  const res = await (await getMovie()).json();
  const movies: Movie[] = res?.results;

  return <MovieList movies={movies} />;
}
