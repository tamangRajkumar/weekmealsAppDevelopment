
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";


import { Images, Colors, Scale, } from "../constants";
import { CommonSmallText , CommonText} from "./";

type CommonListCheckBoxProps = {
  title: string;
  checked: boolean;
  description: string;
  onPress: any;
};

const CommonListCheckbox: React.FC<CommonListCheckBoxProps> = ({
  title,
  checked,
  description,
  onPress,
}) => {
  console.log(checked);
  return (
    <View style={styles.listContainer}>
      <CheckBox
        checkedIcon={
          <Image
            source={Images.checkedCircle}
            style={styles.checkedIconStyle}
          />
        }
        uncheckedIcon={
          <Image
            source={Images.unCheckedCircle}
            style={styles.checkedIconStyle}
          />
        }
        checked={checked}
        onPress={onPress}
      />
      <View style={styles.skipContainer}>
        <CommonText title={title} externalTextStyle={styles.textStyle} />

        <CommonSmallText title={description} />
      </View>
    </View>
  );
};

export default CommonListCheckbox;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: Scale(13),
    marginLeft: 0,
    fontWeight: "500",
  },
  checkedIconStyle: {
    height: Scale(20),
    resizeMode: "contain",
    width: Scale(20),
  },
  skipContainer: {
    flex: 1,
  },
  listContainer: {
    marginHorizontal: Scale(20),
    marginTop: Scale(5),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.lightBackgroundColor,
    borderRadius: Scale(4),
    paddingVertical: Scale(10),
  },
});
