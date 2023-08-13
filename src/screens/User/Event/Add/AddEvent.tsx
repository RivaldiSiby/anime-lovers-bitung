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
import InputRadio from "../../../../components/forms/InputRadio";
import InputFormArea from "../../../../components/forms/InputFormArea";
import { Entypo } from "@expo/vector-icons";
import { uriToBlob } from "../../../../helpers/handlers/imgHandler";
import { uploadImgEvent } from "../../../../service/storege/firestorege";
import { getAuth } from "firebase/auth";
import { app } from "../../../../config/firebase/config";
import { addEvent } from "../../../../service/firestore/user/event";
import Loading from "../../../../components/layouts/Loading";

export default function AddEvent({ navigation }: any) {
  const user: any = getAuth(app).currentUser;
  const [payload, setPayload] = useState({
    isi: "",
    img: "",
    title: "",
    location: "",
    date: "",
  });

  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(payload);

  const submitHandler = async () => {
    try {
      setLoading(true);
      setErrMsg("");
      if (payload.isi === "")
        return setErrMsg("isi postingan tidak boleh kosong !");

      // handler img
      let urlImg = "";
      if (payload.img !== "") {
        const blobImg = await uriToBlob(payload.img);
        const payloadImg = {
          uri: payload.img,
          blob: blobImg,
        };

        urlImg = await uploadImgEvent(payloadImg);
      }

      // payload data
      const payloadData = {
        created_by: {
          id: user.uid,
          name: user.displayName,
          img: user.photoURL,
        },
        title: payload.title,
        location: payload.location,
        date: payload.date,
        isi: payload.isi,
        img: urlImg,
        menanggapi: [],
      };

      await addEvent(payloadData);
      return navigation.navigate("Event");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <View className="flex-1" style={{ backgroundColor: primaryColor }}>
      {!loading ? "" : <Loading />}
      <HeaderBackHandler label="Buat Event" />
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
        <InputForm
          secure={false}
          setVal={(val: string) => setPayload({ ...payload, location: val })}
          type="location"
          val={payload.location}
          placeholder={"Lokasi ..."}
          icon={<Entypo name="location" size={24} color={primaryColor} />}
        />
        <InputForm
          secure={false}
          setVal={(val: string) => setPayload({ ...payload, date: val })}
          type="date"
          val={payload.date}
          placeholder={"Kapan Event dilaksanakan ? ..."}
          icon={
            <MaterialIcons name="date-range" size={24} color={primaryColor} />
          }
        />
        <InputFormArea
          val={payload.isi}
          setVal={(val: any) => setPayload({ ...payload, isi: val })}
        />
        <InputImg
          text="Upload Gambar Event ..."
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
