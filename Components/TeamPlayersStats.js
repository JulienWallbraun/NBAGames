import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import PlayerStats from "./PlayerStats";
import Logo from "./Logo";
import NoStatsImage from "../assets/NoGames.png";
import Styles from "./Styles";
import Game from "./Game";
import {SmallFlatListSeparator, LargeFlatListSeparator} from "./FlatListSeparators";

class TeamPlayersStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  render() {
    const teamStats = this.props.teamStats;
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ flexDirection: "row",  backgroundColor:"#EEEEEE"}}
          onPress={() => this.setState({ show: !this.state.show })}
        >
          <Logo teamId={this.props.teamId} />
          <Text style={{ textAlignVertical: "center" }}>
            {this.props.teamFullName}
          </Text>
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <ScrollView horizontal={true} style={{ flex: 1 }}>
            <View style={{ flexDirection: "column", flex: 1 }}>
              {this.state.show && (
                <FlatList
                  style={styles.gameStats}
                  data={this.props.playersStats}
                  ItemSeparatorComponent={<View
                    style={{
                      height: 1,
                      width: "100%",
                      backgroundColor: "#000",
                    }}
                  />}
                  ItemSeparatorComponent={SmallFlatListSeparator}
                  ListHeaderComponent={
                    <View style={styles.headerAndFooterComponent}>
                      <Text
                        style={[Styles.playerStatsCell,
                          Styles.playerStatsCellName,
                          styles.playerStatsCellHeaderAndFooterTextColor
                        ]}
                      >
                        Joueurs
                      </Text>
                      <Text style={[Styles.playerStatsCell, styles.playerStatsCellHeaderAndFooterTextColor]}>
                        Min
                      </Text>
                      <Text style={[Styles.playerStatsCell, styles.playerStatsCellHeaderAndFooterTextColor]}>
                        Tirs
                      </Text>
                      <Text style={[Styles.playerStatsCell, styles.playerStatsCellHeaderAndFooterTextColor]}>
                        3pts
                      </Text>
                      <Text style={[Styles.playerStatsCell, styles.playerStatsCellHeaderAndFooterTextColor]}>
                        LF
                      </Text>
                      <Text style={[Styles.playerStatsCell, styles.playerStatsCellHeaderAndFooterTextColor]}>
                        RO
                      </Text>
                      <Text style={[Styles.playerStatsCell, styles.playerStatsCellHeaderAndFooterTextColor]}>
                        RD
                      </Text>
                      <Text style={[Styles.playerStatsCell, styles.playerStatsCellHeaderAndFooterTextColor]}>
                        Reb
                      </Text>
                      <Text style={[Styles.playerStatsCell, styles.playerStatsCellHeaderAndFooterTextColor]}>
                        Pd
                      </Text>
                      <Text style={[Styles.playerStatsCell, styles.playerStatsCellHeaderAndFooterTextColor]}>
                        Fte
                      </Text>
                      <Text style={[Styles.playerStatsCell, styles.playerStatsCellHeaderAndFooterTextColor]}>
                        Int
                      </Text>
                      <Text style={[Styles.playerStatsCell, styles.playerStatsCellHeaderAndFooterTextColor]}>
                        Bp
                      </Text>
                      <Text style={[Styles.playerStatsCell, styles.playerStatsCellHeaderAndFooterTextColor]}>
                        Ct
                      </Text>
                      <Text style={[Styles.playerStatsCell, styles.playerStatsCellHeaderAndFooterTextColor]}>
                        Pts
                      </Text>
                      <Text style={[Styles.playerStatsCell, styles.playerStatsCellHeaderAndFooterTextColor]}>
                        Eval
                      </Text>
                    </View>
                  }
                  ListHeaderComponentStyle={{ backgroundColor: "#000000" }}
                  //To fix the header of the team stats when scroll down
                  stickyHeaderIndices={[0]}
                  ListFooterComponent={
                    <View style={styles.headerAndFooterComponent}>
                      <Text
                        style={[Styles.playerStatsCell,
                          Styles.playerStatsCellName,
                          styles.playerStatsCellHeaderAndFooterTextColor
                        ]}
                      >
                        TOTAL
                      </Text>
                      <Text
                        style={[Styles.playerStatsCell, styles.playerStatsCellHeaderAndFooterTextColor]}
                      ></Text>

                      <Text style={[Styles.playerStatsCell, styles.playerStatsCellHeaderAndFooterTextColor]}>
                        {teamStats.fgm}/{teamStats.fga}
                      </Text>
                      <Text style={[Styles.playerStatsCell, styles.playerStatsCellHeaderAndFooterTextColor]}>
                        {teamStats.fg3m}/{teamStats.fg3a}
                      </Text>
                      <Text style={[Styles.playerStatsCell, styles.playerStatsCellHeaderAndFooterTextColor]}>
                        {teamStats.ftm}/{teamStats.fta}
                      </Text>
                      <Text style={[Styles.playerStatsCell, styles.playerStatsCellHeaderAndFooterTextColor]}>
                        {teamStats.oreb}
                      </Text>
                      <Text style={[Styles.playerStatsCell, styles.playerStatsCellHeaderAndFooterTextColor]}>
                        {teamStats.dreb}
                      </Text>
                      <Text style={[Styles.playerStatsCell, styles.playerStatsCellHeaderAndFooterTextColor]}>
                        {teamStats.reb}
                      </Text>
                      <Text style={[Styles.playerStatsCell, styles.playerStatsCellHeaderAndFooterTextColor]}>
                        {teamStats.ast}
                      </Text>
                      <Text style={[Styles.playerStatsCell, styles.playerStatsCellHeaderAndFooterTextColor]}>
                        {teamStats.pf}
                      </Text>
                      <Text style={[Styles.playerStatsCell, styles.playerStatsCellHeaderAndFooterTextColor]}>
                        {teamStats.stl}
                      </Text>
                      <Text style={[Styles.playerStatsCell, styles.playerStatsCellHeaderAndFooterTextColor]}>
                        {teamStats.turnover}
                      </Text>
                      <Text style={[Styles.playerStatsCell, styles.playerStatsCellHeaderAndFooterTextColor]}>
                        {teamStats.blk}
                      </Text>
                      <Text style={[Styles.playerStatsCell, styles.playerStatsCellHeaderAndFooterTextColor]}>
                        {teamStats.pts}
                      </Text>
                      <Text
                        style={[Styles.playerStatsCell, styles.playerStatsCellHeaderAndFooterTextColor]}
                      ></Text>
                    </View>
                  }
                  ListFooterComponentStyle={{ backgroundColor: "#AAAAAA" }}
                  keyExtractor={(value) => value.id.toString()}
                  renderItem={(value) => (
                    <PlayerStats playerStats={value.item} />
                  )}
                  ListEmptyComponent={
                    <View style={styles.noGames}>
                      <Image
                        style={styles.noStatsImage}
                        source={NoStatsImage}
                      />
                      <Text style={styles.noGamesText}>
                        Pas de stats pour cette équipe!
                      </Text>
                    </View>
                  }
                />
              )}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  noStatsImage: {
    maxHeight: 50,
    maxWidth: 50,
    resizeMode: "contain",
  },
  headerAndFooterComponent: {
    flexDirection: "row",
    flex: 1,
  },
  playerStatsCellHeaderAndFooterTextColor: {
    color: "#FFFFFF",
  },
});

export default TeamPlayersStats;
