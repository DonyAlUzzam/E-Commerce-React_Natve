import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  BackHandler
} from "react-native";
import { Header } from "react-navigation";
import {connect} from 'react-redux'

import {loginUser} from '../redux/actions'
import SplashScreen from "./SplashScreen";

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "mkhairiusman@gmail.com",
      password: "doni123"
    };
  }
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate("Home");
    return true;
  };

  login(email, password) {
    this.props.loginUser(email, password);
    this.props.navigation.navigate("Home");
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image style={[styles.logo]} source={require("../assets/logo.jpg")} />
        <View style={styles.container}>
          <KeyboardAvoidingView>
            <TextInput
              // ref={(textInput) => this._user = textInput }
              style={styles.inputField}
              onChangeText={(text) => this.setState({ email: text })}
              value={this.state.email}
              onSubmitEditing={(event) => this._password.focus()}
              // onFocus={ () => this.clearValidationErrors() }
              keyboardType="email-address"
              returnKeyType='next'
              autoCorrect={false}
              editable={true}
              maxLength={40}
              multiline={false}
              // ref={(textInput) => this.password = textInput }
              placeholder="Masukkan Email"
            />
            <TextInput
              ref={(textInput) => this._password = textInput }
              style={styles.inputField}
              value={this.state.password}
              onChangeText={(text) => this.setState({ password: text })}
        // onSubmitEditing={(event) => this.submit()}
              editable={true}
              secureTextEntry={true}
              maxLength={40}
              multiline={false}
              autoCorrect={false}
              placeholder="Masukkan Password"
            />
          </KeyboardAvoidingView>
          {/* { this.state.error &&
                <View style={styles.validationErrors}>
                    <Text style={styles.error}>{this.state.error}
                    </Text> 
                </View>
            } */}
          <View>
            {this.state.loading ? (
              <SplashScreen />
            ) : (
              <TouchableOpacity
                style={styles.buttonStyle}
                // onPress={() => this.submit()}
                onPress={() => this.login(this.state.email, this.state.password)}
              >
                {/* onPress={this.onPressLogin} */}
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                >
                  Masuk
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.redirectLink}>
            <Text>Tidak punya akun? </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("SignUp")}
            >
              <Text style={styles.link}>Daftar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.copyright} />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.account.isLoggedIn
})

const mapDispatchToProps = dispatch => ({
  loginUser: (email, password) => dispatch(loginUser(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
// export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  logo: {
    width: "100%",
    height: 250
  },
  inputField: {
    marginTop: 20,
    alignSelf: "center",
    height: 55,
    width: "80%",
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: "#CACACA"
  },
  redirectLink: {
    marginTop: 20,
    flex: 1,
    flexDirection: "row",
    alignSelf: "center"
  },
  link: {
    color: "blue"
  },
  validationErrors: {
    flexDirection: "row",
    justifyContent: "center"
  },
  error: {
    marginTop: 10,
    textAlign: "center",
    color: "red"
  },
  buttonStyle: {
    marginTop: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#957dad"
  },
  copyright: {
    marginTop: 15,
    flex: 1,
    alignSelf: "center"
  }
});
