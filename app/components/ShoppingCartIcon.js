import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons";

const ShoppingCartIcon = (props) => (
  <View style={{padding: 5}}>
    <View style={{
        position: 'absolute', height: 30, width: 30,
        borderRadius: 15, backgroundColor: 'white', right: 15, bottom: 15,
        alignItems: 'center', justifyContent: 'center', zIndex: 2000
    }}>
    <Text style={{fontColor: 'orange'}}>0</Text>
    </View>
    <Icon name="md-cart" style={{ color: "white" }} />
  </View>
);

export default ShoppingCartIcon;
