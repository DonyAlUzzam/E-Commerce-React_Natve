import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import  FontAwesome  from "react-native-vector-icons/FontAwesome";
import  FontAwesomes  from "react-native-vector-icons/Entypo";

import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ProductList from '../screens/ProductList';

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
        <FontAwesome name="home" size={30} color={tintColor} />
      )
    }
  },
  
  Product: {
    screen: ProductList,
    navigationOptions: {
      tabBarLabel: "Product",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesomes name="list" size={30} color={tintColor} />
      )
    }
  },
  Profile: {
    screen: ProfileScreen,
    HeaderMode: '',
    navigationOptions: {
      title: 'Detail',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
      tabBarLabel: "Profile",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="user" size={30} color={tintColor} />
      )
    }
  }
});

//export const SignedOut = createAppContainer(SignedOutNavigator);
export default createAppContainer(RouteNav);
