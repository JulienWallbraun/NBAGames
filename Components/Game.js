import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Moment from "moment-timezone";
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

class Game extends React.Component {
  _getTeamLogoFromId(id) {
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

  _getFranceLocalTimeFromEasternTime() {
    const game = this.props.game;
    //convert "2022-04-01T00:00:00.000Z" to "2022-04-01"
    let localDateEastern = game.date.substring(0, 10);
    //convert "10:30 PM ET" to "22:30" and "8:30 AM" to "08:30"
    let localTimeEastern = Moment(game.status.slice(0, -2), "HH:mm A").format(
      "HH:mm"
    );
    //localTimeEastern = game.status.includes("PM") ? localTimeEastern : localTimeEastern;
    let localDateTimeEastern = localDateEastern + " " + localTimeEastern;
    let momentEastern = Moment.tz(localDateTimeEastern, "America/New_York");
    let momentFrance = momentEastern.clone().tz("Europe/Paris").format("HH:mm");
    return momentFrance;
  }

  render() {
    const game = this.props.game;
    return (
      <View style={styles.gameContainer}>
        <Text
          style={[
            styles.team,
            styles.homeTeam,
            this._isHomeTeamWinnner() && (styles.winningTeam),
          ]}
        >
          {game.home_team.full_name}
        </Text>
        <Image
          style={styles.logo}
          source={this._getTeamLogoFromId(game.home_team.id)}
        />
        <View style={styles.superScoreContainer}>
          {
            //Display when the game will start if not started or finished yet, else display score
            this._isGameNotStarted() ? (
              //case game not started nor finished
              <Text
                style={[
                  styles.scoreContainer,
                  styles.gameStatusNotStarted,
                ]}
              >
                {this._getFranceLocalTimeFromEasternTime()}
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
                    this._isHomeTeamWinnner() && (styles.winningTeam),
                  ]}
                >
                  {game.home_team_score}
                </Text>
                <Text style={styles.scoreContainer}>-</Text>
                <Text
                  style={[
                    styles.scoreContainer,
                    this._isVisitorTeamWinnner() && (styles.winningTeam),
                  ]}
                >
                  {game.visitor_team_score}
                </Text>
              </View>
            )
          }
          {//display remaining time if the game is in progress
          this._isGameInProgress() && (
            <Text style={styles.gameInProgressTime}>
              {game.status + (game.time == "" ? "" : " " + game.time)}
            </Text>
          ) }
        </View>

        <Image
          style={styles.logo}
          source={this._getTeamLogoFromId(game.visitor_team.id)}
        />
        <Text
          style={[
            styles.team,
            styles.visitorTeam,
            this._isVisitorTeamWinnner() && (styles.winningTeam),
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
  logo: {
    minHeight: 35,
    minWidth: 35,
    //height: 35,
    maxHeight: 45,
    maxWidth: 45,
    //flex: 10,
    margin: 10,
    resizeMode: "contain",
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
