import { View, Text } from "react-native";
import React from "react";
import { fontRobotoM } from "../../helpers/fonts";

export default function ErrMsg({ msg }: { msg: string }) {
  return (
    <View>
      <Text style={fontRobotoM} className="text-red-400 pt-3 text-[12px]">
        {msg}
      </Text>
    </View>
  );
}
