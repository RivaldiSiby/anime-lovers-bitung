import { View, Text } from "react-native";
import React from "react";
import { fontRobotoM } from "../../helpers/fonts";
import { primaryColor } from "../../helpers/colors";

export default function TextAuth({ text }: { text: string }) {
  return (
    <View>
      <Text
        className="text-[14px] text-center mx-[7.5%] my-5"
        style={{ ...fontRobotoM, color: primaryColor, lineHeight: 20 }}
      >
        {text}
      </Text>
    </View>
  );
}
