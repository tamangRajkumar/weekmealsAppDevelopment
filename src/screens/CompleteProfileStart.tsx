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

const CompleteProfileStart: React.FC<Props> = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("CompleteProfileStart");
  };

  return (
    <View style={styles.wrapper}>
      <Image source={Images.completeProfileCover} style={styles.coverImage} />

      <View style={styles.container}>
        <CommonText
          title="Maak je profiel compleet"
          externalTextStyle={styles.title}
        />

        <Text>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem
        </Text>

        <View style={styles.buttonContainer}>
          <CommonButtons
            title="Start"
            onPress={handleNavigation}
            externalContainerStyle={styles.button}
          />
          <Text style={{ alignSelf: "center", fontWeight: "bold" }}>
            {" "}
            Sla over
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CompleteProfileStart;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  coverImage: {
    height: Scale(344),
    width: Scale(375),
    resizeMode: "contain",
  },
  container: {
    margin: 20,
  },
  title: {
    marginVertical: Scale(30),
    marginLeft: 0,
  },

  buttonContainer: {
    padding: 30,

    marginTop: Scale(100),
  },
  button: {
    marginVertical: Scale(15),
  },
});
