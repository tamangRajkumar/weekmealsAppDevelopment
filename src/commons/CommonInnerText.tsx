import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
  } from "react-native";
  import React from "react";
  import { Colors, Scale, width } from "../constants";
  
  type CommonInnerTextProps = {
    title: string;
    externalTextStyle?: any;
  };
  
  const CommonInnerText: React.FC<CommonInnerTextProps> = ({
    title,
    externalTextStyle,
  }) => {
    return (
      <Text style={{ ...styles.textStyle, ...externalTextStyle }}>{title}</Text>
    );
  };
  
  export default CommonInnerText;
  
  const styles = StyleSheet.create({
    textStyle: {
      color: Colors.largeTextColor,
      fontSize: Scale(15),
    },
  });