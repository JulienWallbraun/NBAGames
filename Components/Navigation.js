import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GamesList from "./GamesList";
import GameStats from "./GameStats";
import TeamSeaonGames from "./TeamSeasonGames";
import i18n from "i18n-js";

const Stack = createNativeStackNavigator();

//To modify and extend the default light theme
const CustomLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFFFFF",
    fontColorPrimary: "#000000",
    fontColorSecondary: "#FFFFFF",
    backgroundColorPrimary: "#FFFFFF",
    backgroundColorSecondary: "#EEEEEE",
    backgroundColorHeaderPrimary: "#000000",
    backgroundColorHeaderSecondary: "#88888888",
    backgroundColorGameStatusFinal: "#000000",
    backgroundColorGameStatusInProgress: "#DF0000",
    backgroundColorGameStatusNotStarted: "#88888888",
    backgroundColorButtonPrimary: "#000000",
    fontColorTeamWinner: "#00DF00",
    fontColorTeamLoser: "#DF0000",
  },
};

//To modify and extend the default dark theme
const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#000000",
    fontColorPrimary: "#FFFFFF",
    fontColorSecondary: "#000000",
    backgroundColorPrimary: "#000000",
    backgroundColorSecondary: "#333333",
    backgroundColorHeaderPrimary: "#FFFFFF",
    backgroundColorHeaderSecondary: "#999999",
    backgroundColorGameStatusFinal: "#FFFFFF",
    backgroundColorGameStatusInProgress: "#DF0000",
    backgroundColorGameStatusNotStarted: "#999999",
    backgroundColorButtonPrimary: "#FFFFFF",
    fontColorTeamWinner: "#00DF00",
    fontColorTeamLoser: "#DF0000",
  },
};

export default function Navigation() {
  const scheme = useColorScheme();

  const styles = StyleSheet.create({
    screenHeaderTitle: {
      fontSize: 25,
      fontWeight: "bold",
    },
  });
  
  return (
    <NavigationContainer
      theme={scheme == "dark" ? CustomDarkTheme : CustomLightTheme}
    >
      <Stack.Navigator
        initialRouteName="GamesList"
        screenOptions={{
          headerTitleStyle: styles.screenHeaderTitle,
        }}
        style={styles.screenHeaderTitle}
      >
        <Stack.Screen
          name="GamesList"
          options={{ title: i18n.t("gamesListTitle") }}
          component={GamesList}
        />
        <Stack.Screen
          name="GameStats"
          options={{ title: i18n.t("gameStatsTtile") }}
          component={GameStats}
        />
        <Stack.Screen
          name="TeamSeasonGames"
          options={{ title: i18n.t("teamSeasonGamesTitle") }}
          component={TeamSeaonGames}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}