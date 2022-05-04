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
  CommonInnerText,
  CommonSkipButton,
} from "../commons";
import { Scale, width, Images, Colors } from "../constants";

type Props = {
  navigation?: any;
};

const AddPersonalDetails: React.FC<Props> = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("");
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerContainer}>
        <CommonHeader
          title="Maak je profiel compleet"
          backArrow={true}
          crossIcon={true}
        />
      </View>

      <CommonText title="Jouw gegevens" externalTextStyle={styles.title} />
      <View style={styles.container}>
        <CommonTextInput title="Voornaam" placeholder="Lisa"  />
        <CommonTextInput title="Achternaam" placeholder="De Leeuw" />
        <CommonTextInput title="Leeftijd" placeholder="35" />
        <CommonTextInput title="Gewicht" placeholder="Gewicht" />
      </View>

      <View style={styles.buttonContainer}>
        <CommonButtons title="OK" onPress={handleNavigation} />
        <CommonSkipButton title="Sla over" onPress={handleNavigation} />
      </View>
    </View>
  );
};

export default AddPersonalDetails;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  headerContainer: {
    marginHorizontal: Scale(5),
  },

  title: {
    flex: 0.15,

    textAlignVertical: "bottom",
  },
  container: {
    flex: 1,

    paddingVertical: Scale(30),
    marginTop: Scale(15),
  },

  buttonContainer: {
    flex: 0.25,
  },
});
