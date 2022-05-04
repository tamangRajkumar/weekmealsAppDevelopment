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
  CommonListCheckbox,
} from "../commons";
import { Scale, width, Images, Colors } from "../constants";

type Props = {
  navigation?: any;
};

const PickYourFavoriteFood: React.FC<Props> = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("CompleteProfileStart");
  };

  // Import Image data
  const fatPercentageList = [
    {
      id: 1,
      image: Images.fatCheckImage1,
      title: "9-13%",
    },
    {
      id: 2,
      image: Images.fatCheckImage2,
      title: "14-18%",
    },
    {
      id: 3,
      image: Images.fatCheckImage3,
      title: "19-21%",
    },
    {
      id: 4,
      image: Images.fatCheckImage4,
      title: "22-24%",
    },
    {
      id: 5,
      image: Images.fatCheckImage5,
      title: "25-27%",
    },
    {
      id: 6,
      image: Images.fatCheckImage6,
      title: "28-30%",
    },
    {
      id: 7,
      image: Images.fatCheckImage7,
      title: "31-36%",
    },
  ];

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerContainer}>
        <CommonHeader
          title="Maak je profiel compleet"
          backArrow={true}
          crossIcon={true}
        />
      </View>

      <ScrollView style={styles.scrollView}>
        <CommonText
          title=" Wat is je vetpercentage?"
          externalTextStyle={styles.title}
        />

        <View style={styles.container}>
          {fatPercentageList.map((item) => {
            return (
              <View>
                <View style={styles.checkboxContainer}>
                  <Image
                    source={Images.checkedCircle}
                    style={styles.checkBox}
                  />
                </View>
                <View key={item.id} style={styles.detailsContainer}>
                  <Image source={item.image} style={styles.bodyImage} />

                  <CommonSmallText
                    title={item.title}
                    externalTextStyle={styles.percentageText}
                  />
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <CommonButtons title="Volgende" onPress={handleNavigation} />
        <CommonSkipButton title="Sla over" onPress={handleNavigation} />
      </View>
    </View>
  );
};

export default PickYourFavoriteFood;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: Scale(10),
  },
  title: {
    flex: 0.15,
    textAlignVertical: "bottom",
  },
  scrollView: {
    flex: 1,
    paddingTop: Scale(25),
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: Scale(28),
    paddingHorizontal: Scale(15),
  },
  checkboxContainer: {
    zIndex: 1,
    position: "absolute",
    alignSelf: "flex-end",
    borderRadius: Scale(100),
  },
  checkBox: {
    height: Scale(30),
    width: Scale(30),
    marginTop: Scale(15),
    marginRight: Scale(10),
  },

  buttonContainer: {
    flex: 0.2,
  },

  bodyImage: {
    height: Scale(96),
    width: Scale(117.5),
    resizeMode: "contain",
  },
  detailsContainer: {
    margin: Scale(5),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.disableButton,
    padding: Scale(15),
  },
  percentageText: {
    marginTop: Scale(15),
  },
});
