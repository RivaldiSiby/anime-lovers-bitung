import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { primaryColor } from "../../../../helpers/colors";

export default function DownBtn({ handler }: { handler: any }) {
  return (
    <TouchableOpacity
      onPress={() => handler()}
      className="w-[25px] h-[25px] rounded-full absolute bottom-3 z-20 left-5 justify-center items-center"
      style={{ backgroundColor: primaryColor }}
    >
      <Feather name="chevrons-down" size={20} color="white" />
    </TouchableOpacity>
  );
}
