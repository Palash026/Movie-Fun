import Link from "next/link";
import Movie from "@/interface/movie.interface";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/movies/${movie?.id}`} className="max-w-xs cursor-pointer">
      <div className="relative">
        <div className="overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}?language=en-US`}
            alt="Movie"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full absolute bottom-0 left-0 p-4 bg-black text-white opacity-0 transition duration-300 ease-in-out hover:opacity-90">
          <h3 className="text-lg font-bold">{movie?.name || movie?.title}</h3>
          <p>Release Date: January 1, 2023</p>
        </div>
      </div>
    </Link>
  );
}
