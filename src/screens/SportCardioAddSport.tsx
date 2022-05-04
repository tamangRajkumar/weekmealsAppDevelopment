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

const SportCardioAddSport: React.FC<Props> = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("");
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerContainer}>
        <CommonHeader
          title="Sport/cardio toevoegen"
          backArrow={false}
          crossIcon={true}
        />
      </View>

      <View style={styles.container}>
        <CommonTextInput title="Sport" placeholder="Fietsen naar werk" />

        <View style={styles.middleContainer}>
          <View>
            <Image source={Images.downArrow} style={styles.firstDownArrow} />
            <CommonTextInput
              title="Duratie"
              placeholder="60 min."
              textBoxContainerExternalStyle={styles.firstInputBox}
            />
          </View>

          <View>
            <Image source={Images.downArrow} style={styles.secondDownArrow} />
            <CommonTextInput
              title="Aantal keer per week"
              placeholder="3x"
              textBoxContainerExternalStyle={styles.secondInputBox}
            />
          </View>
        </View>

        <View style={styles.deleteContainer}>
          <Image source={Images.deleteIcon} style={styles.deleteIcon} />
          <CommonSmallText title="Sport verwijderen" />
        </View>

        <View style={styles.buttonContainer}>
          <CommonButtons
            title="Opslaan"
            externalContainerStyle={styles.button}
          />
        </View>
      </View>
    </View>
  );
};

export default SportCardioAddSport;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: Scale(20),
    paddingBottom: Scale(10),
    borderBottomWidth: 2,
    borderBottomColor: Colors.disableButton,
  },
  container: {
    flex: 1,
    paddingTop: Scale(40),
  },
  middleContainer: {
    flex: 0.3,
    flexDirection: "row",
    alignItems: "center",
  },
  firstInputBox: {
    width: width * 0.33,
  },
  secondInputBox: {
    width: width * 0.44,
  },
  firstDownArrow: {
    height: Scale(25),
    width: Scale(25),
    position: "absolute",
    marginTop: Scale(35),
    marginLeft: Scale(100),
    zIndex: 1,
  },
  secondDownArrow: {
    height: Scale(25),
    width: Scale(25),
    position: "absolute",
    marginTop: Scale(35),
    marginLeft: Scale(130),
    zIndex: 1,
  },
  deleteIcon: {
    height: Scale(20),
    width: Scale(20),
    resizeMode: "contain",
    margin: Scale(10),
  },
  deleteContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 0.25,
    paddingHorizontal: Scale(10),
  },
  buttonContainer: {
    flex: 1,
  },
  button: {
    width: width * 0.9,
  },
});
