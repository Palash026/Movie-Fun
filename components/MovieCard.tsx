import Link from "next/link";

interface Movie {
  id: string;
  name: string;
  title: string;
  releaseDate: Date;
  poster_path: string;
}

interface MovieCardProps {
  movie: Movie; // Ensuring movie is a required prop
}

const defaultMovie: Movie = {
  id: "defaultId",
  name: "Default Movie Name",
  title: "Default Movie Title",
  releaseDate: new Date(),
  poster_path: "defaultPosterPath.jpg",
};

export default function MovieCard({ movie = defaultMovie }: MovieCardProps) {
  return (
    <Link href={`/movies/${movie.id}`} className="max-w-xs cursor-pointer">
      <div className="relative">
        <div className="overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}?language=en-US`}
            alt="Movie"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full absolute bottom-0 left-0 p-4 bg-black text-white opacity-0 transition duration-300 ease-in-out hover:opacity-90">
          <h3 className="text-lg font-bold">{movie.name || movie.title}</h3>
          <p>Release Date: {movie.releaseDate?.toDateString()}</p>
        </div>
      </div>
    </Link>
  );
}
