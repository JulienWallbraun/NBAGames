import { React, useState, useEffect } from "react";
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
import "moment/min/locales.min";
import { FlatListSeparatorLarge } from "./FlatListSeparatorLarge";
import i18n from "i18n-js";
import { useTheme } from "@react-navigation/native";

function GamesList({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [games, setGames] = useState([]);
  //to display or not the date picker
  const [show, setShow] = useState(false);

  const loadGames = () => {
    //format date to "2021-12-20" to comply with API date expected format
    getGamesByDate(Moment(date).format("YYYY-MM-DD")).then((response) => {
      let orderedGames = orderGames(response);
      setGames(orderedGames);
    });
  };

  const loadMockGames = () => {
    let orderedGames = orderGames(MockResponseGetGamesOnSpecificDate.data);
    setGames(orderedGames);
  };

  /* order games with the following sort :
  - games finalized (same order as given by the API)
  - games in progress (same order as given by the API)
  - games not started (order by starting time, same order as given by the API if several games have the same starting time)
  */
  const orderGames = (games) => {
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
  };

  const onChangeDatePicker = (event, selectedDate) => {
    //change date from picker if not cancel and selected date is different from the current current date used
    if (
      selectedDate !== undefined &&
      (selectedDate.getDate() != date.getDate() ||
        selectedDate.getMonth() != date.getMonth() ||
        selectedDate.getFullYear() != date.getFullYear())
    ) {
      date.setTime(selectedDate)
      loadGames();
    }
    setShow(false);
  };

  //trick to get date with week day, date day, month and year and without hour using Moment, as DateToLocaleString doesn't work well on Android
  const getDate = () => {
    let dateToFormat = Moment(date);
    let llll = dateToFormat.format("LLLL");
    let lll = dateToFormat.format("LLL");
    let ll = dateToFormat.format("LL");
    return llll.replace(lll.replace(ll, ""), "");
  };

  useEffect(() => {
    loadGames();
  }, [] );

  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    searchContainer: {
      justifyContent: "center",
      flexDirection: "row",
      margin: 4,
    },
    button: {
      justifyContent: "center",
      backgroundColor: colors.backgroundColorButtonPrimary,
      margin: 4,
      paddingHorizontal: 15,
      paddingVertical : 7,
      borderRadius: 5,
    },
    buttonText: {
      color: colors.fontColorSecondary,
    },
    dateTouchableContainer: {
      width: 200,
      backgroundColor: colors.backgroundColorSecondary,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
    },
    dateText: {
      textAlign: "center",
      color: colors.fontColorPrimary,
    },
    gamesContainer: {
      flex: 1,
    },
    noGames: {
      alignItems: "center",
      justifyContent: "center",
    },
    noGamesImage: {
      height: 250,
      width: 250,
      resizeMode: "contain",
      margin: 20,
    },
    noGamesText: {
      fontSize: 25,
      marginHorizontal: 20,
      color: colors.fontColorPrimary,
    },
  });

  return (
    <View style={styles.container}>
      
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            display="default"
            onChange={onChangeDatePicker}
          />
        )}
        {
          /*trick to load mock response on press*/
          MOCK_API_RESPONSE && (
            <Button
              title={i18n.t("mockButtonTitle")}
              onPress={() => {
                loadMockGames();
              }}
            />
          )
        }
        <View style={styles.searchContainer}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
              date.setDate(date.getDate() - 1);
              loadGames();
            }}
          >
            <Text style={styles.buttonText}>{i18n.t("previousDateButtonTitle")}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.dateTouchableContainer}
            onPress={() => {
              setShow(true);
            }}
          >
            <Text style={styles.dateText}>{getDate()}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              date.setDate(date.getDate() + 1);
              loadGames();
            }}
          >
            <Text style={styles.buttonText}>{i18n.t("nextDateButtonTitle")}</Text>
          </TouchableOpacity>
        </View>

      <View style={styles.gamesContainer}>
        {/*Display list of games found for the specified date*/}
        <FlatList
          data={games}
          ItemSeparatorComponent={FlatListSeparatorLarge}
          keyExtractor={(value) => value.id.toString()}
          renderItem={(value) => (
            <TouchableOpacity
              onPress={() =>
                navigation.push("GameStats", {
                  game: value.item,
                  gameId: value.item.id,
                  gameSeasonId: value.item.season,
                  gameHomeTeamId: value.item.home_team.id,
                  gameVisitorTeamId: value.item.visitor_team.id,
                  gameHomeTeamFullName: value.item.home_team.full_name,
                  gameVisitorTeamFullName: value.item.visitor_team.full_name,
                })
              }
            >
              <Game game={value.item} />
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            //Display image and text to indicate no games were found for the specified date
            <View style={styles.noGames}>
              <Image style={styles.noGamesImage} source={NoGamesImage} />
              <Text style={styles.noGamesText}>{i18n.t("noGamesInfo")}</Text>
            </View>
          }
        />
      </View>
    </View>
  );
}

export default GamesList;
