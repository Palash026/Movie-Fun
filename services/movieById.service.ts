export default async function getMovieById(id: string) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=4d29a5206bf98bffd9106fc16e51a1ae`;
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