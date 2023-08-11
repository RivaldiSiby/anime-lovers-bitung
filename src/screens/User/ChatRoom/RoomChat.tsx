import { View, Text, ScrollView } from "react-native";
import React, { useRef, useState } from "react";
import HeaderBack from "./components/HeaderBack";
import BoxChat from "./components/BoxChat";
import BoxChatUser from "./components/BoxChatUser";
import ChatInput from "./components/ChatInput";
import DownBtn from "./components/DownBtn";

export default function RoomChat() {
  const [offset, setOffset] = useState(0);
  const scrollViewRef: any = useRef();

  const slowlyScrollDown = () => {
    const y = offset;
    scrollViewRef.current.scrollTo({ x: 0, y, animated: true });
  };

  return (
    <View className="flex-1">
      <HeaderBack />
      <View className="px-3 flex-1">
        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={(width, height) => {
            console.log(height);
            setOffset(height);
          }}
        >
          <BoxChat />
          <BoxChat />
          <BoxChatUser />
          <BoxChatUser />
          <BoxChat />

          <BoxChatUser />
          <BoxChatUser />
          <BoxChatUser />
          <BoxChatUser />
          <BoxChatUser />
          <BoxChatUser />
          <BoxChatUser />
          <BoxChatUser />
          <BoxChatUser />
          <BoxChatUser />
          <BoxChatUser />
          <BoxChatUser />
          <BoxChatUser />
          <BoxChatUser />
          <BoxChatUser />
          <BoxChatUser />
        </ScrollView>
        {/* dpwn btn */}
        <DownBtn handler={slowlyScrollDown} />
      </View>
      <ChatInput />
    </View>
  );
}
