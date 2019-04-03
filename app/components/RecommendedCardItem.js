import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import { Card, CardItem, Right } from 'native-base'
import StarRating from 'react-native-star-rating'

class RecommendedCardItem extends Component {
    render(){
        return(
            <CardItem>
                <View>
                    <Image style={{ height: 100, width: 90 }}
                    source={this.props.imageUri} />
                </View>
                <Right style={{ justifyContent: 'center', flex: 1, alignItems: 'flex-start', height: 90, paddingHorizontal: 20, marginTop: 1 }}>
                    <Text>{this.props.itemName}</Text>
                    <Text style={{ color: 'grey', fontSize: 11 }}>{this.props.itemCreator}</Text>
                    <Text style={{ color: '#b8860b', fontWeight: 'bold', fontSize: 14 }}>{this.props.itemPrice}</Text>
                    <Text>
                        <Text style={{ fontSize: 11, color: 'grey', fontWeight: '300'}}>
                            Your Discount
                        </Text> {this.props.savings}
                    </Text>
                    <StarRating
                    disabled={true}
                    maxStar={5}
                    rating={this.props.rating}
                    starSize={12}
                    fullStarColor='orange'
                    emptyStarColor='orange'
                    />
                </Right>
            </CardItem>
        );
    }
}

export default RecommendedCardItem;
