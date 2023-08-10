import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { primaryColor } from "../../../../helpers/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { fontRobotoB, fontRobotoM } from "../../../../helpers/fonts";

export default function HeaderHome(payload: { img: any }) {
  const { img } = payload;
  return (
    <View
      className="w-full h-[20%] justify-start items-center  flex-row px-5"
      style={{ backgroundColor: primaryColor }}
    >
      <View
        className="w-[60px] h-[60px] bg-white rounded-full items-center justify-center mr-5"
        style={{ borderWidth: 2, borderColor: "white" }}
      >
        <Image
          className="w-full h-full rounded-full"
          source={{
            uri: img,
          }}
        />
      </View>
      <View className="flex-1">
        <Text className="text-white text-[30px]" style={fontRobotoB}>
          Hi, User
        </Text>
        <Text className="text-white text-[12px]" style={fontRobotoM}>
          rivaldisiby@gmail.com
        </Text>
      </View>
      <Image
        className="absolute right-0 top-0"
        source={require("../../../../assets/img/layout/layout1.png")}
      />
      <Image
        className="absolute left-0 top-0"
        source={require("../../../../assets/img/layout/layout2.png")}
      />
    </View>
  );
}
