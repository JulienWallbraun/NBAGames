import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "./Search";
import GameStats from "./GameStats";

const Stack = createNativeStackNavigator();

class Navigation extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Search" screenOptions={{
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
            }}>          
            <Stack.Screen name="Search" options={{ title: 'Matchs de la nuit' }} component={Search} />
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
