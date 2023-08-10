import { View, Text } from "react-native";
import React from "react";
import TabBarMenu from "../../../components/layouts/TabBarMenu";
import { fontOswaldM } from "../../../helpers/fonts";

export default function Event() {
  return (
    <View className="flex-1">
      <Text className="w-full text-center my-5" style={fontOswaldM}>
        View Event
      </Text>
      <View className="flex-1 "></View>
      <TabBarMenu active="event" />
    </View>
  );
}
