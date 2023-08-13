import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { darkLowTransparantColor } from "../../../../helpers/colors";
import { fontRobotoM } from "../../../../helpers/fonts";
import { useNavigation } from "@react-navigation/native";

export default function Banner({ data }: { data: any }) {
  const navigation: any = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Event")}
      className="w-full h-[200px] border rounded-[20px]  rounded-b-[0px] shadow"
    >
      <Image
        className="w-full h-full rounded-[20px] rounded-b-[0px]"
        source={{ uri: data.img }}
      />
      <View
        className="w-full py-3 px-2 absolute z-10 bottom-0"
        style={{ backgroundColor: darkLowTransparantColor }}
      >
        <Text className="text-white" style={fontRobotoM}>
          {data.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
