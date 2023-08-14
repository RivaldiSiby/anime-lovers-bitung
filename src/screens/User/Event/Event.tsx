import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import TabBarMenu from "../../../components/layouts/TabBarMenu";
import { fontOswaldM } from "../../../helpers/fonts";
import EventList from "../../../components/layouts/EventList";
import AddBox from "../../../components/layouts/AddBox";
import { limit, onSnapshot, orderBy, query } from "firebase/firestore";
import {
  eventCollection,
  updateEvent,
} from "../../../service/firestore/user/event";
import { useSelector } from "react-redux";
import Loading from "../../../components/layouts/Loading";
import { getAuth } from "firebase/auth";
import { app } from "../../../config/firebase/config";

export default function Event({ navigation }: any) {
  const [data, setData] = useState<any>(false);
  const userdata = useSelector((state: any) => state.user.data);
  const user = getAuth(app).currentUser;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user === null) return navigation.replace("Splash");
  }, []);

  useEffect(() => {
    const q = query(eventCollection, limit(1), orderBy("created_at", "desc"));
    const snapshot = onSnapshot(q, (res) => {
      const wrapdata: any = [];
      res.docs.forEach((doc) => {
        wrapdata.push({ ...doc.data(), id: doc.id });
      });
      setData(wrapdata.length > 0 ? wrapdata[0] : false);
    });
    return () => {
      snapshot();
    };
  }, []);

  console.log(data);

  const submitHadir = async (hadir: boolean) => {
    try {
      setLoading(true);
      const wrapdata = data;
      const check = wrapdata.menanggapi.findIndex(
        (f: any) => f.id === userdata.id
      );

      if (check !== -1) {
        wrapdata.menanggapi[check].hadir = hadir;
      } else {
        const payloadItem = { id: userdata.id, hadir: hadir };
        wrapdata.menanggapi.push(payloadItem);
      }

      await updateEvent(wrapdata, data.id);
      setLoading(false);
      return;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <View className="flex-1">
      {!loading ? "" : <Loading />}
      <Text className="w-full text-center my-5" style={fontOswaldM}>
        View Event
      </Text>
      <View className="flex-1 px-5">
        {data !== false ? <EventList handler={submitHadir} data={data} /> : ""}

        {userdata.role === "admin" ? (
          <AddBox handler={() => navigation.navigate("AddEvent")} />
        ) : (
          ""
        )}
      </View>
      <TabBarMenu active="event" />
    </View>
  );
}
