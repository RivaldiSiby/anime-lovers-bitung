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
  secondaryColor,
} from "../../../../helpers/colors";
import { formatDuration } from "../../../../helpers/handlers/generateTime";

export default function BoxChat({ data }: { data: any }) {
  return (
    <View className="p-3  flex-row items-center">
      <View className="items-center">
        <Image
          className="w-[30px] h-[30px] rounded-full"
          source={{ uri: data.created_by.img }}
          style={{
            borderWidth: 2,
            borderColor: data.created_at.role === "user" ? primaryColor : "red",
          }}
        />
      </View>
      <View className=" m-w-[150px] max-w-[90%] min-h-[50px] bg-white ml-3 rounded-t-xl rounded-br-xl p-3">
        <Text style={{ ...fontRobotoB, color: primaryColor }} className="mb-1">
          {data.created_by.name}
        </Text>
        <Text
          style={{ ...fontRobotoM, color: primaryColor }}
          className="text-[12px]"
        >
          {data.text}
        </Text>
        <Text className="text-[8px] mt-2" style={{ color: secondaryColor }}>
          {formatDuration(data.created_at)}
        </Text>
      </View>
    </View>
  );
}
