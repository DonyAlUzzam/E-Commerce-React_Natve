import React, { Component } from "react";
import {
    Container,
    Content,
} from "native-base";
import { Header } from 'react-navigation';
import { FlatList, Text, TouchableOpacity } from "react-native";
import { BASE_URL, PIC_URL } from 'react-native-dotenv';

import HeaderCustom from '../components/Header'
import Product from "../components/Product"
import { stringToRupiah } from "../helper/currency"
import axios from 'axios'

class ProductList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Product: []

        };
    }

    componentDidMount() {
        axios.get(`${BASE_URL}products`)
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
    onPressCartScreen = () => {
        this.props.navigation.navigate('CartScreen');
        // alert('sadasdas');

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
                                itemImage={`${PIC_URL}${item.image}`}
                                itemName={item.name}
                                itemSeller={item.seller}
                                itemPrice={stringToRupiah(String(item.price))}
                                itemDetails={item.details}
                                
                                getDetails={() => {
                                    this.props.navigation.navigate("ProductDetail", {
                                        id: item.id
                                        // itemKey: item.id,
                                        // itemImage: item.img,
                                        // itemName: item.name,
                                        // itemPrice: item.price,
                                        // itemSeller: item.seller,
                                        // itemDetails: item.details
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
