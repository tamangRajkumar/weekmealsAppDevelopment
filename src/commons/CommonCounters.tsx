import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Counter from "react-native-counters";
import { Scale } from "../constants";
import { Colors } from "../constants/colors";

type CounterProps = {};
const CommonCounters: React.FC<CounterProps> = () => {
  const handleOnChangeCounter = (count: number) => {};
  return (
    <View style={styles.counterWrapper}>
      <Counter
        buttonTextStyle={styles.buttonTextStyle}
        buttonStyle={styles.buttonStyle}
        start={1}
        countTextStyle={styles.counterTextStyle}
        onChange={(count: number) => handleOnChangeCounter(count)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  counterTextStyle: {
    color: Colors.largeTextColor,
    fontSize: Scale(18),
  },
  buttonStyle: {
    borderWidth: 0,
  },
  counterWrapper: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: Scale(5),
    borderColor: Colors.textColor,
    paddingVertical: Scale(5),
    paddingHorizontal: Scale(5),
    marginRight: Scale(15),
 
  },
  buttonTextStyle: {
    color: "#a1b5c0",
    fontSize: Scale(18),
  },
});
export default CommonCounters;
