import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
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
  const games = props.games;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
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
      
        <View>
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
                <TeamGame game={value.item} teamId={props.teamId}/>
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
       
    );
  
}

export default TeamGamesList;
