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

const YourLifeStyle: React.FC<FoodPreferenceProps> = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("");
  };

  const [selectedItem, setSelectedItem] = useState("");

  const YourLifeStyleData = [
    { id: 1, title: "Zittend", description: "Kantoorbaan" },
    {
      id: 2,
      title: "Licht actief",
      description: "Dagelijks de hond uitlaten, of fietsen naar je werk",
    },
    {
      id: 3,
      title: "Actief",
      description: "Personal trainer of bediening; meeste tijd staand",
    },
    { id: 4, title: "Zeer actief", description: "Bouwvakker" },
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
          title="Hoe fysiek-belastend is jouw levensstijl?"
          externalTextStyle={styles.titleStyle}
        />

        <CommonSmallText
          title="Exclusief sport of cardio"
          externalTextStyle={styles.subText}
        />

        {YourLifeStyleData.map((i) => {
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

export default YourLifeStyle;
