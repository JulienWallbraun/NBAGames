import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { getTeamGamesBySeason } from "../API/FreeNBAAPI";
import MockResponseGetTeamGamesListOnSpecificSeason from "../API/mockResponseGetTeamGamesListOnSpecificSeason.json";
import Moment from "moment";
import "moment/min/locales.min";
import i18n from "i18n-js";
import TeamStatsHeader from "./TeamStatsHeader";
import TeamGamesList from "./TeamGamesList";

MOCK_API_RESPONSE = false;

function TeamSeaonGames(props) {
  const date = new Date();

  let games = [];
  const [regularSeasonGames, setRegularSeasonGames] = useState([]);
  const [postSeasonGames, setPostSeasonGames] = useState([]);
  const [showRegularSeasonGames, setShowRegularSeasonGames] = useState(true);
  const [showPostSeasonGames, setShowPostSeasonGames] = useState(true);

  const loadGames = () => {
    //format date to "2021-12-20" to comply with API date expected format
    getTeamGamesBySeason(
      props.route.params.teamId,
      props.route.params.season
    ).then((response) => {
      games = orderGames(response);
      splitGamesBetweenRegularAndPostseaons();
    });
  };

  const loadMockGames = () => {
    let orderedGames = orderGames(
      MockResponseGetTeamGamesListOnSpecificSeason.data
    );
    setGames(orderedGames);
  };

  const splitGamesBetweenRegularAndPostseaons = () => {
    let updatedRegularSeasonGames = [];
    let updatedPostSeasonGames = [];
    if (games.length > 0) {
      games.forEach((element) => {
        element.postseason
          ? updatedPostSeasonGames.push(element)
          : updatedRegularSeasonGames.push(element);
      });
    }
    setRegularSeasonGames(updatedRegularSeasonGames);
    setPostSeasonGames(updatedPostSeasonGames);
  };

  const orderGames = (games) => {
    //no need to sort list of games if <= 1
    if (games !== undefined && games.length > 1) {
      games.sort(
        (a, b) => Moment(a.date, "YYYY-MM-DD") - Moment(b.date, "YYYY-MM-DD")
      );
    }
    return games;
  };

  useEffect(() => {
    loadGames();
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    headerGamesText: {
      fontSize: 40,
      color: "#FF0000",
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
      color: "#FF0000",
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
        <ScrollView stickyHeaderIndices={[0, 2]}>
          <TouchableOpacity style={{backgroundColor:"#FFFFFF"}} onPress={() =>
              setRegularSeasonGames(!regularSeasonGames)
            }>
            <Text style={styles.headerGamesText}>tete</Text>
          </TouchableOpacity>

{regularSeasonGames &&(
          <TeamGamesList
            games={regularSeasonGames}
            teamId={props.route.params.teamId}
          />)}
          <TouchableOpacity style={{backgroundColor:"#FFFFFF"}} onPress={() =>
              setPostSeasonGames(!postSeasonGames)}>
            <Text style={styles.headerGamesText}>tete2 </Text>
          </TouchableOpacity>
          <TeamGamesList
            games={postSeasonGames}
            teamId={props.route.params.teamId}
          />
        </ScrollView>
      </View>
    </View>
  );
}

export default TeamSeaonGames;
