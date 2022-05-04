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

const PlanFirstDayBreakfastCategory: React.FC<Props> = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("");
  };

  // Vegan Data
  const veganData = [
    {
      id: 1,
      image: Images.breakfastImage1,
      title: "Biologische cornflakes met melk",
      time: "3m",
    },
    {
      id: 2,
      image: Images.breakfastImage2,
      title: "Simpel gebakken eitje",
      time: "7m",
    },
    {
      id: 3,
      image: Images.breakfastImage3,
      title: "Ontbijtgranen met aardbei en bosvruchten",
      time: "10m",
    },
    {
      id: 4,
      image: Images.breakfastImage4,
      title: "Avocadotoast met gebakken ei en verse salade",
      time: "20m",
    },
    {
      id: 5,
      image: Images.breakfastImage5,
      title: "Breakfast burger met ei, avocado en salade",
      time: "26m",
    },
  ];

  return (
    <View style={styles.wrapper}>
      <CommonHeader
        title="Plan je eerste dag in"
        backArrow={true}
        crossIcon={true}
      />
      <ScrollView style={styles.scrollView}>
        <CommonText title="Vegan" externalTextStyle={styles.title} />
        {veganData.map((item, index) => {
          return (
            <View style={styles.container}>
              <View style={styles.foodWholeContainer}>
                <View style={styles.foodContainer}>
                  <Image source={item.image} style={styles.imageStyle} />
                  <View style={styles.foodDescription}>
                    <CommonSmallText
                      title={item.title}
                      externalTextStyle={styles.foodDescriptionText}
                    />
                    <View style={styles.timeContainer}>
                      <Image
                        source={Images.watchIcon}
                        style={styles.watchIcon}
                      />
                      <CommonSmallText title={item.time} />
                    </View>

                    <TouchableOpacity onPress={handleNavigation}>
                      <View style={styles.editIconCircleContainer}>
                        <Image
                          source={Images.nextCircledIcon}
                          style={styles.nextCircledIcon}
                        />
                      </View>
                    </TouchableOpacity>
                    
                  </View>
                </View>
              </View>
            </View>
          );
        })}
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

export default PlanFirstDayBreakfastCategory;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  scrollView: {
    flex: 1,
  },

  title: {
    marginTop: Scale(10),
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
    marginTop: Scale(15),
  },
  imageStyle: {
    height: height * 0.15,
    width: width * 0.28,
    resizeMode: "contain",
  },

  foodContainer: {
    flexDirection: "row",

    alignItems: "center",
    marginTop: Scale(20),
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
    flex: 0.15,
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
