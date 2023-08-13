import { View, Text, Image } from "react-native";
import React from "react";
import { primaryColor, secondaryColor } from "../../../../helpers/colors";
import { fontRobotoM } from "../../../../helpers/fonts";
import { formatDuration } from "../../../../helpers/handlers/generateTime";

export default function BoxChatUser({ data }: { data: any }) {
  return (
    <View className="p-3  flex-row items-center justify-end">
      <View
        className=" m-w-[150px] max-w-[90%] min-h-[50px mr-3 rounded-t-xl rounded-bl-xl p-3 items-end"
        style={{ backgroundColor: primaryColor }}
      >
        <Text
          style={{ ...fontRobotoM, color: "white" }}
          className="text-[12px]"
        >
          {data.text}
        </Text>
        <Text className="text-[8px] mt-2" style={{ color: secondaryColor }}>
          {formatDuration(data.created_at)}
        </Text>
      </View>
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
    </View>
  );
}
