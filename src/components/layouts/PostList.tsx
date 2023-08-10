import { View, Text, Image } from "react-native";
import React from "react";
import { fontOswaldB, fontRobotoB, fontRobotoM } from "../../helpers/fonts";
import { primaryColor } from "../../helpers/colors";

export default function PostList() {
  return (
    <View className="w-full py-5 px-3 bg-white mt-3 rounded-lg">
      {/* header */}
      <View className="flex-row">
        <Image
          className="w-[40px] h-[40px] rounded-full"
          source={require("../../assets/img/dumy/profile.jpeg")}
        />
        <View className="flex-1 pl-3">
          <Text style={{ ...fontRobotoB, color: primaryColor }}>Admin</Text>
          <Text className="text-[12px] text-red-400" style={{ ...fontRobotoM }}>
            LORD
          </Text>
        </View>
      </View>
      {/* main */}
      <Text className="pt-3 text-[12px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
        consequuntur eaque, vitae repudiandae ex corrupti blanditiis a est, quia
        consectetur, illum voluptatem magni aperiam deleniti expedita? Ullam
        deleniti explicabo alias.
      </Text>
      <Text className="text-[10px] text-right pt-3">08 - 06 - 2023</Text>
    </View>
  );
}
