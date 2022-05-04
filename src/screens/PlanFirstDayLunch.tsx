import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextComponent,
  ScrollView,
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

const PlanFirstDayLunch: React.FC<Props> = ({ navigation }) => {
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
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <CommonText title="Lunch" externalTextStyle={styles.title} />
          <View>
            <CommonTextInput placeholder="Wat neem je als avondeten?" />
          </View>

          <CommonInnerText title="Populaire recepten" />
          <View style={styles.subTitleDescriptionContainer}>
            <Image source={Images.rightIcon} style={styles.rightIcon} />
            <CommonSmallText title="Recept is aangepast op je energiebehoefte" />
          </View>

          {/* first  */}
          <View style={styles.foodWholeContainer}>
           
            <View style={styles.foodContainer}>
              <Image
                source={Images.lunchImage1}
                style={styles.imageStyle}
              />
              <View style={styles.foodDescription}>
                <CommonSmallText
                  title="Caeser salade met cherry tomaatjes"
                  externalTextStyle={styles.foodDescriptionText}
                />
                <View style={styles.timeContainer}>
                  <Image source={Images.watchIcon} style={styles.watchIcon} />
                  <CommonSmallText title="12m" />
                </View>
                <View style={styles.editIconCircleContainer}>
                  <Image
                    source={Images.nextCircledIcon}
                    style={styles.nextCircledIcon}
                  />
                </View>
              </View>
            </View>

            {/* second  */}
          
            <View style={styles.foodContainer}>
              <Image source={Images.lunchImage2} style={styles.imageStyle} />
              <View style={styles.foodDescription}>
                <CommonSmallText
                  title="Avocados gevuld met tomaat en basilicum"
                  externalTextStyle={styles.foodDescriptionText}
                />
                <View style={styles.timeContainer}>
                  <Image source={Images.watchIcon} style={styles.watchIcon} />
                  <CommonSmallText title="8m" />
                </View>
                <View style={styles.editIconCircleContainer}>
                  <Image
                    source={Images.nextCircledIcon}
                    style={styles.nextCircledIcon}
                  />
                </View>
              </View>
            </View>

          
          
          </View>
        </View>
      </ScrollView>
      <View style={styles.loadMoreContainer}>
            <Image source={Images.loadMoreIcon} style={styles.loadMoreIcon} />
            <CommonSmallText title="Laad meer" />
      </View>
      <View style={styles.buttonContainer}>
        <CommonButtons
          title="Voeg je eigen recept toe"
          externalContainerStyle={styles.button}
        />
      </View>
    </View>
  );
};

export default PlanFirstDayLunch;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  scrollView: {
    flex: 1,
  },

  title: {
    marginLeft: 0,
    marginTop: Scale(15),
  },

  subTitleDescriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Scale(10),
    marginTop: Scale(5),
  },
  rightIcon: {
    height: Scale(13.33),
    width: Scale(10),
    marginRight:Scale(8)
  },

  container: {
    flex: 1,

    paddingHorizontal: Scale(20),
  },

  middleContainer: {
    flexDirection: "row",
    paddingTop: Scale(35),
  },

  foodWholeContainer: {
    flex: 1,
  },
  imageStyle: {
    height: height * 0.15,
    width: width * 0.28,
    resizeMode: "contain",
  },
 
  foodContainer: {
    flexDirection: "row",

    alignItems: "center",
    marginTop:Scale(20)
  },
  foodDescription: {
    flex: 0.99,
    flexDirection: "column",
    marginLeft: Scale(10),
  },
  foodDescriptionText: {
    marginBottom: Scale(7),
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  watchIcon: {
    height: Scale(15),
    width: Scale(15),
    resizeMode: "contain",
    marginRight: Scale(6),
  },
  nextCircledIcon: {
    height: Scale(32),
    width: Scale(32),
    position: "absolute",

    alignSelf: "flex-end",
  },
  editIconCircleContainer: {
    flex: 0.65,
  },

  loadMoreContainer: {
      flex: .15,
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
  },
    loadMoreIcon: {
        height: Scale(16.66),
        width: Scale(15),
        marginRight: Scale(8),
    },
  buttonContainer: {
    flex: 0.15,
  },
  button: {
    width: width * 0.9,
  },
});
