import * as React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, FlatList, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";


const CONTACTS = [
  {title: "National Care Hotline - 1800-202-6868 ", id: "1",
  },
  {title: "Samaritans of Singapore - 1800-221-4444", id: "2",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.contacts}>{title}</Text>
  </View>
);


const renderItem=({ item }) => (
    <Item title={item.title} />
    );

export default function ResourceScreen(){

  return (
    <View style={styles.container}>
    <FlatList data={CONTACTS} renderItem={renderItem}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitleStyle:{
    fontWeight:"bold",
    fontSize: 30,
  },
  headerStyle: {
    height: 100,
    backgroundColor: "grey",
  borderBottomColor:"darkgrey",
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent:"center",
  },
  item: {
    backgroundColor: "#EAD3CD",
    padding: 20,
    marginVertical: 5,
    marginalHorizontal: 16,
  }
})