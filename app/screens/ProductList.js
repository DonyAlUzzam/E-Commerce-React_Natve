import React, { Component } from "react";
import {
    Container,
    Content,
    Card,
    CardItem,
    Body,
    Left,
    Thumbnail
} from "native-base";

import HeaderCustom from '../components/Header'
import { FlatList, Text, TouchableOpacity } from "react-native";
import { Header } from 'react-navigation';
import Product from "../components/Product";

class ProductList extends Component {

    // _onPress=() => {
    //     /* 1. Navigate to the Details route with params */
    //     this.props.navigation.navigate('ProductDetail', {
        
    //    });
    //   }
    constructor(props) {
        super(props);

        this.state = {
            itemDetail: [
                {
                    key: "a",
                    img: require("../assets/1.jpg"),
                    val: "Sepatu",
                    seller: "Khairi",
                    details:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    price: "Rp. 150,000"
                },
                {
                    key: "b",
                    img: require("../assets/2.jpg"),
                    val: "Sepatu",
                    seller: "Dony",
                    details:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    price: "Rp. 200,000"
                },
                {
                    key: "c",
                    img: require("../assets/3.jpg"),
                    val: "spatu",
                    seller: "Kadek",
                    details:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    price: "Rp. 5,000,000"
                },
                {
                    key: "d",
                    img: require("../assets/4.jpg"),
                    val: "spt",
                    seller: "Fadli",
                    details:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    price: "Rp. 12,000,000"
                },
                {
                    key: "e",
                    img: require("../assets/3.jpg"),
                    val: "spatu",
                    seller: "Kadek",
                    details:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    price: "Rp. 5,000,000"
                },
                {
                    key: "f",
                    img: require("../assets/4.jpg"),
                    val: "spt",
                    seller: "Fadli",
                    details:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    price: "Rp. 12,000,000"
                }
            ]
        };
    }
    render() {
        return (
            <Container>
                <HeaderCustom />
                <Content>
                    <FlatList
                        data={this.state.itemDetail}
                        renderItem={({ item }) => (
                            <Product
                                // _onPress={this._onPress}
                                itemImage={item.img}
                                itemName={item.val}
                                itemSeller={item.seller}
                                itemPrice={item.price}
                                itemDetails={item.details}
                                getDetails={() => {
                                    this.props.navigation.navigate("ProductDetail", {
                                        itemImage: item.img,
                                        itemName: item.val,
                                        itemPrice: item.price,
                                        itemSeller: item.seller,
                                        itemDetails: item.details
                                    });
                                }}
                            />
                        )}
                        numColumns={2}
                    />
                </Content>
            </Container>
        );
    }
}

export default ProductList;
