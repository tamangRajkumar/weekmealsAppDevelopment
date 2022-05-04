import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextComponent,
} from "react-native";
import React, { useState } from "react";
import { CheckBox, Icon } from "react-native-elements";
import {
  CommonTextInput,
  CommonButtons,
  CommonText,
  CommonHeader,
  CommonSkipButton,
  CommonInnerText,
  CommonSmallText,
} from "../commons";
import { Scale, width, Images, Colors, height } from "../constants";


type Props = {
  navigation?: any;
};

const GainWeight: React.FC<Props> = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("");
  };

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
          <View style={styles.addSubContainer}>
            <Image source={Images.subtractIcon} style={styles.addSubIcon} />
            <Text>10</Text>
            <Image source={Images.additionIcon} style={styles.addSubIcon} />
          </View>
          <CommonSmallText title="kilogram" />
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
  wrapper: {
    flex: 1,
    backgroundColor:Colors.whiteColor,
  },
  dumbbellIcon: {
    flex: 0.2,
    resizeMode: "contain",
    height: Scale(30),
    width: Scale(30),

    marginLeft: Scale(20),
  },
  container: {
    flex: 1,
    paddingTop: Scale(10),
  },
  middleContainer: {
    flexDirection: "row",
    paddingTop: Scale(35),
    alignItems: "center",
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
    paddingBottom: Scale(30),
  },
  button: {
    width: width * 0.9,
  },
});













