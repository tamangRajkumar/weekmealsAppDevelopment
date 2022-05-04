import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Colors, Scale, width } from "../constants";

type CommonSmallTextProps = {
  title: string;
  externalTextStyle?: any;
};

const CommonSmallText: React.FC<CommonSmallTextProps> = ({
  title,
  externalTextStyle,
}) => (
  <Text style={{ ...styles.textStyle, ...externalTextStyle }}>{title}</Text>
);

export default CommonSmallText;

const styles = StyleSheet.create({
  textStyle: {
    color: Colors.textColor,
    fontSize: Scale(14),
    lineHeight: Scale(20),
  },
});