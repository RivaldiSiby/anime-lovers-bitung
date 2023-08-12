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
import { uriToBlob } from "../../../../helpers/handlers/imgHandler";
import { getAuth } from "firebase/auth";
import { app } from "../../../../config/firebase/config";
import { uploadImgPost } from "../../../../service/storege/firestorege";
import { addPost } from "../../../../service/firestore/user/post";
import ErrMsg from "../../../../components/layouts/ErrMsg";
import Loading from "../../../../components/layouts/Loading";

export default function AddPost({ navigation }: any) {
  const user: any = getAuth(app).currentUser;
  const [payload, setPayload] = useState({
    isi: "",
    img: "",
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

        urlImg = await uploadImgPost(payloadImg);
      }

      // payload data
      const payloadData = {
        created_by: {
          id: user.uid,
          name: user.displayName,
        },
        isi: payload.isi,
        img: urlImg,
      };

      await addPost(payloadData);
      return navigation.navigate("Post");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <View className="flex-1" style={{ backgroundColor: primaryColor }}>
      {!loading ? "" : <Loading />}
      <HeaderBackHandler label="Buat Postingan" />
      <View
        className="flex-1 rounded-t-[30px] px-5 items-center"
        style={{ backgroundColor: lightColor }}
      >
        <InputFormArea
          val={payload.isi}
          setVal={(val: any) => setPayload({ ...payload, isi: val })}
        />
        <InputImg
          text="Upload jika ingin menambah gambar"
          img={payload.img}
          setImg={(val: any) => setPayload({ ...payload, img: val })}
        />
        <ErrMsg msg={errMsg} />
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
