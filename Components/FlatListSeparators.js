import React from "react";
import { StyleSheet, View } from "react-native";

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
    height: 2, backgroundColor: "#EEEEEE"
  },
  largeFlatListSeparator: {
    height: 4, backgroundColor: "#FFFFFF"
  },
});
