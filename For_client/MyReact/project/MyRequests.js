import React, { Component, useState } from 'react';
import { StyleSheet, TextInput, View, Button, Modal, Text, Alert } from 'react-native';



export default function MyRequests() {

    const [modalWindow, setModalWindow] = useState(-1);
    const From_where = ['Горизонт 5'];
    const information = ['C 14:00, забрать два мешка картошки за шоколадку'];
    const ListItems = From_where.map((From_wheres, index) =>
        <Text onPress={() => setModalWindow(index)}
            style={styles.text}>
            {From_wheres}
        </Text>
    );


    return (
        <View>
            <View>
                <Text style={styles.hh}>Мои заявки:</Text>
                <View>
                    {ListItems}{() => { }}
                </View>
            </View>
            <View>
                <Modal visible={modalWindow > -1}>
                    <View >
                        <Text style={styles.text}> {information[modalWindow]}, ПОДТВЕРЖДЕН✅, Водитель: Белов Александр, номер телефона: 89001234753</Text>
                    </View>
                    <View style={{ top: 100 }}>
                        <Button title='Скрыть'
                            onPress={() => setModalWindow(-1)} />
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
