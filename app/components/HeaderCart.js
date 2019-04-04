import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Container, Content, Header, Left, Right, Icon, Button } from 'native-base'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FAIcons from 'react-native-vector-icons/AntDesign'


class HeaderCart extends React.Component {

  render() {
    return (
      <Header style={{
        backgroundColor: '#3a455c',
        height: 70, borderBottomColor: '#757575'
      }}>
        <Left style={{ flexDirection: 'row' }}>
          <Icon name='md-menu' style={{ color: 'white', fontSize: 35, left: 0, marginRight: 10 }} />
         
        </Left>
        <Right>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Keranjang Anda</Text>
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