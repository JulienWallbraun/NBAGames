import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Styles from "./Styles";

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
        <Text style={[Styles.playerStatsCell, Styles.playerStatsCellName]}>
          {playerStats.player.first_name} {playerStats.player.last_name}
        </Text>
        <Text style={Styles.playerStatsCell}>{playerStats.min}</Text>
        <Text style={Styles.playerStatsCell}>
          {playerStats.fgm}/{playerStats.fga}
        </Text>
        <Text style={Styles.playerStatsCell}>
          {playerStats.fg3m}/{playerStats.fg3a}
        </Text>
        <Text style={Styles.playerStatsCell}>
          {playerStats.ftm}/{playerStats.fta}
        </Text>
        <Text style={Styles.playerStatsCell}>{playerStats.oreb}</Text>
        <Text style={Styles.playerStatsCell}>{playerStats.dreb}</Text>
        <Text style={Styles.playerStatsCell}>{playerStats.reb}</Text>
        <Text style={Styles.playerStatsCell}>{playerStats.ast}</Text>
        <Text style={Styles.playerStatsCell}>{playerStats.pf}</Text>
        <Text style={Styles.playerStatsCell}>{playerStats.stl}</Text>
        <Text style={Styles.playerStatsCell}>{playerStats.turnover}</Text>
        <Text style={Styles.playerStatsCell}>{playerStats.blk}</Text>
        <Text style={Styles.playerStatsCell}>{playerStats.pts}</Text>
        <Text style={Styles.playerStatsCell}>{this._getEvaluation()}</Text>
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
