import React from "react";
import { StyleSheet, Image } from "react-native";
import Hawks from "../assets/NBA_logos/Hawks.png";
import Celtics from "../assets/NBA_logos/Celtics.png";
import Nets from "../assets/NBA_logos/Nets.png";
import Hornets from "../assets/NBA_logos/Hornets.png";
import Bulls from "../assets/NBA_logos/Bulls.png";
import Cavaliers from "../assets/NBA_logos/Cavaliers.png";
import Mavericks from "../assets/NBA_logos/Mavericks.png";
import Nuggets from "../assets/NBA_logos/Nuggets.png";
import Pistons from "../assets/NBA_logos/Pistons.png";
import Warriors from "../assets/NBA_logos/Warriors.png";
import Rockets from "../assets/NBA_logos/Rockets.png";
import Pacers from "../assets/NBA_logos/Pacers.png";
import Clippers from "../assets/NBA_logos/Clippers.png";
import Lakers from "../assets/NBA_logos/Lakers.png";
import Grizzlies from "../assets/NBA_logos/Grizzlies.png";
import Heat from "../assets/NBA_logos/Heat.png";
import Bucks from "../assets/NBA_logos/Bucks.png";
import Timberwolves from "../assets/NBA_logos/Timberwolves.png";
import Pelicans from "../assets/NBA_logos/Pelicans.png";
import Knicks from "../assets/NBA_logos/Knicks.png";
import Thunder from "../assets/NBA_logos/Thunder.png";
import Magic from "../assets/NBA_logos/Magic.png";
import Sixers from "../assets/NBA_logos/76ers.png";
import Suns from "../assets/NBA_logos/Suns.png";
import TrailBlazers from "../assets/NBA_logos/TrailBlazers.png";
import Kings from "../assets/NBA_logos/Kings.png";
import Spurs from "../assets/NBA_logos/Spurs.png";
import Raptors from "../assets/NBA_logos/Raptors.png";
import Jazz from "../assets/NBA_logos/Jazz.png";
import Wizards from "../assets/NBA_logos/Wizards.png";

function Logo(props) {
  const getTeamLogoFromId = () => {
    switch (props.teamId) {
      case 1:
        return Hawks;
        break;
      case 2:
        return Celtics;
        break;
      case 3:
        return Nets;
        break;
      case 4:
        return Hornets;
        break;
      case 5:
        return Bulls;
        break;
      case 6:
        return Cavaliers;
        break;
      case 7:
        return Mavericks;
        break;
      case 8:
        return Nuggets;
        break;
      case 9:
        return Pistons;
        break;
      case 10:
        return Warriors;
        break;
      case 11:
        return Rockets;
        break;
      case 12:
        return Pacers;
        break;
      case 13:
        return Clippers;
        break;
      case 14:
        return Lakers;
        break;
      case 15:
        return Grizzlies;
        break;
      case 16:
        return Heat;
        break;
      case 17:
        return Bucks;
        break;
      case 18:
        return Timberwolves;
        break;
      case 19:
        return Pelicans;
        break;
      case 20:
        return Knicks;
        break;
      case 21:
        return Thunder;
        break;
      case 22:
        return Magic;
        break;
      case 23:
        return Sixers;
        break;
      case 24:
        return Suns;
        break;
      case 25:
        return TrailBlazers;
        break;
      case 26:
        return Kings;
        break;
      case 27:
        return Spurs;
        break;
      case 28:
        return Raptors;
        break;
      case 29:
        return Jazz;
        break;
      case 30:
        return Wizards;
        break;
    }
  };

  const styles = StyleSheet.create({
    logo: {
      minHeight: 35,
      minWidth: 35,
      maxHeight: 45,
      maxWidth: 45,
      margin: 10,
      resizeMode: "contain",
    },
  });

  return <Image style={styles.logo} source={getTeamLogoFromId()} />;
}

export default Logo;
