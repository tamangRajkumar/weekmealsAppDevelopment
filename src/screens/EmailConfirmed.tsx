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
import { CommonTextInput, CommonButtons, CommonText } from "../commons";
import { Scale, width, Images, Colors } from "../constants";

type Props = {
  navigation?: any;
};

const EmailConfirmed: React.FC<Props> = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("Welcome");
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.iconContainer}>
        <Image source={Images.eyeIcon} style={styles.icon} />
      </View>

      <CommonText
        title="Gelukt! Je e-mailadres is nu bevestigd"
        externalTextStyle={styles.titleStyle}
      />
      <CommonButtons
        title="Verder"
        onPress={handleNavigation}
        externalContainerStyle={styles.button}
      />
    </View>
  );
};

export default EmailConfirmed;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: Scale(35),
    width: Scale(35),
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: Scale(250),
    backgroundColor: Colors.primaryGreenColor,
    height: Scale(90),
    width: Scale(90),
    borderRadius: Scale(100),
  },
  titleStyle: {
    marginTop: Scale(35),
    textAlign: "center",
  },

  button: {
    marginTop: Scale(200),
  },
});
