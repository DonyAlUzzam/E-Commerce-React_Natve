
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import DetailProd from './app/screens/DetailProd'
import RouteNav from './app/route/RouteNav'
import { createStackNavigator, createAppContainer } from 'react-navigation'


const AppDrawerNavigator =  createStackNavigator({
  HomeScreen: { screen: RouteNav,
    headerMode: 'none',
    navigationOptions: {
      header: null,
  } },
  DetailProd : {screen: DetailProd,
    headerMode: '',
    navigationOptions: {
    title: 'Detail',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
   } }
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