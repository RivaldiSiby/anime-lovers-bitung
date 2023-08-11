import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { primaryColor } from "../../helpers/colors";
import { MaterialIcons } from "@expo/vector-icons";

export default function AddBox({ handler }: { handler: any }) {
  return (
    <TouchableOpacity
      onPress={() => handler()}
      className="absolute w-[50px] h-[50px] bottom-5 right-5 rounded-lg items-center justify-center"
      style={{ backgroundColor: primaryColor }}
    >
      <MaterialIcons name="add" size={30} color="white" />
    </TouchableOpacity>
  );
}
