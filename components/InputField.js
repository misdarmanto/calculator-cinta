import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { heightDimensions, widthDimensions } from "../global/Dimensions";
import { FontAwesome } from "@expo/vector-icons";

const InputField = ({ stateCallback, stateValue, name, gender }) => {
  return (
    <View style={styles.textInput}>
      {gender === "male" ? (
        <FontAwesome name="male" size={30} color="#B1B1B1" />
      ) : (
        <FontAwesome name="female" size={30} color="#B1B1B1" />
      )}
      <TextInput
        style={{ paddingLeft: widthDimensions(5), color: "gray" }}
        onChangeText={stateCallback}
        value={stateValue}
        placeholder={name}
        placeholderTextColor={"#B1B1B1"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: heightDimensions(7),
    backgroundColor: "#f3f3f3",
    marginVertical: 2,
    borderRadius: 20,
    marginVertical: heightDimensions(0.5),
    color: "gray",
    textAlign: "center",
    fontSize: 18,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: widthDimensions(5),
  },
});

export default InputField;
