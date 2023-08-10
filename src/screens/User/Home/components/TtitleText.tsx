import { View, Text } from "react-native";
import React from "react";
import { fontOswaldM } from "../../../../helpers/fonts";
import { primaryColor } from "../../../../helpers/colors";

export default function TtitleText({ label }: { label: string }) {
  return (
    <View className="px-3">
      <Text
        className="text-[20px]"
        style={{ ...fontOswaldM, color: primaryColor }}
      >
        {label}
      </Text>
    </View>
  );
}
