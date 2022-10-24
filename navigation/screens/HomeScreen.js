import * as React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Header } from '../../components/Header'

export function HomeScreen() {
   const [text, setText] = React.useState('')

   return(
      <View style={styles.container} >
         <Header />
      
         <Text style={styles.text} onPress={() => alert('This is the "HOME" screen! ')} >
            Selecione o dia e horário para o plantão.
         </Text>

         <TextInput 
            style={styles.input}
            placeholder='Nome do paciente' 
            onChangeText={setText}
            value={text}
         /> 
         <TextInput 
            style={styles.input}
            placeholder='Dia' 

         />
         <TextInput 
            style={styles.input}
            placeholder='Horário'  

         />

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
      justifyContent: 'center',
      backgroundColor: '#F8F8F8',

   },
   text: {
      fontSize: 18, 
      width: 300 ,
      fontWeight: '400',
      marginBottom: 40,
   },
   input: {
      width: 300,
      height: 60,
      backgroundColor: 'white',
      borderRadius: 2,
      borderColor: '#DEDEDE',
      borderWidth: 2,
      paddingLeft: 15,
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

   } 
})