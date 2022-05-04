import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Colors, height, Scale, width } from "../constants";

type CommonSkipButtonProps = {
  title: string;
  externalContainerStyle?: any;
  onPress?: any;
  disable?: boolean;
};

const CommonSkipButton: React.FC<CommonSkipButtonProps> = ({
  title,
  onPress,
  externalContainerStyle,
  disable,
}) => (
  <TouchableOpacity
    style={{ ...styles.container, ...externalContainerStyle }}
    onPress={onPress}
    disabled={disable}
  >
    <Text style={styles.textStyle}>{title}</Text>
  </TouchableOpacity>
);

export default CommonSkipButton;

const styles = StyleSheet.create({
  container: {
    height: Scale(46),
    justifyContent: "center",
    alignItems: "center",
    width: width - Scale(20),
    alignSelf: "center",
    borderRadius: Scale(20),
  },
  textStyle: {
    color: Colors.skipButtonColor,
    fontWeight: "bold",
  },
});