import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";

export function FlatListSeparatorSmall(){  
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    flatListSeparatorSmall: {
      height: 2, backgroundColor: colors.backgroundColorSecondary
    },
  });  

    return (
      <View style={styles.flatListSeparatorSmall}/>
    );  
}