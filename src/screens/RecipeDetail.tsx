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
import { BackgroundImage } from "react-native-elements/dist/config";

type Props = {
  navigation?: any;
};

const RecipeDetail: React.FC<Props> = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("");
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.crossIconContainer}>
        <Image source={Images.crossCircleWhite} style={styles.crossIcon} />
      </View>
      <Image source={Images.breakfastImage1} style={styles.coverImage} />

      <View style={styles.container}>
        <View style={styles.timeContainer}>
          <Image source={Images.watchIcon} style={styles.watchIcon} />
          <CommonSmallText title="3m" />
        </View>

        <CommonText
          title="Biologische cornflakes met melk"
          externalTextStyle={styles.title}
        />

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

        <View style={styles.optionContainer}>
          <CommonInnerText
            title="Ingrediënten"
            externalTextStyle={styles.optionText}
          />
          <CommonSmallText title="Bereidingswijze" />
        </View>
      </View>
    </View>
  );
};

export default RecipeDetail;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  coverImage: {
    height: height * 0.5,
    width: width,
  },
  crossIcon: {
    height: Scale(40),
    width: Scale(40),
  },
  crossIconContainer: {
    height: Scale(60),
    width: Scale(60),
    position: "absolute",
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginTop: Scale(40),
  },
  container: {
    flex: 1,

    marginHorizontal: Scale(20),
  },
  watchIcon: {
    height: Scale(16),
    width: Scale(16),
    marginRight: Scale(5),
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: Scale(10),
  },
  title: {
    width: width,
    marginLeft: Scale(0),
  },
  detailsContainer: {
    flexDirection: "row",
    marginVertical: Scale(20),
  },
  columnText: {
    marginRight: Scale(30),
  },
  optionContainer: {
    flexDirection: "row",
    marginRight: Scale(20),
  },
});
