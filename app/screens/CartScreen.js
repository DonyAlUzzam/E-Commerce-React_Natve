
import React, { Component } from "react";
import {
    Container,
    Content,
    Card,
    CardItem,
    Body,
    Left,
    Thumbnail,
    Icon
} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { FlatList, Text, TouchableOpacity } from "react-native";
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
        
        if (this.state.itemDetail.length < 1) {
            return (
                <Container
                    style={{ justifyContent: "center", alignItems: "center" }}
                >
            
                    <MaterialIcons
                        name="add-shopping-cart"
                        style={{ fontSize: 200 }}
                    />
                    <Text>Ayoo tambah belanjaan</Text>

                </Container>
            );
        } else {
            return (
                <Container>
                 <HeaderCart />
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
                   </Content>
                </Container>
            );

            <Cart />;
        }
    }
}
export default withNavigation(CartScreen);
