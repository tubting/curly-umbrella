import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';

const InnerStack = createStackNavigator();

export default function AddScreen({ navigation }) {
  const [text, setText] = useState('');
  const [content, setContent] = useState('');

  // This is to set up the top right button
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Forum', { text })}>
          <Text style={{ paddingRight: 20 }}>Post</Text>
        </TouchableOpacity>
      ),
    });
  });

  return (
    <View style={[styles.container, { backgroundColor: 'white' }]}>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={(input) => setText(input)}
        placeholder="Title"
      />
      <TextInput
        style={styles.contentInput}
        value={content}
        onChangeText={(input) => setContent(input)}
        placeholder="Content of post"
        multiline={true}
      />
      <TouchableOpacity style={{paddingLeft:15, paddingTop:10}}>
        <Entypo name="link" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc',
  },
  textInput: {
    borderColor: 'grey',
    borderBottomWidth: 1,
    width: '100%',
    alignContent: 'center',
    padding: 8,
  },
  contentInput: {
    borderColor: 'grey',
    borderTop: 1,
    borderBottomWidth: 1,
    width: '100%',
    paddingHorizontal: 8,
    paddingTop: 5,
    paddingBottom: 200,
    textAlignVertical: 'top',
  },
});
