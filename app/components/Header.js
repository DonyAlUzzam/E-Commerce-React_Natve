import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content, Header, Left, Right, Icon } from 'native-base'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FAIcons from 'react-native-vector-icons/AntDesign'

const HeaderCustom = () => (

<Header style={{ backgroundColor: '#3a455c',
height: 70, borderBottomColor: '#757575' }}>
<Left style={{ flexDirection: 'row' }}>
  <Icon onPress={ () => this.props.navigation.navigate('DrawerOpen')} name='md-menu' style={{ color: 'white', fontSize: 35, left: 0, marginRight: 10 }} />
  <FAIcons name='taobao-square' style={{ fontSize: 32, color: 'white' }} />
</Left>
<Right>
<Icon name='md-cart' style={{ color: 'white'}} />
</Right>
 </Header>
      
);

export default HeaderCustom;