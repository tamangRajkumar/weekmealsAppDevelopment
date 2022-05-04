import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Scale, Images } from "../constants";

type CommonHeaderProps = {
  title: string;
  backArrow: boolean;
  crossIcon: boolean;
};
const CommonHeader: React.FC<CommonHeaderProps> = ({
  title,
  backArrow,
  crossIcon,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {backArrow && (
          <TouchableOpacity>
            <Image source={Images.backArrow} style={styles.backArrowStyle} />
          </TouchableOpacity>
        )}

        <Text>{title}</Text>
      </View>
      <View>
        {crossIcon && (
          <TouchableOpacity>
            <Image source={Images.crossIcon} style={styles.backArrowStyle} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Scale(90),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingBottom: 20,
  },
  backArrowStyle: {
    height: Scale(17),
    resizeMode: "contain",
  },
  leftContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
});

export default CommonHeader;
