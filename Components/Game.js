import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import Hawks from "../assets/NBA_logos/Hawks.png";
import Celtics from "../assets/NBA_logos/Celtics.png";
import Nets from "../assets/NBA_logos/Nets.png";
import Hornets from "../assets/NBA_logos/Hornets.png";
import Bulls from "../assets/NBA_logos/Bulls.png";
import Cavaliers from "../assets/NBA_logos/Cavaliers.png";
import Mavericks from "../assets/NBA_logos/Mavericks.png";
import Nuggets from "../assets/NBA_logos/Nuggets.png";
import Pistons from "../assets/NBA_logos/Pistons.png";
import Warriors from "../assets/NBA_logos/Warriors.png";
import Rockets from "../assets/NBA_logos/Rockets.png";
import Pacers from "../assets/NBA_logos/Pacers.png";
import Clippers from "../assets/NBA_logos/Clippers.png";
import Lakers from "../assets/NBA_logos/Lakers.png";
import Grizzlies from "../assets/NBA_logos/Grizzlies.png";
import Heat from "../assets/NBA_logos/Heat.png";
import Bucks from "../assets/NBA_logos/Bucks.png";
import Timberwolves from "../assets/NBA_logos/Timberwolves.png";
import Pelicans from "../assets/NBA_logos/Pelicans.png";
import Knicks from "../assets/NBA_logos/Knicks.png";
import Thunder from "../assets/NBA_logos/Thunder.png";
import Magic from "../assets/NBA_logos/Magic.png";
import Sixers from "../assets/NBA_logos/76ers.png";
import Suns from "../assets/NBA_logos/Suns.png";
import TrailBlazers from "../assets/NBA_logos/TrailBlazers.png";
import Kings from "../assets/NBA_logos/Kings.png";
import Spurs from "../assets/NBA_logos/Spurs.png";
import Raptors from "../assets/NBA_logos/Raptors.png";
import Jazz from "../assets/NBA_logos/Jazz.png";
import Wizards from "../assets/NBA_logos/Wizards.png";
/*
const MAP_ID_TO_LOGO = {
  1: Hawks,
  2: Celtics,
  3: Nets,
  4: Hornets,
  5: Bulls,
  6: Cavaliers,
  7: Mavericks,
  8: Nuggets,
  9: Pistons,
  10: Warriors,
  11: Rockets,
  12: Pacers,
  13: Clippers,
  14: Lakers,
  15: Grizzlies,
  16: Heat,
  17: Bucks,
  18: Timberwolves,
  19: Pelicans,
  20: Knicks,
  21: Thunder,
  22: Magic,
  23: Sixers,
  24: Suns,
  25: TrailBlazers,
  26: Kings,
  27: Spurs,
  28: Raptors,
  29: Jazz,
  30: Wizards,
};
*/
class Game extends React.Component {
  _getTeamLogoFromId(id) {
    const game = this.props.game;
    switch (id) {
      case 1:
        return Hawks;
        break;
      case 2:
        return Celtics;
        break;
      case 3:
        return Nets;
        break;
      case 4:
        return Hornets;
        break;
      case 5:
        return Bulls;
        break;
      case 6:
        return Cavaliers;
        break;
      case 7:
        return Mavericks;
        break;
      case 8:
        return Nuggets;
        break;
      case 9:
        return Pistons;
        break;
      case 10:
        return Warriors;
        break;
      case 11:
        return Rockets;
        break;
      case 12:
        return Pacers;
        break;
      case 13:
        return Clippers;
        break;
      case 14:
        return Lakers;
        break;
      case 15:
        return Grizzlies;
        break;
      case 16:
        return Heat;
        break;
      case 17:
        return Bucks;
        break;
      case 18:
        return Timberwolves;
        break;
      case 19:
        return Pelicans;
        break;
      case 20:
        return Knicks;
        break;
      case 21:
        return Thunder;
        break;
      case 22:
        return Magic;
        break;
      case 23:
        return Sixers;
        break;
      case 24:
        return Suns;
        break;
      case 25:
        return TrailBlazers;
        break;
      case 26:
        return Kings;
        break;
      case 27:
        return Spurs;
        break;
      case 28:
        return Raptors;
        break;
      case 29:
        return Jazz;
        break;
      case 30:
        return Wizards;
        break;
    }
  }

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
    return (
      <View style={styles.gameContainer}>
        {/*<Text>{game.id}</Text>*/}
        <Text
          style={[
            styles.team,
            styles.homeTeam,
            this._isHomeTeamWinnner() ? styles.winningTeam : null,
          ]}
        >
          {game.home_team.full_name}
        </Text>
        <Image style={styles.logo} source={this._getTeamLogoFromId(game.home_team.id)} />
        <View
          style={[
            styles.scoreContainer,
            game.status == "Final"
              ? styles.gameStatusFinal
              : game.time == ""
              ? styles.gameStatusNotStarted
              : styles.gameStatusInProgress,
          ]}
        >
          <Text
            style={[
              styles.score,
              this._isHomeTeamWinnner() ? styles.winningTeam : null,
            ]}
          >
            {game.home_team_score}
          </Text>
          <Text style={styles.score}>-</Text>
          <Text
            style={[
              styles.score,
              this._isVisitorTeamWinnner() ? styles.winningTeam : null,
            ]}
          >
            {game.visitor_team_score}
          </Text>
        </View>

        <Image style={styles.logo} source={this._getTeamLogoFromId(game.visitor_team.id)} />
        <Text
          style={[
            styles.team,
            styles.visitorTeam,
            this._isVisitorTeamWinnner() ? styles.winningTeam : null,
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
    resizeMode: "contain",
  },
  scoreContainer: {
    flex: 4,
    flexDirection: "row",
    backgroundColor: "#000000",
    textAlign: "center",
    justifyContent: "center",
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
