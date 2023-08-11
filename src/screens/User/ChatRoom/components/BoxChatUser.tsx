import { View, Text, Image } from "react-native";
import React from "react";
import { primaryColor } from "../../../../helpers/colors";
import { fontRobotoM } from "../../../../helpers/fonts";

export default function BoxChatUser() {
  return (
    <View className="p-3  flex-row items-center justify-end">
      <View
        className=" m-w-[150px] max-w-[90%] min-h-[50px mr-3 rounded-t-xl rounded-bl-xl p-3"
        style={{ backgroundColor: primaryColor }}
      >
        <Text
          style={{ ...fontRobotoM, color: "white" }}
          className="text-[12px]"
        >
          tes chat ?
        </Text>
      </View>
      <Image
        className="w-[30px] h-[30px] rounded-full"
        source={require("../../../../assets/img/dumy/profile.jpeg")}
        style={{ borderWidth: 2, borderColor: primaryColor }}
      />
    </View>
  );
}
