
import React, { Component } from "react";
import {
    Container,
    Content,
    Button,
    Card,
    CardItem,
    Body,
    Left,
    Thumbnail,
    Icon
} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";

import Cart from "../components/Cart";
import HeaderCart from '../components/HeaderCart'

class CartScreen extends Component {

  

    constructor(props) {
        super(props);

        this.state = {
            itemDetail: []
        };
    }
   
    componentDidMount(){
        // this.addData();

        this.props.navigation.addListener("willFocus", route => {
            this.addData();
        })
        // const { navigation } = this.props;
        // navigation.addListener("willFocus", () => {
        //     this.addData();
        // });
    }
    addData() {
        var d = new Date();
        const { navigation } = this.props;
        const img = navigation.getParam("itemImage", "");
        const name = navigation.getParam("itemName", "");
        const price = navigation.getParam("itemPrice", "");
        const seller = navigation.getParam("itemSeller", "");
        const details = navigation.getParam("itemDetails", "");
        const key = navigation.getParam("itemKey", "");
        // alert(key);
        if (key !== "") {
            // alert(key);
            const findKey = this.state.itemDetail.findIndex((val,i)=>{
                return val.key === key;
            });
            
            if(findKey === -1){
                this.setState({
                    itemDetail: [
                        ...this.state.itemDetail,
                        {
                            key: key,
                            img: img,
                            name: name,
                            price: price,
                            seller: seller,
                            details: details
                        }
                    ]
                });
            }
            
        }
    }
  
    render() {
        const {navigate} = this.props.navigation;
        

        if (this.state.itemDetail.length < 1) {
            return (
                <Container
                    style={{ justifyContent: "center", alignItems: "center" }}
                >
            
                    <MaterialIcons
                        name="add-shopping-cart"
                        style={{ fontSize: 200 }}
                    /><Button style={{ backgroundColor: '#ff76ff',  flexDirection: 'row', justifyContent: "center", alignSelf: 'center', alignItems: "center"}}
                    onPress={()=> navigate('ProductList')}>
                        <Text style={{ padding:7, fontSize: 20, color: 'white'}}> Ayoo tambah belanjaan </Text>
                    </Button>
                </Container>
            );
        } else {
            return (
                <Container>
                 <HeaderCart 
                  _onPressCart={() => this.props.navigation.navigate('ProductList')}
                 />
                 <Content>
                        <FlatList
                        data={this.state.itemDetail}
                        renderItem={({ item }) => (
                            <Cart
                                itemKey={item.key}
                                itemImage={item.img}
                                itemName={item.name}
                                itemSeller={item.seller}
                                itemPrice={item.price}
                                itemDetails={item.details}
                            />
                        )}
                    />
                    <View style={{flex:1}}>
                    <Button
                        style={styles.footerButtonMain}
                      
                    >
                        <Text style={styles.buttonText}>CheckOut</Text>
                    </Button>
                    </View>
                     
                   </Content>
                </Container>
            );

            <Cart />;
        }
    }
}

const styles = StyleSheet.create({
    footerButtonMain: { 
        alignSelf: "flex-end",
        padding:7
    },
    buttonText: {
        fontSize: 16,
        color: "#ffffff"
    }
});

export default withNavigation(CartScreen);
