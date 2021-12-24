import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { Button, TextInput } from "react-native-web";
import { getPlayersStatsByGame } from "../API/FreeNBAAPI";
import TeamStats from "./TeamStats";
import PlayerStats from "./PlayerStats";
import MockResponseGetPlayersStatsOnSpecificGame from "../API/mockResponseGetPlayersStatsOnSpecificGame.json";
import Game from "./Game";
import Moment from "moment";

class GamesStats extends React.Component {
  constructor(props) {
    super(props);
    console.log("contructor game stats");
    this.state = {
      playersStats: { home: [], visitor: [] },
      homeTeamStats: {},
      visitorTeamStats: {},
    };
    this._loadPlayersStats();
  }

  _loadPlayersStats() {
    getPlayersStatsByGame(this.props.route.params.gameId).then((response) => {
      let playersStatsSplittedPerTeam = this._getPlayersStatsSplittedPerTeam(
        response.data
      );
      this.setState({ playersStats: playersStatsSplittedPerTeam });
      console.log("stats per team splitted");
      //get global stats per team
      let homeTeamStats = this._getGlobalStats(this.state.playersStats.home);
      let visitorTeamStats = this._getGlobalStats(this.state.playersStats.visitor);
      this.setState({ homeTeamStats: homeTeamStats, visitorTeamStats: visitorTeamStats});
      console.log("SSSSSSSSSSSSSSSSSTTTTTTTTTTTTTTTTTTATE");
      console.log(this.state.homeTeamStats);
      console.log(this.state.visitorTeamStats);
    });
  }

  _loadMockPlayersStats() {
    this.setState({
      playersStats: MockResponseGetPlayersStatsOnSpecificGame.data,
    });
  }

  _getPlayersStatsSplittedPerTeam(playerStats) {
    let homePlayersStats = [];
    let visitorPlayersStats = [];
    if (playerStats.length > 0) {
      playerStats.forEach((element) => {
        //Not add players who have not played : value in min can be null, "", "0:00"
        if (
          element.min &&
          element.min.toString() != "" &&
          element.min.toString() != "0:00"
        ) {
          //specific case if player min is round to 60 seconds ex : "34:60" then round to the next minute "35:00"
          if (element.min.toString().indexOf(":60") != -1){
            let index = element.min.toString().indexOf(":60");
            let minutes = element.min.toString().substring(0, index);
            minutes = (parseInt(minutes) + 1).toString();
            let realTimePlayed = minutes+":00";
            element.min = realTimePlayed;
          }
          switch (element.team.id.toString()) {
            case element.game.home_team_id.toString():
              homePlayersStats.push(element);
              break;
            case element.game.visitor_team_id.toString():
              visitorPlayersStats.push(element);
          }
        }
      });
    }
    this._orderPlayersByMinutesPlayed(homePlayersStats);
    this._orderPlayersByMinutesPlayed(visitorPlayersStats);
    return { home: homePlayersStats, visitor: visitorPlayersStats };
  }

  //to display first the players who have played the most minutes
  _orderPlayersByMinutesPlayed(playersStats) {
    //no need to sort list of games not started if <= 1
    if (playersStats.length > 1) {
      playersStats.sort(
        (a, b) => Moment(b.min, "mm:ss") - Moment(a.min, "mm:ss"));
    }
  }

  _getGlobalStats(playersStats) {
    let globalStats = {
      fgm: 0,
      fga: 0,
      fg3m: 0,
      fg3a: 0,
      ftm: 0,
      fta: 0,
      oreb: 0,
      dreb: 0,
      reb: 0,
      ast: 0,
      pf: 0,
      stl: 0,
      turnover: 0,
      blk: 0,
      pts: 0,
     };
    if (playersStats.length > 0) {
      
      playersStats.forEach((element) => {
        globalStats.fgm += parseInt(element.fgm);
        globalStats.fga += parseInt(element.fga);
        globalStats.fg3m += parseInt(element.fg3m);
        globalStats.fg3a += parseInt(element.fg3a);
        globalStats.ftm += parseInt(element.ftm);
        globalStats.fta += parseInt(element.fta);
        globalStats.oreb += parseInt(element.oreb);
        globalStats.dreb += parseInt(element.dreb);
        globalStats.reb += parseInt(element.reb);
        globalStats.ast += parseInt(element.ast);
        globalStats.pf += parseInt(element.pf);
        globalStats.stl += parseInt(element.stl);
        globalStats.turnover += parseInt(element.turnover);
        globalStats.blk += parseInt(element.blk);
        globalStats.pts += parseInt(element.pts);
      });
      console.log("let totalTeamPerStat");
      console.log( globalStats);
      /*this.setState({ pts: pts });
      console.log("STATE totalTeamPerStat");
      console.log(this.state.pts);*/
    }
    console.log("fin get total stats");
    return globalStats
  }

  render() {
    console.log("render game stats");
    return (
      <View>
        <ScrollView stickyHeaderIndices={[0]}>
          <Game game={this.props.route.params.game} />
          <TeamStats
            teamId={this.props.route.params.gameHomeTeamId}
            teamFullName={this.props.route.params.gameHomeTeamFullName}
            playersStats={this.state.playersStats.home}
            teamStats={this.state.homeTeamStats}
          />
          <TeamStats
            teamId={this.props.route.params.gameVisitorTeamId}
            teamFullName={this.props.route.params.gameVisitorTeamFullName}
            playersStats={this.state.playersStats.visitor}
            teamStats={this.state.visitorTeamStats}
          />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  gameStats: {
    //flex: 0,
  },
  playerStatsCell: {
    width: 40,
    textAlign: "center",
    textAlignVertical: "center",
    margin: 5,
    flex: 1,
  },
});

export default GamesStats;
