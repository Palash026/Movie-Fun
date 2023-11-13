import Link from 'next/link'

interface Movie {
  name: string;
  title: string;
  releaseDate: Date;
}

interface MovieCardProps {
  movie?: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href="/" className="max-w-xs cursor-pointer">
      <div className="relative">
        <div className="overflow-hidden">
          <img
            src="https://wallpapers.com/images/hd/all-superhero-of-avengers-8umq9c3bffyuqmpb.webp"
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
