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

class ProductList extends Component {

    componentDidMount() {
       this.props.navigation.addListener('didFocus', ()=>{
           this.props.getAll()
       })
    }
    onPressCartScreen = () => {
        this.props.navigation.navigate('CartScreen');
        // alert('sadasdas');
    }

    render() {
        // alert(JSON.stringify(this.props.products))
      
        return (
         
            <Container>
                <HeaderCustom onPress={this.onPressCartScreen} />
                <Content>
                    <FlatList
                        data={this.props.products}
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
