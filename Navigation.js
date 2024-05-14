import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons'; // Or any icon library you prefer
import COLORS from '../constants/Colors'
import CustomTabBarButton from './CustomTabBarButton';
import CustomTabBar from './CustomTabBar';
import { EventRegister } from 'react-native-event-listeners'
import { useState, useEffect } from 'react';
import theme from '../theme/Theme';
import themeContext from '../theme/ThemeContext';


import Home from '../Home';
import Login from '../Login';
import Signup from '../Signup';
import Settingss from '../Settingss';
import OnBoarding from './OnBoarding';
import Profile from '../Profile';
import Index from '../Index';
import ScanImage from '../ScanImage';

import Tips from './Tips';
import Preferences from '../Preferences';
import Support from '../Support';
import { DefaultTheme } from 'react-native-paper';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const AuthStack = () => (
  <Stack.Navigator initialRouteName='Login'>
    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
    <Stack.Screen name='Preferences' component={Preferences} options={{ headerShown: false }}/>
    <Stack.Screen name='Support' component={Support} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    <Stack.Screen name="Index" component={Index} options={{ headerShown: false }} />
    <Stack.Screen name="ScanImage" component={ScanImage} options={{ headerShown: false }} />
   
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator
  tabBar={props => <CustomTabBar {...props}/>}
    screenOptions={({ route }) => ({
      tabBarStyle: styles.tabbarStyle,
      tabBarShowLabel:false,
      tabBarIcon: ({ focused, color }) => {
        let iconName;

        if (route.name === 'Profile') {
          iconName = focused ? 'person-outline' : 'person-outline';
        } else if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Settingss') {
          iconName = focused ? 'settings' : 'settings-outline';
        } else if (route.name === 'Tips') {
          iconName = focused ? 'information-circle' : 'information-circle-outline';
        }

        return <Ionicons name={iconName} size={24} color={color} 
        s
        />;
      },
      tabBarActiveTintColor: COLORS.white,
      tabBarInactiveTintColor: COLORS.dark,
    })}
  >
    <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false, 
    tabBarButton: props => <CustomTabBarButton {...props}/> }}  />
    <Tab.Screen name="Settingss" component={Settingss} options={{ headerShown: false,
     tabBarButton: props => <CustomTabBarButton {...props}/> }} />
    <Tab.Screen name="Tips" component={Tips} options={{ headerShown: false,
     tabBarButton: props => <CustomTabBarButton {...props}/> }} />
    <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false,  
      tabBarButton: props => <CustomTabBarButton {...props}/> }} />
  </Tab.Navigator>
);

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() =>{
    const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
      setDarkMode(data)
      console.log(data);
    })
    return () =>{
      EventRegister.removeAllListeners(listener)
    } 
  }, [darkMode])
  return (
   <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
    <NavigationContainer theme={darkMode === true ? DarkTheme : DefaultTheme} >
      <Drawer.Navigator initialRouteName="Login"  >
      <Drawer.Screen name="Logout" component={AuthStack}  options={{headerShown: false, drawerLabel: 'Logout', drawerIcon: ({ focused, color }) => (<Ionicons name={focused ? 'log-out-outline' : 'log-out-outline'} size={24} color={COLORS.primary} />) }}/>
      <Drawer.Screen name="Home" component={TabNavigator} options={{ drawerLabel: 'Home', drawerIcon: ({ focused, color }) => (<Ionicons name={focused ? 'home-outline' : 'home-outline'} size={24} color={COLORS.primary} />) }} />
        <Drawer.Screen name='Settings' component={Settingss}  options={{ drawerLabel: 'Settings', drawerIcon: ({ focused, color }) => (<Ionicons name={focused ? 'settings-outline' : 'settings-outline'} size={24} color={COLORS.primary} />) }} />
        <Drawer.Screen name='Tips' component={Tips} options={{ drawerLabel: 'Tips', drawerIcon: ({ focused, color }) => (<Ionicons name={focused ? 'information-circle-outline' : 'information-circle-outline'} size={24} color={COLORS.primary} />) }} />
        <Drawer.Screen name='Profile' component={Profile} options={{ drawerLabel: 'Profile', drawerIcon: ({ focused, color }) => (<Ionicons name={focused ? 'person' : 'person-circle-outline'} size={24} color={COLORS.primary} />) }} />
        <Drawer.Screen name='Support' component={Support} options={{ drawerLabel: 'Support', drawerIcon: ({ focused, color }) => (<Ionicons name={focused ? 'person' : 'help-circle-outline'} size={24} color={COLORS.primary} />) }}/>
      </Drawer.Navigator>
    </NavigationContainer>
    </themeContext.Provider>
  );
};


const styles= StyleSheet.create({
  tabbarStyle:{
    backgroundColor: COLORS.transparent,
    position:"absolute",
    borderTopWidth:0,
    bottom:15,
    left:10,
    right:10,
    height:88,
  },
})
export default App;
