import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import { heightDimensions, widthDimensions } from "../global/Dimensions";

export default AnimationStyles = ({ percentage }) => {
  const animation = [];
  if (parseInt(percentage) >= 70) {
    animation.push(
      <LottieView
        key={1}
        style={{
          width: widthDimensions(45),
          height: heightDimensions(25),
        }}
        source={require("../assets/lottie/100%.json")}
        autoPlay
        loop={true}
      />
    );
  } else if (parseInt(percentage) >= 50){
    animation.push(
      <LottieView
        key={1}
        style={{
          width: widthDimensions(45),
          height: heightDimensions(25),
        }}
        source={require("../assets/lottie/50%.json")}
        autoPlay
        loop={true}
      />
    );
  } else if (parseInt(percentage) >= 25){
    animation.push(
      <LottieView
        key={1}
        style={{
          width: widthDimensions(45),
          height: heightDimensions(25),
        }}
        source={require("../assets/lottie/25%love.json")}
        autoPlay
        loop={true}
      />
    );
  }else{
    animation.push(
      <LottieView
        key={1}
        style={{
          width: widthDimensions(45),
          height: heightDimensions(25),
        }}
        source={require("../assets/lottie/0%.json")}
        autoPlay
        loop={true}
      />
    );
  }
  return <View>{animation}</View>;
};
