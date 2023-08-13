import { View, Text, Image } from "react-native";
import React from "react";
import { darkLowTransparantColor } from "../../../../helpers/colors";
import { fontRobotoM } from "../../../../helpers/fonts";
import { Fontisto } from "@expo/vector-icons";

export default function BoxImg({ img, date }: { img: string; date: string }) {
  return (
    <View className="w-full h-[200px] border  shadow">
      <Image className="w-full h-full rounded-b-[0px]" source={{ uri: img }} />
      <View
        className="w-full py-3 px-2 absolute z-10 bottom-0 flex-row items-center"
        style={{ backgroundColor: darkLowTransparantColor }}
      >
        <Fontisto name="date" size={20} color="white" />
        <Text className="text-white ml-3" style={fontRobotoM}>
          {date}
        </Text>
      </View>
    </View>
  );
}
