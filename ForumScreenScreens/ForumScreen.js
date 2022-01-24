import React, { useEffect, useState, Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Container,
  Header,
  Content,
  CardItem,
  Thumbnail,
  Button,
  Left,
  Body,
} from 'react-native';
import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import CardShowcaseExample from '../components/card';
import { Card, ListItem, Icon } from 'react-native-elements';
import AddScreen from "./AddScreen";

export default function ForumScreen({ navigation, route }) {
  const [posts, setPosts] = useState([]);
  const [upvotes, setUpvotes] = useState(0);

  // This is to set up the top right button
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Add")}>
        <Entypo name="plus" size={30} color="black"             style={{
              color: '#999999',
              marginRight: 20,
            }}/>
        </TouchableOpacity>
      ),
    });
  });

  // Monitor route.params for changes and add items to the database
  useEffect(() => {
    if (route.params?.text) {
      const newPost = {
        title: route.params.text,
        id: posts.length.toString(),
      };
      setPosts([...posts, newPost]);
    }
  }, [route.params?.text]);

  function addNote() {
    navigation.navigate('Add Screen');
  }

  // This deletes an individual note
  function deleteNote(id) {
    console.log('Deleting ' + id);
    // To delete that item, we filter out the item we don't want
    setPosts(posts.filter((item) => item.id !== id));
  }

  // The function to render each row in our FlatList
  function renderItem({ item }) {
    return (
      <View
        style={{
          padding: 10,
          paddingTop: 20,
          paddingBottom: 20,
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text>{item.title}</Text>
        <TouchableOpacity onPress={() => deleteNote(item.id)}>
          <Ionicons name="trash" size={16} color="#944" />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View>
      <Card>
        <Card.Title>Post title</Card.Title>
        <Card.Divider />
        <Card.Image
          style={{ marginVertical: 10 }}
          source={{
            uri:
              'https://www.chemedx.org/sites/www.chemedx.org/files/question_2.png',
          }}></Card.Image>
        <Text style={{ marginVertical: 10 }}>Content of the post</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => setUpvotes(upvotes + 1)}>
            <MaterialCommunityIcons
              name="arrow-up-bold-outline"
              size={24}
              color="black"
            />
          </TouchableOpacity>
          <Text style={{ marginTop: 1, marginLeft: 2 }}> {upvotes} </Text>
          <Text style={{ marginLeft: 30 }}>
            <Ionicons name="md-chatbox-outline" size={24} color="black" />
          </Text>
          <Text style={{ marginTop: 1, marginLeft: 4 }}> 90 </Text>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({});
