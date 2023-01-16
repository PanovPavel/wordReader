import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useEffect, useState} from "react";
import App from "../../App";
import StartPage from "../startPage/start-page";

export default function WordReadPage(props) {
    const [word, setWord] = useState('');
    const [numberWord, setNumberWord] = useState(0)
    useEffect(() => {
        let data = props.dataText.split(` `);
        if(data.length < 2) data = 'вы ничего не ввели'.split(" ")
        const interval = setInterval(()=>{
            if(data[numberWord] === undefined){
                clearInterval(interval);
                return;
            }
            setWord(data[numberWord])
            setNumberWord(numberWord + 1);
        }, 1000/(props.speedViewWord/60))
        return ()=>{
            clearInterval(interval);
        }
    });
    function onChangeStop() {
        props.start();
    }
    return (
        <View style={styles.dopBlock}>
            <View style={styles.wordRead}>
                <Text style={styles.text}>{word}</Text>
                <Button onPress={()=>onChangeStop()} title={`stop`} color={`black`}></Button>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    text:{
        color: `white`,
        fontSize: 50,
        textAlign: "center",
        borderColor:`red`,
        marginBottom: 30,
    },
    wordRead: {
        width: `100%`,
        borderWidth: 1,
        borderColor:`red`,
    },
    dopBlock: {
        position: `relative`,
        height: `100%`,
        top: `50%`,
        left: `13%`
    },

})