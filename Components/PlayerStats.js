import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

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
        <Text style={[styles.playerStatsCell, styles.playerStatsCellName]}>
          {playerStats.player.first_name} {playerStats.player.last_name}
        </Text>
        <Text style={styles.playerStatsCell}>{playerStats.min}</Text>
        <Text style={styles.playerStatsCell}>
          {playerStats.fgm}/{playerStats.fga}
        </Text>
        <Text style={styles.playerStatsCell}>
          {playerStats.fg3m}/{playerStats.fg3a}
        </Text>
        <Text style={styles.playerStatsCell}>
          {playerStats.ftm}/{playerStats.fta}
        </Text>
        <Text style={styles.playerStatsCell}>{playerStats.oreb}</Text>
        <Text style={styles.playerStatsCell}>{playerStats.dreb}</Text>
        <Text style={styles.playerStatsCell}>{playerStats.reb}</Text>
        <Text style={styles.playerStatsCell}>{playerStats.ast}</Text>
        <Text style={styles.playerStatsCell}>{playerStats.pf}</Text>
        <Text style={styles.playerStatsCell}>{playerStats.stl}</Text>
        <Text style={styles.playerStatsCell}>{playerStats.turnover}</Text>
        <Text style={styles.playerStatsCell}>{playerStats.blk}</Text>
        <Text style={styles.playerStatsCell}>{playerStats.pts}</Text>
        <Text style={styles.playerStatsCell}>{this._getEvaluation()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  playerStatsContainer: {
    flexDirection: "row",
    backgroundColor: "#EEEEEE",
    borderColor: "#FFFFFF",
    borderWidth: 2,
    alignItems: "center",
    flex : 1,
  },
  playerStatsCell: {
    width: 40,
    textAlign: "center",
    textAlignVertical: "center",
    margin: 5,
    flex : 1,
  },
  playerStatsCellName: {
    width: 100,
    textAlign: "left",
    flex: 5,
  },
});

export default PlayerStats;
