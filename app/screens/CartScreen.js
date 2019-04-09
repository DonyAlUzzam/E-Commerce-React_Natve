
import React, { Component } from 'react';
import { Text, StyleSheet, Image, Alert, TouchableOpacity, TextInput } from 'react-native';
import { Container, View, Card, CardItem } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HeaderCart from '../components/HeaderCart'
import Cart from '../components/Cart';
import { stringToRupiah } from '../helper/currency';


class CartScreen extends Component {
    // eslint-disable-next-line no-undef
  
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            total: 0,
        };
    }

    // eslint-disable-next-line react/sort-comp
    onTextChanged = (text, id) => {
        const product = [];
        this.state.product.forEach((val, i) => {
            if (val.id === id) {
                const quantity = Number(text);
                if (!isNaN(quantity)) {
                    product.push({
                            id: val.key,
                            name: val.name,
                            price: val.price,
                            uri: val.uri,
                            qty: Number(text)
                        });
                } else {
                    product.push(val);
                }
            } else {
                product.push(val);
            }
        });
        let totalPrice = 0;
        poke.forEach((val, i) => {
            totalPrice += val.qty * val.price;
        });
        this.setState({
            total: totalPrice,
            product: product
        });

    };

    componentDidMount() {
        this.props.navigation.addListener('willFocus', route => {
            this.addData();
        });
    }

    addNum = (id) => {
        const product = [];
        const findId = this.state.product.findIndex((val, i) => {
            if (val.id === id) {
                product.push({
                    id: val.id,
                    name: val.name,
                    uri: val.uri,
                    price: val.price,
                    qty: val.qty + 1,

                });
            } else {
                product.push(val);
            }
            let totalPrice = 0;
            product.findIndex((val, i) => {
                totalPrice += val.qty * Number(val.price)
            });
            this.setState({
                product: product,
                total: totalPrice
            });
        });
    };
    subNum = (id) => {
        const product = [];
        const findId = this.state.product.findIndex((val, i) => {
            if (val.id === id) {
                if (val.qty > 1) {
                    // console.log(this.state.poke[i]);
                    product.push({
                        id: val.id,
                        name: val.name,
                        uri: val.uri,
                        price: val.price,
                        qty: val.qty - 1,

                    });
                } else {
                    product.push(val);
                }
            } else {
                product.push(val);
            }

            let totalPrice = 0;
            product.findIndex((val, i) => {
                totalPrice += val.qty * Number(val.price)
            });
            this.setState({
                product: product,
                total: totalPrice
            });
        });
    };

    deleteItem(id) {

        const findId = this.state.product.findIndex((val, i) => {
            return val.id === id;
        });

        const product = [...this.state.product];
        if (findId !== -1) {
            product.splice(findId, 1);
            this.setState({
                product: product
            });
        }
        let tempProduct = [];
        this.state.product.forEach((val, i) => {
            if (val.id === id) {
                tempProduct.push({
                    id: val.id,
                    name: val.name,
                    uri: val.uri,
                    price: val.price,
                    qty: val.qty,

                });
            } else {
                tempProduct.push(val);
            }
        });
        let totalPrice = 0;
        tempProduct.forEach((val, i) => {
            if (val.id === id) {
                totalPrice += val.qty * Number(val.price);
            }
        });
        this.setState({
            total: this.state.total - totalPrice
        });
    }

    addData() {
        const { navigation } = this.props;
        const uri = navigation.getParam('itemImage', '');
        const name = navigation.getParam('itemName', '');
        const price = navigation.getParam('itemPrice', '');
        const id = navigation.getParam('itemKey', '');
        const qty = navigation.getParam('quantity', '');

     


        // alert(key);
        if (id !== '') {
            const findId = this.state.product.findIndex((val, i) => {
                return val.id === id;
            });
            if (findId === -1) {
                this.setState({
                    total: this.state.total + Number(price),
                    product: [
                        ...this.state.product,
                        {
                            uri,
                            name,
                            price,
                            id,
                            qty
                        }
                    ]
                });
            }
        }
    }


    render() {
        if (this.state.product.length < 1) {
            // eslint-disable-next-line no-unused-expressions
            return (

                <Container>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                        <Text>There no product on your Cart</Text>
                    </View>
                </Container>
            );
            // eslint-disable-next-line no-else-return
        } else {
            return (
                <Container>
                       <HeaderCart 
                  onPressCart={() => this.props.navigation.navigate('ProductList')}
                 />

                    <View style={styles.container}>

                        <FlatList
                            data={this.state.product}
                            renderItem={({ item }) =>
                                (
                                    <Card >
                                        <View style={styles.cardList}>
                                            <View style={styles.cardBody}>
                                                <Cart
                                                    itemKey={item.id}
                                                    itemImage={item.uri}
                                                    itemName={item.name}
                                                    itemPrice={stringToRupiah(String(item.price))}

                                                />
                                            </View>
                                            <View style={styles.cardFooter}>

                                                <View style={styles.quantity} >
                                                    <View
                                                        style={{
                                                           width: 18,
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            marginLeft:85,
                                                        }}
                                                    >
                                                        <TouchableOpacity>
                                                            <FontAwesome name="minus" size={20} color='#f7c744' onPress={() => this.subNum(item.id)} />
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View
                                                        style={{
                                                            width: 18,
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            marginLeft:25,
                                                        }}
                                                    >
                                                        <TextInput
                                                            style={{ height: 35, width: 40, borderColor: '#f7c744', borderWidth: 1, textAlign: 'center', paddingBottom: 6 }}
                                                            onChangeText={(text) => this.onTextChanged(text, item.id)}
                                                            textAlignVertical={'center'}
                                                            textAlignHorizontal={'center'}
                                                            keyboardType={'numeric'}
                                                            value={item.qty.toString()}
                                                        />
                                                    </View>
                                                    <View
                                                        style={{
                                                            width: 18,
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            marginLeft:24,
                                                        }}
                                                    >
                                                        <TouchableOpacity>
                                                            <FontAwesome name="plus" size={20} color='#f7c744' onPress={() => this.addNum(item.id)} />
                                                        </TouchableOpacity>

                                                    </View>
                                                    <View style={styles.quantity}>
                                                        <TouchableOpacity>
                                                            <FontAwesome name="trash" size={24} onPress={() => this.deleteItem(item.id)} />
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>

                                        </View>
                                    </Card>
                                )
                            }
                            keyExtractor={item => item.id}
                        />
                    </View>

                    <View style={styles.footer}>

                        <View style={styles.buttonAdd}>
                            <Text>Total :</Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', }}>
                                {stringToRupiah(this.state.total.toString())}
                            </Text>
                        </View>
                        <View style={styles.buttonCheckOut}>
                            <TouchableOpacity
                                style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Checkout', {
                                    total: this.state.total
                                })}
                            >
                                <Text style={styles.buttonText}>Checkout</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </Container >
            );
        }
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
    hrLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: 10,

    },
    cardHeader: {
        flex: 2,
    },
    cardFooter: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',

    },
    cardDelete: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    cardBody: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',

    },
    quantity: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 5,
        paddingLeft: 2,
        paddingRight: 2,
        alignItems: 'center',

    },

    cardList: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',

    },
    cardListEnd: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    cardImage: {
        flex: 0.7
    },
    textMed: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    imageCard: {

        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        resizeMode: 'contain'

    },
    buttonContainer: {
        backgroundColor: '#f7c744',
        paddingVertical: 10,
        borderRadius: 6,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18
    },
    buttonAdd: {
        flex: 2,
        paddingBottom: 2,
        paddingLeft: 4

    },
    buttonCheckOut: {
        flex: 1,
        borderRadius: 30,
    }
});

export default CartScreen;