import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';

export default function New({ navigation }) {

    const [date, setDate] = useState('');
    const onChangeDate = (date) => {
        setDate(date);
    };

    const [comment, setComment] = useState('');
    const onChangeComm = (comment) => {
        setComment(comment);
    };
    const [address1, setadr1] = useState('');
    const onChangeAddress1 = (address1) => {
        setadr1(address1);
    };
    const [address2, setadr2] = useState('');
    const onChangeAddress2 = (address2) => {
        setadr2(address2);
    };

    const send_to_db = () => {
        fetch('https://haxi2.bacek97.repl.co/api/order?date=' + date + '&addr1=' + address1 + '&addr2=' + address2 + '&inform=' + comment + '&phone_client=', 5000)
            .then(res => res.json())
            .then(
                (result) => {
                    navigation.navigate("Main");
                },
                (error) => {
                    Alert.alert("Timeout Error")
                }
            )
            .catch((e) => {
                Alert.alert("Error!")
            })
    }

    return (
        <View style={styles.box}>
            <View style={styles.bloks}>
                <Text style={styles.text}>
                    Адрес отправления:</Text>
                <TextInput style={styles.input}
                    onChangeText={onChangeAddress1}
                    placeholder='Ул. Ленина, 18, кв.23'
                    fontWeight='bold'
                    textAlign='center'
                />
            </View>
            <View>
                <Text style={styles.text}>
                    Адрес назначения:</Text>
                <TextInput style={styles.input}
                    onChangeText={onChangeAddress2}
                    placeholder='Проспект Победы, 13'
                    fontWeight='bold'
                    textAlign='center'
                />
                <Text style={styles.text}>
                    Дата и время:</Text>
                <TextInput style={styles.input}
                    onChangeText={onChangeDate}
                    placeholder='10.09.2022, 18:00'
                    fontWeight='bold'
                    textAlign='center'
                />
                <Text style={styles.text}>
                    Комментарий</Text>
                <TextInput style={styles.input}
                    onChangeText={onChangeComm}
                    placeholder='Доехать до больницы с ребенком в инвалидном кресле'
                    fontWeight='bold'
                    textAlign='center'
                />
            </View>
            <View style={styles.butt_input}>
                <Button
                    title='Создать поездку'
                    color={'green'}
                    onPress={() => send_to_db()}
                />
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
        width: '80%',  // ширина элемента
        marginLeft: '10%',
        // backgroundColor: '#d0e3f7'
        textAlign: 'center',
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 10,
    },
    box: {
        flex: 1,
        backgroundColor: '#d0e3f7',
    },
})