import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { primaryColor, secondaryColor } from "../../helpers/colors";
import { fontRobotoR } from "../../helpers/fonts";

export default function InputImg({
  handler,
  text,
  img,
}: {
  handler: any;
  text: string;
  img: any;
}) {
  return (
    <View
      className="w-full h-[200px] bg-white rounded-xl mt-5 items-center justify-center"
      style={{ borderWidth: 1, borderColor: primaryColor }}
    >
      <TouchableOpacity onPress={() => handler()} className="items-center">
        <MaterialIcons
          name="add-photo-alternate"
          size={100}
          color={secondaryColor}
        />
        <Text className="text-[12px]" style={fontRobotoR}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
