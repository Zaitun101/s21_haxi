import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Alert, Text } from 'react-native';

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
        if (tel_number != '' && password != '' && mobilevalidate(tel_number) === true) {
            fetch('https://haxi2.bacek97.repl.co/api/driver?phone=' + tel_number + '&password=' + password, 5000)
                .then(res => res.json())
                .then(
                    (result) => {
                        if (result.OTBET === 'XOPOLLIO')
                            navigation.navigate("Main", { text: tel_number });
                        else
                            Alert.alert("Пароль неверный!")
                    },
                    (error) => {
                        Alert.alert("Timeout Error")
                    }
                )
                .catch((e) => {
                    Alert.alert(" Error!")
                })
        }
        else {
            Alert.alert("Введи корректные данные")
        }
    }

    const send_to_db = () => {
        navigation.navigate("Main", { text: tel_number });
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
            <View style={styles.butt_input}>
                <Button
                    color={'blue'}
                    title='Регистрация'
                    onPress={() => send_to_db()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    fields: {
        borderBottomColor: 'blue',
        padding: 10,
        borderWidth: 1,
        marginVertical: 3,
        width: '80%',
        marginHorizontal: '10%',
        backgroundColor: '#d0e3f7',
    },
    butt_input: {
        color: 'blue',
        textAlign: 'center',
        padding: 5,
    }
})