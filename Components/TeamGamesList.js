import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { getTeamGamesBySeason } from "../API/FreeNBAAPI";
import MockResponseGetTeamGamesListOnSpecificSeason from "../API/mockResponseGetTeamGamesListOnSpecificSeason.json";
import NoGamesImage from "../assets/NoGames.png";
import Moment from "moment";
import "moment/min/locales.min";
import { FlatListSeparatorLarge } from "./FlatListSeparatorLarge";
import i18n from "i18n-js";
import TeamStatsHeader from "./TeamStatsHeader";
import TeamGame from "./TeamGame";

MOCK_API_RESPONSE = false;

function TeamGamesList(props) {
  const date = new Date();

  const [games, setGames] = useState([]);

  const loadGames = () => {
    //format date to "2021-12-20" to comply with API date expected format
    getTeamGamesBySeason(props.route.params.teamId, props.route.params.season).then((response) => {
      let orderedGames = orderGames(response);
      setGames(orderedGames);
    });
  }

  const loadMockGames = () => {
    let orderedGames = orderGames(
      MockResponseGetTeamGamesListOnSpecificSeason.data
    );
    setGames(orderedGames);
  }

  /* order games with the following sort :
  - games finalized (same order as given by the API)
  - games in progress (same order as given by the API)
  - games not started (order by starting time, same order as given by the API if several games have the same starting time)
  */
  const orderGames = (games) => {
    //no need to sort list of games if <= 1
    if (games !== undefined && games.length > 1) {
        games.sort(
          (a, b) => Moment(a.date, "YYYY-MM-DD") - Moment(b.date, "YYYY-MM-DD")
        );
      }
    return games;
  }

  useEffect(() => {
    loadGames();
  }, [] );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    searchContainer: {
      justifyContent: "center",
      flexDirection: "row",
      margin: 4,
    },
    dateTouchableContainer: {
      width: 200,
      justifyContent: "center",
      alignItems: "center",
    },
    dateText: {
      textAlign: "center",
    },
    gamesContainer: {
      flex: 1,
    },
    noGames: {
      alignItems: "center",
      justifyContent: "center",
    },
    noGamesImage: {
      height: 250,
      width: 250,
      resizeMode: "contain",
      margin: 20,
    },
    noGamesText: {
      fontSize: 25,
      marginHorizontal: 20,
    },
  });
  

    return (
      <View style={styles.container}>
        {
          /*trick to load mock response on press*/
          MOCK_API_RESPONSE && (
            <Button
              title={i18n.t("mockButtonTitle")}
              onPress={() => {
                loadMockGames();
              }}
            />
          )
        }
        <View style={styles.gamesContainer}>
        <TeamStatsHeader
              teamId={props.route.params.teamId}
              teamFullName={props.route.params.teamFullName}
            />
          {/*Display list of games found for the specified date*/}
          <FlatList
            data={games}
            ItemSeparatorComponent={FlatListSeparatorLarge}
            keyExtractor={(value) => value.id.toString()}
            renderItem={(value) => (
              <TouchableOpacity
                onPress={() =>
                  props.navigation.push("GameStats", {
                    game: value.item,
                    gameId: value.item.id,
                    gameHomeTeamId: value.item.home_team.id,
                    gameVisitorTeamId: value.item.visitor_team.id,
                    gameHomeTeamFullName: value.item.home_team.full_name,
                    gameVisitorTeamFullName: value.item.visitor_team.full_name,
                    gameSeasonId: value.item.season,
                  })
                }
              >
                <TeamGame game={value.item} teamId={props.route.params.teamId}/>
              </TouchableOpacity>
            )}
            ListEmptyComponent={
              //Display image and text to indicate no games were found for the specified date
              <View style={styles.noGames}>
                <Image style={styles.noGamesImage} source={NoGamesImage} />
                <Text style={styles.noGamesText}>{i18n.t("noGamesInfo")}</Text>
              </View>
            }
          />
        </View>
      </View>
    );
  
}

export default TeamGamesList;
