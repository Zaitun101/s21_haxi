import React, { Component } from 'react';
import MainStack from './Navigate';
import { Text } from 'react-native';
export default function App({ navigation }) {
  return (
    <MainStack />
  );
}



// export default class Ccomponent extends Component {
//   constructor(propr) {
//     super(propr);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       items: []
//     };
//   }
//   componentDidMount() {
//     fetch('https://haxi2.bacek97.repl.co/api/driver?phone=89003214753&password=123')
//       .then(res => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             items: result.OTBET
//           }
//           );
//         },
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )
//   }

//   render() {
//     const { error, isLoaded, items } = this.state;
//     if (error) {
//       return (
//         <Text> Error</Text>
//       )
//     } else if (!isLoaded) {
//       return (
//         <Text> Loading </Text>
//       )
//     } else {
//       return (
//         <Text> {items}</Text>
//       )
//     }
//   }
// }

