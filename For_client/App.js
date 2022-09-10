import React from 'react'
import MainStack from './Navigate';

export default function App({ navigation }) {
  return (
    <MainStack />
  );
}






// import React from 'react'
// import MainStack from './Navigate';

// export default function App({ navigation }) {
//   const send_to_db = () => {
//     navigation.navigate("Main");
//   }
//   const [tel_number, setNumber] = useState('');
//   const [FIO, setFIO] = useState('');
//   const [car_number, setCarNumber] = useState('');

//   return (
//     <View>
//       <View style={{ marginVertical: 250 }}>
//         <TextInput onChangeText={setNumber}
//           style={styles.fields}
//           placeholder='Номер телефона'
//           fontWeight='bold'
//           textAlign='center'
//           color='black'
//         />
//         <TextInput onChangeText={setFIO}
//           style={styles.fields}
//           placeholder='ФИО'
//           fontWeight='bold'
//           textAlign='center'
//           color='black'
//         />
//         <TextInput onChangeText={setCarNumber}
//           style={styles.fields}
//           placeholder='Номер машины'
//           fontWeight='bold'
//           textAlign='center'
//           color='black'
//         />
//       </View>
//       <View style={styles.butt_input}>
//         <Button
//           color={'blue'}
//           title='Войти'
//           onPress={() => send_to_db()}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   fields: {
//     borderBottomColor: 'blue',
//     padding: 10,  // сдвиг между контрукциями
//     borderWidth: 1,  // полоска
//     marginVertical: 3,  // сдвиг по высоте
//     width: '80%',  // ширина элемента
//     marginHorizontal: '10%', // сдвиг по горизонту
//     backgroundColor: '#d0e3f7',
//   },
//   butt_input: {
//     color: 'blue',
//     textAlign: 'center',
//     padding: 15,
//   }
// })

