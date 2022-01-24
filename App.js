import * as React from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import HelplineScreen from './Screens/HelplineScreen';
import HomeScreen from './Screens/HomeScreen';
import HealthScreen from './Screens/HealthScreen';
import ForumHomeScreen from './ForumScreenScreens/ForumHomeScreen';
import ClassesScreen from './Screens/ClassesScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name ==="Home"){
            iconName = "home";
          } else if (route.name === "Classes"){
            iconName = "book";
          } else if (route.name === "Forum"){
            iconName = "pencil";
          } else if (route.name === "Helpline"){
            iconName = "comments";
          } else if (route.name === "Health"){
            iconName = "plus"
          }

          return <FontAwesome name={iconName} size={size} color={color}/>;
        },
      })}
      
      tabBarOptions={{
        activeTintColor:"#cc4465",
        inactiveTintColor: "#FEB4C9",
      }}
      >
        <Tab.Screen name="Classes" component={ClassesScreen} />
        <Tab.Screen name="Forum" component={ForumHomeScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Helpline" component={HelplineScreen} />
        <Tab.Screen name="Health" component={HealthScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}