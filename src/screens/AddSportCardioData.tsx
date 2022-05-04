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

const AddSportCardioData: React.FC<Props> = ({ navigation }) => {
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
        <CommonText
          title="Welke cardio/sport doe je wekelijks?"
          externalTextStyle={styles.title}
        />

        <View style={styles.subHeadingContainer}>
          <CommonInnerText title="Cardio/sport" />
          <Image source={Images.addIcon} style={styles.addIcon} />
        </View>

        <View style={styles.discriptionContainer}>
          <View style={styles.rowContainer}>
            <Image source={Images.bikeworkout} style={styles.workOutIcon} />
            <View style={styles.innerText}>
              <CommonSmallText title="30 minuten fietsen naar werk" />
              <CommonSmallText title="3x per week" />
            </View>
            <Image source={Images.optionDotIcon} style={styles.OptionDotIcon} />
          </View>

          <View style={styles.rowContainer}>
            <Image source={Images.dumbbell} style={styles.workOutIcon} />
            <View style={styles.innerText}>
              <CommonSmallText title="60 minuten workout met coach" />
              <CommonSmallText title="2x per week" />
            </View>
            <Image source={Images.optionDotIcon} style={styles.OptionDotIcon} />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <CommonButtons title="Volgende" onPress={handleNavigation} />
          <CommonSkipButton title="Sla over" onPress={handleNavigation} />
        </View>
      </View>
    </View>
  );
};

export default AddSportCardioData;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: Scale(5),
  },
  container: {
    flex: 1,
    paddingHorizontal: Scale(10),
  },
  title: {
    flex: 0.2,
    textAlignVertical: "bottom",

    marginLeft: 0,
  },

  buttonContainer: {
    flex: 0.35,
  },
  subHeadingContainer: {
    flex: 0.3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addIcon: {
    height: Scale(32),
    width: Scale(32),
  },

  innerText: {
    flex: 0.8,
  },
  discriptionContainer: {
    flex: 1,
  },
  rowContainer: {
    flex: 0.15,
    flexDirection: "row",

    justifyContent: "space-between",
  },
  OptionDotIcon: {
    flex: 0.1,
    height: Scale(20),
    width: Scale(20),
    resizeMode: "contain",
  },
  workOutIcon: {
    height: Scale(22),
    width: Scale(22),
    resizeMode: "contain",
  },
});
