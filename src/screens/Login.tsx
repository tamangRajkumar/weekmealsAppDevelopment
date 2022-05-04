import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import { CommonButtons, CommonText, CommonTextInput } from '../commons';
import { Scale } from '../constants';

type Props = {
  navigation : any
}

const  Login:React.FC<Props> =({navigation}) =>{
  const [values, setValues] = useState({
    name:'',
    email:''
  })
  const handleNavigation =() =>{
    navigation.navigate('RegisterScreen')
  }
  const handleChange = (name: string, value: string) =>{
    setValues({ ...values, [name]: value });
  }
  return (
    
    <View style={styles.wrapper}>
    <View style={styles.logginContaier}>
    <TouchableOpacity style={styles.loginTouchableContainer} onPress={handleNavigation}>
    <CommonText title='Registreren' externalTextStyle={styles.externalTextStyle}/>
    </TouchableOpacity>
    </View>
    <View style={styles.container}>
    
    <CommonText title='Inloggen' externalTextStyle={styles.titleStyle}/>
    <CommonTextInput title='E-mailadres' placeholder='Jouw e-mailadres'  onChangeValue={(value: string) =>handleChange('email', value)}/>
     <CommonTextInput title='Wachtwoord' placeholder='Jouw wachtwoord' onChangeValue={(value: string) =>handleChange('password', value)} password={true} showEyeIcon={true}/>
    </View>
    <View style={styles.bottomStyle}>
    <CommonButtons  title='Activeer je account'/>
    </View>
    </View>
  );
}
export default Login


const styles = StyleSheet.create({
  titleStyle:{
    marginBottom: Scale(20)
  },
  externalTextStyle:{
fontSize: Scale(16)
  },
  container:{
    flex:2,
  },
  wrapper:{
    flex:1
  },
  logginContaier:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-end',  
  },
  loginTouchableContainer:{
    position:'absolute',
    right: Scale(20),
    width: Scale(110)
  },
  bottomStyle:{
    flex:1,
    justifyContent:'flex-end',
    marginBottom: Scale(30),
  }
})