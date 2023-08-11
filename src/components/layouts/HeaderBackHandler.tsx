import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { fontOswaldM } from "../../helpers/fonts";
import { Entypo } from "@expo/vector-icons";
import { primaryColor } from "../../helpers/colors";
import { useNavigation } from "@react-navigation/native";

export default function HeaderBackHandler({ label }: { label: string }) {
  const navigation: any = useNavigation();
  return (
    <View style={{ backgroundColor: primaryColor }}>
      <View className="w-full absolute py-5 px-3 ">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="w-[30px] z-20"
        >
          <Entypo name="chevron-left" size={24} color={"white"} />
        </TouchableOpacity>
      </View>
      <Text className="w-full text-white text-center my-5" style={fontOswaldM}>
        {label}
      </Text>
    </View>
  );
}
