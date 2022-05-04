import { View, StyleSheet, Image } from "react-native";
import React from "react";
import { Colors, Images, Scale, width } from "../constants";
import {
  CommonButtons,
  CommonText,
  CommonHeader,
  CommonSkipButton,
  CommonSmallText,
  CommonCounters,
  CommonInnerText,
} from "../commons";

type Props = {
  navigation?: any;
};

const AddOwnPlanDinner: React.FC<Props> = () => {
  return (
    <View style={styles.wrapper}>
      <CommonHeader
        title="Voedingsplan toevoegen"
        backArrow={true}
        crossIcon={true}
      />

      <View style={styles.container}>
        <Image source={Images.food2} style={styles.foodIcon} />

        <CommonText title="Avondeten" externalTextStyle={styles.title} />

        {/* Calories  Container*/}
        <View style={styles.counterContainer}>
          <CommonInnerText title="Calorieën" />

          <View style={styles.counterRow}>
            <CommonCounters />

            <CommonSmallText title="kilocalorieën" />
          </View>
        </View>

        {/* Protein Container */}
        <View style={styles.counterContainer}>
          <CommonInnerText title="Eiwit" />

          <View style={styles.counterRow}>
            <CommonCounters />

            <CommonSmallText title="gram" />
          </View>
        </View>

        {/* Vet Container */}
        <View style={styles.counterContainer}>
          <CommonInnerText title="Vet" />

          <View style={styles.counterRow}>
            <CommonCounters />

            <CommonSmallText title="gram" />
          </View>
        </View>

        {/* Carbohydrates Container */}
        <View style={styles.counterContainer}>
          <CommonInnerText title="Koolhydraten" />

          <View style={styles.counterRow}>
            <CommonCounters />

            <CommonSmallText title="gram" />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <CommonButtons
            title="Volgende"
            externalContainerStyle={styles.button}
          />
          <CommonSkipButton title="Sla over" />
        </View>
      </View>
    </View>
  );
};

export default AddOwnPlanDinner;

const styles = StyleSheet.create({
  title: {
    marginLeft: 0,
    marginBottom: Scale(25),
  },
  wrapper: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  foodIcon: {
    resizeMode: "contain",
    height: Scale(30),
    width: Scale(30),
    marginVertical: Scale(20),
  },
  container: {
    flex: 1,
    marginHorizontal: Scale(20),
    paddingTop: Scale(40),
  },
  counterContainer: {
    flex: 0.9,
  },

  counterRow: {
    flexDirection: "row",
    marginTop: Scale(5),

    alignItems: "center",
  },

  buttonContainer: {
    flex: 1,

    justifyContent: "flex-end",

    marginBottom: Scale(30),
  },
  button: {
    width: width - Scale(30),
  },
});
