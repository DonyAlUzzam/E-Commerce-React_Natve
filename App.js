
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import RouteNav from './app/route/RouteNav'
import ProductList from './app/screens/ProductList'
import CartScreen from './app/screens/CartScreen'
import ProductDetail from './app/screens/ProductDetail'
import { createStackNavigator, createAppContainer } from 'react-navigation'


const AppDrawerNavigator =  createStackNavigator({
  
  HomeScreen: { screen: RouteNav,
    headerMode: 'none',
    navigationOptions: {
      header: null,
  } },
  ProductList: { screen: ProductList,
    headerMode: 'none',
    navigationOptions: {
      header: null,
  } },
 
   ProductDetail : {screen: ProductDetail,
    headerMode: '',
    navigationOptions: {
    title: 'Detail',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }
},
CartScreen: {
  screen: CartScreen,
  navigationOptions: {
    tabBarLabel: "Cart",
    tabBarIcon: ({ tintColor }) => (
      <FontAwesomes name="md-cart" size={30} color={tintColor} />
    )
  }
}
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