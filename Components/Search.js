import React, { Fragment, useState } from "react";
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
      console.log("j'ai une réponse");
      console.log(response.data.length);
      let newGames = [];
      response.data.forEach((element) => {
        newGames.push(element);
        console.log(
          element.date +
            " : " +
            element.home_team.full_name +
            " " +
            element.home_team_score +
            "-" +
            element.visitor_team_score +
            " " +
            element.visitor_team.full_name
        );
      });
      this.setState({ games: newGames });
      console.log("games : " + this.state.games);
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
          <TextInput
            placeholder="Titre du film"
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
          data={this.state.games}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(item) => (
            <Fragment>
              <Text>
                {item.item.id} : {item.item.home_team.full_name}{" "}
                {item.item.home_team_score}-{item.item.visitor_team_score}{" "}
                {item.item.visitor_team.full_name}
              </Text>
              <Text>TOTO</Text>
            </Fragment>
          )}
        ></FlatList>
        {/*
        <FlatList data={this.state.games} keyExtractor={item => item.id.toString()} renderItem={item => <Text>{item.home_team.full_name}</Text>}>

        </FlatList>
        */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    marginTop : 20,
    flex: 1,
    backgroundColor: "#EEEFFF",
  },
  gamesContainer: {
    flex: 4,
    backgroundColor: "#FFFDDD",
  },
});

export default Search;
