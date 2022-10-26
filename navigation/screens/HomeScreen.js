import * as React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import { Header } from '../../components/Header'
import IonIcons from 'react-native-vector-icons/Ionicons'

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
                  placeholderTextColor={'#596563'}

                  onChangeText={setText}
                  value={text}
               />
            
               <View style={styles.inputDay}>
                  <TextInput
                     placeholder='Dia'
                     placeholderTextColor={'#596563'}
                     style={{width: 200}}

                  /> 
                  <IonIcons name='chevron-down-outline' size={25} color={'#596563'} />
               </View>   

               <View style={styles.inputhours}>
                  <TextInput
                     placeholder='Horário'
                     placeholderTextColor={'#596563'}
                     style={{width: 200}}

                  /> 
                  <IonIcons name='chevron-down-outline' size={25} color={'#596563'} />
               </View>      
                        
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
   inputDay: {
      width: 300,
      height: 60,
      backgroundColor: 'white',
      borderColor: '#DEDEDE',
      borderWidth: 2,
      paddingLeft: 15,
      paddingRight: 15,
      alignItems:  'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      borderBottomColor: 'transparent',
      borderTopColor: 'transparent',
   },
   inputhours:{
      width: 300,
      height: 60,
      backgroundColor: 'white',
      borderColor: '#DEDEDE',
      borderWidth: 2,
      paddingLeft: 15,
      paddingRight: 15,
      alignItems:  'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
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