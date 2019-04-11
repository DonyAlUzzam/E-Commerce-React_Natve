import React, { Component } from 'react';
import { Text, StyleSheet, Image, Alert, Button, Picker, TouchableOpacity, TextInput } from 'react-native';
import { Container, Content, Body, Card, CardItem, View } from 'native-base';

import { stringToRupiah } from '../helper/currency';
import HeaderCustom from '../components/Header';

export default class Checkout extends Component {

    constructor(props) {
        super(props);
        const { navigation } = props;
        const totalPrice = navigation.getParam("total", "");
        this.state = {
            address: '',
            courier: '30000',
            total:totalPrice, 
             totalPayment: 0
        };
        
    }

    totalPayment = () => {
        const totalPayment = Number(this.state.total) + Number(this.state.courier);

        return totalPayment.toString();
    }



    render() {
        // const { navigation } = this.props;
        // const price = navigation.getParam("itemPrice", "");
       
        return (
            <Container>
                <HeaderCustom />
                <View style={styles.container}>
                    <Content>
                    <Card >
                            <View style={styles.cardAddress}>
                                <CardItem>
                                    <Text>Your Name :  </Text>
                                    <View
                                        style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                            alignItems: 'stretch'
                                        }}
                                    >
                                        <TextInput placeholder="Dony Al-Uzzam"
                                            {...this.props}
                                            editable={true}
                                            maxLength={40}
                                        />
                                    </View>
                                </CardItem>
                              
                            </View>
                        </Card>
                        <Card >
                            <View style={styles.cardAddress}>
                                <CardItem>
                                    <Text>Your Address :  </Text>
                                    <View
                                        style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                            alignItems: 'stretch'
                                        }}
                                    >
                                        <TextInput placeholder="Jl. Kol. H.Burlian Tanah Abang, Muara Enim, Sumatera Selatan"
                                            {...this.props}
                                            editable={true}
                                            maxLength={40}
                                        />
                                    </View>
                                </CardItem>
                              
                            </View>
                        </Card>

                        <Card style={styles.containerCard}>
                            <CardItem style={{ marginHorizontal: 24 }}>
                                <View>
                                    <Text>Courir : </Text>
                                </View>

                                <Picker
                                    selectedValue={this.state.language}
                                    style={{ height: '100%', width: '100%' }}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ courier: itemValue },this.totalPayment)
                                    }
                                    selectedValue={this.state.courier}
                                >
                                    <Picker.Item label="JNE YES" value="30000" />
                                    <Picker.Item label="JNE REG" value="20000" />
                                </Picker>
                            </CardItem>
                        </Card>
                        <Card style={styles.containerCard}>
                          
                        </Card>
                        {/* adada */}
                        <Card style={styles.containerCard}>
                            <CardItem>
                                <Text>SubTotal Product :</Text>
                            </CardItem>
                            <CardItem style={styles.textSum}>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: 'bold',
                                    }}
                                >   {stringToRupiah(String(this.state.total))} 
                              
                                </Text>
                            </CardItem>
                        </Card>
                        {/* zxzxzx */}
                         {/* adada */}
                         <Card style={styles.containerCard}>
                            <CardItem>
                                <Text>SubTotal Courir :</Text>
                            </CardItem>
                            <CardItem style={styles.textSum}>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: 'bold',
                                    }}
                                >  {stringToRupiah(this.state.courier)} 
                                </Text>
                            </CardItem>
                        </Card>
                        {/* zxzxzx */}
                         {/* adada */}
                         <Card style={styles.containerCard}>
                            <CardItem>
                                <Text>Total Payment</Text>
                            </CardItem>
                            <CardItem style={styles.textSum}>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: 'bold',
                                    }}
                                >
                                {stringToRupiah(this.totalPayment())} 
                                </Text>
                            </CardItem>
                        </Card>
                        {/* zxzxzx */}
                    </Content>
                    <View style={styles.footer}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={() => (alert("you haven't paid yet"))}>
                            <Text style={styles.buttonText}>Order Now</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Container >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingBottom: 5,
        paddingLeft: 2,
        paddingRight: 2,
        alignItems: 'stretch',
    },
    containerCard: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    cardAddress: {

        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    containerInput: {
        flex: 1,

    },
    textSum: {
        flex: 1,
        justifyContent: 'flex-end',

    },

    hrLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: 10,

    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        alignItems: 'stretch',
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginBottom: 4
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3a455c',
        paddingVertical: 16,
        borderRadius: 6,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18
    }
  
});
