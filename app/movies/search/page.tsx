import searchMovies from "@/services/search.service";
import Movie from "@/interface/movie.interface";
import MovieList from "@/components/MovieList";

interface SearchPageProps {
  searchParams?: { query: string };
}

export default async function SearchPage({ searchParams = { query: 'defaultQuery' } }: SearchPageProps) {
  const res = await (await searchMovies(searchParams.query)).json();
  const movies: Movie[] = res.results;
  
  return <MovieList movies={movies} />
}
