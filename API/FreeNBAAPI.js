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
      return response.json();
    })
    .catch((err) => {
      console.error(err);
    });
}

export function getPlayersStatsByGame(gameId) {
  return fetch(
    "https://free-nba.p.rapidapi.com/stats?page=0&per_page=50&game_ids[]=" + gameId,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": API_HOST,
        "x-rapidapi-key": API_KEY,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.error(err);
    });
}
