import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { darkLowTransparantColor, primaryColor } from "../../helpers/colors";
import { fontRobotoM } from "../../helpers/fonts";
import { useNavigation } from "@react-navigation/native";

export default function ChatRoom() {
  const navigation: any = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("RoomChat")}
      className="w-[100px] h-[100px] shadow rounded-lg mr-3 mb-3"
    >
      <Image
        style={{ borderWidth: 2, borderColor: primaryColor }}
        className="w-full h-full rounded-lg "
        source={require("../../assets//img/dumy/gear5.jpeg")}
      />
      <View
        className="w-full py-1 px-2 absolute z-10 bottom-0 rounded-b-lg"
        style={{ backgroundColor: darkLowTransparantColor }}
      >
        <Text className="text-white text-[12px]" style={fontRobotoM}>
          One Pieace
        </Text>
      </View>
    </TouchableOpacity>
  );
}
