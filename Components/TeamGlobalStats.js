import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Game from "./Game";
import { SmallFlatListSeparator } from "./FlatListSeparators";

class GamesStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  _isHomeTeamBestFgPct() {
    const game = this.props.game;
    let result =
      game.status == "Final" &&
      this.props.homeTeamStats.fg_pct > this.props.visitorTeamStats.fg_pct
        ? true
        : false;
    return result;
  }

  _isVisitorTeamBestFgPct() {
    const game = this.props.game;
    let result =
      game.status == "Final" &&
      this.props.homeTeamStats.fg_pct < this.props.visitorTeamStats.fg_pct
        ? true
        : false;
    return result;
  }

  _isHomeTeamBestFg3Pct() {
    const game = this.props.game;
    let result =
      game.status == "Final" &&
      this.props.homeTeamStats.fg3_pct > this.props.visitorTeamStats.fg3_pct
        ? true
        : false;
    return result;
  }

  _isVisitorTeamBestFg3Pct() {
    const game = this.props.game;
    let result =
      game.status == "Final" &&
      this.props.homeTeamStats.fg3_pct < this.props.visitorTeamStats.fg3_pct
        ? true
        : false;
    return result;
  }

  _isHomeTeamBestFtPct() {
    const game = this.props.game;
    let result =
      game.status == "Final" &&
      this.props.homeTeamStats.ft_pct > this.props.visitorTeamStats.ft_pct
        ? true
        : false;
    return result;
  }

  _isVisitorTeamBestFtPct() {
    const game = this.props.game;
    let result =
      game.status == "Final" &&
      this.props.homeTeamStats.ft_pct < this.props.visitorTeamStats.ft_pct
        ? true
        : false;
    return result;
  }

  _isHomeTeamBestReb() {
    const game = this.props.game;
    let result =
      game.status == "Final" &&
      this.props.homeTeamStats.reb > this.props.visitorTeamStats.reb
        ? true
        : false;
    return result;
  }

  _isVisitorTeamBestReb() {
    const game = this.props.game;
    let result =
      game.status == "Final" &&
      this.props.homeTeamStats.reb < this.props.visitorTeamStats.reb
        ? true
        : false;
    return result;
  }

  _isHomeTeamBestAst() {
    const game = this.props.game;
    let result =
      game.status == "Final" &&
      this.props.homeTeamStats.ast > this.props.visitorTeamStats.ast
        ? true
        : false;
    return result;
  }

  _isVisitorTeamBestAst() {
    const game = this.props.game;
    let result =
      game.status == "Final" &&
      this.props.homeTeamStats.ast < this.props.visitorTeamStats.ast
        ? true
        : false;
    return result;
  }

  _isHomeTeamBestPf() {
    const game = this.props.game;
    let result =
      game.status == "Final" &&
      this.props.homeTeamStats.pf < this.props.visitorTeamStats.pf
        ? true
        : false;
    return result;
  }

  _isVisitorTeamBestPf() {
    const game = this.props.game;
    let result =
      game.status == "Final" &&
      this.props.homeTeamStats.pf > this.props.visitorTeamStats.pf
        ? true
        : false;
    return result;
  }

  _isHomeTeamBestStl() {
    const game = this.props.game;
    let result =
      game.status == "Final" &&
      this.props.homeTeamStats.stl > this.props.visitorTeamStats.stl
        ? true
        : false;
    return result;
  }

  _isVisitorTeamBestStl() {
    const game = this.props.game;
    let result =
      game.status == "Final" &&
      this.props.homeTeamStats.stl < this.props.visitorTeamStats.stl
        ? true
        : false;
    return result;
  }

  _isHomeTeamBestTurnover() {
    const game = this.props.game;
    let result =
      game.status == "Final" &&
      this.props.homeTeamStats.turnover < this.props.visitorTeamStats.turnover
        ? true
        : false;
    return result;
  }

  _isVisitorTeamBestTurnover() {
    const game = this.props.game;
    let result =
      game.status == "Final" &&
      this.props.homeTeamStats.turnover > this.props.visitorTeamStats.turnover
        ? true
        : false;
    return result;
  }

  _isHomeTeamBestBlk() {
    const game = this.props.game;
    let result =
      game.status == "Final" &&
      this.props.homeTeamStats.blk > this.props.visitorTeamStats.blk
        ? true
        : false;
    return result;
  }

  _isVisitorTeamBestBlk() {
    const game = this.props.game;
    let result =
      game.status == "Final" &&
      this.props.homeTeamStats.blk < this.props.visitorTeamStats.blk
        ? true
        : false;
    return result;
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.setState({ show: !this.state.show })}
        >
          <Game game={this.props.game} />
        </TouchableOpacity>
        {this.state.show && (
          <View>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Text
                style={[
                  styles.teamGlobalStat,
                  this._isHomeTeamBestFgPct() && styles.bestTeam,
                ]}
              >
                {this.props.homeTeamStats.fgm}/{this.props.homeTeamStats.fga} (
                {Math.round(this.props.homeTeamStats.fg_pct * 100)}%)
              </Text>
              <Text style={styles.teamGlobalStatTitle}>Tirs (%)</Text>
              <Text
                style={[
                  styles.teamGlobalStat,
                  this._isVisitorTeamBestFgPct() && styles.bestTeam,
                ]}
              >
                {this.props.visitorTeamStats.fgm}/
                {this.props.visitorTeamStats.fga} (
                {Math.round(this.props.visitorTeamStats.fg_pct * 100)}%)
              </Text>
            </View>
            {SmallFlatListSeparator()}
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Text
                style={[
                  styles.teamGlobalStat,
                  this._isHomeTeamBestFg3Pct() && styles.bestTeam,
                ]}
              >
                {this.props.homeTeamStats.fg3m}/{this.props.homeTeamStats.fg3a}{" "}
                ({Math.round(this.props.homeTeamStats.fg3_pct * 100)}%)
              </Text>
              <Text style={styles.teamGlobalStatTitle}>3pts (%)</Text>
              <Text
                style={[
                  styles.teamGlobalStat,
                  this._isVisitorTeamBestFg3Pct() && styles.bestTeam,
                ]}
              >
                {this.props.visitorTeamStats.fg3m}/
                {this.props.visitorTeamStats.fg3a} (
                {Math.round(this.props.visitorTeamStats.fg3_pct * 100)}%)
              </Text>
            </View>
            {SmallFlatListSeparator()}
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Text
                style={[
                  styles.teamGlobalStat,
                  this._isHomeTeamBestFtPct() && styles.bestTeam,
                ]}
              >
                {this.props.homeTeamStats.ftm}/{this.props.homeTeamStats.fta} (
                {Math.round(this.props.homeTeamStats.ft_pct * 100)}%)
              </Text>
              <Text style={styles.teamGlobalStatTitle}>Lancers-francs (%)</Text>
              <Text
                style={[
                  styles.teamGlobalStat,
                  this._isVisitorTeamBestFtPct() && styles.bestTeam,
                ]}
              >
                {this.props.visitorTeamStats.ftm}/
                {this.props.visitorTeamStats.fta} (
                {Math.round(this.props.visitorTeamStats.ft_pct * 100)}%)
              </Text>
            </View>
            {SmallFlatListSeparator()}
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Text
                style={[
                  styles.teamGlobalStat,
                  this._isHomeTeamBestReb() && styles.bestTeam,
                ]}
              >
                {this.props.homeTeamStats.reb} ({this.props.homeTeamStats.oreb}/
                {this.props.homeTeamStats.dreb})
              </Text>
              <Text style={styles.teamGlobalStatTitle}>Rebonds (O/D)</Text>
              <Text
                style={[
                  styles.teamGlobalStat,
                  this._isVisitorTeamBestReb() && styles.bestTeam,
                ]}
              >
                {this.props.visitorTeamStats.reb} (
                {this.props.visitorTeamStats.oreb}/
                {this.props.visitorTeamStats.dreb})
              </Text>
            </View>
            {SmallFlatListSeparator()}
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Text
                style={[
                  styles.teamGlobalStat,
                  this._isHomeTeamBestAst() && styles.bestTeam,
                ]}
              >
                {this.props.homeTeamStats.ast}
              </Text>
              <Text style={styles.teamGlobalStatTitle}>Passes décisives</Text>
              <Text
                style={[
                  styles.teamGlobalStat,
                  this._isVisitorTeamBestAst() && styles.bestTeam,
                ]}
              >
                {this.props.visitorTeamStats.ast}
              </Text>
            </View>
            {SmallFlatListSeparator()}
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Text
                style={[
                  styles.teamGlobalStat,
                  this._isHomeTeamBestPf() && styles.bestTeam,
                ]}
              >
                {this.props.homeTeamStats.pf}
              </Text>
              <Text style={styles.teamGlobalStatTitle}>Fautes</Text>
              <Text
                style={[
                  styles.teamGlobalStat,
                  this._isVisitorTeamBestPf() && styles.bestTeam,
                ]}
              >
                {this.props.visitorTeamStats.pf}
              </Text>
            </View>
            {SmallFlatListSeparator()}
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Text
                style={[
                  styles.teamGlobalStat,
                  this._isHomeTeamBestStl() && styles.bestTeam,
                ]}
              >
                {this.props.homeTeamStats.stl}
              </Text>
              <Text style={styles.teamGlobalStatTitle}>Interceptions</Text>
              <Text
                style={[
                  styles.teamGlobalStat,
                  this._isVisitorTeamBestStl() && styles.bestTeam,
                ]}
              >
                {this.props.visitorTeamStats.stl}
              </Text>
            </View>
            {SmallFlatListSeparator()}
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Text
                style={[
                  styles.teamGlobalStat,
                  this._isHomeTeamBestTurnover() && styles.bestTeam,
                ]}
              >
                {this.props.homeTeamStats.turnover}
              </Text>
              <Text style={styles.teamGlobalStatTitle}>Balles perdues</Text>
              <Text
                style={[
                  styles.teamGlobalStat,
                  this._isVisitorTeamBestTurnover() && styles.bestTeam,
                ]}
              >
                {this.props.visitorTeamStats.turnover}
              </Text>
            </View>
            {SmallFlatListSeparator()}
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Text
                style={[
                  styles.teamGlobalStat,
                  this._isHomeTeamBestBlk() && styles.bestTeam,
                ]}
              >
                {this.props.homeTeamStats.blk}
              </Text>
              <Text style={styles.teamGlobalStatTitle}>Contres</Text>
              <Text
                style={[
                  styles.teamGlobalStat,
                  this._isVisitorTeamBestBlk() && styles.bestTeam,
                ]}
              >
                {this.props.visitorTeamStats.blk}
              </Text>
            </View>
          </View>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  teamGlobalStat: {
    flex: 5,
    textAlign: "center",
    textAlignVertical: "center",
  },
  teamGlobalStatTitle: {
    flex: 4,
    textAlign: "center",
    textAlignVertical: "center",
  },
  bestTeam: {
    fontWeight: "bold",
  },
});

export default GamesStats;
