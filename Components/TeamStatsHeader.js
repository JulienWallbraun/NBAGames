import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import Logo from "./Logo";
import { useTheme } from "@react-navigation/native";

function TeamStatsHeader(props) {
  const [show, setShow] = useState(true);

  const { colors } = useTheme();

  const styles = StyleSheet.create({
    teamStatsHeader: { 
      flexDirection: "row", 
      backgroundColor: colors.backgroundColorSecondary,
    },
    teamStatsText: {
      textAlignVertical: "center",
      color: colors.fontColorPrimary,
    },
  });

    return (
      <View
      style={styles.teamStatsHeader}
      onPress={() => setShow(!show)}
    >
      <Logo teamId={props.teamId} />
      <Text style={styles.teamStatsText}>
        {props.teamFullName}
      </Text>
    </View>
    );
  
}

export default TeamStatsHeader;
