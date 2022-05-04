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
import { CheckBox, colors, Icon } from "react-native-elements";
import {
  CommonTextInput,
  CommonButtons,
  CommonText,
  CommonSmallText,
} from "../commons";
import { Scale, width, Images, Colors } from "../constants";

type Props = {
  navigation?: any;
};

const YourPlan: React.FC<Props> = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("YourMealPlan");
  };

  const List = [
    {
      id: 1,
      text: "Leeftijd",
    },
    {
      id: 2,
      text: "35 jaar",
    },
    {
      id: 3,
      text: "Gewicht",
    },
    {
      id: 4,
      text: "70 kilogram ",
    },
    {
      id: 5,
      text: "Vetpercentage ",
    },
    {
      id: 6,
      text: "15%",
    },
    {
      id: 7,
      text: "Levenstijl ",
    },
    {
      id: 8,
      text: "Licht actief  ",
    },
  ];

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
      <CommonText title="Jouw plan" externalTextStyle={styles.titleStyle} />

      <View style={styles.detailsContainer}>
        <View style={styles.subTitleContainer}>
          <CommonText
            title="Jouw gegevens"
            externalTextStyle={styles.subTitle}
          />

          <TouchableOpacity>
            <Image source={Images.editIcon} style={styles.editIcon} />
          </TouchableOpacity>
        </View>

        {/* Text listing */}
        <View style={styles.listContainer}>
          {List.map((item) => {
            return (
              <View key={item.id}>
                <CommonSmallText
                  title={item.text}
                  externalTextStyle={styles.list}
                />
              </View>
            );
          })}
        </View>

        {/* first discription With edit Icon */}
        <View style={styles.subTitleContainer}>
          <CommonText title="Sport" externalTextStyle={styles.subTitle} />

          <TouchableOpacity>
            <Image source={Images.editIcon} style={styles.editIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.discriptionContainer}>
          <Image source={Images.bikeworkout} style={styles.containerIcon} />
          <View>
            <CommonSmallText title="30 minuteen fietsen naar week" />
            <CommonSmallText title="3x per week" />
          </View>
        </View>

        <View style={styles.discriptionContainer}>
          <Image source={Images.dumbbell} style={styles.containerIcon} />
          <View>
            <CommonSmallText title="60 minuten workout met coach" />
            <CommonSmallText title="2x per week" />
          </View>
        </View>

        {/* Second Discription Container */}
        <View style={styles.subTitleContainer}>
          <CommonText
            title="Belangrijkste doel"
            externalTextStyle={styles.subTitle}
          />

          <TouchableOpacity>
            <Image source={Images.editIcon} style={styles.editIcon} />
          </TouchableOpacity>
        </View>
        <CommonSmallText title="10 kilogram afvalien" />
      </View>
      <View style={styles.buttonContainer}>
        <CommonButtons
          title="Naar voedingsplan"
          onPress={handleNavigation}
          externalContainerStyle={styles.button}
        />
      </View>
    </View>
  );
};

export default YourPlan;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  
  },
  externalTextStyleForName: {
    marginLeft: 0,
    fontSize: Scale(14),
  },

  profileDiscription: {
    marginLeft: Scale(10),
  },
  detailsContainer: {
    flex: 1,
    marginHorizontal: Scale(25),
    marginTop: Scale(15),
   
  },

  titleStyle: {
    flex: 0.12,
    marginLeft: Scale(25),
    textAlignVertical: "bottom",
  },

  subTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Scale(12),
    marginBottom:Scale(6)
  },
  subTitle: {
    marginLeft: 0,
  },

  editIcon: {
    height: Scale(15),
    width: Scale(15),
  },
  listContainer: {
    marginTop: Scale(10),
  },
  list: {
    marginBottom: Scale(8),
    color: Colors.textColor,
  },

  containerIcon: {
    height: Scale(20),
    width: Scale(20),
    resizeMode: "contain",
    marginRight: Scale(10),
  },

  discriptionContainer: {
    flexDirection: "row",
    marginBottom: Scale(15),
  },
  button: {
    marginBottom: Scale(10),
  },
  buttonContainer: {
    flex: 0.1,
  },
  profile: {
    flex: 0.15,
    paddingTop: Scale(25),
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: Scale(20),
    borderBottomWidth: Scale(1.2),
    borderBottomColor: Colors.disableButton,
  },

  profileImage: {
    height: Scale(30),
    width: Scale(30),
    marginRight: Scale(10),
  },
});
