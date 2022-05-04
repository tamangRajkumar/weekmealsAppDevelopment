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
  import { CommonTextInput, CommonButtons, CommonText, CommonHeader, CommonInnerText } from "../commons";
  import { Scale, width, Images, Colors } from "../constants";
  
  type Props = {
    navigation?: any;
  };
  
  const YourMealPlanMoreInfo: React.FC<Props> = ({ navigation }) => {
    
    const handleNavigation = () => {
      navigation.navigate("");
    };
  
    return (
        <View style={styles.wrapper}>
            <View style={styles.titleContainer}> 
            <CommonHeader title="Je dag doel" backArrow={false} crossIcon={true}  />
            </View>
           <View style={styles.bodyTextContainer}>
            <CommonInnerText   title="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus consectetur id tristique odio eget quam varius neque dui. Ipsum tellus est bibendum eu at. Urna et facilisi praesent sed.

At quis turpis blandit tellus sit nulla. Cursus in mauris risus ipsum, tincidunt et, neque, pharetra, lacinia. Odio sit malesuada elementum donec eros sociis et at. Ornare dolor ornare amet viverra massa sed massa. Morbi adipiscing nulla aenean quam massa at. Bibendum est ipsum est tincidunt vitae eu sed blandit.

Sed elit, interdum turpis netus. Tempus purus commodo tellus hac luctus pellentesque magna in ultricies. Lacus consectetur id tristique odio eget quam varius neque dui. Ipsum tellus est bibendum eu at. Urna et facilisi praesent sed." />
           
           
            </View>
            



            <View style={styles.buttonContainer}>
            <CommonButtons title="OK" onPress={handleNavigation} />
            </View>
            </View>
    );
  };
  
  export default YourMealPlanMoreInfo;

    const styles = StyleSheet.create({

wrapper:{

    flex:1,
    backgroundColor:Colors.whiteColor,

}
,
titleContainer:{

marginHorizontal:Scale(20),

    
},
bodyTextContainer:{
    flex:1,
paddingHorizontal:Scale(20),
paddingVertical:Scale(30),
borderTopWidth:1,
borderTopColor:Colors.disableButton,
marginTop:Scale(15),
},

buttonContainer:{
flex:.14,
}

    });
  
  