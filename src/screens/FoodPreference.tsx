import { View, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { CommonHeader, CommonListCheckbox, CommonText, CommonSkipButton } from "../commons";

import { Colors, foodList, Images, width } from "../constants";

import { Scale } from "../constants/helperFunction";

type FoodPreferenceProps = {
  navigation?: any;
  selectedItemProps: {
    title: string;
    id: number;
  };
};

const FoodPreference: React.FC<FoodPreferenceProps> = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("FavouriteFoodList");
  };

  const [selectedItem, setSelectedItem] = useState("");
  return (
    <View style={styles.wrapper}>
      <CommonHeader
        title="Maak je profiel compleet"
        backArrow={true}
        crossIcon={true}
      />
      <View style={styles.containerStyle}>
        <CommonText
          title="Wat voor dieet prefereer je?"
          externalTextStyle={styles.titleStyle}
        />

        {foodList.map((i) => {
          return (
            <View key={i.id}>
       
              <CommonListCheckbox
                title={i.title}
                description={""}
                checked={selectedItem === i.title}
                onPress={() => setSelectedItem(i.title)}
              />
            </View>
          );
        })}
      </View>
      <View style={styles.skipContainer}>
        <CommonSkipButton title="Sla Over" onPress={handleNavigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  skipContainer: {
    flex: 0.5,
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
    width: width,
    marginBottom: Scale(25),
  },
});

export default FoodPreference;
