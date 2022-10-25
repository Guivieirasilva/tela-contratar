import * as React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../../components/Header'

export function HomeScreen() {
   const [text, setText] = React.useState('')

   return(
         <View style={styles.container} >
            <StatusBar barStyle='light-content' backgroundColor='#006557' />
            <Header />
         
            <Text style={styles.text} onPress={() => alert('This is the "HOME" screen! ')} >
               Selecione o dia e horário para o plantão.
            </Text>

            <View>
               <TextInput
                  style={styles.input}
                  placeholder='Nome do paciente'
                  onChangeText={setText}
                  value={text}
               />
               <TextInput
                  style={styles.inputMid}
                  placeholder='Dia'
               />
               <TextInput
                  style={styles.input}
                  placeholder='Horário'
               />
            </View>
            

            <TouchableOpacity
               style={styles.button}
               onPress={(e) => e.preventDefault() }
            
            >
         
            <Text 
               style={{color: 'white', fontSize: 18, fontWeight: '500' }}
            >
               Continuar
            </Text>
            </TouchableOpacity>
            <TouchableOpacity 
               style={styles.goBack} 
               onPress={(e) => e.preventDefault() }  
            >
               <Text 
                  style={{color: '#07689F', fontSize: 18, fontWeight: '500' }}
               >
                  Voltar
               </Text>
            </TouchableOpacity>
         
         </View>


   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#F8F8F8',

   },
   text: {
      fontSize: 18, 
      width: 300 ,
      fontWeight: '400',
      marginBottom: 20,
   },
   input: {
      width: 300,
      height: 60,
      backgroundColor: 'white',
      borderColor: '#DEDEDE',
      borderWidth: 2,
      paddingLeft: 15,
   },
   inputMid: {
      width: 300,
      height: 60,
      backgroundColor: 'white',
      borderColor: '#DEDEDE',
      borderWidth: 2,
      paddingLeft: 15,
      borderBottomColor: 'transparent',
      borderTopColor: 'transparent',
   },
   button: {
      backgroundColor: '#07689F',
      alignItems: 'center',
      justifyContent: 'center',
      width: 300,
      height: 50,
      borderRadius: 4,
      marginTop: 40,
   },
   goBack:{
      width: 300,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      height: 50,
      marginBottom: 50.

   } 
})