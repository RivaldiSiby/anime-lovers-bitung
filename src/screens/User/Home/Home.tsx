import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { auth, logoutUserHandler } from "../../../service/fireauth/fireauth";
import { getAuth } from "firebase/auth";
import { app } from "../../../config/firebase/config";
import { useSelector } from "react-redux";
import HeaderHome from "./components/Header";
import { lightColor, primaryColor } from "../../../helpers/colors";
import TabBarMenu from "../../../components/layouts/TabBarMenu";
import Banner from "./components/Banner";
import TtitleText from "./components/TtitleText";
import PostList from "../../../components/layouts/PostList";
import ChatRoomHome from "./components/ChatRoomHome";

export default function Home({ navigation }: any) {
  const user = getAuth(app).currentUser;
  const userInfo = useSelector((state: any) => state.user.data);

  useEffect(() => {
    if (user == null) return navigation.replace("Splash");
  }, [user]);

  console.log(userInfo);
  console.log(user?.photoURL);

  return (
    <View className="flex-1 " style={{ backgroundColor: primaryColor }}>
      <HeaderHome img={user?.photoURL} />
      <View
        className="flex-1 py-4 pb-5 rounded-t-[20px]"
        style={{
          backgroundColor: lightColor,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false} className="pb-5 ">
          {/* banner */}
          <View className="w-full px-3 py-3">
            <Banner />
          </View>
          {/* chat room */}
          <View className="w-full ">
            <TtitleText label="Chat Room" />
            <ScrollView
              horizontal={true}
              className="pt-2 w-full  "
              showsHorizontalScrollIndicator={false}
            >
              <View className="flex-row w-full px-3">
                <ChatRoomHome />
                <ChatRoomHome />
                <ChatRoomHome />
                <ChatRoomHome />
                <ChatRoomHome />
                <ChatRoomHome />
              </View>
            </ScrollView>
          </View>
          {/* post */}

          <View className="pt-2">
            <TtitleText label="New Post" />
            <View className="px-3 w-full">
              <PostList />
              <PostList />
              <PostList />
            </View>
          </View>
        </ScrollView>
      </View>
      <TabBarMenu active="home" />
    </View>
  );
}
