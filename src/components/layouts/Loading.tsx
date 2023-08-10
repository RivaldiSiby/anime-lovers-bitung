import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { darkTransparantColor } from "../../helpers/colors";
import { fontRobotoB } from "../../helpers/fonts";

export default function Loading() {
  return (
    <View
      className="w-full h-full absolute z-20 items-center justify-center"
      style={{ backgroundColor: darkTransparantColor }}
    >
      <View className="flex-row">
        <ActivityIndicator size="small" color="white" />
        <Text className="text-white ml-2" style={fontRobotoB}>
          Loading . . .
        </Text>
      </View>
    </View>
  );
}
