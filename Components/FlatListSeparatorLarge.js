import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";

export function FlatListSeparatorLarge(){  
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    FlatListSeparatorLarge: {
      height: 4, backgroundColor: colors.backgroundColorPrimary
    },
  });  

    return (
      <View style={styles.FlatListSeparatorLarge}/>
    );  
}