import React, { Component } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { Card, CardItem, Body, Header, Thumbnail } from "native-base";
import { stringToRupiah } from '../helper/currency'
class Product extends Component {
    render() {
       
        return (
            <View style={{ flex: 1, flexDirectopn: "column", backgroundColor: 'silver' }}>
                <Card>
                    <TouchableOpacity onPress={this.props.getDetails}>
                        <CardItem cardBody>
                            <Image
                                source={{
                                    uri: this.props.itemImage
                                }}
                                style={{ height: 150, width: null, flex: 1 }}
                            />
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={{fontSize: 20, fontWeight: "bold" }}>
                                    {this.props.itemName}
                                </Text>
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        color: "#44dd44",
                                        fontSize: 16
                                    }}
                                >
                                 {stringToRupiah(this.props.itemPrice)}
                                </Text>
                                <Text style={{ fontSize: 13 }}>
                                    {this.props.itemSeller}
                                </Text>
                            </Body>
                        </CardItem>
                    </TouchableOpacity>
                </Card>
            </View>
        );
    }
}

export default Product;
