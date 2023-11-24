import React from "react";
import Movie from "@/interface/movie.interface";
import MovieCard from "./MovieCard";

export default function MovieList({ movies }: { movies: Movie[] }) {
  return (
    <div className="container mx-auto p-4">
      {movies.length ? (
        <div className="grid justify-between grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {movies.map((movie) => (
            <div key={movie?.id}>
              <MovieCard movie={movie}></MovieCard>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-96 flex items-center justify-center">
          <p className="text-center">Movies not available</p>
        </div>
      )}
    </div>
  );
}
