import React from 'react';
import { Container, Content, Header, Left, Right, Icon } from 'native-base'
import FAIcon from 'react-native-vector-icons/FontAwesome5'

const HeaderCustom = () => (
       <Header style={{ backgroundColor: '#3a455c',
      height: 70, borderBottomColor: '#757575' }}>
      <Left style={{ flexDirection: 'row' }}>
        <Icon name='md-menu' style={{ color: 'white', fontSize: 35, left: 0, marginRight: 10 }} />
        <FAIcon name='shopware' style={{ fontSize: 32, color: 'white' }} />
      </Left>
      <Right>
      <Icon name='md-cart' style={{ color: 'white'}} />
      </Right>
       </Header>
);

export default HeaderCustom;