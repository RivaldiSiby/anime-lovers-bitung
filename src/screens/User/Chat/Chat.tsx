import { View, Text } from "react-native";
import React, { useState } from "react";
import TabBarMenu from "../../../components/layouts/TabBarMenu";
import { fontOswaldM } from "../../../helpers/fonts";
import ChatRoom from "../../../components/layouts/ChatRoom";

export default function Chat() {
  return (
    <View className="flex-1">
      <Text className="w-full text-center my-5" style={fontOswaldM}>
        Chat Room
      </Text>
      <View className="flex-1 px-3 flex-wrap flex-row w-full">
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
      </View>
      <TabBarMenu active="chat" />
    </View>
  );
}
