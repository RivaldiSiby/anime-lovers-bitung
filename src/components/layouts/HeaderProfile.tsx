import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { darkTransparantColor, primaryColor } from "../../helpers/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { fontRobotoB, fontRobotoM } from "../../helpers/fonts";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

export default function HeaderProfile(payload: { img: any }) {
  const navigation: any = useNavigation();
  const { img } = payload;
  return (
    <View
      className="w-full h-2/6 justify-center items-center"
      style={{ backgroundColor: primaryColor }}
    >
      {/* back handler */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="w-[30px] z-20 absolute left-5 top-5"
      >
        <Entypo name="chevron-left" size={24} color={"white"} />
      </TouchableOpacity>
      <View className="w-[85px] h-[85px] bg-white rounded-full items-center justify-center mb-5">
        <Image className="w-full h-full rounded-full" source={{ uri: img }} />
      </View>
      <Text className="text-white text-[30px]" style={fontRobotoB}>
        Hi, User
      </Text>
      <Text className="text-white text-[12px]" style={fontRobotoM}>
        rivaldisiby@gmail.com
      </Text>
      <Image
        className="absolute right-0 top-0"
        source={require("../../assets/img/layout/layout1.png")}
      />
      <Image
        className="absolute left-0 top-0"
        source={require("../../assets/img/layout/layout2.png")}
      />
    </View>
  );
}
