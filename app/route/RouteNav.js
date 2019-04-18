import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesomes from "react-native-vector-icons/Entypo";

import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import CartScreen from '../screens/CartScreen'
import ProductContainer from '../screens/ProductContainer';
// export const SignedOutNavigator = createStackNavigator({
//     SignUp: {
//       screen: SignUp,
//       navigationOptions: {
//         title: "Sign Up"
//       }
//     },
//     SignIn: {
//       screen: SignIn,
//       navigationOptions: {
//         title: "Sign In"
//       }
//     }
//   });

export const RouteNav = createBottomTabNavigator({
  //   Home: { screen: HomeScreen },
  //   Settings: { screen: SettingsScreen },
  //   Profile: { screen: ProfileScreen },

  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={30} color={tintColor} />
      )
    }
  },

  ProductList: {
    screen: ProductContainer,
    navigationOptions: {
      tabBarLabel: "Product",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesomes name="list" size={30} color={tintColor} />
      )
    }
  },
  CartScreen: {
    screen: CartScreen,
    navigationOptions: {
      tabBarLabel: "Cart",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="shopping-cart" size={30} color={tintColor} />
      )
    }
  },
  Profile: {
    screen: ProfileScreen,
    HeaderMode: '',
    navigationOptions: {
      title: 'Account',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      tabBarLabel: "Account",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="user" size={30} color={tintColor} />
      )
    }
  },
});



//export const SignedOut = createAppContainer(SignedOutNavigator);
export default createAppContainer(RouteNav);
