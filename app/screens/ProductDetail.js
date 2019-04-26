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
import {getValue} from '../redux/service/storage/AsyncStorage'
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

    // componentDidMount() {
        
    //     this.props.navigation.addListener('didFocus', ()=>{
    //         this.props.getDetail(this.state.id)
    //     })
    // }

    componentDidMount() {
        const id = this.props.navigation.getParam('id', '');
            this.props.getDetail(id)
    }

    async checkToken(idProduct, price){
        const token = await getValue('token')
        if(token){
        //   console.log('>>>>>>>>', idProduct);
            const { id } = this.props.user
            this.props.addToCart(idProduct, price, id, token);
            this.props.navigation.navigate('CartScreen');
        } else {
            const { type, token } = this.props.token
            const authToken = type + ' ' + token;
            const { id } =this.props.user
            this.props.addToCart(idProduct, price, id, authToken);
            this.props.navigation.navigate('CartScreen');
        }
    }

    addCart(idProduct, price, name) {
        if(this.props.isLoggedIn === false){
            this.props.navigation.navigate('SignIn')
        } else {
            this.checkToken(idProduct, price)
        }
    }

    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem header>
                            <Image source={{ uri: `${PIC_URL}${this.props.readmore.image}` }} style={styles.image} />
                        </CardItem>
                        <CardItem header>
                            <Text style={styles.textProduct}>  {this.props.readmore.name} -{" "}</Text>
                            <Text style={styles.textImage}>   {stringToRupiah(String(this.props.readmore.price))} </Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Text>{this.props.readmore.details}</Text>
                        </CardItem>
                        <CardItem>
                            <Text>{this.props.readmore.seller}</Text>
                        </CardItem>
                    </Card>
                </Content>
                <Footer style={styles.footerStyle}>
                    <Button transparent style={styles.footerButtonMain}
                      onPress={()=>{
                          this.addCart(this.props.readmore.id, this.props.readmore.price)
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
    console.log('->', state.products.readmore)
    return {
        readmore: state.products.readmore,
        access_token: state.account.access_token,
        isLoggedIn: state.account.isLoggedIn,
        user: state.account.user
    }   
}

const mapDispatchToProps = dispatch => ({
    getDetail: (id) => dispatch(getDetail(id)),
    addToCart: (idProduct, price, id, authToken) => dispatch(addToCart(idProduct, price, id, authToken))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)