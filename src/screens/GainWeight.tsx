
import { View, StyleSheet, Image } from "react-native";
import React from "react";
import { Colors, Images, Scale, width } from "../constants";
import {
  CommonButtons,
  CommonText,
  CommonHeader,
  CommonSkipButton,
  CommonSmallText,
  CommonCounters,
} from "../commons";

type Props = {
  navigation?: any;
};

const GainWeight: React.FC<Props> = () => {
  return (
    <View style={styles.wrapper}>
      <CommonHeader
        title="Maak je profiel compleet"
        backArrow={true}
        crossIcon={true}
      />

      <View style={styles.container}>
        <Image source={Images.dumbbell} style={styles.dumbbellIcon} />

        <CommonText
          title="Hoeveel wil je aankomen?"
          externalTextStyle={styles.title}
        />

        <View style={styles.middleContainer}>
          <CommonCounters />
          
          
          <CommonSmallText
            title="kilogram"
            externalTextStyle={styles.textStyle}
          />
        </View>

        <View style={styles.buttonContainer}>
          <CommonButtons
            title="Volgende"
            externalContainerStyle={styles.button}
          />
          <CommonSkipButton title="Sla over" />
        </View>
      </View>
    </View>
  );
};

export default GainWeight;

const styles = StyleSheet.create({
  textStyle: {
    marginLeft: Scale(20),
    // color: Colors.largeTextColor,
  },
  title: {
    marginLeft: 0,
  },
  wrapper: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  dumbbellIcon: {
    resizeMode: "contain",
    height: Scale(30),
    width: Scale(30),
    marginVertical: Scale(20),
  },
  container: {
    flex: 1,
    marginHorizontal: Scale(20),
    paddingTop: Scale(40),
  
  
  },
  middleContainer: {
    flexDirection: "row",

    alignItems: "center",

    marginTop: Scale(20),
  },
  addSubContainer: {
    flex: 0.35,
    flexDirection: "row",

    justifyContent: "space-between",

    marginHorizontal: Scale(20),
    borderWidth: 1,
    borderColor: Colors.disableButton,
    padding: Scale(10),
  },

  addSubIcon: {
    height: Scale(20),
    width: Scale(20),
  },
  buttonContainer: {
    flex: 1,

    justifyContent: "flex-end",

    marginBottom: Scale(30),
  },
  button: {
    width: width - Scale(30),
  },
});