import { View, Text , TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import { Colors, Scale, width } from '../constants';

type CommonTextProps = {
    title:string,
    externalTextStyle?: any,
   


}

const CommonText:React.FC<CommonTextProps> =({title,externalTextStyle}) => {
  return (
  
     
      <Text style={{...styles.textStyle, ...externalTextStyle}}>{title}</Text>

  );
}

export default CommonText

const styles = StyleSheet.create({
  textStyle : {
    color: Colors.largeTextColor, 
    fontWeight:'bold',
    fontSize: Scale(20),
width: width- Scale(100),
 marginLeft: Scale(20),
}
})