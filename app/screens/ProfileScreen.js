import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content } from "native-base"
import { Header } from 'react-navigation';
import HeaderCustom from '../components/Header';

class ProfileScreen extends React.Component {
    render() {
      return (
        <Container>
         <HeaderCustom />
       
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
          <Text>Profile!</Text>
        </View>
        </Container>
      );
    }
  }

  export default ProfileScreen;