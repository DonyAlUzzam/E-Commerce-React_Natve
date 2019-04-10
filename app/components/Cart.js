import React, { Component } from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import {
    Card,
    Container,
    Content,
    CardItem,
    Thumbnail,
    Left,
    Right,
    TextInput,
    Button
} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/FontAwesome";

import { stringToRupiah } from "../helper/currency"

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        };
    }

   
    render() {
     
        return (
            <View style={styles.cardList}>
            <CardItem style={styles.cardImage} cardHeader>
            <Thumbnail source={{uri : this.props.itemImage}} />
            </CardItem>
            <CardItem style={styles.cardHeader}>
                <View>
                    <Text style={styles.textMed}>{this.props.itemName}</Text>
                    <Text>{this.props.itemPrice} </Text>
                </View>
            </CardItem>
        </View>
    );
}
}



const styles = StyleSheet.create({
    buttonWhite: {
        backgroundColor: "#44bb44"
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
    },
    cardList: {
		flex: 2,
		flexDirection: 'row',
		height: '100%',
	},
	cardImg: {
        flex: 0.7,
    },
    cardImgItem: {
        width: 60,
        height: 60,
        resizeMode: 'contain'
    },
    cardHeader: {
    	flex: 2,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    textMed: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    cardFooter: {
        flex: 2.4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardListEnd: {
        flex: 1,
        flexDirection: 'row',
    }

});
export default Cart;
