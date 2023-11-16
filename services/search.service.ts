export default async function searchMovies(query_string: string) {
  const url =
    `https://api.themoviedb.org/3/search/movie?query=${query_string}&include_adult=false&language=en-US&page=1`;
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
