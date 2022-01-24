import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import ForumScreen from './ForumScreen';

const InnerStack = createStackNavigator();
export default function ForumStack() {
  return (
    <InnerStack.Navigator>
      <InnerStack.Screen
        name="Forum"
        component={ForumScreen}
        options={{
          title: 'Forum',
          headerTitleContainerStyle: {
            textAlign: "center"
          },
          headerTitleStyle: {
            /*backgroundColor: "yellow",
            height: 100,
            shadowColor: "black",
            shadowOpacity: 0.2,
            shadowRadius: 5,**/
          },
        }}
      />
    </InnerStack.Navigator>
  );
}
