import * as React from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ForumStack from './ForumStack';
import CardShowcaseExample from '../components/card';
import AddStack from './AddStack';

const InnerStack = createStackNavigator();

export default function ForumHomeScreen () {
  return (
    <InnerStack.Navigator headerMode='none'>
        <InnerStack.Screen name="Forum" component={ForumStack} />
        <InnerStack.Screen name="Add" component={AddStack} />
    </InnerStack.Navigator>
  );
}