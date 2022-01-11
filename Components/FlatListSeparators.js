import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "./Colors";

export function SmallFlatListSeparator(){  
    return (
      <View style={styles.smallFlatListSeparator}/>
    );  
}

export function LargeFlatListSeparator() {  
    return (
      <View style={styles.largeFlatListSeparator}/>
    );
}

const styles = StyleSheet.create({
  smallFlatListSeparator: {
    height: 2, backgroundColor: Colors.backgroundColorSecondary
  },
  largeFlatListSeparator: {
    height: 4, backgroundColor: Colors.backgroundColorPrimary
  },
});
