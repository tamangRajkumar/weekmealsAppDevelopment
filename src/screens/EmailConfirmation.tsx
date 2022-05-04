import { View, Text, StyleSheet, TouchableOpacity, Image, TextComponent } from 'react-native';
import React ,{useState}from 'react';
import { CheckBox, colors, Icon } from 'react-native-elements';
import { CommonTextInput, CommonButtons , CommonText} from '../commons';
import { Scale, width , Images, Colors} from '../constants';


type Props = {
  navigation?:any
}

const  EmailConfirmation:React.FC<Props>=({navigation}) =>{
  const [values, setValues] = useState({
    email:'',
    password:'',
    confirmPassword:'',
    checkBox: false
  })


  const handleNavigation = () => {
 navigation.navigate('EmailConfirmed')
  }


 



  return (

    <View style={styles.container}>
    <View style={styles.iconContainer}>
      <Image source={Images.eyeIcon} style={styles.iconStyle} />
    </View>


    <CommonText title='Bevestig je e-mailadres'  externalTextStyle={styles.titleStyle}/>
   
   <View style={styles.discriptionContainer}>
    <Text>We asfnsandfksafdn sdfknsdfna</Text>
    <Text>liasa.de@gmail.com</Text>
    </View>

    <View style={styles.discriptionContainer}>    
    <Text>Bevestig je e-mailadres kjdafabfba dfn</Text>
    <Text>e-maild djal te adsn dnfnasdk</Text>
    </View>


    <View style={styles.bottomContainer}>
      <Text style={{color:"#ccd1cf"}}> stuur opnieuw</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleNavigation}
      >
        <Text> Annuleren </Text>
      </TouchableOpacity>

    </View>

  </View>

    );
}

export default EmailConfirmation

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    height: Scale(35),
    width: Scale(35),
   
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: Scale(200),
    backgroundColor: Colors.primaryGreenColor,
    height: Scale(90),
    width: Scale(90),
    borderRadius: Scale(100),
  },
  titleStyle:{
   
    marginTop:Scale(35),
  },
  discriptionContainer:{
    marginTop:Scale(35),
    justifyContent: "center",
    alignItems: "center",
   
  },
    bottomContainer:{
        marginTop:Scale(160),
    },
    button: {
      justifyContent: "center",
      alignItems: "center",
     marginTop:Scale(30),
    },
});
