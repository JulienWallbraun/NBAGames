import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";

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

  render() {
    const game = this.props.game;
    //console.log(this._isVisitorTeamWinnner());
    return (
      <View style={styles.gameContainer}>
        {/*<Text>{game.id}</Text>*/}
        <Text
          style={[
            styles.team,
            styles.homeTeam,
            this._isHomeTeamWinnner() ? styles.winningTeam : null
          ]}
        >
          {game.home_team.full_name}
        </Text>
        <Image style={styles.logo} source={require("./Bulls.png")} />
        <View
          style={[
            styles.scoreContainer,
            game.status == "Final"
              ? styles.gameStatusFinal
              : game.status.includes("Qtr") || game.status.includes("Ot")//overtime displaynot tested
              ? styles.gameStatusInProgress
              : styles.gameStatusNotStarted,
          ]}
        >
          <Text style={[styles.score, this._isHomeTeamWinnner() ? styles.winningTeam : null]}>{game.home_team_score}</Text>
          <Text style={styles.score}>-</Text>
          <Text style={[styles.score, this._isVisitorTeamWinnner() ? styles.winningTeam : null]}>{game.visitor_team_score}</Text>
        </View>

        <Image style={styles.logo} source={require("./Bulls.png")} />
        <Text style={[styles.team, styles.visitorTeam, this._isVisitorTeamWinnner() ? styles.winningTeam : null]}>
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
    height: 40,
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
  logo: {
    width: 35,
    height: 35,
    margin: 10,
  },
  scoreContainer: {
    flex: 4,
    flexDirection: "row",
    backgroundColor: "#000000",
    textAlign: "center",
    justifyContent: "center",
    //height: 30,
  },
  score: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  gameStatusFinal: {
    color: "#FFFFFF",
  },
  gameStatusInProgress: {
    backgroundColor: "#DF0000",
  },
  gameStatusNotStarted: {
    backgroundColor: "#88888888",
  },
});

export default Game;
