import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Alert, AsyncStorage } from 'react-native';
import { Container, Content } from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { clearUser, getUser } from '../redux/actions'
import {connect} from 'react-redux'
import { getValue, removeValue } from '../redux/service/storage/AsyncStorage';


 class ProfileScreen extends Component {

    componentDidMount() {

        this.props.navigation.addListener('didFocus', () => {
            if (this.props.isLoggedIn === false) {
                this.props.navigation.navigate('SignIn')
            }
            else {
                // console.log('---',this.props.token);
                this.checkToken();
                this.checkToken().then(val => {
                    console.log(val);
                    
                });
                
                // console.log(token);
            }
        })


    }

    checkToken = async() => {
        const token = await getValue('token')
        if (token) {
            this.props.getUser(token);
            return 1;
        }else{
            const { type, token } = this.props.token
            const authToken = type + ' ' + token;
            this.props.getUser(authToken);

        }
    }
    logout = () => {
        this.props.clearUser()
        removeValue('token')
        this.props.navigation.navigate('Home')

    }
    confirm() {
        Alert.alert(
            'Logging Out?',
            'Please press OK to continue.',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => this.logout() },
            ],
            { cancelable: false },
        );
    }



    render() {
        if (!this.props.user) return (<Text>Loading...</Text>)

        const { id, username, email } = this.props.user
        return (
            <Container>
                <Content>
                    <StatusBar backgroundColor="#009C71" barStyle="light-content" />
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <TouchableOpacity style={styles.iconCart} onPress={() => this.confirm()}>
                                <FontAwesome name="power-off" size={24} color='white' />
                            </TouchableOpacity>
                        </View>
                        <Image style={styles.avatar} source={{ uri: 'http://chittagongit.com//images/avatar-icon/avatar-icon-4.jpg' }} />
                        <View style={styles.body}>
                            <View style={styles.bodyContent}>
                                <Text style={styles.name}>{username}</Text>
                                <Text style={styles.description}>{email}</Text>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

// const mapStateToProps = state => ({
//   isLoggedIn: state.account.isLoggedIn,
//   user: state.account.user,
//   token: state.account.access_token
// })


const mapStateToProps = state => {
  console.log('---->', state.account)
  return { 
    user: state.account.user,
    token: state.account.access_token,
    isLoggedIn: state.account.isLoggedIn }
}

const mapDispatchToProps = dispatch => ({
  clearUser: () => dispatch(clearUser()),
  getUser: () => dispatch(getUser(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: "#009C71",
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 30,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 6,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#009C71",
    },
    iconCart: { padding: 16, },
});