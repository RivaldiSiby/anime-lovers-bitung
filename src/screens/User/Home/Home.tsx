import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
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
import { limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { eventCollection } from "../../../service/firestore/user/event";
import { romCollection } from "../../../service/firestore/user/room";
import { postCollection } from "../../../service/firestore/user/post";
import ChatRoom from "../../../components/layouts/ChatRoom";

export default function Home({ navigation }: any) {
  const user = getAuth(app).currentUser;
  const userInfo = useSelector((state: any) => state.user.data);

  const [event, setEvent] = useState([]);
  const [post, setPost] = useState([]);
  const [chat, setChat] = useState([]);

  useEffect(() => {
    if (user == null) return navigation.replace("Splash");
  }, [user]);

  // get event
  useEffect(() => {
    const q = query(eventCollection, limit(1), orderBy("created_at", "desc"));
    const snapshot = onSnapshot(q, (res) => {
      const wrapdata: any = [];
      res.docs.forEach((doc) => {
        wrapdata.push({ ...doc.data(), id: doc.id });
      });
      setEvent(wrapdata[0]);
    });
    return () => {
      snapshot();
    };
  }, []);

  // get chat
  useEffect(() => {
    const q = query(romCollection, limit(30), orderBy("created_at", "desc"));
    const snapshot = onSnapshot(q, (res) => {
      const wrapdata: any = [];
      res.docs.forEach((doc) => {
        wrapdata.push({ ...doc.data(), id: doc.id });
      });
      setChat(wrapdata);
    });
    return () => snapshot();
  }, []);

  // get post
  useEffect(() => {
    const q = query(postCollection, limit(3), orderBy("created_at", "desc"));
    const snapshot = onSnapshot(q, (res) => {
      const wrapdata: any = [];
      res.docs.forEach((doc) => {
        wrapdata.push({ ...doc.data(), id: doc.id });
      });
      setPost(wrapdata);
    });
    return () => {
      snapshot();
    };
  }, []);
  console.log(post);

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
            <Banner data={event} />
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
                {chat.map((v: any) => (
                  <ChatRoom data={v} key={v.id} />
                ))}
              </View>
            </ScrollView>
          </View>
          {/* post */}

          <View className="pt-2">
            <TtitleText label="New Post" />
            <View className="px-3 w-full">
              {post.map((v: any) => (
                <PostList key={v.id} data={v} />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
      <TabBarMenu active="home" />
    </View>
  );
}
