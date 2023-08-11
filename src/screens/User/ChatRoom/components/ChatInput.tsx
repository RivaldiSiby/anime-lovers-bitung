import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { secondaryColor } from "../../../../helpers/colors";
import InputRadio from "../../../../components/forms/InputRadio";

export default function ChatInput() {
  return (
    <View className="w-full bg-white flex-row p-3 py-5 ">
      <View className=" flex-1">
        <InputRadio />
      </View>
      <TouchableOpacity className="ml-5 justify-end">
        <MaterialCommunityIcons
          name="send-circle"
          size={30}
          color={secondaryColor}
        />
      </TouchableOpacity>
    </View>
  );
}
