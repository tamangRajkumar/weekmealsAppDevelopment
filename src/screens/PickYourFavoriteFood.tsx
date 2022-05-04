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
  const foodList = [
    {
      id: 1,
      image: Images.food1,
      title: "Work",
    },
    {
      id: 2,
      image: Images.food2,
      title: "Pasta",
    },
    {
      id: 3,
      image: Images.food3,
      title: "Vis",
    },
    {
      id: 4,
      image: Images.food4,
      title: "Indonesisch",
    },
    {
      id: 5,
      image: Images.food5,
      title: "Indiaas",
    },
    {
      id: 6,
      image: Images.food6,
      title: "Salade",
    },
  ];

  return (
    <View style={styles.wrapper}>
      <CommonHeader
        title="Maak je profiel compleet"
        backArrow={true}
        crossIcon={true}
      />

      <CommonText
        title=" Kies wat je graag eet"
        externalTextStyle={styles.title}
      />

      <View style={styles.container}>
        {foodList.map((item) => {
          return (
            <View key={item.id} style={styles.foodContainer}>
              <Image source={item.image} style={styles.foodImage} />
              <CommonInnerText title={item.title} />
            </View>
          );
        })}
      </View>

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
  title: {
    flex: 0.15,
    textAlignVertical: "bottom",
  },
  container: {
    flex: 1,
    
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: Scale(10),
    paddingVertical: Scale(28),
    justifyContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    flex: 0.22,
   
  },

  foodImage: {
    height: Scale(80),
    width: Scale(100),
    resizeMode: "contain",

    
    
  },
  foodContainer: {
  
    margin: Scale(5),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.disableButton,
    padding: Scale(20),
 
  },
});
