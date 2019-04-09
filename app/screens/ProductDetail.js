
import React, { Component } from "react";
import {
    Container,
    Content,
    Card,
    CardItem,
    Button,
    Footer,
    Body,
    Input,
    Left,
    FooterTab,
    Right
} from "native-base";
import { stringToRupiah } from "../helper/currency"
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import RestAPI from '../constants/apiConstant'
class ProductDetail extends Component {


    render() {
        const { navigation } = this.props;
        const key = navigation.getParam("itemKey", "");
        const img = navigation.getParam("itemImage", "");
        const name = navigation.getParam("itemName", "");
        const price = navigation.getParam("itemPrice", "");
        const seller = navigation.getParam("itemSeller", "");
        const details = navigation.getParam("itemDetails", "");
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem header>
                            <Image source={{uri: `${RestAPI.picture_url}${img}`}} style={styles.image} />
                        </CardItem>
                        <CardItem header>
                            <Text style={styles.textProduct}>  {name} -{" "}</Text>
                            <Text style={styles.textImage}>   {stringToRupiah(String(price))} </Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Text>{details}</Text>
                        </CardItem>
                        <CardItem>
                            <Text>{seller}</Text>
                        </CardItem>
                    </Card>
                </Content>
                <Footer style={styles.footerStyle}>
                    <Button style={styles.footerButtonMain}
                        onPress={() => {
                            this.props.navigation.navigate("CartScreen", {
                                itemKey: key,
                                itemImage: img,
                                itemName: name,
                                itemPrice: price,
                                itemSeller: seller,
                                itemDetails: details,
                                quantity: 1
                            });
                        }}>
                        <Text>Add to Cart</Text>
                    </Button>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    footerButtonMain: {
        backgroundColor: "#44dd44",
        marginLeft: 4,
        marginRight: 4,
        flex: 0.5,
        justifyContent: "center"
    },
    image: {
        height: 350,
        width: null,
        flex: 1
    },
    buttonText: {
        color: "#ffffff"
    },
    textProduct: {
        fontWeight: "bold",
        fontSize: 22
    },
    footerStyle: {
        backgroundColor: "#ffffff",
        paddingBottom: 5,
        paddingTop: 5
    },
    textImage: {
        fontWeight: "bold",
        color: "#44dd44",
        fontSize: 18
    },
    footerButtonMain: {
        justifyContent: 'space-between',
        alignSelf: "flex-end",
        padding: 7,
        borderRadius: 10,
        backgroundColor: '#3dd43f'
    },
    buttonText: {
        fontSize: 16,
        color: "#ffffff"
    }

});

export default ProductDetail;
