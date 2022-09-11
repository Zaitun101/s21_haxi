import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';
import { color } from 'react-native-reanimated';

export default function Client({ navigation }) {
    const new_request = () => {
        navigation.navigate("new_address")
    }
    const all_drivers = () => {
        navigation.navigate("all_drivers")
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
                        onPress={() => navigation.navigate("MyRequests")}
                    />
                    <View style={{
                        top: 10,
                        color: "black"
                    }}>
                        <Button
                            title='Создать новую поездку'
                            color={'blue'}
                            onPress={() => new_request()}
                        />
                    </View>
                    <View style={{ top: 20 }}>
                        <Button
                            title='Посмотреть свободных водителей'
                            color={'red'}
                            onPress={() => navigation.navigate("all_drivers")}
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
    menu: {
        backgroundColor: 'red',
        fontShize: 190,
    }
})
