export default async function getMovieById(id: string) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.api_key}`;
  
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer "+process.env.token,
    },
  };

  return await fetch(url, options);
}