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

const PlanFirstDayComplete: React.FC<Props> = ({ navigation }) => {
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
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Image
            source={Images.calendarCheckIcon}
            style={styles.calendarCheckIcon}
          />

          <CommonText
            title="Top! De maaltijden voor je eerste dag zijn ingepland"
            externalTextStyle={styles.title}
          />
          <View style={styles.subTitleContainer}>
            <CommonText
              title="Je dag doel"
              externalTextStyle={styles.subTitle}
            />
            <Image source={Images.infoIcon} style={styles.infoIcon} />
          </View>

          <View style={styles.detailsContainer}>
            <View style={styles.columnText}>
              <CommonSmallText title="Calorieën" />

              <Text>2150 kCal</Text>
            </View>
            <View style={styles.columnText}>
              <CommonSmallText title="Eiwit" />

              <Text>56g</Text>
            </View>
            <View style={styles.columnText}>
              <CommonSmallText title="Vet" />

              <Text>80g</Text>
            </View>
            <View style={styles.columnText}>
              <CommonSmallText title="Koolhydraten" />

              <Text>99g</Text>
            </View>
          </View>

          {/* breakfast  */}
          <View style={styles.foodWholeContainer}>
            <CommonText title="Ontbijt" externalTextStyle={styles.foodTitle} />
            <View style={styles.foodContainer}>
              <Image
                source={Images.breakfastImage1}
                style={styles.imageStyle}
              />
              <View style={styles.foodDescription}>
                <CommonSmallText
                  title="Biologische cornflakes met melk"
                  externalTextStyle={styles.foodDescriptionText}
                />
                <View style={styles.timeContainer}>
                  <Image source={Images.watchIcon} style={styles.watchIcon} />
                  <CommonSmallText title="3m" />
                </View>
                <View style={styles.editIconCircleContainer}>
                  <Image
                    source={Images.editPenCircle}
                    style={styles.editPenCircle}
                  />
                </View>
              </View>
            </View>

            {/* Lunch  */}
            <CommonText title="Ontbijt" externalTextStyle={styles.foodTitle} />
            <View style={styles.foodContainer}>
              <Image source={Images.lunchImage1} style={styles.imageStyle} />
              <View style={styles.foodDescription}>
                <CommonSmallText
                  title="Biologische cornflakes met melk"
                  externalTextStyle={styles.foodDescriptionText}
                />
                <View style={styles.timeContainer}>
                  <Image source={Images.watchIcon} style={styles.watchIcon} />
                  <CommonSmallText title="3m" />
                </View>
                <View style={styles.editIconCircleContainer}>
                  <Image
                    source={Images.editPenCircle}
                    style={styles.editPenCircle}
                  />
                </View>
              </View>
            </View>

            {/* Dinner  */}
            <CommonText title="Ontbijt" externalTextStyle={styles.foodTitle} />
            <View style={styles.foodContainer}>
              <Image source={Images.dinnerImage1} style={styles.imageStyle} />
              <View style={styles.foodDescription}>
                <CommonSmallText
                  title="Biologische cornflakes met melk"
                  externalTextStyle={styles.foodDescriptionText}
                />
                <View style={styles.timeContainer}>
                  <Image source={Images.watchIcon} style={styles.watchIcon} />
                  <CommonSmallText title="3m" />
                </View>
                <View style={styles.editIconCircleContainer}>
                  <Image
                    source={Images.editPenCircle}
                    style={styles.editPenCircle}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <CommonButtons
          title="Volgende"
          externalContainerStyle={styles.button}
        />
      </View>
    </View>
  );
};

export default PlanFirstDayComplete;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  scrollView: {
    flex: 1,
  },

  calendarCheckIcon: {
    resizeMode: "contain",
    height: Scale(30),
    width: Scale(30),
  },
  title: {
    marginLeft: 0,
    marginTop: Scale(15),
    marginBottom: Scale(20),
  },

  subTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1,
    paddingTop: Scale(30),
    paddingHorizontal: Scale(20),
  },

  subTitle: {
    flex: 0.4,
    color: Colors.primaryGreenColor,
    marginLeft: 0,
    width: width * 0.33,
  },

  infoIcon: {
    height: Scale(15),
    width: Scale(15),
  },

  detailsContainer: {
    flexDirection: "row",

    marginVertical: Scale(20),
  },
  columnText: {
    marginRight: Scale(30),
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
  foodTitle: {
    flex: 0.41,
    color: Colors.primaryGreenColor,
    marginLeft: 0,
    width: width * 0.33,
    paddingTop: Scale(15),
    paddingBottom: Scale(8),
  },
  foodContainer: {
    flexDirection: "row",

    alignItems: "center",
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
  editPenCircle: {
    height: Scale(32),
    width: Scale(32),
    position: "absolute",

    alignSelf: "flex-end",
  },
  editIconCircleContainer: {
    flex: 0.65,
  },

  buttonContainer: {
    flex: 0.13,
  },
  button: {
    width: width * 0.9,
  },
});
