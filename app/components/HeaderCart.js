import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Container, Content, Header, Center, Left, Right, Icon, Button, Body } from 'native-base'

class HeaderCart extends React.Component {

  render() {
    return (
      <Header style={{
        backgroundColor: '#3a455c',
        height: 70, borderBottomColor: '#757575'
      }}>
       
      <Button transparent>
        <TouchableOpacity onPress={this.props.onPressCart}>
        <Left style={{ flexDirection: 'row' }}>
        <Icon type="MaterialIcons"  name='arrow-back' style={{ color: 'white', fontSize: 35, left: 0, marginRight: 10 }} />
        </Left>
        </TouchableOpacity>
        </Button>
        <Body style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute', textAlign: 'center' }}>
        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Your Shopping Cart</Text>
        </Body>
        <Right>
          <Button transparent>
        <TouchableOpacity onPress={this.props._onPress}>
           <Icon
            name='md-cart' style={{ color: 'white' }} />
        </TouchableOpacity>
        </Button>
        </Right>
      </Header>
    );
  }


}


export default HeaderCart;