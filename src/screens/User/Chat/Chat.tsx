import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import TabBarMenu from "../../../components/layouts/TabBarMenu";
import { fontOswaldM } from "../../../helpers/fonts";
import ChatRoom from "../../../components/layouts/ChatRoom";
import AddBox from "../../../components/layouts/AddBox";
import { getRoom, romCollection } from "../../../service/firestore/user/room";
import { limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
import { app } from "../../../config/firebase/config";

export default function Chat({ navigation }: any) {
  const [data, setData] = useState([]);
  const userdata = useSelector((state: any) => state.user.data);

  const user = getAuth(app).currentUser;

  useEffect(() => {
    if (user === null) return navigation.replace("Splash");
  }, []);

  // get data
  useEffect(() => {
    const q = query(romCollection, limit(30), orderBy("created_at", "desc"));
    const snapshot = onSnapshot(q, (res) => {
      const wrapdata: any = [];
      res.docs.forEach((doc) => {
        wrapdata.push({ ...doc.data(), id: doc.id });
      });
      setData(wrapdata);
    });
    return () => snapshot();
  }, []);

  // console.log(data);
  return (
    <View className="flex-1">
      <Text className="w-full text-center my-5" style={fontOswaldM}>
        Chat Room
      </Text>
      <ScrollView>
        <View className="flex-1 px-3 flex-wrap flex-row w-full">
          {data.map((v: any) => (
            <ChatRoom data={v} key={v.id} />
          ))}
        </View>
      </ScrollView>
      <View>
        {userdata.role === "admin" ? (
          <AddBox handler={() => navigation.navigate("AddRoom")} />
        ) : (
          ""
        )}
      </View>
      <TabBarMenu active="chat" />
    </View>
  );
}
