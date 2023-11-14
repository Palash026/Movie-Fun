import searchMovies from "@/services/search.service";
import Movie from "@/interface/movie.interface";
import MovieList from "@/components/MovieList";

export default async function SearchPage(props:any) {
  const res = await (await searchMovies(props.searchParams.query)).json();
  const movies: Movie[] = res.results;
  
  return <MovieList movies={movies} />
}
