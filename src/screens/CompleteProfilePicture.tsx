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
} from "../commons";
import { Scale, width, Images, Colors, height } from "../constants";

type Props = {
  navigation?: any;
};

const CompleteProfilePicture: React.FC<Props> = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("");
  };

  return (
    <View style={styles.container}>
      <CommonHeader
        title="Maak je profiel compleet"
        backArrow={true}
        crossIcon={true}
      />
      <CommonText
        title="Voeg een profielfoto toe"
        externalTextStyle={styles.title}
      />

      <Image source={Images.avatar} style={styles.addProfile} />
      <View style={styles.buttonContainer}>
        <CommonButtons title="Foto uploaden" onPress={handleNavigation} />
        <CommonSkipButton title="Sla over" onPress={handleNavigation} />
      </View>
    </View>
  );
};

export default CompleteProfilePicture;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flex: 0.18,
    textAlignVertical: "bottom",
  },
  addProfile: {
    flex: 0.8,
    height: Scale(160),
    width: Scale(160),
    resizeMode: "contain",
    alignSelf: "center",
  },
  buttonContainer: {
    flex: 0.25,
  },
});
