import { View, Text } from "react-native";
import React from "react";
import { fontOswaldB, fontRobotoR } from "../../../helpers/fonts";

export default function TextWrap() {
  return (
    <View>
      <Text className="text-center text-[50px] text-white" style={fontOswaldB}>
        WELCOME
      </Text>
      <Text className="text-center text-[20px] text-white " style={fontRobotoR}>
        Anime Lovers Bitung
      </Text>
    </View>
  );
}
