import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import TabBarMenu from "../../../components/layouts/TabBarMenu";
import { fontOswaldM } from "../../../helpers/fonts";
import PostList from "../../../components/layouts/PostList";
import AddBox from "../../../components/layouts/AddBox";
import { limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { delDoc, postCollection } from "../../../service/firestore/user/post";
import { getAuth } from "firebase/auth";
import { app } from "../../../config/firebase/config";
import ModalConfirm from "../../../components/modal/ModalConfirm";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { primaryColor } from "../../../helpers/colors";
import { deleteImgByUrl } from "../../../service/storege/firestorege";
import { useSelector } from "react-redux";

export default function Post({ navigation }: any) {
  const user: any = getAuth(app).currentUser;
  const userdata = useSelector((state: any) => state.user.data);
  const [data, setData] = useState([]);

  // modal
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState<any>("");

  useEffect(() => {
    const q = query(postCollection, limit(50), orderBy("created_at", "desc"));
    const snapshot = onSnapshot(q, (res) => {
      const wrapdata: any = [];
      res.docs.forEach((doc) => {
        wrapdata.push({ ...doc.data(), id: doc.id });
      });
      setData(wrapdata);
    });
    return () => {
      snapshot();
    };
  }, []);

  console.log(userdata);

  const handlerDelete = async () => {
    try {
      if (selected.img !== "") await deleteImgByUrl(selected.img);
      await delDoc(selected.id);
      setActive(false);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const selectedHandler = (payload: any) => {
    console.log(payload);
    setSelected(payload);
    setActive(true);
  };
  return (
    <View className="flex-1">
      <ModalConfirm
        handler={() => handlerDelete()}
        text="Apakah Anda yakin untuk menghapus data ini ?"
        icon={<Ionicons name="warning-outline" size={100} color="black" />}
        active={active}
        setActive={setActive}
      />
      <Text className="w-full text-center my-5" style={fontOswaldM}>
        View Post
      </Text>
      <View className="flex-1 px-5 pb-5">
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.map((v: any) => (
            // with delete
            <>
              {userdata.role === "admin" && user.uid === v?.created_by?.id ? (
                <View
                  className="w-full border items-end rounded-lg pt-3 mb-5"
                  style={{ backgroundColor: primaryColor }}
                >
                  {user.uid === v?.created_by?.id ? (
                    <TouchableOpacity
                      onPress={() => selectedHandler(v)}
                      className="mr-3"
                    >
                      <AntDesign name="delete" size={20} color="white" />
                    </TouchableOpacity>
                  ) : null}

                  <PostList key={v.id} data={v} />
                </View>
              ) : (
                <PostList key={v.id} data={v} />
              )}
            </>
          ))}
        </ScrollView>
        <AddBox handler={() => navigation.navigate("AddPost")} />
      </View>
      <TabBarMenu active="post" />
    </View>
  );
}
