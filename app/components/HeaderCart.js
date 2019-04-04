import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Container, Content, Header, Center, Left, Right, Icon, Button } from 'native-base'

class HeaderCart extends React.Component {

  render() {
    return (
      <Header style={{
        backgroundColor: '#3a455c',
        height: 70, borderBottomColor: '#757575'
      }}>
      <Button transparent>
        <TouchableOpacity onPress={this.props._onPressCart}>
        <Left style={{ flexDirection: 'row' }}>
        <Icon type="MaterialIcons"  name='arrow-back' style={{ color: 'white', fontSize: 35, left: 0, marginRight: 10 }} />
          <Text style={{ justifyContent: 'center', position: 'absolute', left: 125, color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Keranjang Anda</Text>
        </Left>
        </TouchableOpacity>
        </Button>
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