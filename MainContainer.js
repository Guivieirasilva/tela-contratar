import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcons from 'react-native-vector-icons/Ionicons'

// Screens
import { HomeScreen } from './screens/HomeScreen'
import { ShiftsScreen } from './screens/ShiftsScreen'
import { FavoritesScreen } from './screens/FavoritesScreen'
import { MyAccountScreen } from  './screens/MyAccountScreen'

// Screens Names
const homeName = 'Home'
const shiftsName = 'Plantões'
const favoritesName = 'Favoritos'
const accountName = 'Minha conta'

const Tab = createBottomTabNavigator();

export function MainContainer(){
   return(
      <NavigationContainer>
         <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
               tabBarIcon: ({ focused, color, size }) => {
                  let IconName;
                  let rn = route.name;

                  if (rn === homeName) {
                     IconName = focused ? 'home' : 'home-outline'
                  } else if (rn === shiftsName){
                     IconName = focused ? 'list-circle' : 'list-circle-outline'
                  } else if (rn === favoritesName){
                     IconName = focused ? 'heart' : 'heart-outline'
                  } else if (rn === accountName){
                     IconName = focused ? 'person' : 'person-outline'
                  }
                  return <IonIcons name={IconName} size={size ? 25 : 30} color={color}/>
               },
               tabBarActiveTintColor: '#6D7A78',
               tabBarInactiveTintColor: '#6D7A78',
               tabBarLabelStyle: { fontSize: 10, backgroundColor: "transparent",padding: 2, marginBottom: 10},
               tabBarStyle: {padding: 5, height: 70},
            })}
         >
         <Tab.Screen name={homeName} component={HomeScreen} />
         <Tab.Screen name={shiftsName} component={ShiftsScreen} />
         <Tab.Screen name={favoritesName} component={FavoritesScreen} />
         <Tab.Screen name={accountName} component={MyAccountScreen} />

         </Tab.Navigator>
      </NavigationContainer>
   )
}