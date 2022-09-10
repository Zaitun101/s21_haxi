import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';
import { color } from 'react-native-reanimated';

export default function Drivers({ navigation }) {

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
        navigation.navigate("new_address")
    }
    const print1 = () => {
        navigation.navigate("all_drivers")
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
                    Тут все ваши заявки:</Text>
                <View>
                    <Text style={{
                        textAlign: 'center',
                        marginLeft: 20,
                        marginTop: 30
                    }}>
                        Заявок пока нет</Text>
                </View>
                <View style={styles.butt_input}>
                    <Button
                        title='Создать новую поездку'
                        color={'green'}
                        onPress={() => print()} // костыль
                    />
                    <View style={{ top: 20 }}>
                        <Button
                            title='Посмотреть свободных водителей'
                            color={'green'}
                            onPress={() => print1()} // костыль
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    butt_input: {
        marginHorizontal: 50,
        margin: 500,
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
        fontSize: 30,
        marginLeft: 20,
        paddingTop: 10,
        textAlign: 'center',
    },
    box: {
        flex: 1,
        backgroundColor: '#d0e3f7',
    },
})