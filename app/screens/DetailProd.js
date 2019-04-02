import React from 'react';
import { Text, View, Image } from 'react-native';
import { Header } from 'react-navigation';
import { CardItem, Card, Left } from 'native-base'

  export default class DetailProd extends React.Component {
    render() {
      return (
        <Card>
        <CardItem>
        <Image
         style={{width: '100%', height: 250}}
         source={{uri: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2016/12/22/1489596/1489596_164fa661-ed16-4715-abc1-5b8df9ea1fea_320_320.jpg'}} />
        </CardItem>
        <CardItem>
          <Left>
            <View style={{ flex: 1, flexDirection: 'column' }} >
              <Text >Rp. 150,000</Text>
              <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
            </View>
          </Left>
        </CardItem>
      </Card>
      );
    }
  }

 