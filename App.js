import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import StartPage from "./component/startPage/start-page";
import {useState} from "react";
import WordReadPage from "./component/wordReadPage/word-read-page";

export default function App() {
  const {container, text, textInput} = styles
  const [textForRead, onChangeText] = useState('Вы ничего не ввели');
  const [start, changeStateStart] = useState(false);

  function onStart() {
    changeStateStart(!start)
  }

  return (
    <View style={container}>
      <StartPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: `black`,
    height: `100%`
  }
});
