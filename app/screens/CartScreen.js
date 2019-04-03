import React, { Component } from "react";
import {
    Container,
    Content,
    Card,
    CardItem,
    Body,
    Left,
    Thumbnail,
    Icon
} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { FlatList, Text, TouchableOpacity } from "react-native";

import CartScreen from "../components/Cart";

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemDetail: []
        };
    }
    render() {
        return (
            <Container
                style={{ justifyContent: "center", alignItems: "center" }}
            >
                <MaterialIcons
                    name="add-shopping-cart"
                    style={{ fontSize: 200 }}
                />
                <Text>keranjang</Text>
            </Container>
        );
    }
}

export default Cart;
