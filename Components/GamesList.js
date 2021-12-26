import React from "react";
import {
  StyleSheet,
  View,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { getGamesByDate } from "../API/FreeNBAAPI";
import Game from "./Game";
import MockResponseGetGamesOnSpecificDate from "../API/mockResponseGetGamesOnSpecificDate.json";
import NoGamesImage from "../assets/NoGames.png";
import Moment from "moment";
import {LargeFlatListSeparator} from "./FlatListSeparators";

class GamesList extends React.Component {
  constructor(props) {
    super(props);
    this._date = new Date();
    this.state = {
      games: [],
      //to display or not the date picker
      show: false,
    };
    this._loadGames();
  }

  _loadGames() {
    //format date to "2021-12-20" to comply with API date expected format
    getGamesByDate(Moment(this._date).format("YYYY-MM-DD")).then((response) => {
      let orderedGames = this._orderGames(response.data);
      this.setState({ games: orderedGames });
    });
  }

  _loadMockGames() {
    let orderedGames = this._orderGames(
      MockResponseGetGamesOnSpecificDate.data
    );
    this.setState({ games: orderedGames });
  }

  /* order games with the following sort :
  - games finalized (same order as given by the API)
  - games in progress (same order as given by the API)
  - games not started (order by starting time, same order as given by the API if several games have the same starting time)
  */
  _orderGames(games) {
    //no need to sort list of games if <= 1
    if (games !== undefined && games.length > 1) {
      let gamesFinalized = [];
      let gamesInProgress = [];
      let gamesNotStarted = [];

      /*create 3 tab :
      - 1 for games finalized
      - 1 for games in progress
      - 1 for games not started
      */
      games.forEach((game) => {
        game.status == "Final"
          ? gamesFinalized.push(game)
          : game.period != 0
          ? gamesInProgress.push(game)
          : gamesNotStarted.push(game);
      });
      //no need to sort list of games not started if <= 1
      if (gamesNotStarted.length > 1) {
        gamesNotStarted.sort(
          (a, b) => Moment(a.status, "HH:mm AA") - Moment(b.status, "HH:mm AA")
        );
      }
      games = gamesFinalized.concat(gamesInProgress).concat(gamesNotStarted);
    }
    return games;
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
    }
    this.setState({ show: false });
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

          <TouchableOpacity
            style={styles.date}
            onPress={() => {
              this.setState({ show: true });
            }}
          >
            <Text>{this._date.toLocaleDateString()}</Text>
          </TouchableOpacity>

          <Button
            color="#000000"
            title=">"
            onPress={() => {
              this._date.setDate(this._date.getDate() + 1);
              this._loadGames();
            }}
          />
          {/*trick to load mock response on press*/}
          <Button title="Mock" onPress={() => this._loadMockGames()} />
        </View>
        <View style={styles.gamesContainer}>
          {/*Display list of games found for the specified date*/}
          <FlatList
            data={this.state.games}
            ItemSeparatorComponent={LargeFlatListSeparator}
            keyExtractor={(value) => value.id.toString()}
            renderItem={(value) => (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("GameStats", {
                    game: value.item,
                    gameId: value.item.id,
                    gameHomeTeamId: value.item.home_team.id,
                    gameVisitorTeamId: value.item.visitor_team.id,
                    gameHomeTeamFullName: value.item.home_team.full_name,
                    gameVisitorTeamFullName: value.item.visitor_team.full_name,
                  })
                }
              >
                <Game
                  game={value.item}
                  //navigation prop added to the Game props to navigate to game stats screen onclick
                  //navigation={this.props.navigation}
                />
              </TouchableOpacity>
            )}
            ListEmptyComponent={
              //Display image and text to indicate no games were found for the specified date
              <View style={styles.noGames}>
                <Image style={styles.noGamesImage} source={NoGamesImage} />
                <Text style={styles.noGamesText}>
                  Pas de matchs cette nuit!
                </Text>
              </View>
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
  },
  searchContainer: {
    justifyContent: "center",
    flexDirection: "row",
    margin: 4,
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
  noGames: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  noGamesImage: {
    maxHeight: 250,
    maxWidth: 250,
    resizeMode: "contain",
  },
  noGamesText: {
    fontSize: 25,
    margin: 20,
  },
});

export default GamesList;
