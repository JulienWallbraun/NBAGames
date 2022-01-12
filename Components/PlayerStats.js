import React from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import StylesPlayersStatsCells from "./StylesPlayersStatsCells";

class PlayerStats extends React.Component {
  _getEvaluation() {
    const playerStats = this.props.playerStats;
    return (
      parseInt(playerStats.fgm) -
      parseInt(playerStats.fga) +
      parseInt(playerStats.ftm) -
      parseInt(playerStats.fta) +
      parseInt(playerStats.reb) +
      parseInt(playerStats.ast) +
      parseInt(playerStats.stl) -
      parseInt(playerStats.turnover) +
      parseInt(playerStats.blk) +
      parseInt(playerStats.pts)
    );
  }

  render() {
    const playerStats = this.props.playerStats;
    return (
      <View style={styles.playerStatsContainer}>
        <Text style={[StylesPlayersStatsCells.playerStatsCell, StylesPlayersStatsCells.playerStatsCellName]}>          
          {playerStats.player.first_name} {playerStats.player.last_name}
        </Text>
        <Text style={StylesPlayersStatsCells.playerStatsCell}>{playerStats.min}</Text>
        <Text style={[StylesPlayersStatsCells.playerStatsCell, StylesPlayersStatsCells.playerStatsCellPoints]}>{playerStats.pts}</Text>
        <Text style={StylesPlayersStatsCells.playerStatsCell}>{playerStats.reb}</Text>
        <Text style={StylesPlayersStatsCells.playerStatsCell}>{playerStats.ast}</Text>
        <Text style={StylesPlayersStatsCells.playerStatsCell}>{playerStats.stl}</Text>
        <Text style={StylesPlayersStatsCells.playerStatsCell}>{playerStats.blk}</Text>
        <Text style={StylesPlayersStatsCells.playerStatsCell}>
          {playerStats.fgm}/{playerStats.fga}
        </Text>
        <Text style={StylesPlayersStatsCells.playerStatsCell}>
          {playerStats.fg3m}/{playerStats.fg3a}
        </Text>
        <Text style={StylesPlayersStatsCells.playerStatsCell}>
          {playerStats.ftm}/{playerStats.fta}
        </Text>
        <Text style={StylesPlayersStatsCells.playerStatsCell}>{playerStats.oreb}</Text>
        <Text style={StylesPlayersStatsCells.playerStatsCell}>{playerStats.dreb}</Text>
        <Text style={StylesPlayersStatsCells.playerStatsCell}>{playerStats.turnover}</Text>
        <Text style={StylesPlayersStatsCells.playerStatsCell}>{playerStats.pf}</Text>
        <Text style={StylesPlayersStatsCells.playerStatsCell}>{this._getEvaluation()}</Text>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  playerStatsContainer: {
    flexDirection: "row",
  },
});

export default PlayerStats;
