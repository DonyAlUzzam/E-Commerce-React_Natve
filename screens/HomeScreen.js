import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView } from 'react-native';
import { Container, Content, Header, Left, Right, Icon } from 'native-base'
import FAIcon from 'react-native-vector-icons/FontAwesome5'
import Cart from '../components/Cart'

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }
  render(){
    return(
     <Container>
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
       <View style={{top:73, height: 40, backgroundColor: '#3a455c' }}>
       </View>
       <View>
         <ScrollView>
         <Cart
         title="Rosherun Shoes" 
         uri="https://ecs7.tokopedia.net/img/cache/700/product-1/2016/12/22/1489596/1489596_164fa661-ed16-4715-abc1-5b8df9ea1fea_320_320.jpg"/>
         <Cart 
         title="Running Sneaker" 
         uri="https://media.karousell.com/media/photos/products/2017/07/20/sepatu_running_sneaker_adidas_cloudfoam_lite_racer_reflektif_reflektiv_reflektive_original_bnwb_indo_1500528902_15be5909.jpg"/>
         
         </ScrollView>
       </View>
     </Container>
    );
  }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })