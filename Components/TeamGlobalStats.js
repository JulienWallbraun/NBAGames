import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SmallFlatListSeparator } from "./FlatListSeparators";
import i18n from "i18n-js";

class GamesStats extends React.Component {
  _isHomeTeamBestFgPct() {
    let result =
      this.props.gameFinal &&
      this.props.homeTeamStats.fg_pct > this.props.visitorTeamStats.fg_pct
        ? true
        : false;
    return result;
  }

  _isVisitorTeamBestFgPct() {
    let result =
      this.props.gameFinal &&
      this.props.homeTeamStats.fg_pct < this.props.visitorTeamStats.fg_pct
        ? true
        : false;
    return result;
  }

  _isHomeTeamBestFg3Pct() {
    let result =
      this.props.gameFinal &&
      this.props.homeTeamStats.fg3_pct > this.props.visitorTeamStats.fg3_pct
        ? true
        : false;
    return result;
  }

  _isVisitorTeamBestFg3Pct() {
    let result =
      this.props.gameFinal &&
      this.props.homeTeamStats.fg3_pct < this.props.visitorTeamStats.fg3_pct
        ? true
        : false;
    return result;
  }

  _isHomeTeamBestFtPct() {
    let result =
      this.props.gameFinal &&
      this.props.homeTeamStats.ft_pct > this.props.visitorTeamStats.ft_pct
        ? true
        : false;
    return result;
  }

  _isVisitorTeamBestFtPct() {
    let result =
      this.props.gameFinal &&
      this.props.homeTeamStats.ft_pct < this.props.visitorTeamStats.ft_pct
        ? true
        : false;
    return result;
  }

  _isHomeTeamBestReb() {
    let result =
      this.props.gameFinal &&
      this.props.homeTeamStats.reb > this.props.visitorTeamStats.reb
        ? true
        : false;
    return result;
  }

  _isVisitorTeamBestReb() {
    let result =
      this.props.gameFinal &&
      this.props.homeTeamStats.reb < this.props.visitorTeamStats.reb
        ? true
        : false;
    return result;
  }

  _isHomeTeamBestAst() {
    let result =
      this.props.gameFinal &&
      this.props.homeTeamStats.ast > this.props.visitorTeamStats.ast
        ? true
        : false;
    return result;
  }

  _isVisitorTeamBestAst() {
    let result =
      this.props.gameFinal &&
      this.props.homeTeamStats.ast < this.props.visitorTeamStats.ast
        ? true
        : false;
    return result;
  }

  _isHomeTeamBestPf() {
    let result =
      this.props.gameFinal &&
      this.props.homeTeamStats.pf < this.props.visitorTeamStats.pf
        ? true
        : false;
    return result;
  }

  _isVisitorTeamBestPf() {
    let result =
      this.props.gameFinal &&
      this.props.homeTeamStats.pf > this.props.visitorTeamStats.pf
        ? true
        : false;
    return result;
  }

  _isHomeTeamBestStl() {
    let result =
      this.props.gameFinal &&
      this.props.homeTeamStats.stl > this.props.visitorTeamStats.stl
        ? true
        : false;
    return result;
  }

  _isVisitorTeamBestStl() {
    let result =
      this.props.gameFinal &&
      this.props.homeTeamStats.stl < this.props.visitorTeamStats.stl
        ? true
        : false;
    return result;
  }

  _isHomeTeamBestTurnover() {
    let result =
      this.props.gameFinal &&
      this.props.homeTeamStats.turnover < this.props.visitorTeamStats.turnover
        ? true
        : false;
    return result;
  }

  _isVisitorTeamBestTurnover() {
    let result =
      this.props.gameFinal &&
      this.props.homeTeamStats.turnover > this.props.visitorTeamStats.turnovera
        ? true
        : false;
    return result;
  }

  _isHomeTeamBestBlk() {
    let result =
      this.props.gameFinal &&
      this.props.homeTeamStats.blk > this.props.visitorTeamStats.blk
        ? true
        : false;
    return result;
  }

  _isVisitorTeamBestBlk() {
    let result =
      this.props.gameFinal &&
      this.props.homeTeamStats.blk < this.props.visitorTeamStats.blk
        ? true
        : false;
    return result;
  }

  render() {
    return (
      <View>
        <View style={styles.rowGameGlobalStat}>
          <Text
            style={[
              styles.teamGlobalStat,
              this._isHomeTeamBestFgPct() && styles.bestTeam,
            ]}
          >
            {this.props.homeTeamStats.fgm}/{this.props.homeTeamStats.fga} (
            {Math.round(this.props.homeTeamStats.fg_pct * 100)}%)
          </Text>
          <Text style={styles.teamGlobalStat}>
            {i18n.t("shotsAndPercentageTitle")}
          </Text>
          <Text
            style={[
              styles.teamGlobalStat,
              this._isVisitorTeamBestFgPct() && styles.bestTeam,
            ]}
          >
            {this.props.visitorTeamStats.fgm}/{this.props.visitorTeamStats.fga}{" "}
            ({Math.round(this.props.visitorTeamStats.fg_pct * 100)}%)
          </Text>
        </View>
        {SmallFlatListSeparator()}
        <View style={styles.rowGameGlobalStat}>
          <Text
            style={[
              styles.teamGlobalStat,
              this._isHomeTeamBestFg3Pct() && styles.bestTeam,
            ]}
          >
            {this.props.homeTeamStats.fg3m}/{this.props.homeTeamStats.fg3a} (
            {Math.round(this.props.homeTeamStats.fg3_pct * 100)}%)
          </Text>
          <Text style={styles.teamGlobalStat}>
            {i18n.t("threesShotsAndPercentageTitle")}
          </Text>
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
        <View style={styles.rowGameGlobalStat}>
          <Text
            style={[
              styles.teamGlobalStat,
              this._isHomeTeamBestFtPct() && styles.bestTeam,
            ]}
          >
            {this.props.homeTeamStats.ftm}/{this.props.homeTeamStats.fta} (
            {Math.round(this.props.homeTeamStats.ft_pct * 100)}%)
          </Text>
          <Text style={styles.teamGlobalStat}>
            {i18n.t("freeThrowsAndPercentageTitle")}
          </Text>
          <Text
            style={[
              styles.teamGlobalStat,
              this._isVisitorTeamBestFtPct() && styles.bestTeam,
            ]}
          >
            {this.props.visitorTeamStats.ftm}/{this.props.visitorTeamStats.fta}{" "}
            ({Math.round(this.props.visitorTeamStats.ft_pct * 100)}%)
          </Text>
        </View>
        {SmallFlatListSeparator()}
        <View style={styles.rowGameGlobalStat}>
          <Text
            style={[
              styles.teamGlobalStat,
              this._isHomeTeamBestReb() && styles.bestTeam,
            ]}
          >
            {this.props.homeTeamStats.reb} ({this.props.homeTeamStats.oreb}/
            {this.props.homeTeamStats.dreb})
          </Text>
          <Text style={styles.teamGlobalStat}>
            {i18n.t("reboundsOffensiveAndDefensiveTitle")}
          </Text>
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
        <View style={styles.rowGameGlobalStat}>
          <Text
            style={[
              styles.teamGlobalStat,
              this._isHomeTeamBestAst() && styles.bestTeam,
            ]}
          >
            {this.props.homeTeamStats.ast}
          </Text>
          <Text style={styles.teamGlobalStat}>
            {i18n.t("assistsTitle")}
          </Text>
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
        <View style={styles.rowGameGlobalStat}>
          <Text
            style={[
              styles.teamGlobalStat,
              this._isHomeTeamBestStl() && styles.bestTeam,
            ]}
          >
            {this.props.homeTeamStats.stl}
          </Text>
          <Text style={styles.teamGlobalStat}>
            {i18n.t("stealsTitle")}
          </Text>
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
        <View style={styles.rowGameGlobalStat}>
          <Text
            style={[
              styles.teamGlobalStat,
              this._isHomeTeamBestBlk() && styles.bestTeam,
            ]}
          >
            {this.props.homeTeamStats.blk}
          </Text>
          <Text style={styles.teamGlobalStat}>
            {i18n.t("blocksTitle")}
          </Text>
          <Text
            style={[
              styles.teamGlobalStat,
              this._isVisitorTeamBestBlk() && styles.bestTeam,
            ]}
          >
            {this.props.visitorTeamStats.blk}
          </Text>
        </View>
        {SmallFlatListSeparator()}
        <View style={styles.rowGameGlobalStat}>
          <Text
            style={[
              styles.teamGlobalStat,
              this._isHomeTeamBestTurnover() && styles.bestTeam,
            ]}
          >
            {this.props.homeTeamStats.turnover}
          </Text>
          <Text style={styles.teamGlobalStat}>
            {i18n.t("turnoversTitle")}
          </Text>
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
        <View style={styles.rowGameGlobalStat}>
          <Text
            style={[
              styles.teamGlobalStat,
              this._isHomeTeamBestPf() && styles.bestTeam,
            ]}
          >
            {this.props.homeTeamStats.pf}
          </Text>
          <Text style={styles.teamGlobalStat}>{i18n.t("foulsTitle")}</Text>
          <Text
            style={[
              styles.teamGlobalStat,
              this._isVisitorTeamBestPf() && styles.bestTeam,
            ]}
          >
            {this.props.visitorTeamStats.pf}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rowGameGlobalStat:{
    flexDirection: "row",
    flex: 1
  },
  teamGlobalStat: {
    flex: 5,
    textAlign: "center",
    textAlignVertical: "center",
    margin: 5,
  },
  bestTeam: {
    fontWeight: "bold",
  },
});

export default GamesStats;
