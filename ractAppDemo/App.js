import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View,Image, TextInput, ScrollView,Button,FlatList, BackHandler ,TouchableOpacity, Animated} from 'react-native';
import { useFonts } from 'expo-font';

import mmage from "./assets/icon.png"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screen/Welcom';
import Home from './screen/Home';
import Note from './screen/Note';
export default function App() {
  const [fontLoaded] = useFonts({
    InterBold : require('./assets/fonts/Inter-Bold.ttf'),
    InterLight : require('./assets/fonts/Inter-Light.ttf'),
    InterMedium : require('./assets/fonts/Inter-Medium.ttf'),
    InterRegular : require('./assets/fonts/Inter-Regular.ttf'),
    InterSemiBold : require('./assets/fonts/Inter-SemiBold.ttf'),

  });
if (!fontLoaded) return null;
const Stack = createNativeStackNavigator();

  return( 
  <>
      <StatusBar style="light" animated = {true} />
   <NavigationContainer>
      <Stack.Navigator
      initialRouteName = "Welcome" 
      screenOptions={{
        headerShown:false,
      }
        
      }
      >
      <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Note" component={Note} />
      </Stack.Navigator>
    </NavigationContainer>
</>
  );
};

const styles = StyleSheet.create({
  container :{
    flex:1,
    backgroundColor : "#fff",
    alignItems:"center",
    justifyContent : "center",

  },
  item :{
    backgroundColor : "#000",
    padding:20,
    marginVertical : 8,
    marginHorizontal:16,
    borderRadius:20,
  },
  title:{
    fontSize :30,
    textAlign:"center",
    color :"white",
  },
  box:{
    width :100,
    height:100,
    backgroundColor :"red",
  },
})