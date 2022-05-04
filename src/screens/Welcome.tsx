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
  CommonInnerText,
  CommonSmallText,
} from "../commons";
import { Scale, width, Images, Colors, height } from "../constants";

type Props = {
  navigation?: any;
};

const Welcome: React.FC<Props> = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("PlanScreen");
  };

  return (
    <View style={styles.wrapper}>
      <Image source={Images.welcomeCover} style={styles.welcomeCover} />

      <View style={styles.container}>
        <View style={styles.title}>
          <CommonText
            title="Hoi Lisa, "
            externalTextStyle={styles.titleStyle}
          />
          <CommonText
            title="let's get started! "
            externalTextStyle={styles.secondTitleText}
          />
        </View>

        <View style={styles.profile}>
          <Image source={Images.profileImage} style={styles.profileImage} />
          <View>
            <CommonSmallText title="Jouw coach" />
            <CommonText
              title="Kevin Matisse"
              externalTextStyle={styles.externalTextStyleForName}
            />
          </View>
        </View>

        <CommonSmallText
          title="Je coach heeft je doel en voedings- plan al voor je klaargezet– dat scheelt! We nemen je erin mee."
          externalTextStyle={styles.externalTextStyle}
        />

        <CommonButtons
          title="Start"
          onPress={handleNavigation}
          
        />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  externalTextStyleForName: {
    marginLeft: 0,
    fontSize: Scale(14),
  },
  externalTextStyle: {
    marginTop: Scale(10),
    marginBottom: Scale(30),
  },
  titleStyle: {
    marginLeft: 0,
    width: Scale(90),
  },
  wrapper: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  welcomeCover: {
    width: width,
    height: height / 2,
  },
  imageContainer: {
    flex: 2,
    backgroundColor: "red",
  },
  container: {
    flex: 2,
    margin: Scale(20),
  },
  title: {
    flexDirection: "row",

    marginTop: Scale(30),
  },
  firstTitleText: {
    fontWeight: "bold",
    fontSize: Scale(20),
  },
  secondTitleText: {
    // fontWeight: "bold",
    // fontSize: Scale(20),
    color: Colors.primaryGreenColor,
    marginLeft: 0,
  },

  profile: {
   
    backgroundColor: Colors.lightBackgroundColor,
    paddingHorizontal: Scale(10),
    paddingVertical: Scale(20),
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Scale(20),
    marginVertical: Scale(20),
  },

  profileImage: {
    height: Scale(30),
    width: Scale(30),
    marginRight: Scale(15),
  },

});
