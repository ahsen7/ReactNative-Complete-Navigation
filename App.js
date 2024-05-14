import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import 'react-native-gesture-handler';
import Navigation from './src/components/Navigation'
import {AuthProvider} from './src/Context/AuthContext'
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-reanimated';
import { Drawer } from 'react-native-paper';
import SplashScreen from './SplashScreen';




const App = () => {
 
  const [isShowSplash, setisShowSplash] = useState(true);

  useEffect(() =>{
   setTimeout(() =>{
    setisShowSplash(false);
   }, 3000);
  });

  return (
    
  <>
      {isShowSplash ? <SplashScreen/> : <AuthProvider><Navigation/></AuthProvider>}
  </>
  )
}

export default App;