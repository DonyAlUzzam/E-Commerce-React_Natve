import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content } from "native-base"
import { Header } from 'react-navigation';

class ProfileScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Profile!</Text>
        </View>
      );
    }
  }

  export default ProfileScreen;