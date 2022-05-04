import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CommonButtons, CommonText, CommonSmallText } from "../commons";

import { Scale, Colors } from "../constants";

const Groceries = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.title}>
        <CommonText title="Groceries" />
      </View>
      <CommonButtons
        title="Create grocery list"
        externalContainerStyle={styles.button}
      />

      <View style={styles.discriptionContainer}>
        <CommonSmallText
          title="Your groceries will get listed here after  you have created one for a period."
          externalTextStyle={styles.discriptionText}
        />
      </View>
    </View>
  );
};

export default Groceries;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  title: {
    flex: 0.16,
    marginLeft: Scale(-10),
    justifyContent: "flex-end",
  },
  button: {
    marginVertical: Scale(20),
  },
  discriptionContainer: {
    borderTopColor: Colors.disableButton,
    borderTopWidth: Scale(2),
    paddingHorizontal: Scale(40),
  },
  discriptionText: {
    textAlign: "center",
    paddingTop: Scale(35),
  },
});







