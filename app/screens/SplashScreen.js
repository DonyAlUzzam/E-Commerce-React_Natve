// import React from 'react'
// import { View, ActivityIndicator } from 'react-native'

// export default function SplashScreen(){
//   return (
//     <View style={{ flex: 1, justifyContent: 'center'}}>
//       <ActivityIndicator
//         animating={true}
//         style={[styles.centering, {height: 80}]}
//         size="large"
//       />
//     </View>
//   )
// }
// ​
// const styles = {
//   centering: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 8
//   }
// }

import React, { Component } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})