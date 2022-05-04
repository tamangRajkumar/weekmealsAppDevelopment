import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import {Colors, Scale, width, height} from '../constants'

type CommonButtonProps ={
    title :string,
    externalContainerStyle?:any,
    onPress?:any,
    disable? : boolean
   
}

const  CommonButtons:React.FC<CommonButtonProps> =({title, onPress, externalContainerStyle, disable}) => {
  return (
    <TouchableOpacity style={{...styles.container, ...externalContainerStyle}} onPress={onPress} disabled={disable}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

export default CommonButtons


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primaryGreenColor,
        height: Scale(46),
        justifyContent:'center',
        alignItems:"center",
        width: width - Scale(20),
        alignSelf:'center',
        borderRadius: Scale(8)

    },
    textStyle:{
        color: Colors.whiteColor,
        fontWeight:'bold'
    }
})