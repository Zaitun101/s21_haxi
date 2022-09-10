import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Regist() {
    return (
        <View>
            <View style={styles.fields}>
                <TextInput onChangeText={setNumber}
                    placeholder='Номер телефона'
                    fontWeight='bold'
                    textAlign='center'
                    color='black'
                />
                <View tyle={styles.fields}>
                    <TextInput onChangeText={setFIO}
                        placeholder='ФИО'
                        fontWeight='bold'
                        textAlign='center'
                        color='black'
                    />
                </View>
            </View>
        </View>
    );
}