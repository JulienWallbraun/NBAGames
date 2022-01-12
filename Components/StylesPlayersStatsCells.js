import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    playerStatsCell: {
        width: 40,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 5,
        flex : 1,
      },
      playerStatsCellName: {
        width: 100,
        textAlign: "left",
        flex: 5,
      },
      playerStatsCellPoints: {
        fontWeight: 'bold',
      },
});