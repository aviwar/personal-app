import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import { Button, Icon, Layout, Spinner } from "@ui-kitten/components";

const FAB = ({ icon, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.touchableOpacityStyle}
    >
      <Icon style={styles.icon} fill="#8F9BB3" name={icon} />
    </TouchableOpacity>
  );
};

export default FAB;

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
    // width: 50,
    // height: 50,
  },
  touchableOpacityStyle: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: "contain",
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
});
