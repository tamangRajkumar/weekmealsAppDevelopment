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
  import {
    CommonTextInput,
    CommonButtons,
    CommonText,
    CommonHeader,
    CommonSkipButton,
    CommonInnerText,
    CommonSmallText,
  } from "../commons";
  import { Scale, width, Images, Colors, height } from "../constants";
  
  type Props = {
    navigation?: any;
  };
  
  const PickADay: React.FC<Props> = ({ navigation }) => {
    const handleNavigation = () => {
      navigation.navigate("");
    };
  
    return (
      <View style={styles.wrapper}>
        <CommonHeader
          title="Plan je eerste dag in"
          backArrow={true}
          crossIcon={true}
        />
  
        <View style={styles.container}>
          <Image source={Images.calendarIcon} style={styles.calendarIcon} />
  
          <CommonText
            title="Op welke dag ga je beginnen?"
           
          />
  
        
  
          <View style={styles.buttonContainer}>
            <CommonButtons
              title="Kies dag"
              externalContainerStyle={styles.button}
            />
            <CommonSkipButton title="Sla over" />
          </View>
        </View>
      </View>
    );
  };
  
  export default PickADay;
  
  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
    },
   
    container: {
      flex: 1,
      paddingTop: Scale(10),
    },
    calendarIcon: {
        flex: 0.2,
        resizeMode: "contain",
        height: Scale(30),
        width: Scale(30),
    
        marginLeft: Scale(20),
      },
    middleContainer: {
      flexDirection: "row",
      paddingTop: Scale(35),
      alignItems: "center",
    },
    addSubContainer: {
      flex: 0.35,
      flexDirection: "row",
  
      justifyContent: "space-between",
  
      marginHorizontal: Scale(20),
      borderWidth: 1,
      borderColor: Colors.disableButton,
      padding: Scale(10),
    },
  
    addSubIcon: {
      height: Scale(20),
      width: Scale(20),
    },
    buttonContainer: {
      flex: 1,
  
      justifyContent: "flex-end",
      paddingBottom: Scale(30),
    },
    button: {
      width: width * 0.9,
    },
  });
  