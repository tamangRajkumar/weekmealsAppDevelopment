import { View, StyleSheet, Image } from "react-native";

import { CommonButtons, CommonText } from "../commons";
import { width, Images, Colors, height, Scale } from "../constants";

type Props = {
  navigation?: any;
};

const FinishPlanning: React.FC<Props> = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("");
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.titleContainer}>
        <CommonText
          title="“Failing to plan is     planning to fail” - Me"
          externalTextStyle={styles.headingFirst}
        />
        <CommonText
          title="Not what happened to you!"
          externalTextStyle={styles.headingSecond}
        />
        <CommonText
          title="Time to get the groceries in your home."
          externalTextStyle={styles.headingThird}
        />
      </View>
      <Image source={Images.meditationIcon} style={styles.meditationIcon} />

      <View style={styles.buttonContainer}>
        <CommonButtons title="Create a grocery list" />
      </View>
    </View>
  );
};

export default FinishPlanning;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  titleContainer: {
    flex: 0.39,

    alignItems: "center",
    textAlign: "center",
    justifyContent: "flex-end",
  },
  headingFirst: {
    textAlign: "center",
    textAlignVertical: "bottom",
    color: Colors.textColor,
    fontStyle: "italic",
  },
  headingSecond: {
    textAlign: "center",
    textAlignVertical: "bottom",
    color: Colors.primaryGreenColor,
    paddingVertical: Scale(10),
  },
  headingThird: {
    alignSelf: "center",
    textAlign: "center",
    color: Colors.textColor,
  },

  meditationIcon: {
    flex: 0.6,
    height: height * 0.8,
    width: width * 0.8,
    resizeMode: "contain",
    alignSelf: "center",
  },
  buttonContainer: {
    flex: 0.2,
    justifyContent: "center",
  },
});
