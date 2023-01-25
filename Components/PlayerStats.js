import React from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import StylesPlayersStatsCells from "./StylesPlayersStatsCells";
import { useTheme } from "@react-navigation/native";

function PlayerStats(props) {
  const playerStats = props.playerStats;

  const getEvaluation = () => {
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

  const { colors } = useTheme();

  const styles = StyleSheet.create({
    playerStatsContainer: {
      flexDirection: "row",
    },    
    playerStatsCellTextColor: {
      color: colors.fontColorPrimary,
    },
  });

    return (
      <View style={styles.playerStatsContainer}>
        <Text style={[StylesPlayersStatsCells.playerStatsCell, StylesPlayersStatsCells.playerStatsCellName, styles.playerStatsCellTextColor]}>          
          {playerStats.player.first_name} {playerStats.player.last_name}
        </Text>
        <Text style={[StylesPlayersStatsCells.playerStatsCell, styles.playerStatsCellTextColor]}>{playerStats.min}</Text>
        <Text style={[StylesPlayersStatsCells.playerStatsCell, StylesPlayersStatsCells.playerStatsCellPoints, styles.playerStatsCellTextColor]}>{playerStats.pts}</Text>
        <Text style={[StylesPlayersStatsCells.playerStatsCell, styles.playerStatsCellTextColor]}>{playerStats.reb}</Text>
        <Text style={[StylesPlayersStatsCells.playerStatsCell, styles.playerStatsCellTextColor]}>{playerStats.ast}</Text>
        <Text style={[StylesPlayersStatsCells.playerStatsCell, styles.playerStatsCellTextColor]}>{playerStats.stl}</Text>
        <Text style={[StylesPlayersStatsCells.playerStatsCell, styles.playerStatsCellTextColor]}>{playerStats.blk}</Text>
        <Text style={[StylesPlayersStatsCells.playerStatsCell, styles.playerStatsCellTextColor]}>
          {playerStats.fgm}/{playerStats.fga}
        </Text>
        <Text style={[StylesPlayersStatsCells.playerStatsCell, styles.playerStatsCellTextColor]}>
          {playerStats.fg3m}/{playerStats.fg3a}
        </Text>
        <Text style={[StylesPlayersStatsCells.playerStatsCell, styles.playerStatsCellTextColor]}>
          {playerStats.ftm}/{playerStats.fta}
        </Text>
        <Text style={[StylesPlayersStatsCells.playerStatsCell, styles.playerStatsCellTextColor]}>{playerStats.oreb}</Text>
        <Text style={[StylesPlayersStatsCells.playerStatsCell, styles.playerStatsCellTextColor]}>{playerStats.dreb}</Text>
        <Text style={[StylesPlayersStatsCells.playerStatsCell, styles.playerStatsCellTextColor]}>{playerStats.turnover}</Text>
        <Text style={[StylesPlayersStatsCells.playerStatsCell, styles.playerStatsCellTextColor]}>{playerStats.pf}</Text>
        <Text style={[StylesPlayersStatsCells.playerStatsCell, styles.playerStatsCellTextColor]}>{getEvaluation()}</Text>
      </View>
    );
  }

export default PlayerStats;
