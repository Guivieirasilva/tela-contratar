import * as React from 'react'
import { View, Text } from 'react-native-web'

export function HomeScreen({navigation}) {
   return(
      <View style={styles.container} >
         <Text 
            style={styles.cont} 
            onPress={() => alert('This is the "HOME" screen! ')}
         >
            Home Screen
         </Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
   cont: {
      fontSize: 26,
      fontWeight: 'bold',

   }
 });