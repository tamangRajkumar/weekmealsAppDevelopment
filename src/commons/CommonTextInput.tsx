import { View, Text , TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import { Images, Scale, width } from '../constants';

type CommonTextInputProps = {
    title:string,
    externalTextStyle?: any,
    password?: boolean,
    placeholder: string,
    value?: string | number,
    onChangeValue: any,
    textBoxContainerExternalStyle?: any,
    showEyeIcon?: boolean


}

const CommonTextInput:React.FC<CommonTextInputProps> =({title, placeholder,onChangeValue,password,textBoxContainerExternalStyle, showEyeIcon}) => {
  return (
    <View style={styles.wrapper}
    >
     
      <Text>{title}</Text>
     
      <View style={{...styles.textBoxContainer, ...textBoxContainerExternalStyle}}>
          <TextInput secureTextEntry={password} placeholder={placeholder} style={styles.inputContainer} onChangeText={onChangeValue}/>
        {showEyeIcon && 
          <TouchableOpacity style={styles.iconContainer}>
          <Image source={Images.eyeIcon} style={styles.eyeIconStyle}/>
          </TouchableOpacity>
}
      </View>
    </View>
  );
}

export default CommonTextInput

const styles = StyleSheet.create({
  iconContainer:{

position:'absolute',
right: Scale(8),
justifyContent:'center',
alignSelf:'center',

  },
  eyeIconStyle:{
    height: Scale(22),
    width: Scale(18),
    resizeMode:'contain',
  
  },
  textBoxContainer:{
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: Scale(10),
    paddingVertical: Scale(10),
    width: width- Scale(40),
    alignSelf:'center', 
    marginTop: Scale(10),
    borderRadius: Scale(5),
    marginBottom: Scale(30),
    flexDirection:'row'
  
  }, inputContainer:{
    
  },
  wrapper:{
    marginHorizontal:Scale(20)
  }
})