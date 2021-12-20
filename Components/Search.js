import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { getGamesByDate } from "../API/FreeNBAAPI";
import Game from "./Game";
import MockResponse from "../API/mockResponseGetGamesOnSpecificDate.json";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this._date = new Date();
    this.state = {
      games: [],

      //for date picker
      show: false,
      //end for date picker
    };
    this._loadGames();
  }

  _loadGames() {
    getGamesByDate(this._date.toISOString().substring(0, 10)).then(
      (response) => {
        let newGames = [];
        response.data.forEach((element) => {
          newGames.push(element);
        });
        this.setState({ games: newGames });
      }
    );
  }

  _loadMockGames() {
    let newGames = [];
    MockResponse.data.forEach((element) => {
      newGames.push(element);
    });
    this.setState({ games: newGames });
  }

  _onChangeDatePicker(event, selectedDate) {
    //change date from picker if not cancel and selected date is different from the current current date used
    if (
      selectedDate !== undefined &&
      (selectedDate.getDate() != this._date.getDate() ||
        selectedDate.getMonth() != this._date.getMonth() ||
        selectedDate.getFullYear() != this._date.getFullYear())
    ) {
      this._date = selectedDate;
      this._loadGames();
      this.setState({ show: false });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={this._date}
            mode="date"
            display="default"
            onChange={(e, s) => this._onChangeDatePicker(e, s)}
          />
        )}
        <View style={styles.searchContainer}>
          <Button
            color="#000000"
            title="<"
            onPress={() => {
              this._date.setDate(this._date.getDate() - 1);
              this._loadGames();
            }}
          />

          <TouchableOpacity style={styles.date}
            onPress={() => {
              this.setState({ show: true });
            }}
          >
            <Text styles={styles.text}>{this._date.toLocaleDateString()}</Text>
          </TouchableOpacity>

          <Button
            color="#000000"
            title=">"
            onPress={() => {
              this._date.setDate(this._date.getDate() + 1);
              this._loadGames();
            }}
          />
        </View>
        <View style={styles.gamesContainer}>
          {
            //trick to load mock response on click
          }
          <Text style={styles.gamesTitle} onPress={() => this._loadMockGames()}>
            Matchs de la nuit
          </Text>
          <FlatList
            style={styles.gamesList}
            data={this.state.games}
            keyExtractor={(value) => value.id.toString()}
            renderItem={(value) => <Game game={value.item} />}
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
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  date: {
    width: 100,
    backgroundColor: "#EEEEEE",
    justifyContent: "center",
    alignItems: "center",
  },
  gamesContainer: {
    flex: 1,
  },
  gamesTitle: {
    fontSize: 25,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
  },
  gamesList: {
    flex: 1,
  },
  text:{
    fontSize: 24,
  }
});

export default Search;
