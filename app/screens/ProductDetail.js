
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
import { BASE_URL, PIC_URL } from 'react-native-dotenv';
import axios from "axios"

class ProductDetail extends Component {

    constructor(props) {
        super(props);
        const { navigation } = props;
        const id = navigation.getParam("id", "");
        // const key = navigation.getParam("itemKey", "");
        // const img = navigation.getParam("itemImage", "");
        // const name = navigation.getParam("itemName", "");
        // const price = navigation.getParam("itemPrice", "");
        // const seller = navigation.getParam("itemSeller", "");
        // const details = navigation.getParam("itemDetails", "");
        // alert(img)
        this.state = {
            id: id,
            // key:key,
            image: '',
            name: '',
            price: '',
            seller: '',
            details: ''

        }

    }

    componentDidMount() {
        // alert(RestAPI.base_url + 'products/' + this.state.id)
        axios.get(BASE_URL + 'products/' + this.state.id).then((respon) => {
            // alert(JSON.stringify(respon))
            this.setState({
                id: respon.data.id,
                image: respon.data.image,
                name: respon.data.name,
                price: respon.data.price,
                seller: respon.data.seller,
                details: respon.data.details
            })
           
        }).catch((err) => {
            alert(err.getMessages())
        })
    }


    render() {
       
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem header>
                            <Image source={{ uri: `${PIC_URL}${this.state.image}` }} style={styles.image} />
                        </CardItem>
                        <CardItem header>
                            <Text style={styles.textProduct}>  {this.state.name} -{" "}</Text>
                            <Text style={styles.textImage}>   {stringToRupiah(String(this.state.price))} </Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Text>{this.state.details}</Text>
                        </CardItem>
                        <CardItem>
                            <Text>{this.state.seller}</Text>
                        </CardItem>
                    </Card>
                </Content>
                <Footer style={styles.footerStyle}>
                    <Button transparent style={styles.footerButtonMain}
                        onPress={() => {
                            axios.post(BASE_URL + 'carts', {
                                product_id: this.state.id,
                                user_id: 1,
                                qty: 1,
                                price: this.state.price
                                
                            })
                            .then(function(respon){
                                alert(this.state.price)
                                console.log(respon)
                            })
                            .catch(function(err){
                                console.log(err)
                            })
                            this.props.navigation.navigate("CartScreen");
                        }}>
                         <Text style={styles.buttonText}>Add To Cart</Text>
                         </Button>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    footerButtonMain: {
        backgroundColor: "#3a455c",
        marginLeft: 4,
        marginRight: 4,
        flex: 0.5,
        alignItems: 'center',
        justifyContent: "center"
    },
    image: {
        height: 350,
        width: null,
        flex: 1
    },
    textProduct: {
        fontWeight: "bold",
        fontSize: 22
    },
    footerStyle: {
        backgroundColor: "#3a455c",
        paddingBottom: 5,
        flexDirection: 'row',
      
        paddingTop: 5,
       
    },
    textImage: {
        fontWeight: "bold",
        color: "#44dd44",
        fontSize: 18
    },
  
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
        alignSelf: 'center',
        color: "#ffffff"
    }

});

export default ProductDetail;
