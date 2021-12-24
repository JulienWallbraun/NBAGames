import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Moment from "moment-timezone";
import Logo from "./Logo";

class Game extends React.Component {

  _isHomeTeamWinnner() {
    const game = this.props.game;
    let result =
      game.status == "Final" && game.home_team_score > game.visitor_team_score
        ? true
        : false;
    return result;
  }

  _isVisitorTeamWinnner() {
    const game = this.props.game;
    let result =
      game.status == "Final" && game.home_team_score < game.visitor_team_score
        ? true
        : false;
    return result;
  }

  _isGameNotStarted() {
    const game = this.props.game;
    return game.period == 0;
  }

  _isGameInProgress() {
    const game = this.props.game;
    return game.period != 0 && game.status != "Final";
  }

  _isGameFinal() {
    const game = this.props.game;
    return game.status == "Final";
  }

  //display starting time in locale timezone from starting time in Eastern timezone (New york timezone)
  _getLocalTimeFromEasternTime() {
    const game = this.props.game;
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

  render() {
    const game = this.props.game;
    return (
      <View
        style={styles.gameContainer}
      >
        <Text
          style={[
            styles.team,
            styles.homeTeam,
            this._isHomeTeamWinnner() && styles.winningTeam,
          ]}
        >
          {game.home_team.full_name}
        </Text>
        <Logo teamId={game.home_team.id}/>
        <View style={styles.superScoreContainer}>
          {
            //Display when the game will start if not started or finished yet, else display score
            this._isGameNotStarted() ? (
              //case game not started nor finished
              <Text
                style={[styles.scoreContainer, styles.gameStatusNotStarted]}
              >
                {this._getLocalTimeFromEasternTime()}
              </Text>
            ) : (
              //case game started or finished
              <View
                style={[
                  styles.scoreContainer,
                  this._isGameFinal()
                    ? styles.gameStatusFinal
                    : styles.gameStatusInProgress,
                ]}
              >
                <Text
                  style={[
                    styles.scoreContainer,
                    this._isHomeTeamWinnner() && styles.winningTeam,
                  ]}
                >
                  {game.home_team_score}
                </Text>
                <Text style={styles.scoreContainer}>-</Text>
                <Text
                  style={[
                    styles.scoreContainer,
                    this._isVisitorTeamWinnner() && styles.winningTeam,
                  ]}
                >
                  {game.visitor_team_score}
                </Text>
              </View>
            )
          }
          {
            //display remaining time if the game is in progress
            this._isGameInProgress() && (
              <Text style={styles.gameInProgressTime}>
                {game.status + (game.time == "" ? "" : " " + game.time)}
              </Text>
            )
          }
        </View>
        <Logo teamId={game.visitor_team.id}/>
        <Text
          style={[
            styles.team,
            styles.visitorTeam,
            this._isVisitorTeamWinnner() && styles.winningTeam,
          ]}
        >
          {game.visitor_team.full_name}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#EEEEEE",
    borderColor: "#FFFFFF",
    borderWidth: 2,
    //height: 50,
    alignItems: "center",
  },
  team: {
    flex: 5,
    color: "#000000",
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
    color: "#FFFFFF",
  },
  gameStatusFinal: {
    backgroundColor: "#000000",
  },
  gameStatusInProgress: {
    backgroundColor: "#DF0000",
  },
  gameStatusNotStarted: {
    backgroundColor: "#88888888",
  },
  gameInProgressTime: {
    fontSize: 10,
    textAlign: "center",
  },
});

export default Game;
