import React, { Component } from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import {
    Card,
    CardItem,
    Body,
    Header,
    Thumbnail,
    Left,
    Right,
    Input,
    Button
} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { stringToRupiah } from "../helper/currency"

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myNumber: 1
        };      
    }

    onTextChanged = text => {
        if (this.state.myNumber < 1) {
            this.setState({
                myNumber: 1
            });
        } else {
            this.setState({
                myNumber: text.replace(/[^0-9]/g, "")
            });
        }
    };
    onTextEnd() {
        if (this.state.myNumber < 1) {
            this.setState({
                myNumber: 1
            });
        }
    }
    addNum = () => {
        if (this.state.myNumber < 1) {
            this.setState({
                myNumber: 1
            });
        } else {
            this.setState({
                myNumber: this.state.myNumber + 1
            });
        }
    };
    subNum = () => {
        if (this.state.myNumber < 2) {
            this.setState({
                myNumber: 1
            });
        } else {
            this.setState({
                myNumber: this.state.myNumber - 1
            });
        }
    };
    genenerateHarga = () => {
        const total = Number(this.state.myNumber) * Number(this.props.itemPrice);
        
        return stringToRupiah(total.toString())
    }
    render() {
        return (
            <View key={this.props.itemKey}>
                <Card>
                    <CardItem cardHeader>
                        <Left style={{ flex: 6 }}>
                            <Thumbnail source={this.props.itemImage} />
                            <Body>
                                <Text style={{ fontWeight: "bold" }}>
                                    {this.props.itemName}
                                </Text>
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        color: "#44bb44",
                                        fontSize: 18
                                    }}
                                >
                                    Rp. {this.props.itemPrice}
                                </Text>
                                <Text style={{ fontSize: 13 }}>
                                    {this.props.itemSeller}
                                </Text>
                            </Body>
                        </Left>
                        <Left style={{ flex: 4 }}>
                            <Button
                                style={styles.buttonWhite}
                                onPress={this.subNum.bind(this)}
                            >
                                <MaterialIcons
                                    name={"keyboard-arrow-left"}
                                    size={25}
                                    color={"#ffffff"}
                                />
                            </Button>
                            <Body>
                                <Text>Qty : </Text>
                            </Body>

                            {/* <Text>{this.props.itemQty}</Text> */}
                            <Input
                                keyboardType={"number-pad"}
                                onChangeText={text => this.onTextChanged(text)}
                                onEndEditing={() => this.onTextEnd()}
                                value={this.state.myNumber.toString()}
                            >
                                {/* {this.props.itemQty} */}
                            </Input>
                            <Button
                                style={styles.buttonWhite}
                                onPress={this.addNum.bind(this)}
                            >
                                <MaterialIcons
                                    name={"keyboard-arrow-right"}
                                    size={25}
                                    color={"#ffffff"}
                                />
                            </Button>
                        </Left>
                        
                    </CardItem>
                    <CardItem style={{ justifyContent: 'space-between' }} >
                        <Text>TotalHarga: {this.genenerateHarga()} </Text>
                    <Button style={styles.footerButtonMain}>
                        <Text style={styles.buttonText}>CheckOut</Text>
                    </Button>
                    </CardItem>
                </Card>
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
            padding:7,
            borderRadius: 10,
            backgroundColor: '#3dd43f'
        },
        buttonText: {
            fontSize: 16,
            color: "#ffffff"
        }
    
});
export default Cart;
