export default function page({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto p-4 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="md:col-span-1 lg:col-span-2">
          <img
            src="https://wallpapers.com/images/hd/all-superhero-of-avengers-8umq9c3bffyuqmpb.webp"
            alt="Movie Poster"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>

        <div className="md:col-span-1 lg:col-span-1">
          <h1 className="text-3xl font-bold mb-2">Movie Title</h1>
          <p className="text-gray-600 mb-2">Release Date: January 1, 2023</p>
          <p className="text-gray-600 mb-2">Runtime: 120 minutes</p>
          <p className="text-gray-700">
            Summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </p>
        </div>
      </div>
    </div>
  );
}
