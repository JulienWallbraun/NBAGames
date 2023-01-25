import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatListSeparatorSmall } from "./FlatListSeparatorSmall";
import i18n from "i18n-js";
import { useTheme } from "@react-navigation/native";

function GamesStats(props) {
  const isHomeTeamBestFgPct = () => {
    let result =
      props.gameFinal &&
      props.homeTeamStats.fg_pct > props.visitorTeamStats.fg_pct
        ? true
        : false;
    return result;
  }

  const isVisitorTeamBestFgPct = () => {
    let result =
      props.gameFinal &&
      props.homeTeamStats.fg_pct < props.visitorTeamStats.fg_pct
        ? true
        : false;
    return result;
  }

  const isHomeTeamBestFg3Pct = () => {
    let result =
      props.gameFinal &&
      props.homeTeamStats.fg3_pct > props.visitorTeamStats.fg3_pct
        ? true
        : false;
    return result;
  }

  const isVisitorTeamBestFg3Pct = () => {
    let result =
      props.gameFinal &&
      props.homeTeamStats.fg3_pct < props.visitorTeamStats.fg3_pct
        ? true
        : false;
    return result;
  }

  const isHomeTeamBestFtPct = () => {
    let result =
      props.gameFinal &&
      props.homeTeamStats.ft_pct > props.visitorTeamStats.ft_pct
        ? true
        : false;
    return result;
  }

  const isVisitorTeamBestFtPct = () => {
    let result =
      props.gameFinal &&
      props.homeTeamStats.ft_pct < props.visitorTeamStats.ft_pct
        ? true
        : false;
    return result;
  }

  const isHomeTeamBestReb = () => {
    let result =
      props.gameFinal &&
      props.homeTeamStats.reb > props.visitorTeamStats.reb
        ? true
        : false;
    return result;
  }

  const isVisitorTeamBestReb = () => {
    let result =
      props.gameFinal &&
      props.homeTeamStats.reb < props.visitorTeamStats.reb
        ? true
        : false;
    return result;
  }

  const isHomeTeamBestAst = () => {
    let result =
      props.gameFinal &&
      props.homeTeamStats.ast > props.visitorTeamStats.ast
        ? true
        : false;
    return result;
  }

  const isVisitorTeamBestAst = () => {
    let result =
      props.gameFinal &&
      props.homeTeamStats.ast < props.visitorTeamStats.ast
        ? true
        : false;
    return result;
  }

  const isHomeTeamBestPf = () => {
    let result =
      props.gameFinal &&
      props.homeTeamStats.pf < props.visitorTeamStats.pf
        ? true
        : false;
    return result;
  }

  const isVisitorTeamBestPf = () => {
    let result =
      props.gameFinal &&
      props.homeTeamStats.pf > props.visitorTeamStats.pf
        ? true
        : false;
    return result;
  }

  const isHomeTeamBestStl = () => {
    let result =
      props.gameFinal &&
      props.homeTeamStats.stl > props.visitorTeamStats.stl
        ? true
        : false;
    return result;
  }

  const isVisitorTeamBestStl = () => {
    let result =
      props.gameFinal &&
      props.homeTeamStats.stl < props.visitorTeamStats.stl
        ? true
        : false;
    return result;
  }

  const isHomeTeamBestTurnover = () => {
    let result =
      props.gameFinal &&
      props.homeTeamStats.turnover < props.visitorTeamStats.turnover
        ? true
        : false;
    return result;
  }

  const isVisitorTeamBestTurnover = () => {
    let result =
      props.gameFinal &&
      props.homeTeamStats.turnover > props.visitorTeamStats.turnover
        ? true
        : false;
    return result;
  }

  const isHomeTeamBestBlk = () => {
    let result =
      props.gameFinal &&
      props.homeTeamStats.blk > props.visitorTeamStats.blk
        ? true
        : false;
    return result;
  }

  const isVisitorTeamBestBlk = () => {
    let result =
      props.gameFinal &&
      props.homeTeamStats.blk < props.visitorTeamStats.blk
        ? true
        : false;
    return result;
  }

  const { colors } = useTheme();

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
      color: colors.fontColorPrimary,
    },
    bestTeam: {
      fontWeight: "bold",
    },
  });

    return (
      <View>
        <View style={styles.rowGameGlobalStat}>
          <Text
            style={[
              styles.teamGlobalStat,
              isHomeTeamBestFgPct() && styles.bestTeam,
            ]}
          >
            {props.homeTeamStats.fgm}/{props.homeTeamStats.fga} (
            {Math.round(props.homeTeamStats.fg_pct * 100)}%)
          </Text>
          <Text style={styles.teamGlobalStat}>
            {i18n.t("shotsAndPercentageTitle")}
          </Text>
          <Text
            style={[
              styles.teamGlobalStat,
              isVisitorTeamBestFgPct() && styles.bestTeam,
            ]}
          >
            {props.visitorTeamStats.fgm}/{props.visitorTeamStats.fga}{" "}
            ({Math.round(props.visitorTeamStats.fg_pct * 100)}%)
          </Text>
        </View>
        {FlatListSeparatorSmall()}
        <View style={styles.rowGameGlobalStat}>
          <Text
            style={[
              styles.teamGlobalStat,
              isHomeTeamBestFg3Pct() && styles.bestTeam,
            ]}
          >
            {props.homeTeamStats.fg3m}/{props.homeTeamStats.fg3a} (
            {Math.round(props.homeTeamStats.fg3_pct * 100)}%)
          </Text>
          <Text style={styles.teamGlobalStat}>
            {i18n.t("threesShotsAndPercentageTitle")}
          </Text>
          <Text
            style={[
              styles.teamGlobalStat,
              isVisitorTeamBestFg3Pct() && styles.bestTeam,
            ]}
          >
            {props.visitorTeamStats.fg3m}/
            {props.visitorTeamStats.fg3a} (
            {Math.round(props.visitorTeamStats.fg3_pct * 100)}%)
          </Text>
        </View>
        {FlatListSeparatorSmall()}
        <View style={styles.rowGameGlobalStat}>
          <Text
            style={[
              styles.teamGlobalStat,
              isHomeTeamBestFtPct() && styles.bestTeam,
            ]}
          >
            {props.homeTeamStats.ftm}/{props.homeTeamStats.fta} (
            {Math.round(props.homeTeamStats.ft_pct * 100)}%)
          </Text>
          <Text style={styles.teamGlobalStat}>
            {i18n.t("freeThrowsAndPercentageTitle")}
          </Text>
          <Text
            style={[
              styles.teamGlobalStat,
              isVisitorTeamBestFtPct() && styles.bestTeam,
            ]}
          >
            {props.visitorTeamStats.ftm}/{props.visitorTeamStats.fta}{" "}
            ({Math.round(props.visitorTeamStats.ft_pct * 100)}%)
          </Text>
        </View>
        {FlatListSeparatorSmall()}
        <View style={styles.rowGameGlobalStat}>
          <Text
            style={[
              styles.teamGlobalStat,
              isHomeTeamBestReb() && styles.bestTeam,
            ]}
          >
            {props.homeTeamStats.reb} ({props.homeTeamStats.oreb}/
            {props.homeTeamStats.dreb})
          </Text>
          <Text style={styles.teamGlobalStat}>
            {i18n.t("reboundsOffensiveAndDefensiveTitle")}
          </Text>
          <Text
            style={[
              styles.teamGlobalStat,
              isVisitorTeamBestReb() && styles.bestTeam,
            ]}
          >
            {props.visitorTeamStats.reb} (
            {props.visitorTeamStats.oreb}/
            {props.visitorTeamStats.dreb})
          </Text>
        </View>
        {FlatListSeparatorSmall()}
        <View style={styles.rowGameGlobalStat}>
          <Text
            style={[
              styles.teamGlobalStat,
              isHomeTeamBestAst() && styles.bestTeam,
            ]}
          >
            {props.homeTeamStats.ast}
          </Text>
          <Text style={styles.teamGlobalStat}>
            {i18n.t("assistsTitle")}
          </Text>
          <Text
            style={[
              styles.teamGlobalStat,
              isVisitorTeamBestAst() && styles.bestTeam,
            ]}
          >
            {props.visitorTeamStats.ast}
          </Text>
        </View>
        {FlatListSeparatorSmall()}
        <View style={styles.rowGameGlobalStat}>
          <Text
            style={[
              styles.teamGlobalStat,
              isHomeTeamBestStl() && styles.bestTeam,
            ]}
          >
            {props.homeTeamStats.stl}
          </Text>
          <Text style={styles.teamGlobalStat}>
            {i18n.t("stealsTitle")}
          </Text>
          <Text
            style={[
              styles.teamGlobalStat,
              isVisitorTeamBestStl() && styles.bestTeam,
            ]}
          >
            {props.visitorTeamStats.stl}
          </Text>
        </View>
        {FlatListSeparatorSmall()}
        <View style={styles.rowGameGlobalStat}>
          <Text
            style={[
              styles.teamGlobalStat,
              isHomeTeamBestBlk() && styles.bestTeam,
            ]}
          >
            {props.homeTeamStats.blk}
          </Text>
          <Text style={styles.teamGlobalStat}>
            {i18n.t("blocksTitle")}
          </Text>
          <Text
            style={[
              styles.teamGlobalStat,
              isVisitorTeamBestBlk() && styles.bestTeam,
            ]}
          >
            {props.visitorTeamStats.blk}
          </Text>
        </View>
        {FlatListSeparatorSmall()}
        <View style={styles.rowGameGlobalStat}>
          <Text
            style={[
              styles.teamGlobalStat,
              isHomeTeamBestTurnover() && styles.bestTeam,
            ]}
          >
            {props.homeTeamStats.turnover}
          </Text>
          <Text style={styles.teamGlobalStat}>
            {i18n.t("turnoversTitle")}
          </Text>
          <Text
            style={[
              styles.teamGlobalStat,
              isVisitorTeamBestTurnover() && styles.bestTeam,
            ]}
          >
            {props.visitorTeamStats.turnover}
          </Text>
        </View>
        {FlatListSeparatorSmall()}
        <View style={styles.rowGameGlobalStat}>
          <Text
            style={[
              styles.teamGlobalStat,
              isHomeTeamBestPf() && styles.bestTeam,
            ]}
          >
            {props.homeTeamStats.pf}
          </Text>
          <Text style={styles.teamGlobalStat}>{i18n.t("foulsTitle")}</Text>
          <Text
            style={[
              styles.teamGlobalStat,
              isVisitorTeamBestPf() && styles.bestTeam,
            ]}
          >
            {props.visitorTeamStats.pf}
          </Text>
        </View>
      </View>
    );
  
}

export default GamesStats;
