import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Alert } from 'react-native';
import fetch from './fetchWithTimeout.js'

export default function Regist({ navigation }) {
    const [tel_number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const mobilevalidate = (text) => {
        const reg = /^[+]{0,1}[8\|7]?\d{11}$/;
        if (reg.test(text) === false) {
            return false;
        } else {
            return true;
        }
    }
    const check_pas = () => {
        // fetch('https://haxi2.bacek97.repl.co/api/driver?phone=' + tel_number + '&password=' + password, 5000)
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             if (result.OTBET === 'XOPOLLIO')
        //                 navigation.navigate("Main");
        //             else
        //                 Alert.alert("Пароль неверный!")
        //         },
        //         (error) => {
        //             Alert.alert("WTF!")
        //         }
        //     )
        if (tel_number != '' && password != '' && mobilevalidate(tel_number) === true) {
            fetch('https://haxi2.bacek97.repl.co/api/driver?phone=' + tel_number + '&password=' + password, 5000) // throw after max 5 seconds timeout error
                .then(res => res.json())
                .then(
                    (result) => {
                        if (result.OTBET === 'XOPOLLIO')
                            navigation.navigate("Main");
                        else
                            Alert.alert("Пароль неверный!")
                    },
                    (error) => {
                        Alert.alert("Timeout Error")
                    }
                )
                .catch((e) => {
                    // handle errors and timeout error
                    Alert.alert(" Error!")
                })
        }
        else {
            Alert.alert("Введи корректные данные")
        }
    }
    const send_to_db = () => {
        navigation.navigate("Main");
    }

    return (
        <View>
            <View style={{ marginVertical: 250 }}>
                <TextInput onChangeText={setNumber}
                    style={styles.fields}
                    placeholder='Номер телефона'
                    fontWeight='bold'
                    textAlign='center'
                    color='black'
                    keyboardType="numeric"
                />
                <TextInput onChangeText={setPassword}
                    style={styles.fields}
                    placeholder='Пароль'
                    fontWeight='bold'
                    textAlign='center'
                    color='black'
                />
            </View>
            <View style={styles.butt_input}>
                <Button
                    color={'blue'}
                    title='Войти'
                    onPress={() => check_pas()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    fields: {
        borderBottomColor: 'blue',
        padding: 10,  // сдвиг между контрукциями
        borderWidth: 1,  // полоска
        marginVertical: 3,  // сдвиг по высоте
        width: '80%',  // ширина элемента
        marginHorizontal: '10%', // сдвиг по горизонту
        backgroundColor: '#d0e3f7',
    },
    butt_input: {
        color: 'blue',
        textAlign: 'center',
        padding: 15,
    }
})
