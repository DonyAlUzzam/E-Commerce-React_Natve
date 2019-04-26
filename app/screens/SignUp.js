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
import SplashScreen from "./SplashScreen";
import {connect} from 'react-redux'
import {registerUser} from '../redux/actions'


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirm_password:""
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

  register(username, email, password, confirm_password){
    if (confirm_password !== password){
      alert("password not match");
    } else {
      this.props.registerUser(username, email, password, confirm_password)
      this.props.navigation.navigate("Home");
    }
  
  }


  // submit() {
  //   this.setState({ loading: true });

  //   setTimeout(() => {
  //     this.props.navigation.navigate("Home");
  //   }, 1000);s
  // }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image style={[styles.logo]} source={require("../assets/logo.jpg")} />
        <View style={styles.container}>
          <KeyboardAvoidingView>
            <TextInput
               ref={(textInput) => this._user = textInput }
              style={styles.inputField}
              value={this.state.username}
              onChangeText={(text) => this.setState({ username: text })}
              onSubmitEditing={(event) => this.email.focus()}
              // onFocus={ () => this.clearValidationErrors() }
              editable={true}
              returnKeyType='next'
              maxLength={40}
              multiline={false}
              placeholder="Username"
            />
            <TextInput
              ref={(textInput) => this.email = textInput }
              style={styles.inputField}
              value={this.state.email}
              onChangeText={(text) => this.setState({email: text})}
              onSubmitEditing={(event) => this.password.focus()}
              // onFocus={ () => this.clearValidationErrors() }
              keyboardType="email-address"
              editable={true}
              returnKeyType='next'
              maxLength={40}
              multiline={false}
              placeholder="Masukkan Email"
            />
            <TextInput
              ref={(textInput) => this.password = textInput }
              style={styles.inputField}
              value={this.state.password}
              onChangeText={(text) => this.setState({password: text})}
              onSubmitEditing={(event) => this.confirm_password.focus()}
              editable={true}
              secureTextEntry={true}
              returnKeyType='next'
              maxLength={40}
              multiline={false}
              placeholder="Masukkan Password"
            />
             <TextInput
              ref={(textInput) => this.confirm_password = textInput }
              style={styles.inputField}
              value={this.state.confirm_password}
              onChangeText={(text) => this.setState({confirm_password: text})}
              onSubmitEditing={(event) => this.register()}
              editable={true}
              secureTextEntry={true}
              maxLength={40}
              multiline={false}
              placeholder="Konfirmasi Password"
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
                onPress={() => this.register(this.state.username, this.state.email, this.state.password, this.state.confirm_password)}
              >
                {/* onPress={this.onPressLogin} */}
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                >
                  Daftar
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.redirectLink}>
            <Text>Sudah punya akun? </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("SignIn")}
            >
              <Text style={styles.link}>Login</Text>
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
  registerUser: (username, email, password, confirm_password) => dispatch(registerUser(username, email, password, confirm_password))
})


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
// export default SignUp;

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
