import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Alert } from 'react-native';

export default function Regist({ navigation }) {
    const mobilevalidate = (text) => {
        const reg = /^[+]{0,1}[8\|7]?\d{11}$/;
        if (reg.test(text) === false) {
            return false;
        } else {
            return true;
        }
    }
    const send_to_db = () => {
        console.log(tel_number);// передача параметра в терминал
        console.log(FIO);
        // if (FIO != '' && mobilevalidate(tel_number) === true)
        navigation.navigate("Main")
        // else
        //     Alert.alert("Ошибка!", "Пожалуйста, введит номер телефона и ФИО")
    }
    const [tel_number, setNumber] = useState('');
    const [FIO, setFIO] = useState('');

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
                <TextInput onChangeText={setFIO}
                    style={styles.fields}
                    placeholder='ФИО'
                    fontWeight='bold'
                    textAlign='center'
                    color='black'
                />
            </View>
            <View style={styles.butt_input}>
                <Button
                    color={'blue'}
                    title='Войти'
                    onPress={() => send_to_db()}
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