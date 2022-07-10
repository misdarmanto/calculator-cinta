import React from "react";
import { Text } from "react-native";

const TextStyle = ({ children, style }) => {
  return (
    <Text style={[{ fontSize: 20, fontWeight: "bold", color: "#9A9A9A", textAlign: "center" }, style]}>
      {children}
    </Text>
  );
};


export default TextStyle;