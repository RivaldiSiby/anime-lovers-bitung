import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  lightColor,
  primaryColor,
  secondaryColor,
} from "../../../../helpers/colors";
import HeaderBackHandler from "../../../../components/layouts/HeaderBackHandler";
import ButtonPress from "../../../../components/layouts/ButtonPress";
import InputForm from "../../../../components/forms/InputForm";
import { MaterialIcons } from "@expo/vector-icons";
import InputImg from "../../../../components/forms/InputImg";
import { getAuth } from "firebase/auth";
import { app } from "../../../../config/firebase/config";
import Loading from "../../../../components/layouts/Loading";
import { uriToBlob } from "../../../../helpers/handlers/imgHandler";
import { uploadImgRoom } from "../../../../service/storege/firestorege";
import { addRoom } from "../../../../service/firestore/user/room";

export default function AddRoom({ navigation }: any) {
  const user: any = getAuth(app).currentUser;
  const [payload, setPayload] = useState({
    title: "",
    img: "",
  });

  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(payload);

  const submitHandler = async () => {
    try {
      setLoading(true);
      setErrMsg("");
      if (payload.title === "")
        return setErrMsg("Isi postingan tidak boleh kosong !");
      if (payload.img === "")
        return setErrMsg("Gambar room chat tidak boleh kosong !");

      // handler img
      let urlImg = "";
      if (payload.img !== "") {
        const blobImg = await uriToBlob(payload.img);
        const payloadImg = {
          uri: payload.img,
          blob: blobImg,
        };

        urlImg = await uploadImgRoom(payloadImg);
      }

      // payload data
      const payloadData = {
        created_by: {
          id: user.uid,
          name: user.displayName,
        },
        title: payload.title,
        img: urlImg,
        chat: true,
      };

      await addRoom(payloadData);
      return navigation.navigate("Chat");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <View className="flex-1" style={{ backgroundColor: primaryColor }}>
      {!loading ? "" : <Loading />}
      <HeaderBackHandler label="Buat Room Chat" />
      <View
        className="flex-1 rounded-t-[30px] px-5"
        style={{ backgroundColor: lightColor }}
      >
        <InputForm
          secure={false}
          setVal={(val: string) => setPayload({ ...payload, title: val })}
          type="title"
          val={payload.title}
          placeholder={"Judul ..."}
          icon={<MaterialIcons name="title" size={24} color={primaryColor} />}
        />
        <InputImg
          text="Masukan Gambar Chat Room"
          img={payload.img}
          setImg={(val: any) => setPayload({ ...payload, img: val })}
        />
        <ButtonPress
          fontBold={false}
          handler={() => submitHandler()}
          width="100%"
          label="Submit"
          textColor={"white"}
          bgcolor={primaryColor}
        />
      </View>
    </View>
  );
}
