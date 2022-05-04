import { View, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { CommonButtons, CommonHeader, CommonListCheckbox, CommonSmallText } from "../commons";
import CommonText from "../commons/CommonText";
import { Colors, foodList, Images, width } from "../constants";

import { Scale } from "../constants/helperFunction";
import CommonSkipButton from "../commons/CommonSkipButton";

type FoodPreferenceProps = {
  navigation?: any;
  selectedItemProps: {
    title: string;
    id: number;
  };
};

const MainGoal: React.FC<FoodPreferenceProps> = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("");
  };

  const [selectedItem, setSelectedItem] = useState("");

  const MainGoalData = [
    { id: 1, title: "Aankomen", description: "Aankomen en spiermassa opbouwen" },
    {
      id: 2,
      title: "Afvallen",
      description: "Voornamelijk vet verliezen",
    },
    {
      id: 3,
      title: "Recomposition",
      description: "Afvallen en spiermassa opbouwen",
    },
  ];

  return (
    <View style={styles.wrapper}>
      <CommonHeader
        title="Maak je profiel compleet"
        backArrow={true}
        crossIcon={true}
      />
      <View style={styles.containerStyle}>
        <CommonText
          title="Jouw belangrijkste doel"
          externalTextStyle={styles.titleStyle}
        />

     

        {MainGoalData.map((i) => {
          return (
            <View key={i.id}>
              <CommonListCheckbox
                title={i.title}
                description={i.description}
                checked={selectedItem === i.title}
                onPress={() => setSelectedItem(i.title)}
              />
            </View>
          );
        })}
      </View>
      <View style={styles.buttonContainer}>
        <CommonButtons title="Volgende" onPress={handleNavigation} />
        <CommonSkipButton title="Sla Over" onPress={handleNavigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 0.6,
  },
  containerStyle: {
    marginTop: Scale(30),
    flex: 3,
  },
  wrapper: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  titleStyle: {
    width: width * 0.7,
    marginBottom: Scale(25),
  },
  subText: {
    flex: 0.15,
    paddingLeft: Scale(20),
    paddingBottom: Scale(30),
  },
});

export default MainGoal;
