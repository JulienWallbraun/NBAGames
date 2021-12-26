import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GamesList from "./GamesList";
import GameStats from "./GameStats";

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
        <Stack.Navigator initialRouteName="Search" screenOptions={{
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
            }}>          
            <Stack.Screen name="GamesList" options={{ title: 'Matchs de la nuit' }} component={GamesList} />
            <Stack.Screen name="GameStats" options={{ title: 'Stats du match' }} component={GameStats} />        
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  gamesTitle: {
    fontSize: 25,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Navigation;
