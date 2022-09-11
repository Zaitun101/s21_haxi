import React, { Component, useState } from 'react';
import { StyleSheet, TextInput, View, Button, Modal, Text, Alert } from 'react-native';



export default function App() {
    const [modalWindow, setModalWindow] = useState(-1);
    const date = ['12.09.2022, 13:00-15:00\n', '12.09.2022, 20:00-21:00\n', '13.09.2022, 10:00-13:00\n'];
    const information = ['До трех часов свободен, есть УАЗ с большим багажником\n', 'Вечером могу поездить по всему городу\n', '-'];
    const contacts = ['Белов Александр - 89012374632', 'Холмогоров Космос Юрьевич - 89638571263', 'Анна Васильыевна - 89008765432'];
    const ListItems = date.map((dates, index) =>
        <Text onPress={() => setModalWindow(index)}
            style={styles.text}>
            {dates}
        </Text>
    );


    return (
        <View>
            <View>
                <Text style={styles.hh}>Выберите подходящего водителя </Text>
                <View>
                    {ListItems}{() => { }}
                </View>
            </View>
            <View>
                <Modal visible={modalWindow > -1}>
                    <View >
                        <Text style={styles.text}> Комментарий: {information[modalWindow]} Контакты: {contacts[modalWindow]}</Text>
                    </View>
                    <View style={{ top: 100 }}>
                        <Button title='Принять'
                            color="green"
                            onPress={() => setModalWindow(-1)} />
                        <View style={{ top: 15 }}>
                            <Button title='Скрыть'
                                onPress={() => setModalWindow(-1)} />
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}





const styles = StyleSheet.create({
    container: {
        flex: 3,
        Color: 'black',
        flexDirection: 'column'
    },
    text: {
        color: 'black',
        fontSize: 17,
        padding: 8,
        margin: 2,
        borderWidth: 3,
        textAlign: 'left',
    },
    hh: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 20,
        paddingTop: 20,
        textAlign: 'center',
    },
});
