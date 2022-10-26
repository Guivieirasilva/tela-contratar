import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import IonIcons from 'react-native-vector-icons/Ionicons'

export function Header() {
   return(
      <View style={styles.heading}>
         <TouchableOpacity>
            <IonIcons 
               name="arrow-back" 
               size={25}
               color={'white'}
            />
            
         </TouchableOpacity>

         <Text style={styles.title}>
               Contratar
         </Text>

         <View style={styles.right}/>
      </View>
   )
}

const styles = StyleSheet.create({
   heading:{
      width: '100%',
      flexDirection: 'row',
      alignItems: 'flex-end',
      paddingHorizontal: 32,
      paddingVertical: 20,
      backgroundColor: '#006557',
      justifyContent:'space-between',
      marginBottom: 20,
      height:80,
      
   },
   title:{
      color: 'white',
      fontSize: 18,
      fontWeight: '500',
      
    },
    right:{
      width: 20,
      height: 20,
    },
})