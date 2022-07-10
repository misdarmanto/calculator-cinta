import React, { useState } from "react";
import {  StyleSheet, Pressable } from "react-native";
import { mainColor } from "../global/Color";
import { heightDimensions, widthDimensions } from "../global/Dimensions";

const ButtonStyle = ({ children, onPress, style, disabled }) => {
  const [btnPress, setBtnPress] = useState(false);
  return (
    <Pressable style={styles.btnFirstLayer}>
      <Pressable
        disabled={disabled}
        onPress={onPress}
        onPressIn={() => setBtnPress(true)}
        onPressOut={() => setBtnPress(false)}
        style={[
          styles.btnSecondLayer,
          {
            height: btnPress ? heightDimensions(8.8) : heightDimensions(8),
          },
          style
        ]}
      >
        {children}
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnFirstLayer: {
    height: heightDimensions(8.8),
    marginTop: heightDimensions(0.8),
    backgroundColor: "#E3C6D0",
    borderRadius: 20,
    marginHorizontal: widthDimensions(1),
  },
  btnSecondLayer: {
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: heightDimensions(7),
    backgroundColor: mainColor,
    borderRadius: 20,
    paddingHorizontal: widthDimensions(3),
  },
});

export default ButtonStyle;
