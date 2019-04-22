
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

import { getDetail, addToCart } from '../redux/actions';
import {connect} from 'react-redux'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { BASE_URL, PIC_URL } from 'react-native-dotenv';

class ProductDetail extends Component {

    constructor(props) {
        super(props);
        const { navigation } = props;
        const id = navigation.getParam("id", "");
     
        this.state = {
            id: id,

        }

    }

    componentDidMount() {
        // alert(RestAPI.base_url + 'products/' + this.state.id)
        this.props.navigation.addListener('didFocus', ()=>{
            this.props.getDetail(this.state.id)
        })
    }


    render() {
       
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem header>
                            <Image source={{ uri: `${PIC_URL}${this.props.products.image}` }} style={styles.image} />
                        </CardItem>
                        <CardItem header>
                            <Text style={styles.textProduct}>  {this.props.products.name} -{" "}</Text>
                            <Text style={styles.textImage}>   {stringToRupiah(String(this.props.products.price))} </Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Text>{this.props.products.details}</Text>
                        </CardItem>
                        <CardItem>
                            <Text>{this.props.products.seller}</Text>
                        </CardItem>
                    </Card>
                </Content>
                <Footer style={styles.footerStyle}>
                    <Button transparent style={styles.footerButtonMain}
                        onPress={() => {
                           this.props.addToCart(this.state.id, this.props.products.price)
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

const mapStateToProps = state => {
    console.log('---->', state.products)
    return { products: state.products.products }
}

const mapDispatchToProps = dispatch => ({
    getDetail: (id) => dispatch(getDetail(id)),
    addToCart: (id, price) => dispatch(addToCart(id, price))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)

