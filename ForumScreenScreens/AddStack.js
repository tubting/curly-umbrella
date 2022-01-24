import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import AddScreen from './AddScreen';

const InnerStack = createStackNavigator();
export default function AddStack() {
  return (
    <InnerStack.Navigator >
      <InnerStack.Screen  name="New Post" component={AddScreen} 
              options={{
          title: 'New Post',
          headerTitleContainerStyle: {
            textAlign: "center"
          },
        }}/>
    </InnerStack.Navigator>
  );
}
