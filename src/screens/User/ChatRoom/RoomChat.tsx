import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useMemo, useRef, useState } from "react";
import HeaderBack from "./components/HeaderBack";
import BoxChat from "./components/BoxChat";
import BoxChatUser from "./components/BoxChatUser";
import ChatInput from "./components/ChatInput";
import DownBtn from "./components/DownBtn";
import { useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
import { app } from "../../../config/firebase/config";
import { addChat, chatCollection } from "../../../service/firestore/user/chat";
import { limit, onSnapshot, orderBy, query, where } from "firebase/firestore";
import {
  romCollection,
  updateRoom,
} from "../../../service/firestore/user/room";
import { Entypo } from "@expo/vector-icons";
import { secondaryColor } from "../../../helpers/colors";
import { fontRobotoM } from "../../../helpers/fonts";

export default function RoomChat({ navigation, route }: any) {
  const user: any = getAuth(app).currentUser;
  const userdata = useSelector((state: any) => state.user.data);
  const [data, setData] = useState([]);

  const { room } = route.params;
  const [offset, setOffset] = useState(0);
  const scrollViewRef: any = useRef();
  const [chatVal, setChatVal] = useState("");
  const [config, setConfig] = useState(room);

  const [loading, setLoading] = useState(false);

  const slowlyScrollDown = () => {
    const y = offset;
    scrollViewRef.current.scrollTo({ x: 0, y, animated: true });
  };

  const submitHandler = async () => {
    try {
      setLoading(true);

      // payload data
      const payloadData = {
        created_by: {
          id: user.uid,
          name: user.displayName,
          img: user.photoURL,
          role: userdata.role,
        },
        text: chatVal,
        roomId: room.id,
      };

      await addChat(payloadData);
      setChatVal("");
      setLoading(false);
      slowlyScrollDown();
      return;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const updateChatActive = async () => {
    try {
      setLoading(true);
      const payloadData = config;
      payloadData.chat = !config.chat ? true : false;
      await updateRoom(payloadData, config.id);
      setLoading(false);
      return;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const snapshotData = () => {
    let q = query(chatCollection, where("roomId", "==", room.id), limit(50));
    return onSnapshot(q, (res) => {
      const wrapdata: any = [];
      res.docs.forEach((doc) => {
        wrapdata.push({ ...doc.data(), id: doc.id });
      });
      wrapdata.sort((a: any, b: any) => a.created_at - b.created_at);
      setData(wrapdata);
    });
  };
  const snapshotDataConfig = () => {
    let q = query(romCollection);
    return onSnapshot(q, (res) => {
      const wrapdata: any = [];
      res.docs.forEach((doc) => {
        if (doc.id === room.id) {
          wrapdata.push({ ...doc.data(), id: doc.id });
        }
      });
      setConfig(wrapdata[0]);
    });
  };

  // get data
  useEffect(() => {
    return snapshotData();
  }, []);

  useEffect(() => {
    return snapshotDataConfig();
  }, []);

  console.log(config.chat);
  return (
    <View className="flex-1">
      <HeaderBack
        handler={updateChatActive}
        label={room.title}
        lock={config.chat}
      />
      <View className="px-3 flex-1">
        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={(width, height) => {
            setOffset(height);
          }}
        >
          <>
            {data.map((v: any) =>
              v.created_by.id === user.uid ? (
                <BoxChatUser data={v} key={v.id} />
              ) : (
                <BoxChat data={v} key={v.id} />
              )
            )}
          </>
        </ScrollView>
        {/* dpwn btn */}
        <DownBtn handler={slowlyScrollDown} />
      </View>
      {config.chat !== false ? (
        <ChatInput
          loading={loading}
          setVal={setChatVal}
          val={chatVal}
          handler={submitHandler}
        />
      ) : (
        <View className="w-full flex-row justify-center py-3">
          <Entypo name="lock" size={15} color={secondaryColor} />
          <Text
            className="text-[12px] ml-1"
            style={{ ...fontRobotoM, color: secondaryColor }}
          >
            Chat telah di nonaktifkan oleh admin
          </Text>
        </View>
      )}
    </View>
  );
}
