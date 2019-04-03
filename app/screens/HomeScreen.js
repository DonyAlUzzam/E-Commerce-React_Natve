import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Item, Input, Icon, Card, CardItem, Right } from "native-base"
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Swiper from 'react-native-swiper'
import StarRating from 'react-native-star-rating'

import HeaderCustom from '../components/Header'
import RecommendedCartItem from '../components/RecommendedCardItem'
import { FlatList } from 'react-native-gesture-handler';
class HomeScreen extends React.Component {
  state = {
    product: [
      {
        itemName: "Complete your shopping happiness",
        itemCreator: "Dony",
        itemPrice: "Rp.150.000",
        savings: "5%",
        imageUri: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2016/12/22/1489596/1489596_164fa661-ed16-4715-abc1-5b8df9ea1fea_320_320.jpg',
        rating: 4
      },
      {
        itemName: "Rosherun Shoes",
        itemCreator: "Kadek",
        itemPrice: "Rp.250.000",
        savings: "5%",
        imageUri: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2016/12/22/1489596/1489596_164fa661-ed16-4715-abc1-5b8df9ea1fea_320_320.jpg',
        rating: 4
      }
    ]
  }
  render() {
    return (
      <Container>
        <HeaderCustom />

        <View style={{
          position: 'absolute', left: 0,
          right: 0, top: 70, height: 70, backgroundColor: '#3a455c',
          flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5, marginTop: 5
        }}>
          <TouchableOpacity>
            <View style={{ width: 100, backgroundColor: '#e7e7eb', height: 50, borderRadius: 4, padding: 10 }}>
              <Text style={{ fontSize: 12 }}> Shop By </Text>
              <Text style={{ fontWeight: 'bold' }}>Category</Text>
            </View>
          </TouchableOpacity>
          <View style={{ flex: 1, height: "100%", marginLeft: 5, justifyContent: 'center' }}>
            <Item style={{ backgroundColor: 'white', paddingHorizontal: 10, borderRadius: 4 }}>
              <Icon name='search' style={{ fontSize: 20, paddingTop: 5 }} />
              <Input placeholder='Search' />
            </Item>
          </View>
        </View>
        <Content style={{ backgroundColor: 'silver', marginTop: 70 }}>
          <Swiper
            autoplay={true}
            autoplayDirection={false}
            style={{ height: 100 }}>

            <Image
              style={{ flex: 1, height: null, width: null }}
              source={require('../assets/swiper_1.jpg')} />

            <Image
              style={{ flex: 1, height: null, width: null }}
              source={require('../assets/swiper_2.jpg')} />

            <Image
              style={{ flex: 1, height: null, width: null }}
              source={require('../assets/swiper_3.jpg')} />

          </Swiper>
          <Card style={{ marginLeft: 5, marginRight: 5 }}>
            <CardItem header style={{ borderBottomColor: '#dee0e2', borderBottomWidth: 1 }}>
              <Text style={{ fontWeight: 'bold', paddingLeft: 75 }}> Your Recommendations</Text>
            </CardItem>
            <FlatList
              data={this.state.product}
              renderItem={({ item }) => (
                <View>
                  <CardItem>
                    <View>
                      <Image style={{ height: 100, width: 90 }}
                        source={{uri:item.imageUri}} />
                    </View>
                    <Right style={{ justifyContent: 'center', flex: 1, alignItems: 'flex-start', height: 90, paddingHorizontal: 20, marginTop: 1 }}>
                      <Text>{item.itemName}</Text>
                      <Text style={{ color: 'grey', fontSize: 11 }}>{item.itemCreator}</Text>
                      <Text style={{ color: '#b8860b', fontWeight: 'bold', fontSize: 14 }}>{item.itemPrice}</Text>
                      <Text>
                        <Text style={{ fontSize: 11, color: 'grey', fontWeight: '300' }}>
                          Your Discount
                        </Text> {item.savings}
                      </Text>
                      <StarRating
                        disabled={true}
                        maxStar={5}
                        rating={item.rating}
                        starSize={12}
                        fullStarColor='orange'
                        emptyStarColor='orange'
                      />
                    </Right>
                  </CardItem>
                </View>
              )}
            />
            {/* <RecommendedCartItem
              itemName="Complete your shopping happiness"
              itemCreator="Dony"
              itemPrice="Rp.150.000"
              savings="5%"
              imageUri={require('../assets/1.jpg')}
              rating={4}
            />
            <RecommendedCartItem
              itemName="Rosherun Shoes"
              itemCreator="Fadli"
              itemPrice="Rp.250.000"
              savings="15%"
              imageUri={require('../assets/2.jpg')}
              rating={5}
            />
            <RecommendedCartItem
              itemName="Running Sneaker"
              itemCreator="Kadek"
              itemPrice="Rp.100.000"
              savings="10%"
              imageUri={require('../assets/3.jpg')}
              rating={4}
            />
            <RecommendedCartItem
              itemName="Complete your shopping happiness"
              itemCreator="Dony"
              itemPrice="Rp.150.000"
              savings="20%"
              imageUri={require('../assets/4.jpg')}
              rating={4}
            /> */}
          </Card>
        </Content>
      </Container>

    );
  }
}

export default HomeScreen;

