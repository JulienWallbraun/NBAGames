const API_HOST = "free-nba.p.rapidapi.com";
const API_KEY = "0f9c4b6affmshe9e7f7675293d22p112a05jsn2eda62ef4e78";

export function getGamesByDate(date) {
  return fetch(
    "https://free-nba.p.rapidapi.com/games?page=0&per_page=25&dates[]=" + date,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": API_HOST,
        "x-rapidapi-key": API_KEY,
      },
    }
  )
    .then((response) => {
     console.log("OK response")
     //console.log(response.json())
        //response.json();
    return response.json();
    })
    .catch((err) => {
      console.error(err);
    });
}
