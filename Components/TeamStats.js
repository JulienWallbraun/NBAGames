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

class TeamStats extends React.Component {
  constructor(props) {
    console.log("contructor team stats");
    super(props);
    this.state = {
      show: true,
    };
  }

  render() {
    console.log("render team stats");
    const teamStats = this.props.teamStats;
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ flexDirection: "row" }}
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
                  ListHeaderComponent={
                    <View style={styles.headerComponent}>
                      <Text
                        style={[
                          styles.playerStatsCellHeaderAndFooter,
                          styles.playerStatsCellHeaderAndFooterName,
                        ]}
                      >
                        Joueurs
                      </Text>
                      <Text style={styles.playerStatsCellHeaderAndFooter}>
                        Min
                      </Text>
                      <Text style={styles.playerStatsCellHeaderAndFooter}>
                        Tirs
                      </Text>
                      <Text style={styles.playerStatsCellHeaderAndFooter}>
                        3pts
                      </Text>
                      <Text style={styles.playerStatsCellHeaderAndFooter}>
                        LF
                      </Text>
                      <Text style={styles.playerStatsCellHeaderAndFooter}>
                        RO
                      </Text>
                      <Text style={styles.playerStatsCellHeaderAndFooter}>
                        RD
                      </Text>
                      <Text style={styles.playerStatsCellHeaderAndFooter}>
                        Reb
                      </Text>
                      <Text style={styles.playerStatsCellHeaderAndFooter}>
                        Pd
                      </Text>
                      <Text style={styles.playerStatsCellHeaderAndFooter}>
                        Fte
                      </Text>
                      <Text style={styles.playerStatsCellHeaderAndFooter}>
                        Int
                      </Text>
                      <Text style={styles.playerStatsCellHeaderAndFooter}>
                        Bp
                      </Text>
                      <Text style={styles.playerStatsCellHeaderAndFooter}>
                        Ct
                      </Text>
                      <Text style={styles.playerStatsCellHeaderAndFooter}>
                        Pts
                      </Text>
                      <Text style={styles.playerStatsCellHeaderAndFooter}>
                        Eval
                      </Text>
                    </View>
                  }
                  ListHeaderComponentStyle={{ backgroundColor: "#000000" }}
                  //To fix the header of the team stats when scroll down
                  stickyHeaderIndices={[0]}
                  ListFooterComponent={
                    <View style={styles.headerComponent}>
                      <Text
                        style={[
                          styles.playerStatsCellHeaderAndFooter,
                          styles.playerStatsCellHeaderAndFooterName,
                        ]}
                      >
                        TOTAL
                      </Text>
                      <Text
                        style={styles.playerStatsCellHeaderAndFooter}
                      ></Text>

                      <Text style={styles.playerStatsCellHeaderAndFooter}>
                        {teamStats.fgm}/{teamStats.fga}
                      </Text>
                      <Text style={styles.playerStatsCellHeaderAndFooter}>
                        {teamStats.fg3m}/{teamStats.fg3a}
                      </Text>
                      <Text style={styles.playerStatsCellHeaderAndFooter}>
                        {teamStats.ftm}/{teamStats.fta}
                      </Text>
                      <Text style={styles.playerStatsCellHeaderAndFooter}>
                        {teamStats.oreb}
                      </Text>
                      <Text style={styles.playerStatsCellHeaderAndFooter}>
                        {teamStats.dreb}
                      </Text>
                      <Text style={styles.playerStatsCellHeaderAndFooter}>
                        {teamStats.reb}
                      </Text>
                      <Text style={styles.playerStatsCellHeaderAndFooter}>
                        {teamStats.ast}
                      </Text>
                      <Text style={styles.playerStatsCellHeaderAndFooter}>
                        {teamStats.pf}
                      </Text>
                      <Text style={styles.playerStatsCellHeaderAndFooter}>
                        {teamStats.stl}
                      </Text>
                      <Text style={styles.playerStatsCellHeaderAndFooter}>
                        {teamStats.turnover}
                      </Text>
                      <Text style={styles.playerStatsCellHeaderAndFooter}>
                        {teamStats.blk}
                      </Text>
                      <Text style={styles.playerStatsCellHeaderAndFooter}>
                        {teamStats.pts}
                      </Text>
                      <Text
                        style={styles.playerStatsCellHeaderAndFooter}
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
  headerComponent: {
    flexDirection: "row",
    flex: 1,
  },
  playerStatsCellHeaderAndFooter: {
    width: 40,
    textAlign: "center",
    textAlignVertical: "center",
    color: "#FFFFFF",
    margin: 5,
    flex: 1,
  },
  playerStatsCellHeaderAndFooterName: {
    width: 100,
    textAlign: "left",
    flex: 5,
  },
});

export default TeamStats;
