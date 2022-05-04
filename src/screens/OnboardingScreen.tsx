import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import React from 'react';
import Swiper from "react-native-swiper";
import {Colors, Images, Scale, walkThroughList, width} from '../constants'
import CommonButtons from "../commons/CommonButtons";
import CommonText from '../commons/CommonText';


type OnboardingProps ={
    title :string,
    description:string,
    image?: string,
    button?: boolean
    navigation:any
}


 const OnboardingScreen:React.FC<OnboardingProps> =({navigation}) => {
   
   const handleNavigation = ()=>{
      navigation.navigate('LoginScreen')
   }
  return (

    <View style={styles.swiperAlign}>
     <View style={styles.logginContaier}>
       <TouchableOpacity  style={styles.loginTouchableContainer} onPress={handleNavigation}>
       <CommonText title='Inloggen' externalTextStyle={styles.externalTextStyle}/>
    </TouchableOpacity>
    </View>
      <Swiper
      containerStyle={{flex:3}}
        loop={false}
        dot={
          <View
            style={styles.dotStyle}
          ></View>
        }
        activeDot={
          <View
            style={styles.activeDotStyle}
          ></View>
        }
        paginationStyle={styles.paginationStyle}
      >
        {walkThroughList.map((item) => {
          return (
            <View key={item.id} style={{flex:1, alignItems: "center" }}>
                  <Image source={item.image} style={[{...styles.swipeImages}, item.title=='Welkom!' && {width: width - Scale(100), marginBottom: 0, height: width/2}]} />
              <CommonText title={item?.title} externalTextStyle={styles.titleText}/>
              <Text style={styles.discriptionText}>{item.discription}</Text> 
              {item?.button &&    <CommonButtons  title='Volgende' onPress={handleNavigation} externalContainerStyle={styles.buttonContainer}/>}
            </View>
          );
        })}
      </Swiper>
    </View>

  

  );
}

export default OnboardingScreen

const styles = StyleSheet.create({
  paginationStyle:{
    position:'absolute',
    bottom: Scale(120)
  },
 externalTextStyle:{
    fontSize: Scale(16)
      },
  loginTouchableContainer:{
    position:'absolute',
    right: Scale(20),
    width: Scale(110),
  }, 
  logginContaier:{
    flex:1,
      justifyContent:'center',
      alignItems:'flex-end', 
  },
  buttonContainer:{
    position:'absolute',
    bottom:Scale(30)
  },
  activeDotStyle:{
    width: Scale(8),
    height: Scale(8),
    backgroundColor: Colors.primaryGreenColor,
    borderRadius: Scale(5),
    marginHorizontal: Scale(3),
  },
  dotStyle:{
    width:  Scale(8),
    height:  Scale(8),
    backgroundColor: Colors.disableButton,
    borderRadius: 4,
    marginHorizontal: Scale(3),


  },
    swipeImages: {
      height:width/2,
      width: width/3,
      resizeMode: "contain",
      marginBottom: Scale(20)
    },
   swiperAlign: {
      flex: 1,
      justifyContent:'center',
       backgroundColor:Colors.whiteColor
    },
    titleText: {
    textAlign: "center",
    },
    discriptionText: {
      textAlign: "center",
      color: Colors.textColor, 
      marginTop: Scale(20),
      width: width - width/3,
      fontSize: Scale(14),
    },
  
  });
  