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

const NotificationPreferences: React.FC<Props> = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("");
  };

  return (
    <View style={styles.wrapper}>
        
      <CommonHeader
        title="Plan je eerste dag in"
        backArrow={true}
        crossIcon={true}
        
      />
     
      <View style={styles.container}>
        <Image source={Images.bellIcon} style={styles.bellIcon} />

        <CommonText
          title="Mogen we je push berichten sturen?"
          externalTextStyle={styles.title}
        />

        <View style={styles.middleContainer}>
            {/* First Notification Discription Container */}
          <View style={styles.detailContainer}>
            <View>
              <CommonInnerText title="Maaltijd herinneringen" />
              <CommonSmallText
                title="Een geheugensteuntje om maaltijden in te plannen en om ze af te strepen"
                externalTextStyle={styles.subText}
              />
            </View>
            <View>
              <Image source={Images.switchButton} style={styles.switchButton} />
            </View>
          </View>

{/* Second Notification Discription Container */}
          <View style={styles.detailContainer}>
            <View>
              <CommonInnerText title="Maaltijd herinneringen" />
              <CommonSmallText
                title="Een geheugensteuntje om maaltijden in te plannen en om ze af te strepen"
                externalTextStyle={styles.subText}
              />
            </View>
            <View>
              <Image source={Images.switchButton} style={styles.switchButton} />
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <CommonButtons
            title="Geef toestemming"
           
          />
          <CommonSkipButton title="Nee, misschien later" />
        </View>
      </View>
    </View>
  );
};

export default NotificationPreferences;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
   
  bellIcon: {
    flex: 0.2,
    resizeMode: "contain",
    height: Scale(30),
    width: Scale(30),
    marginLeft: Scale(20),
  },
  title: {
    width: width * 0.8,
  },
  container: {
    flex: 1,
    paddingTop: Scale(35),
  },
  middleContainer: {
    flex: 1,
    paddingTop: Scale(35),
    alignItems: "center",
  },

  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Scale(20),
    width: width,
    marginVertical: Scale(15),
  },
  switchButton: {
    height: Scale(45),
    width: Scale(45),
    resizeMode: "contain",
  },

  subText: {
    width: width * 0.7,
  },
  buttonContainer: {
    flex: 0.35,

  },
});
