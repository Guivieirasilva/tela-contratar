import * as React from 'react'
import { View, Text } from 'react-native'

export function MyAccountScreen({navigation}) {
   return(
      <View style={{
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center',
      }} >
         <Text 
            style={{fontSize: 26, fontWeight: 'bold',}} 
            onPress={() => navigation.navigate('HOME')}
         >
            Minha Conta
         </Text>
      </View>
   )
}
