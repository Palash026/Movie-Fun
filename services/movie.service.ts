export default async function getMovie(){
    const url = "https://api.themoviedb.org/3/trending/all/day?language=en-US";
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