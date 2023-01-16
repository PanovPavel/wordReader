import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import WordReadPage from "../wordReadPage/word-read-page";
import {useState} from "react";

export default function StartPage() {
    const testText = `В начале июля, в чрезвычайно жаркое время, под вечер, один молодой человек вышел из своей каморки, которую нанимал от жильцов в С—м переулке, на улицу и медленно, как бы в нерешимости, отправился к К—ну мосту1. Он благополучно избегнул встречи с своею хозяйкой на лестнице. Каморка его приходилась под самою кровлей высокого пятиэтажного дома и походила более на шкаф, чем на квартиру. Квартирная же хозяйка его, у которой он нанимал эту каморку с обедом и прислугой, помещалась одною лестницей ниже, в отдельной квартире, и каждый раз, при выходе на улицу, ему непременно надо было проходить мимо хозяйкиной кухни, почти всегда настежь отворенной на лестницу. И каждый раз молодой человек, проходя мимо, чувствовал какое-то болезненное и трусливое ощущение, которого стыдился и от которого морщился. Он был должен кругом хозяйке и боялся с нею встретиться. Не то чтоб он был так труслив и забит, совсем даже напротив; но с некоторого времени он был в раздражительном и напряженном состоянии, похожем на ипохондрию. Он до того углубился в себя и уединился от всех, что боялся даже всякой встречи, не только встречи с хозяйкой. Он был задавлен бедностью; но даже стесненное положение перестало в последнее время тяготить его. Насущными делами своими он совсем перестал и не хотел заниматься. Никакой хозяйки, в сущности, он не боялся, что бы та ни замышляла против него. Но останавливаться на лестнице, слушать всякий вздор про всю эту обыденную дребедень, до которой ему нет никакого дела, все эти приставания о платеже, угрозы, жалобы, и при этом самому изворачиваться, извиняться, лгать, — нет уж, лучше проскользнуть как-нибудь кошкой по лестнице и улизнуть, чтобы никто не видал. Впрочем, на этот раз страх встречи с своею кредиторшей даже его самого поразил по выходе на улицу.

«На какое дело хочу покуситься и в то же время каких пустяков боюсь! — подумал он с странною улыбкой. — Гм… да… всё в руках человека, и всё-то он мимо носу проносит, единственно от одной трусости… это уж аксиома… Любопытно, чего люди больше всего боятся? Нового шага, нового собственного слова они всего больше боятся… А впрочем, я слишком много болтаю. Оттого и ничего не делаю, что болтаю. Пожалуй, впрочем, и так: оттого болтаю, что ничего не делаю. Это я в этот последний месяц выучился болтать, лежа по целым суткам в углу и думая… о царе Горохе. Ну зачем я теперь иду? Разве я способен на это? Разве это серьезно? Совсем не серьезно. Так, ради фантазии сам себя тешу; игрушки! Да, пожалуй что и игрушки!»`;
    const {text, textInput, textInputs, startPage} = styles
    const [textForRead, onChangeText] = useState(testText);
    const [start, changeStateStart] = useState(false);
    const [speedViewWord, changeSpeedViewWord] = useState(500);

    function onStart() {
        changeStateStart(!start)
    }

    if(start === false){
        return(
            <View style={startPage}>
                <Text style={text}>Введите скорость чтения!</Text>
                <View >
                    <TextInput onChangeText={text => changeSpeedViewWord(+text)} style={textInput} keyboardType="numeric"/>
                </View>
                <StatusBar style="auto"/>
                <View style={{display: `flex`, alignItems: 'center'}}>
                    <Text style={text}>Вставте текст построниченого отображения</Text>
                    <TextInput value={textForRead} onChangeText={onChangeText} multiline={true} style={textInputs}/>
                    <View style={{width: `80%`}}>
                        <Button onPress={()=>onStart()} style={{width: `80%`}} title={'start'}/>
                    </View>
                    <StatusBar style="auto" />
                </View>
            </View>
        )
    }
    if(start === true) {
        return (
            <View style={{width: `80%`}}>
                <WordReadPage speedViewWord={speedViewWord} start={()=>onStart()} dataText={textForRead}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    startPage: {
        paddingTop: 100,
        padding: 10,
        // backgroundColor: `white`,
        height: `100%`,
        backgroundColor: `black`,
        color: `white`
    },
    text: {
        fontSize: 20,
        textAlign: "center",
        color: `white`
    },
    textInput: {
        backgroundColor: `white`,
        borderStyle: "solid",
        borderColor: 'red',
        borderRadius: 5,
        borderWidth: 1,
        width: `100%`,
        marginTop: 5,
        marginBottom: 3,
        height: 40,
        fontSize: 20
    },
    textInputs: {
        backgroundColor: `white`,
        borderColor: 'red',
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 10,
        width: `100%`,
        height: `70%`,
        marginTop: 2,
        marginBottom: 3,
        textAlignVertical: "top",
    }
});