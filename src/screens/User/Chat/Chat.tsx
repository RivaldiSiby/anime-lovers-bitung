import { View, Text } from "react-native";
import React, { useState } from "react";
import TabBarMenu from "../../../components/layouts/TabBarMenu";
import { fontOswaldM } from "../../../helpers/fonts";
import ChatRoom from "../../../components/layouts/ChatRoom";
import AddBox from "../../../components/layouts/AddBox";

export default function Chat({ navigation }: any) {
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

        <AddBox handler={() => navigation.navigate("AddRoom")} />
      </View>
      <TabBarMenu active="chat" />
    </View>
  );
}
