import React from "react";
import { View } from "react-native";
import { heightDimensions, widthDimensions } from "./Dimensions";

const Layout = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: widthDimensions(5),
        paddingTop: heightDimensions(5),
        backgroundColor: "#FFF",
        justifyContent: "space-between",
      }}
    >
      {children}
    </View>
  );
};

export default Layout;
