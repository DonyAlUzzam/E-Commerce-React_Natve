
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

// import ShoppingCartIcon from './app/components/ShoppingCartIcon'
import {Provider} from 'react-redux';
import {store} from './app/redux/store'
import RouteNav from './app/route/RouteNav'
import CartScreen from './app/screens/CartScreen'
import ProductDetail from './app/screens/ProductDetail'
import Checkout from './app/screens/Checkout'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import ProductContainer from './app/screens/ProductContainer';


const AppDrawerNavigator =  createStackNavigator({
  
  HomeScreen: { screen: RouteNav,
    headerMode: 'none',
    navigationOptions: {
      header: null,
  } },
  ProductList: { screen: ProductContainer,
    headerMode: 'none',
    navigationOptions: {
      header: null,
  } },
 
   ProductDetail : {screen: ProductDetail,
    headerMode: '',
    navigationOptions: {
    title: 'Detail',
    // headerRight: (
    //   // <ShoppingCartIcon />
    // ),
    headerStyle: {
      backgroundColor: '#3a455c',
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
},
Checkout: { screen: Checkout,
  headerMode: 'none',
  navigationOptions: {
    header: null,
} },
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
      <Provider store={store}>
     <AppContainer /> 
      </Provider>
     
      
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