import React from "react";
import Movie from "@/interface/movie.interface";
import MovieCard from "./MovieCard";

interface MovieListProps {
  movies?: Movie[]; // Make movies prop optional
}

const defaultMovies: Movie[] = [
  {
    id: "defaultId",
    name: "Default Movie Name",
    title: "Default Movie Title",
    releaseDate: new Date(),
    poster_path: "defaultPosterPath.jpg",
    image: "default image",
  },
];

export default function MovieList({ movies = defaultMovies }: MovieListProps) {
  if (!movies || movies.length === 0) {
    return <p>No movies found</p>; // Render a message when movies prop is not provided or is empty
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid justify-between grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
