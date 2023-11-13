import getMovieById from "@/services/movieById.service";

interface Movie{
    name: string;
    title: string;
    tagline: string;
    release_date: string;
    runtime: number;
    poster_path: string;
    backdrop_path: string;
    overview: string;
}

export default async function page({ params }: { params: { slug: string } }) {
  const movie: Movie = await (await getMovieById(params.slug)).json();
  return (
    <div className="container mx-auto p-4 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="md:col-span-1 lg:col-span-2">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}?language=en-US`}
            alt="Movie Poster"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>

        <div className="md:col-span-1 lg:col-span-1">
          <h1 className="text-3xl font-bold mb-2">{movie?.title || movie?.name}</h1>
          <p className="text-gray-600 mb-2">Release Date: {movie?.release_date}</p>
          <p className="text-gray-600 mb-2">Runtime: {movie?.runtime} minutes</p>
          <p className="text-gray-700">{movie?.overview}</p>
        </div>
      </div>
    </div>
  );
}
