import React, { Component } from "react";
import {
    Container,
    Content,

} from "native-base";

import HeaderCustom from '../components/Header'
import { FlatList, Text, TouchableOpacity } from "react-native";
import { Header } from 'react-navigation';
import Product from "../components/Product";
import { stringToRupiah } from "../helper/currency"
import axios from 'axios'
import RestAPI from '../constants/apiConstant'

class ProductList extends Component {

    onPressCartScreen = () => {
        this.props.navigation.navigate('CartScreen');
        // alert('sadasdas');

    }


    constructor(props) {
        super(props);

        this.state = {
            Product: [
                // {
                //     key: 1,
                //     img: require("../assets/1.jpg"),
                //     name: "Sepatu Pan Tas",
                //     seller: "Khairi",
                //     details:
                //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                //     price: "150000"
                // },
                // {
                //     key: 2,
                //     img: require("../assets/2.jpg"),
                //     val: "Runshake Shoes",
                //     seller: "Dony",
                //     details:
                //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                //     price: "200000"
                // },
                // {
                //     key: 3,
                //     img: require("../assets/3.jpg"),
                //     val: "Nikela Shoes",
                //     seller: "Kadek",
                //     details:
                //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                //     price: "5000000"
                // },
                // {
                //     key: 4,
                //     img: require("../assets/4.jpg"),
                //     val: "Kurma Shoes",
                //     seller: "Fadli",
                //     details:
                //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                //     price: "12000000"
                // },
                // {
                //     key: 5,
                //     img: require("../assets/3.jpg"),
                //     val: "Septi Shoes",
                //     seller: "Kadek",
                //     details:
                //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                //     price: "5000000"
                // },
                // {
                //     key: 6,
                //     img: require("../assets/4.jpg"),
                //     val: "Sepatu Karma",
                //     seller: "Fadli",
                //     details:
                //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                //     price: "12000000"
                // }
            ]

        };
    }

    componentDidMount() {
        axios.get(`${RestAPI.base_url}products`)
            .then( (response) =>{
            
              this.setState({
                  Product: response.data
              })
            console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    render() {
        return (
            <Container>
                <HeaderCustom onPress={this.onPressCartScreen} />
                <Content>
                    <FlatList
                        data={this.state.Product}
                        renderItem={({ item }) => (
                            <Product
                                // _onPress={this._onPress}
                                itemImage={`${RestAPI.picture_url}${item.img}`}
                                itemName={item.name}
                                itemSeller={item.seller}
                                itemPrice={stringToRupiah(String(item.price))}
                                itemDetails={item.details}
                                getDetails={() => {
                                    this.props.navigation.navigate("ProductDetail", {
                                        itemKey: item.id,
                                        itemImage: item.img,
                                        itemName: item.name,
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
