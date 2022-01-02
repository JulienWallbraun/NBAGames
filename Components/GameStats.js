import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { getPlayersStatsByGame } from "../API/FreeNBAAPI";
import TeamGlobalStats from "./TeamGlobalStats";
import TeamPlayersStats from "./TeamPlayersStats";
import MockResponseGetPlayersStatsOnSpecificGame from "../API/mockResponseGetPlayersStatsOnSpecificGame.json";
import Moment from "moment";
import { LargeFlatListSeparator } from "./FlatListSeparators";
import i18n from "i18n-js";
import Game from "./Game";
import TeamStatsHeader from "./TeamStatsHeader";

class GamesStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playersStats: { home: [], visitor: [] },
      homeTeamStats: {},
      visitorTeamStats: {},
      showTeamsGlobalStats: true,
      showHomeTeamPlayersStats: true,
      showVisitorTeamPlayersStats: true,
    };
    this._loadGameStats();
  }

  _loadGameStats() {
    getPlayersStatsByGame(this.props.route.params.gameId).then((response) => {
      let playersStatsSplittedPerTeam = this._getPlayersStatsSplittedPerTeam(
        response.data
      );
      //get global stats per team
      let homeTeamStats = this._getGlobalStats(
        playersStatsSplittedPerTeam.home
      );
      let visitorTeamStats = this._getGlobalStats(
        playersStatsSplittedPerTeam.visitor
      );
      this.setState({
        playersStats: playersStatsSplittedPerTeam,
        homeTeamStats: homeTeamStats,
        visitorTeamStats: visitorTeamStats,
      });
    });
  }

  _loadMockGameStats() {
    let playersStatsSplittedPerTeam = this._getPlayersStatsSplittedPerTeam(
      MockResponseGetPlayersStatsOnSpecificGame.data
    );
    //get global stats per team
    let homeTeamStats = this._getGlobalStats(playersStatsSplittedPerTeam.home);
    let visitorTeamStats = this._getGlobalStats(
      playersStatsSplittedPerTeam.visitor
    );
    this.setState({
      playersStats: playersStatsSplittedPerTeam,
      homeTeamStats: homeTeamStats,
      visitorTeamStats: visitorTeamStats,
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
          if (element.min.toString().indexOf(":60") != -1) {
            let index = element.min.toString().indexOf(":60");
            let minutes = element.min.toString().substring(0, index);
            minutes = (parseInt(minutes) + 1).toString();
            let realTimePlayed = minutes + ":00";
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
        (a, b) => Moment(b.min, "mm:ss") - Moment(a.min, "mm:ss")
      );
    }
  }

  _getGlobalStats(playersStats) {
    let globalStats = {
      fgm: 0,
      fga: 0,
      fg_pct: 0.0,
      fg3m: 0,
      fg3a: 0,
      fg3_pct: 0.0,
      ftm: 0,
      fta: 0,
      ft_pct: 0.0,
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
      //Not possible to divide by 0 : percentage = 0 if attempts =0
      globalStats.fga != 0
        ? (globalStats.fg_pct = globalStats.fgm / globalStats.fga)
        : 0;
      globalStats.fg3a != 0
        ? (globalStats.fg3_pct = globalStats.fg3m / globalStats.fg3a)
        : 0;
      globalStats.fta != 0
        ? (globalStats.ft_pct = globalStats.ftm / globalStats.fta)
        : 0;
    }
    return globalStats;
  }

  render() {
    return (
      <View>
        {
          /*trick to load mock response on press*/
          MOCK_API_RESPONSE && (
            <Button
              title={i18n.t("mockButtonTitle")}
              onPress={() => this._loadMockGameStats()}
            />
          )
        }
        <ScrollView stickyHeaderIndices={[0, 3, 6]}>
          <TouchableOpacity
            onPress={() =>
              this.setState({
                showTeamsGlobalStats: !this.state.showTeamsGlobalStats,
              })
            }
          >
            <Game game={this.props.route.params.game} />
          </TouchableOpacity>
          <>
            {this.state.showTeamsGlobalStats && (
              <TeamGlobalStats
                style={{ flex: 1 }}
                gameFinal={this.props.route.params.game.status=="Final"}
                homeTeamStats={this.state.homeTeamStats}
                visitorTeamStats={this.state.visitorTeamStats}
              />
            )}
          </>
          {LargeFlatListSeparator()}
          <TouchableOpacity
            onPress={() =>
              this.setState({
                showHomeTeamPlayersStats: !this.state.showHomeTeamPlayersStats,
              })
            }
          >
            <TeamStatsHeader
              game={this.props.route.params.gameHomeTeamId}
              gameFullName={this.props.route.params.gameHomeTeamFullName}
            />
          </TouchableOpacity>
          <>
            {this.state.showHomeTeamPlayersStats && (
              <TeamPlayersStats
                playersStats={this.state.playersStats.home}
                teamStats={this.state.homeTeamStats}
              />
            )}
          </>
          {LargeFlatListSeparator()}
          <TouchableOpacity
            onPress={() =>
              this.setState({
                showVisitorTeamPlayersStats:
                  !this.state.showVisitorTeamPlayersStats,
              })
            }
          >
            <TeamStatsHeader
              game={this.props.route.params.gameVisitorTeamId}
              gameFullName={this.props.route.params.gameVisitorTeamFullName}
            />
          </TouchableOpacity>
          <>
            {this.state.showVisitorTeamPlayersStats && (
              <TeamPlayersStats
                playersStats={this.state.playersStats.visitor}
                teamStats={this.state.visitorTeamStats}
              />
            )}
          </>
        </ScrollView>
      </View>
    );
  }
}

export default GamesStats;
