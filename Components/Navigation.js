import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GamesList from "./GamesList";
import GameStats from "./GameStats";
import i18n from 'i18n-js';

const Stack = createNativeStackNavigator();

//To modify the default theme and have a white background by default
const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background:'#FFFFFF'
  },
};

class Navigation extends React.Component {
  render() {
    return (
      <NavigationContainer theme={AppTheme}>
        <Stack.Navigator initialRouteName="GamesList" screenOptions={{
              headerTitleStyle: styles.screenHeaderTitle}}
            style={styles.screenHeaderTitle}>          
            <Stack.Screen name="GamesList" options={{ title: i18n.t('gamesListTitle') }} component={GamesList} />
            <Stack.Screen name="GameStats" options={{ title: i18n.t('gameStatsTtile') }} component={GameStats} />        
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  screenHeaderTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default Navigation;
