import { StyleSheet } from "react-native";

export const global_Style = StyleSheet.create({
    butt_input: {
        color: 'blue',
        textAlign: 'center',
        // padding: 18, ///
        marginHorizontal: 100,
        // marginTop: 100
    },
    text: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 32,
        textAlign: 'center',
        marginTop: 80
    },
    box: {
        flex: 1,
        backgroundColor: '#d0e3f7'
    },
    input: {
        borderBottomColor: 'blue',
        padding: 10,  // сдвиг между контрукциями
        borderBottomWidth: 3,  // полоска
        width: '60%',  // ширина элемента
        // backgroundColor: '#d0e3f7'
    }
})