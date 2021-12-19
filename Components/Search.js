import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  FlatList,
  Text,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { getGamesByDate } from "../API/FreeNBAAPI";
import Game from "./Game";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toISOString().substring(0, 10),
      games: [],
    };
  }

  _loadGames(date) {
    getGamesByDate(date).then((response) => {
      let newGames = [];
      response.data.forEach((element) => {
        newGames.push(element);
       /* console.log(
          element.date +
            " : " +
            element.home_team.full_name +
            " " +
            element.home_team_score +
            "-" +
            element.visitor_team_score +
            " " +
            element.visitor_team.full_name
        );*/
      });
      this.setState({ games: newGames });
    });
    /*
    getGamesByDate(date).then(data =>{
      console.log(data)
    });
    */
    //console.log(games);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput style={styles.date}
            placeholder="Date"
            onChangeText={(value) => {
              this.setState({ date: value });
            }}
          />
          <Button
            title="Rechercher"
            onPress={() => {
              /*
            console.log(
              this.state.date + "      type : " + typeof this.state.date
            );
            */
              this._loadGames(this.state.date);
            }}
          />
        </View>
        <View style={styles.gamesContainer}>
          <Text>
            Nombre de matchs le {this.state.date} : {this.state.games.length}
          </Text>
          <FlatList
            style={styles.gamesList}
            data={this.state.games}
            keyExtractor={(value) => value.id.toString()}
            renderItem={(value) => (
              <Game game={value.item} />
            )}
          ></FlatList>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    //height: 40,
    //flex: 1,
    alignContent: "center",
    backgroundColor: "#EEEFFF",
    flexDirection: "row",
  },
  date:{
    width: 100,
    textAlign: "center",
  },
  gamesContainer: {
    flex: 1,
    backgroundColor: "purple",
  },
  gamesList: {
    flex:1,
    backgroundColor: 'blue',
    //width:300,
  }
});

export default Search;
