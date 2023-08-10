import { View, Text } from "react-native";
import React from "react";
import { fontRobotoB } from "../../helpers/fonts";

export default function LineText({ label }: { label: string }) {
  return (
    <View className="mt-5 w-full flex-row items-center px-[15%]">
      <View className="h-[2px] flex-1 bg-gray-400"></View>

      <Text className="text-gray-400 mx-5 text-center" style={fontRobotoB}>
        {label}
      </Text>
      <View className="h-[2px] flex-1 bg-gray-400 "></View>
    </View>
  );
}
