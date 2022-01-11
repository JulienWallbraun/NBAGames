import React from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import Logo from "./Logo";
import { Colors } from "./Colors";

class TeamStatsHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  render() {
    return (
      <View
      style={styles.teamStatsHeader}
      onPress={() => this.setState({ show: !this.state.show })}
    >
      <Logo teamId={this.props.game} />
      <Text style={{ textAlignVertical: "center" }}>
        {this.props.gameFullName}
      </Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  teamStatsHeader: { 
    flexDirection: "row", 
    backgroundColor: Colors.backgroundColorSecondary},
});

export default TeamStatsHeader;
