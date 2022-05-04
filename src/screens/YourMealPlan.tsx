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
  CommonSmallText,
  CommonInnerText,
} from "../commons";
import { Scale, width, Images, Colors } from "../constants";

type Props = {
  navigation?: any;
};

const YourMealPlan: React.FC<Props> = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("CompleteProfilePicture");
  };

  return (
    <View style={styles.wrapper}>
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
      <View style={styles.titleContainer}>
        <CommonText title=" Voedingsplan" externalTextStyle={styles.title} />
      </View>
      <View style={styles.container}>
        <CommonSmallText title="Om jouw doel te behalen heeft je coach een persoonlijk voedingsplan voor je opgesteld met daarin per maaltijd je energie-behoefte. Wij houden dit allemaal voor je bij." />
        <View style={styles.subTitleContainer}>
          <CommonText title="Je dag doel" externalTextStyle={styles.subTitle} />
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

        <View style={styles.componentContainer}>
          <View style={styles.componentImageContainer}>
            <Image source={Images.food1} style={styles.imageStyle} />
          </View>
          <View>
            <View style={styles.componentTitle}>
              <CommonInnerText
                title="Ontbijt"
                externalTextStyle={styles.componentHeaderText}
              />

              <Image source={Images.editIcon} style={styles.editIcon} />
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={styles.columnText}>
                <CommonSmallText title="Calorieën" />

                <Text>716 kCal</Text>
              </View>
              <View style={styles.columnText}>
                <CommonSmallText title="Vet" />

                <Text>27g</Text>
              </View>
              <View style={styles.columnText}>
                <CommonSmallText title="Eiwit" />

                <Text>18g</Text>
              </View>
              <View style={styles.columnText}>
                <CommonSmallText title="Koolh." />

                <Text>99g</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.bottonContainer}>
        <CommonButtons title="Volgendo" onPress={handleNavigation} />
      </View>
    </View>
  );
};

export default YourMealPlan;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  externalTextStyleForName: {
    marginLeft: 0,
    fontSize: Scale(14),
  },

  profile: {
    flex: 0.3,
    paddingHorizontal: Scale(20),
    paddingTop: Scale(30),
    paddingBottom: Scale(10),
    flexDirection: "row",

    alignItems: "center",
    borderRadius: Scale(20),
  },

  profileImage: {
    height: Scale(30),
    width: Scale(30),
    marginRight: Scale(15),
  },

  container: {
    flex: 2,

    paddingHorizontal: Scale(20),
  },

  titleContainer: {
    flex: 0.35,
    fontWeight: "bold",

    borderTopWidth: 1,
    borderTopColor: Colors.disableButton,
    justifyContent: "center",
  },

  subTitleContainer: {
    flex: 0.35,
    flexDirection: "row",
    alignItems: "center",
  },
  subTitle: {
    color: Colors.primaryGreenColor,
    marginLeft: 0,
    width: Scale(115),
  },

  infoIcon: {
    height: Scale(20),
    width: Scale(20),
  },
  
  componentTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Scale(10),

    alignItems: "center",
    paddingHorizontal: Scale(10),
  },
  componentImageContainer: {
    backgroundColor: Colors.lightBackgroundColor,
    justifyContent: "center",
    alignItems: "center",

    paddingVertical: Scale(30),
    paddingHorizontal: Scale(20),
  },
  imageStyle: {
    height: 40,
    width: 40,
    resizeMode: "contain",
  },

  editIcon: {
    height: Scale(15),
    width: Scale(15),
  },

  bottonContainer: {
    flex: 0.2,
  },
  componentContainer: {
    flexDirection: "row",
    marginTop: Scale(30),
  },
  componentHeaderText: {
    color: Colors.textColor,
  },
  detailsContainer: {
    flexDirection: "row",
  },
});
