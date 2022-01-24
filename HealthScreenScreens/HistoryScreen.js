import * as React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("temp.db");
function HistoryScreen({ route, navigation }) {
  const[text, setText] = useState("");

  function refreshTemp() {
    db.transaction((tx)=>{
      tx.executeSql("SELECT * FROM text",
      null,
      (txObj, { rows: { _array } }) => setText(_array),
      (txObj, error) => console.log("Error", error)
      );
    });
  }

  useEffect(()=> {
    if (route.params?.text) {
      const newTemp = { 
        title: route.params.text,
        id: text.length.toString(),
      };
    setText([...text, newTemp]);
    db.transaction(
      (tx) => {
        tx.executeSql('INSERT INTO text (title) VALUES (0,?)', [route.params.text,]);
      },
      null,
      refreshTemp
    );
    }
  }, [route.params?.text]);

  useEffect(()=>{
    db.transaction(
      (tx)=>{
        tx.executeSql(`CREATE TABLE IF NOT EXISTS temperatures (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, done INT);`);
      },
      null,
      refreshTemp
    );
    }, []);

  function renderItem({ item }) {
      return (
        <View style={styles.listItem}>
          <Text>{item.title}</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList style={styles.list} data={text} renderItem={renderItem} />
      </View>
    );

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightblue",
        }}
      >
        <Text>Temperature Records!</Text>
        <Button
          title="Back"
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="History" component={HistoryScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  list: {
      width: "100%",
    },
    listItem: {
      height: 50,
      justifyContent: "center",
      borderBottomWidth: 1,
      borderBottomColor: "lightpink",
      paddingLeft: 20,
    },
    });