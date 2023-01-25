import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Moment from "moment-timezone";
import Logo from "./Logo";
import { useTheme } from "@react-navigation/native";

function TeamGame(props) {
  const game = props.game;
  const teamId = props.teamId;

  const _isHomeTeam = () => {
    const game = props.game;
    let result = props.teamId == game.home_team.id;
    return result;
  }

  const _isTeamWinner = () => {
    const game = props.game;
    let result =
      game.status == "Final" && ((
        _isHomeTeam() &&
        game.home_team_score > game.visitor_team_score) ||
      (!_isHomeTeam() &&
        game.home_team_score < game.visitor_team_score))
        ? true
        : false;
    return result;
  }

  const _isTeamLoser = () => {
    const game = props.game;
    let result =
      game.status == "Final" && ((
        _isHomeTeam() &&
        game.home_team_score < game.visitor_team_score) ||
      (!_isHomeTeam() &&
        game.home_team_score > game.visitor_team_score))
        ? true
        : false;
    return result;
  }

  const _isGameNotStarted = () => {
    const game = props.game;
    return game.period == 0;
  }

  const _isGameInProgress = () => {
    const game = props.game;
    return game.period != 0 && game.status != "Final";
  }

  const _isGameFinal = () => {
    const game = props.game;
    return game.status == "Final";
  }

  //display starting time in locale timezone from starting time in Eastern timezone (New york timezone)
  const _getLocalTimeFromEasternTime = () => {
    const game = props.game;
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
  }

  const _getShortDate = () => {
    const game = props.game;
    return Moment(game.date).format("DD/MM");
  }

  const _getTeamScore = () => {
    return _isHomeTeam() ? props.game.home_team_score : props.game.visitor_team_score;
  }

  const _getOpponentTeam = () => {
    const game = props.game;
    let res =
      props.teamId == game.home_team.id
        ? (res = game.visitor_team)
        : (res = game.home_team);
    return res;
  }

  const _getOpponentTeamScore = () => {
    return _isHomeTeam() ? props.game.visitor_team_score : props.game.home_team_score;
  }

  const _getOpponentTeamId = () => {
    return _getOpponentTeam().id;
  }

  const _getTeamResult = () => {
    const game = props.game;
    let res = "-";
    if (game.status == "Final") {
      res =
        _isTeamWinner()
          ? "V"
          : "D";
    }
    return res;
  }

  const { colors } = useTheme();

  const styles = StyleSheet.create({
    gameContainer: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: colors.backgroundColorSecondary,
      alignItems: "center",
    },
    date: {
      flex: 3,
      textAlign: "center",
      color: colors.fontColorPrimary,
    },
    team: {
      flex: 5,
      color: colors.fontColorPrimary,
    },
    homeOrAway: {
      flex: 2,
      textAlign: "center",
      fontSize: 20,
      color: colors.fontColorPrimary,
    },
    opponentTeam: {
      textAlign: "left",
    },
    teamResult: {
      flex: 2,
      textAlign: "center",
      fontSize: 25,
      fontWeight: "bold",
      color: colors.fontColorPrimary,
    },
    winner: {
      color: colors.fontColorTeamWinner,
    },
    loser: {
      color: colors.fontColorTeamLoser,
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
        <Text style={styles.date}>
          {_getShortDate()}
        </Text>
        <Text style={[styles.teamResult, _isTeamWinner() && styles.winner, _isTeamLoser() && styles.loser]}>
          {_getTeamResult()}
        </Text>
        <View style={styles.superScoreContainer}>
          {
            //Display when the game will start if not started or finished yet, else display score
            _isGameNotStarted() ? (
              //case game not started nor finished
              <Text
                style={[styles.scoreContainer, styles.gameStatusNotStarted]}
              >
                {_getLocalTimeFromEasternTime()}
              </Text>
            ) : (
              //case game started or finished
              <View
                style={[
                  styles.scoreContainer,
                  _isGameFinal()
                    ? styles.gameStatusFinal
                    : styles.gameStatusInProgress,
                ]}
              >
                <Text
                  style={[
                    styles.scoreContainer
                  ]}
                >
                  {_getTeamScore()}
                </Text>
                <Text style={styles.scoreContainer}>-</Text>
                <Text
                  style={[
                    styles.scoreContainer,
                    
                  ]}
                >
                  {_getOpponentTeamScore()}
                </Text>
              </View>
            )
          }
          {
            //display remaining time if the game is in progress
            _isGameInProgress() && (
              <Text style={styles.gameInProgressTime}>
                {game.time == "" ? "" : " " + game.time}
              </Text>
            )
          }
        </View>
        <Text style={styles.homeOrAway}>
          {teamId == game.home_team.id ? "vs" : "@"}
        </Text>
        <Logo teamId={_getOpponentTeamId()} />
        <Text style={[styles.team, styles.opponentTeam]}>
          {_getOpponentTeam().full_name}
        </Text>
      </View>
    );
  
}

export default TeamGame;
