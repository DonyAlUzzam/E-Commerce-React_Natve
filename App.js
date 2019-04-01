
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import Cart from './components/Cart'

const AppDrawerNavigator =  createStackNavigator({
  HomeScreen: { screen: HomeScreen },
})

const AppContainer = createAppContainer(AppDrawerNavigator);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render(){
    return(
     <AppContainer />
    );
  }

}



const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});