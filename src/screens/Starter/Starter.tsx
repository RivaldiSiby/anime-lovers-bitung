import { View, Text, Image } from "react-native";
import React from "react";
import { darkTransparantColor, primaryColor } from "../../helpers/colors";
import { fontOswaldB } from "../../helpers/fonts";
import TextWrap from "./components/TextWrap";
import ButtonPress from "../../components/layouts/ButtonPress";
import ButtonPressOutline from "../../components/layouts/ButtonPressOutline";

export default function Starter({ navigation }: any) {
  return (
    <View className="flex-1">
      <Image
        className="w-full h-full"
        source={require("../../assets/img/bgp.jpeg")}
      />
      <View
        className="absolute w-full h-full items-center justify-end"
        style={{ backgroundColor: darkTransparantColor }}
      >
        <Image className="" source={require("../../assets/img/logoicon.png")} />
        <View className=" w-full px-5 items-center pb-5 mt-20">
          <TextWrap />
          <View className="mt-5 w-full items-center">
            <ButtonPress
              fontBold
              handler={() => navigation.navigate("Login")}
              width="80%"
              label="LOGIN"
              textColor={primaryColor}
              bgcolor="white"
            />
            <ButtonPressOutline
              fontBold
              handler={() => navigation.navigate("Daftar")}
              width="80%"
              label="DAFTAR"
              textColor={"white"}
              borderColor="white"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
