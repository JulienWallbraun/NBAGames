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
import Styles from "./Styles";
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
                  Styles.playerStatsCell,
                  Styles.playerStatsCellName,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("playersHeader")}
              </Text>
              <Text
                style={[
                  Styles.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("minutesHeader")}
              </Text>
              <Text
                style={[
                  Styles.playerStatsCell,
                  Styles.playerStatsCellPoints,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("pointsHeader")}
              </Text>
              <Text
                style={[
                  Styles.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("reboundsHeader")}
              </Text>
              <Text
                style={[
                  Styles.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("assistsHeader")}
              </Text>
              <Text
                style={[
                  Styles.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("stealsHeader")}
              </Text>
              <Text
                style={[
                  Styles.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("blocksHeader")}
              </Text>
              <Text
                style={[
                  Styles.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("shotsHeader")}
              </Text>
              <Text
                style={[
                  Styles.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("threesShotsHeader")}
              </Text>
              <Text
                style={[
                  Styles.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("freeThrowsHeader")}
              </Text>
              <Text
                style={[
                  Styles.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("reboundsOffensiveHeader")}
              </Text>
              <Text
                style={[
                  Styles.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("reboundsDefensiveHeader")}
              </Text>
              <Text
                style={[
                  Styles.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("turnoversHeader")}
              </Text>
              <Text
                style={[
                  Styles.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("foulsHeader")}
              </Text>
              <Text
                style={[
                  Styles.playerStatsCell,
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
                  Styles.playerStatsCell,
                  Styles.playerStatsCellName,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {i18n.t("totalFooter")}
              </Text>
              <Text
                style={[
                  Styles.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              ></Text>
              <Text
                style={[
                  Styles.playerStatsCell,
                  Styles.playerStatsCellPoints,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {teamStats.pts}
              </Text>
              <Text
                style={[
                  Styles.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {teamStats.reb}
              </Text>
              <Text
                style={[
                  Styles.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {teamStats.ast}
              </Text>
              <Text
                style={[
                  Styles.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {teamStats.stl}
              </Text>
              <Text
                style={[
                  Styles.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {teamStats.blk}
              </Text>
              <Text
                style={[
                  Styles.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {teamStats.fgm}/{teamStats.fga}
              </Text>
              <Text
                style={[
                  Styles.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {teamStats.fg3m}/{teamStats.fg3a}
              </Text>
              <Text
                style={[
                  Styles.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {teamStats.ftm}/{teamStats.fta}
              </Text>
              <Text
                style={[
                  Styles.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {teamStats.oreb}
              </Text>
              <Text
                style={[
                  Styles.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {teamStats.dreb}
              </Text>
              <Text
                style={[
                  Styles.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {teamStats.turnover}
              </Text>
              <Text
                style={[
                  Styles.playerStatsCell,
                  styles.playerStatsCellHeaderAndFooterTextColor,
                ]}
              >
                {teamStats.pf}
              </Text>
              <Text
                style={[
                  Styles.playerStatsCell,
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
