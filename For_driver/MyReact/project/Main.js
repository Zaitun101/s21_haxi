import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Text, Alert } from 'react-native';

export default function Drivers({ route, navigation }) {

    const tel = route.params.text;
    const new_ride = () => {
        navigation.navigate("add_time", { text: tel })
    }
    const all_requests = () => {
        navigation.navigate("all_reqestes");
    }


    return (
        <View style={styles.box}>
            <View>
                <Text style={styles.text}>
                    Добро пожаловать в Haxi!</Text>
                <View style={styles.butt_input}>
                    <Button
                        title='Мои поездки'
                        color={'green'}
                        onPress={() => navigation.navigate("MyRides")}
                    />
                    <View style={{
                        top: 10,
                        color: "black"
                    }}>
                        <Button
                            title='Создать новую поездку'
                            color={'blue'}
                            onPress={() => new_ride()}
                        />
                    </View>
                    <View style={{ top: 20 }}>
                        <Button
                            title='Посмотреть все заказы'
                            color={'red'}
                            onPress={() => all_requests()}
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
        margin: 400,
    },
    input: {
        borderBottomColor: 'blue',
        padding: 10,
        borderBottomWidth: 3,
        width: '60%',
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

