import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextComponent,
} from "react-native";
import React, { useState } from "react";
import { CheckBox, Icon } from "react-native-elements";
import { CommonTextInput, CommonButtons, CommonText } from "../commons";
import { Scale, width, Images, Colors } from "../constants";

type Props = {
  navigation?: any;
};

const Register: React.FC<Props> = ({ navigation }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    checkBox: false,
  });

  const { email, password, confirmPassword, checkBox } = values;
  const handleNavigation = () => {
    navigation.navigate("LoginScreen");
  };

  // Added
  const handleButtonNavigation = () => {
    navigation.navigate("EmailConfirmation");
  };

  const handleChange = (name: string, value: string | boolean) => {
    setValues({ ...values, [name]: value });
  };

  const checkDisableCondition = () => {
    return password === confirmPassword && checkBox ? false : true;
  };
  const renderStrongPassword = () => {
    return (
      <View style={styles.strongPasswordContainer}>
        <View
          style={[
            { ...styles.strongPasswordStyle },
            password.length >= 2 && {
              backgroundColor: Colors.primaryGreenColor,
            },
          ]}
        />
        <View
          style={[
            { ...styles.strongPasswordStyle },
            password.length >= 3 && {
              backgroundColor: Colors.primaryGreenColor,
            },
          ]}
        />
        <View
          style={[
            { ...styles.strongPasswordStyle },
            password.length >= 5 && {
              backgroundColor: Colors.primaryGreenColor,
            },
          ]}
        />
        <View
          style={[
            { ...styles.strongPasswordStyle },
            password.length >= 7 && {
              backgroundColor: Colors.primaryGreenColor,
            },
          ]}
        />
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.logginContainer}>
        <TouchableOpacity
          style={styles.loginTouchableContainer}
          onPress={handleNavigation}
        >
          <CommonText
            title="InLoggen"
            externalTextStyle={styles.externalTextStyle}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <CommonText
          title="Maak je WeekMeals account"
          externalTextStyle={styles.titleStyle}
        />
        <CommonTextInput
          title="E-mailadres"
          placeholder="Jouw e-mailadres"
          value={email}
          onChangeValue={(val: string) => handleChange("email", val)}
        />
        <View
          style={{ justifyContent: "space-around", marginBottom: Scale(20) }}
        >
          <CommonTextInput
            title="Kies een sterk wachtwoord"
            placeholder="Jouw wachtwoord"
            value={password}
            onChangeValue={(val: string) => handleChange("password", val)}
            password={true}
            textBoxContainerExternalStyle={styles.textBoxContainerExternalStyle}
            showEyeIcon={true}
          />
          {renderStrongPassword()}
        </View>
        <CommonTextInput
          title="Herhaal je wachtwoord"
          placeholder="Jouw wachtwoord"
          value={confirmPassword}
          onChangeValue={(val: string) => handleChange("confirmPassword", val)}
          password={true}
          showEyeIcon={true}
        />
        <View style={styles.checkBoxContainer}>
          <CheckBox
            containerStyle={styles.textBoxContainerStyle}
            checkedIcon={
              <Image source={Images.checkIcon} style={styles.checkboxStyle} />
            }
            uncheckedIcon={
              <Image
                source={Images.unCheckedIcon}
                style={styles.checkboxStyle}
              />
            }
            checked={checkBox}
            onPress={() => handleChange("checkBox", !checkBox)}
          />
          <CommonText
            title="Ik accepteer de Voorwaarden"
            externalTextStyle={styles.checkboxTextStyle}
          />
        </View>
      </View>
      <View style={styles.bottomStyle}>
        <CommonButtons
          title="Maak je account"
          onPress={handleButtonNavigation}
          disable={checkDisableCondition()}
          externalContainerStyle={
            checkDisableCondition() && styles.disableButton
          }
        />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  titleStyle: {
    marginBottom: Scale(20),
  },
  textBoxContainerExternalStyle: {
    marginBottom: Scale(10),
  },
  strongPasswordStyle: {
    height: Scale(4),
    width: width / 7,
    backgroundColor: Colors.disableButton,
    borderRadius: Scale(2),
    marginRight: Scale(4),
  },
  strongPasswordContainer: {
    flexDirection: "row",
    marginHorizontal: Scale(20),
  },
  disableButton: {
    backgroundColor: Colors.disableButton,
  },
  textBoxContainerStyle: {
    marginRight: 0,
    width: 10,
  },
  checkboxTextStyle: {
    fontSize: Scale(14),
    fontWeight: "500",
  },
  checkboxStyle: {
    height: Scale(20),
    resizeMode: "contain",
    width: Scale(20),
  },
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: Scale(20),
  },
  externalTextStyle: {
    fontSize: Scale(16),
  },
  container: {
    flex: 2,
    justifyContent: "space-between",
  },
  wrapper: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  logginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  loginTouchableContainer: {
    position: "absolute",
    right: Scale(20),
    width: Scale(100),
  },
  bottomStyle: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: Scale(30),
  },
});
