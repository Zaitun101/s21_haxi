import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';

export default function New() {

    const [input, setValue] = useState('');  /// для переадчи ввода
    const onChange = (input) => {
        setValue(input);
    };
    const [input1, setValue1] = useState('');  /// для переадчи ввода
    const onChange1 = (input1) => {
        setValue1(input1);
    };
    const [input2, setValue2] = useState('');  /// для переадчи ввода
    const onChange2 = (input2) => {
        setValue2(input2);
    };
    const print = () => {
        console.log(input);// передача параметра в терминал
        console.log(input1);
        console.log(input2);
        addHandler(input, input1, input2);
    }
    const addHandler = (text1, text, text2) => {
        return (
            { text: text, index: 5 }
        )
    }

    return (
        <View style={styles.box}>
            <View style={styles.bloks}>
                <Text style={styles.text}>
                    Адрес:</Text>
                <TextInput style={styles.input}
                    onChangeText={onChange}
                    placeholder='Улица, дом, квартира'
                    fontWeight='bold'
                    textAlign='center'
                />
                <View>
                    <Text style={styles.text}>
                        Куда доставить</Text>
                    <TextInput style={styles.input}
                        onChangeText={onChange2}
                        placeholder='Улица, дом, квартира'
                        fontWeight='bold'
                        textAlign='center'
                    />
                    <Text style={styles.text}>
                        Дата и время</Text>
                    <TextInput style={styles.input}
                        onChangeText={onChange1}
                        placeholder='День/месяц, час:00'
                        fontWeight='bold'
                        textAlign='center'
                    />
                </View>
                <View style={styles.butt_input}>
                    <Button
                        title='Создать поездку'
                        color={'green'}
                        onPress={() => print()} // костыль
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    butt_input: {
        marginHorizontal: 50,
        marginTop: 150,
    },
    input: {
        borderBottomColor: 'blue',
        padding: 10,  // сдвиг между контрукциями
        borderBottomWidth: 3,  // полоска
        width: '60%',  // ширина элемента
        // backgroundColor: '#d0e3f7'
        padding: 10,
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20,
        paddingTop: 10
    },
    box: {
        flex: 1,
        backgroundColor: '#d0e3f7',
    },
})