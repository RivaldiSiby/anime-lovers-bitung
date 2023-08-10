import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { primaryColor } from "../../helpers/colors";
import { fontRobotoB } from "../../helpers/fonts";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function HeaderAuth({ label = "title" }: { label: string }) {
  const navigation: any = useNavigation();
  return (
    <View
      className="h-2/6 justify-end items-center "
      style={{
        backgroundColor: primaryColor,
        borderBottomEndRadius: 80,
        borderBottomLeftRadius: 80,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="absolute left-5 top-5 "
      >
        <Ionicons name="arrow-back-sharp" size={24} color="white" />
      </TouchableOpacity>
      <Image className="" source={require("../../assets/img/logom.png")} />
      <Text className="text-white text-[30px] m-5" style={fontRobotoB}>
        {label}
      </Text>
    </View>
  );
}
