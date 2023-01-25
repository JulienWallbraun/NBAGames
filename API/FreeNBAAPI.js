const API_HOST = "free-nba.p.rapidapi.com";
const API_KEY = "0f9c4b6affmshe9e7f7675293d22p112a05jsn2eda62ef4e78";

export function getGamesByDate(date) {
  return getAPICallForAllPages(
    "https://free-nba.p.rapidapi.com/games?dates[]=" +
      date +
      "&per_page=25&page="
  );
}

export function getPlayersStatsByGame(gameId) {
  return getAPICallForAllPages(
    "https://free-nba.p.rapidapi.com/stats?game_ids[]=" +
      gameId +
      "&per_page=50&page="
  );
}

export async function getTeamGamesBySeason(teamId, season) {
  return getAPICallForAllPages(
    "https://free-nba.p.rapidapi.com/games?seasons[]=" +
      season +
      "&team_ids[]=" +
      teamId +
      "&per_page=120&page="
  );
}

//get response from API call
function getAPICall(url) {
  return fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-host": API_HOST,
      "x-rapidapi-key": API_KEY,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.error(err);
    });
}

//get all results for a specific API call with content of all pages of the response
async function getAPICallForAllPages(baseUrl) {
  let response = [];
  let nextPage = 1;
  do {
    try {
      const responseSpecificPage = await getAPICall(String(baseUrl + nextPage));
      const data = responseSpecificPage.data;
      //concat all element of the page to the global array of element found in all pages
      data.forEach((element) => response.push(element));
      nextPage = responseSpecificPage.meta.next_page;
    } catch {
      (err) => console.error(err);
    }
  } while (nextPage != null); //do while there is a next page of results
  return response;
}
