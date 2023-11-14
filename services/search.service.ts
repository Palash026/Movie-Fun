export default async function searchMovies(query_string: string) {
  const url =
    `https://api.themoviedb.org/3/search/movie?query=${query_string}&include_adult=false&language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDI5YTUyMDZiZjk4YmZmZDkxMDZmYzE2ZTUxYTFhZSIsInN1YiI6IjY1NTA5MDI5ZDRmZTA0MDEzOTdmYjc2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zd9bmo-i11f0QkhsoZtxHdkAdw0cuiU13scU9scWbQk",
    },
  };

  return await fetch(url, options);
}
