import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Moment from "moment-timezone";
import Logo from "./Logo";
import { useTheme } from "@react-navigation/native";

function Game(props) {
  const game = props.game;

  const isHomeTeamWinnner = () => {
    let result =
      game.status == "Final" && game.home_team_score > game.visitor_team_score
        ? true
        : false;
    return result;
  };

  const isVisitorTeamWinnner = () => {
    let result =
      game.status == "Final" && game.home_team_score < game.visitor_team_score
        ? true
        : false;
    return result;
  };

  const isGameNotStarted = () => {
    return game.period == 0;
  };

  const isGameInProgress = () => {
    return game.period != 0 && game.status != "Final";
  };

  const isGameFinal = () => {
    return game.status == "Final";
  };

  //display starting time in locale timezone from starting time in Eastern timezone (New york timezone)
  const _getLocalTimeFromEasternTime = () => {
    //concatenete game date  "2021-12-19T00:00:00.000Z" and game time "8:00 PM ET" to get single game date and time "2021-12-19 8:00 PM" and convert it to "2021-12-19 20:00"
    let localDateTimeEastern = Moment(
      game.date.substring(0, 10) + " " + game.status.slice(0, -3),
      "YYYY-MM-DD HH:mm AA"
    ).format("YYYY-MM-DD HH:mm");
    //declare the game starting date and time is the one in Eastern Timezone (New York timezone)
    let momentEastern = Moment.tz(localDateTimeEastern, "America/New_York");
    let momentLocale = momentEastern
      .clone()
      .tz(Moment.tz.guess())
      .format("HH:mm");
    return momentLocale;
  };

  const { colors } = useTheme();

  const styles = StyleSheet.create({
    gameContainer: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: colors.backgroundColorSecondary,
      alignItems: "center",
    },
    team: {
      flex: 5,
      color: colors.fontColorPrimary,
    },
    homeTeam: {
      textAlign: "right",
    },
    visitorTeam: {
      textAlign: "left",
    },
    winningTeam: {
      fontWeight: "bold",
    },
    superScoreContainer: {
      flex: 4,
    },
    scoreContainer: {
      flexDirection: "row",
      textAlign: "center",
      justifyContent: "center",
      fontSize: 16,
      color: colors.fontColorSecondary,
    },
    gameStatusFinal: {
      backgroundColor: colors.backgroundColorGameStatusFinal,
    },
    gameStatusInProgress: {
      backgroundColor: colors.backgroundColorGameStatusInProgress,
    },
    gameStatusNotStarted: {
      backgroundColor: colors.backgroundColorGameStatusNotStarted,
    },
    gameInProgressTime: {
      fontSize: 10,
      textAlign: "center",
      color: colors.fontColorPrimary,
    },
  });

  return (
    <View style={styles.gameContainer}>
      <Text
        style={[
          styles.team,
          styles.homeTeam,
          isHomeTeamWinnner() && styles.winningTeam,
        ]}
      >
        {game.home_team.full_name}
      </Text>
      <Logo teamId={game.home_team.id} />
      <View style={styles.superScoreContainer}>
        {
          //Display when the game will start if not started or finished yet, else display score
          isGameNotStarted() ? (
            //case game not started nor finished
            <Text style={[styles.scoreContainer, styles.gameStatusNotStarted]}>
              {_getLocalTimeFromEasternTime()}
            </Text>
          ) : (
            //case game started or finished
            <View
              style={[
                styles.scoreContainer,
                isGameFinal()
                  ? styles.gameStatusFinal
                  : styles.gameStatusInProgress,
              ]}
            >
              <Text
                style={[
                  styles.scoreContainer,
                  isHomeTeamWinnner() && styles.winningTeam,
                ]}
              >
                {game.home_team_score}
              </Text>
              <Text style={styles.scoreContainer}>-</Text>
              <Text
                style={[
                  styles.scoreContainer,
                  isVisitorTeamWinnner() && styles.winningTeam,
                ]}
              >
                {game.visitor_team_score}
              </Text>
            </View>
          )
        }
        {
          //display remaining time if the game is in progress
          isGameInProgress() && (
            <Text style={styles.gameInProgressTime}>
              {game.time == "" ? "" : " " + game.time}
            </Text>
          )
        }
      </View>
      <Logo teamId={game.visitor_team.id} />
      <Text
        style={[
          styles.team,
          styles.visitorTeam,
          isVisitorTeamWinnner() && styles.winningTeam,
        ]}
      >
        {game.visitor_team.full_name}
      </Text>
    </View>
  );
}

export default Game;
