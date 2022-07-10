import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Keyboard } from "react-native";
import Layout from "./global/Layout";
import ButtonStyle from "./components/ButtonStyle";
import TextStyle from "./components/TextStyle";
import InputField from "./components/InputField";
import { heightDimensions, widthDimensions } from "./global/Dimensions";
import NetInfo from "@react-native-community/netinfo";
import AnimationStyles from "./components/Animation";
import BanerAd from "./AdMob/BanerAd";
import interstitialAdd from "./AdMob/InterstitialAdd";
import { Feather } from "@expo/vector-icons";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [secondeName, setSecondeName] = useState("");
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [adInterval, setAdInterval] = useState(1);

  useEffect(() => {
    const getNetInfo = NetInfo.addEventListener((state) => {
      setIsOffline(!state.isConnected || !state.isInternetReachable);
    });
    return () => getNetInfo();
  }, [isOffline]);

  useEffect(() => {
    if (adInterval % 5 === 0) interstitialAdd();
  }, [adInterval]);

  const getData = () => {
    fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?fname=${firstName}&sname=${secondeName}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "love-calculator.p.rapidapi.com",
          "x-rapidapi-key":
            "2ab54be8dbmsh4fc43a02c037eccp16c282jsna8649d17ffaa",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const submitHashtag = () => {
    Keyboard.dismiss();
    if (!(firstName && secondeName)) return;
    setAdInterval(adInterval + 1);
    setLoading(true);
    getData();
    setFirstName("");
    setSecondeName("");
  };

  return (
    <Layout>
      {isOffline && (
        <View style={styles.noInernet}>
          <Feather
            name="wifi-off"
            size={50}
            color="gray"
            style={{ marginHorizontal: widthDimensions(2) }}
          />
          <TextStyle>No Internet connection</TextStyle>
        </View>
      )}
      <View style={styles.result}>
        {loading && <TextStyle>Loading...</TextStyle>}
        {result && !isOffline === !loading && (
          <>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TextStyle style={{ width: widthDimensions(22) }}>
                {result.fname}
              </TextStyle>
              <AnimationStyles percentage={result.percentage} />
              <TextStyle style={{ width: widthDimensions(22) }}>
                {result.sname}
              </TextStyle>
            </View>

            <TextStyle>{result.percentage}%</TextStyle>
            <TextStyle>{result.result}</TextStyle>
          </>
        )}
      </View>
      <View>
        <InputField
          stateCallback={setFirstName}
          stateValue={firstName}
          name={"Name"}
          gender={"male"}
        />
        <InputField
          stateCallback={setSecondeName}
          stateValue={secondeName}
          name={"Name"}
        />
        <ButtonStyle onPress={submitHashtag}>
          <TextStyle style={{ color: "#FFF", fontSize: 25 }}>
            Calculate
          </TextStyle>
        </ButtonStyle>
      </View>
      <View style={styles.bannerAd}>
        <BanerAd />
      </View>
      <StatusBar style="auto" />
    </Layout>
  );
}

const styles = StyleSheet.create({
  result: {
    alignItems: "center",
    justifyContent: "center",
    height: heightDimensions(31),
  },
  bannerAd: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: heightDimensions(10),
  },
  noInernet: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
