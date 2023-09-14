import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import {
  Modal,
  Pressable,
  Text,
  TouchableHighlight,
  View
} from "react-native";

import { useDispatch } from "react-redux";
import PATH from "../../../navigation/NavigationPath";
import { showLoading } from "../../../store/AppAction";
import { logoutAction } from "../../../store/login/LoginAction";
import styles from "./PopupMenu.style";

const PopupMenu = ({ navigation }) => {

  const dispatch = useDispatch()

  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const onLogout = () => {
    // navigation.navigate(PATH.LOGIN);
    dispatch(showLoading(true))

    setTimeout(() => {
      dispatch(logoutAction())
      dispatch(showLoading(false))
      navigation.replace(PATH.LOGIN)
    }, 1000)
  }

  return (
    <View>
      <Pressable
        style={styles.logoutIcon}
        onPress={() => setIsModalVisible(!isModalVisible)}
      >
        <SimpleLineIcons name="logout" size={24} color="white" />
      </Pressable>
      <Modal
        animationType={"fade"}
        transparent
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(!isModalVisible)}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={[styles.cardModal, styles.shadow]}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons name="logout" size={50} color="#233D90" />
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                You'll Logout...,
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 26,
                }}
              >
                Are You sure ?
              </Text>
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: "space-around",
              }}
            >
              <TouchableHighlight
                underlayColor={"#6a89ef"}
                style={styles.btn}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={styles.btnText}>No, Just Kidding</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor={"#6a89ef"} style={styles.btn} onPress={onLogout}>
                <Text style={styles.btnText}>Yes, Log Me Out</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PopupMenu;
