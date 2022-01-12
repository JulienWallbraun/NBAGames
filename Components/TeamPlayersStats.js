import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import PlayerStats from "./PlayerStats";
import NoStatsImage from "../assets/NoStats.png";
import StylesPlayersStatsCells from "./StylesPlayersStatsCells";
import { SmallFlatListSeparator } from "./FlatListSeparators";
import i18n from "i18n-js";
import { Colors } from "./Colors";

class TeamPlayersStats extends React.Component {
  render() {
    const teamStats = this.props.teamStats;
    return (
      <ScrollView horizontal={true}>
        <FlatList
          data={this.props.playersStats}
          ItemSeparatorComponent={SmallFlatListSeparator}
          ListHeaderComponent={
            <View style={styles.headerAndFooterComponent}>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  StylesPlayersStatsCells.playerStatsCellName,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("playersHeader")}
              </Text>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("minutesHeader")}
              </Text>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  StylesPlayersStatsCells.playerStatsCellPoints,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("pointsHeader")}
              </Text>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("reboundsHeader")}
              </Text>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("assistsHeader")}
              </Text>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("stealsHeader")}
              </Text>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("blocksHeader")}
              </Text>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("shotsHeader")}
              </Text>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("threesShotsHeader")}
              </Text>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("freeThrowsHeader")}
              </Text>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("reboundsOffensiveHeader")}
              </Text>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("reboundsDefensiveHeader")}
              </Text>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("turnoversHeader")}
              </Text>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("foulsHeader")}
              </Text>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("evaluationHeader")}
              </Text>
            </View>
          }
          ListHeaderComponentStyle={styles.headerComponentBackground}
          ListFooterComponent={
            <View style={styles.headerAndFooterComponent}>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  StylesPlayersStatsCells.playerStatsCellName,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("totalFooter")}
              </Text>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              ></Text>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  StylesPlayersStatsCells.playerStatsCellPoints,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {teamStats.pts}
              </Text>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {teamStats.reb}
              </Text>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {teamStats.ast}
              </Text>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {teamStats.stl}
              </Text>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {teamStats.blk}
              </Text>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {teamStats.fgm}/{teamStats.fga}
              </Text>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {teamStats.fg3m}/{teamStats.fg3a}
              </Text>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {teamStats.ftm}/{teamStats.fta}
              </Text>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {teamStats.oreb}
              </Text>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {teamStats.dreb}
              </Text>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {teamStats.turnover}
              </Text>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {teamStats.pf}
              </Text>
              <Text
                style={[
                  StylesPlayersStatsCells.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              ></Text>
            </View>
          }
          ListFooterComponentStyle={styles.footerComponentBackground}
          keyExtractor={(value) => value.id.toString()}
          renderItem={(value) => <PlayerStats playerStats={value.item} />}
          ListEmptyComponent={
            <View>
              <Image style={styles.noStatsImage} source={NoStatsImage} />
              <Text style={styles.noStatsText}>{i18n.t("noStatsInfo")}</Text>
            </View>
          }
        />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  noStatsImage: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  noStatsText: {
    marginHorizontal: 5,
  },
  headerAndFooterComponent: {
    flexDirection: "row",
  },
  playerStatsCellHeaderAndFooterTextColor: {
    color: Colors.fontColorSecondary,
  },
  headerComponentBackground: {
    backgroundColor: Colors.backgroundColorHeaderPrimary
  },
  footerComponentBackground: {
    backgroundColor: Colors.backgroundColorHeaderSecondary
  }
});

export default TeamPlayersStats;
