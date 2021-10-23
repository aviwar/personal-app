import React from "react";
import { StyleSheet, View } from "react-native";
import { Spinner } from "@ui-kitten/components";

const Loader = () => (
  <View style={styles.loading}>
    <Spinner />
  </View>
);

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loader;
