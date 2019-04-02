import React from 'react';
import { View } from 'react-native';
import { Container, Content } from "native-base"
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Cart from '../components/Cart'
import HeaderCustom from '../components/Header'

class HomeScreen extends React.Component {
  
  _onPress=() => {
    /* 1. Navigate to the Details route with params */
    this.props.navigation.navigate('DetailProd', {
    
   });
  }
    render() {
      return (
        <Container>
          <HeaderCustom />
          <Content>
            <View>
         <Cart
         _onPress={this._onPress}
         title="Rosherun Shoes" 
         uri="https://ecs7.tokopedia.net/img/cache/700/product-1/2016/12/22/1489596/1489596_164fa661-ed16-4715-abc1-5b8df9ea1fea_320_320.jpg"/>
         <Cart 
           _onPress={this._onPress}
         title="Running Sneaker" 
         uri="https://media.karousell.com/media/photos/products/2017/07/20/sepatu_running_sneaker_adidas_cloudfoam_lite_racer_reflektif_reflektiv_reflektive_original_bnwb_indo_1500528902_15be5909.jpg"/>
         <Cart 
         _onPress={this._onPress}
         title="Ceremonial Shoes" 
         uri="https://dynamic.zacdn.com/5FLhJRIhzKu6d3MSkAHP5me26SU=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/cde-1512-2172561-1.jpg"/>
          <Cart
        _onPress={this._onPress}
         title="Rosherun-Shoes" 
         uri="https://ecs7.tokopedia.net/img/cache/700/product-1/2016/12/22/1489596/1489596_164fa661-ed16-4715-abc1-5b8df9ea1fea_320_320.jpg"/>
        
         </View>
          </Content>
        </Container>
        
      );
    }
  }

  export default HomeScreen;

