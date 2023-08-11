import { View, Text, Image } from "react-native";
import React from "react";
import {
  fontOswaldB,
  fontRobotoB,
  fontRobotoM,
} from "../../../../helpers/fonts";
import {
  darkLowTransparantColor,
  primaryColor,
} from "../../../../helpers/colors";

export default function BoxChat() {
  return (
    <View className="p-3  flex-row items-center">
      <Image
        className="w-[30px] h-[30px] rounded-full"
        source={require("../../../../assets/img/dumy/profile.jpeg")}
        style={{ borderWidth: 2, borderColor: primaryColor }}
      />
      <View className=" m-w-[150px] max-w-[90%] min-h-[50px] bg-white ml-3 rounded-t-xl rounded-br-xl p-3">
        <Text style={{ ...fontRobotoB, color: primaryColor }} className="mb-1">
          Samuel ridan
        </Text>
        <Text
          style={{ ...fontRobotoM, color: primaryColor }}
          className="text-[12px]"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
          alias quas distinctio ratione dolorum? Et aliquid, dolore nesciunt
          asperiores excepturi officia commodi porro dolorem voluptatibus
          labore! Quibusdam ad harum tenetur?
        </Text>
      </View>
    </View>
  );
}
