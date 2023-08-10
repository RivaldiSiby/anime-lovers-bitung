import { View, Text, Image } from "react-native";
import React from "react";
import { darkLowTransparantColor } from "../../../../helpers/colors";
import { fontRobotoM } from "../../../../helpers/fonts";

export default function Banner() {
  return (
    <View className="w-full h-[200px] border rounded-[20px]  rounded-b-[0px] shadow">
      <Image
        className="w-full h-full rounded-[20px] rounded-b-[0px]"
        source={require("../../../../assets/img/dumy/banner.jpeg")}
      />
      <View
        className="w-full py-3 px-2 absolute z-10 bottom-0"
        style={{ backgroundColor: darkLowTransparantColor }}
      >
        <Text className="text-white" style={fontRobotoM}>
          EVENT : Nobar Luffy Gear 5 Bitung
        </Text>
      </View>
    </View>
  );
}
