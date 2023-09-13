import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Text,
  TextInput,
  View
} from "react-native";
import SubmitButton from "../../shared/components/SubmitButton";
import loginStyles from "./LoginScreen.style";

import { useDispatch, useSelector } from "react-redux";
import PATH from "../../navigation/NavigationPath";
import Loading from "../../shared/components/Loading";
import { showLoading } from "../../store/AppAction";
import { login } from "../../store/login/LoginAction";
import MessageBox from "../../shared/components/MessageBox";

export default function ProductForm({ login }) {

  const { onAuthenticate, onDismissError } = login()
  const error = useSelector((state) => state.AppReducer.errorMessage)

  // const dispatch = useDispatch()
  // const isLogin = useSelector((state) => state.LoginReducer.isLoggedIn)

  // const isLoading = useSelector((state) => state.AppReducer.isLoading)
  // console.log(isLoading);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [inputErrors, setInputErrors] = useState({
    isValidEmail: "",
    isValidPassword: "",
  });

  // navigation.navigete() -> menjadi tumpukan stack -> able to back page
  // navigation.replate() -> replace current stack -> unable to back page

  // useEffect(() => {
  //   if (isLogin) {
  //     navigation.replace(PATH.TODO_SCREEN)
  //   }
  // })

  const validateInputs = () => {
    const errors = {};
    if (email.trim() === "") {
      errors.isValidEmail = "Email is required";
    }
    if (password.trim() === "") {
      errors.isValidPassword = "Password is required";
    }
    return errors;
  };

  useEffect(() => {
    if (error) {
      MessageBox('Error', error.message, onDismissError).showAlert()
    }
  }, [error])

  const submitLogin = () => {
    const errors = validateInputs();

    if (Object.keys(errors).length > 0) {
      setInputErrors(errors);
    } else {
      // console.log('=== LoginScreen Email, Password: ', email, password);

      // console.log('=== LoginScreen Email: ', email);
      // console.log('=== LoginScreen Password: ', password);
      onAuthenticate(email, password)
    }
    // if (Object.keys(errors).length > 0) {
    //   setInputErrors(errors);
    // } else if (email === "enigma" && password === "123") {
    //   dispatch(showLoading(true))

    //   setTimeout(() => {
    //     // navigation.navigate(PATH.TODO_SCREEN);
    //     dispatch(login(true))
    //     dispatch(showLoading(false))
    //   }, 1000);
    // } else {
    //   Alert.alert("Incorrect", "Invalid Email or Password");
    // }
  };

  const isErrorView = (errorValidation) => {
    if (errorValidation) {
      return (
        <Text style={{ color: "red", marginBottom: 7 }}>{errorValidation}</Text>
      );
    }
  };

  return (
    <View style={loginStyles.container}>
      {/* {isLoading ? <Loading /> : null} */}

      <View style={loginStyles.logoSection}>
        <Image
          style={{
            width: "80%",
            height: 150,
          }}
          source={require("../../shared/assets/login_undraw.png")}
        />
      </View>
      <View style={{ flex: 2, paddingHorizontal: 15 }}>
        <View style={loginStyles.form}>
          <View style={loginStyles.headerForm}>
            <Text style={loginStyles.title}>Hello!,</Text>
            <Text style={loginStyles.title}>Well Come Back Enigmanians</Text>
          </View>

          <Text style={loginStyles.label}>Email</Text>
          <TextInput
            onChangeText={(val) => {
              setEmail(val);
              setInputErrors({
                ...inputErrors,
                isValidEmail: "",
              });
            }}
            placeholder="Email"
            keyboardType="email-address"
            style={loginStyles.input}
          />
          {isErrorView(inputErrors.isValidEmail)}

          <Text style={loginStyles.label}>Password</Text>
          <TextInput
            onChangeText={(val) => {
              setPassword(val);
              setInputErrors({
                ...inputErrors,
                isValidPassword: "",
              });
            }}
            style={loginStyles.input}
            secureTextEntry={true}
            placeholder="password"
          // keyboardType="ascii-capable"
          />
          {isErrorView(inputErrors.isValidPassword)}

          <View
            style={{
              marginVertical: 6,
            }}
          >
            <SubmitButton
              title={"Login"}
              additionalSyle={{ backgroundColor: '#233d90' }}
              colorText={{ color: "white" }}
              onSubmit={submitLogin}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
