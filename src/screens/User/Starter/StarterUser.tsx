import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import HeaderUser from "../../../components/layouts/HeaderUser";
import { primaryColor } from "../../../helpers/colors";
import InputForm from "../../../components/forms/InputForm";
import { FontAwesome } from "@expo/vector-icons";
import ButtonPress from "../../../components/layouts/ButtonPress";
import TextAuth from "../../../components/layouts/TextAuth";
import * as ImagePicker from "expo-image-picker";
import { resizeHanlder } from "../../../helpers/handlers/resizeHandler";
import Loading from "../../../components/layouts/Loading";
import ErrMsg from "../../../components/layouts/ErrMsg";
import { getAuth } from "firebase/auth";
import { app } from "../../../config/firebase/config";
import { uploadImgUser } from "../../../service/storege/firestorege";
import { imgToUtf8, uriToBlob } from "../../../helpers/handlers/imgHandler";
import { updateProfileUser } from "../../../service/fireauth/fireauth";

export default function StarterUser({ navigation }: any) {
  const user: any = getAuth(app).currentUser;
  const [username, setUsername] = useState("");
  const [img, setImg] = useState<any>("");

  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const pickImg = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted")
        return Alert.alert("OOPS!", "Premmision denied", [{ text: "ok" }]);
      const result: any = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.canceled) {
        const uri: any = await resizeHanlder(result.assets[0].uri);

        setImg(uri.uri);
      }
    } catch (error) {}
  };

  const submitHandler = async () => {
    try {
      setLoading(true);
      setErrMsg("");
      if (img === "") {
        setLoading(false);
        return setErrMsg("Anda belum memasukan foto profile !");
      }
      if (username === "") {
        setLoading(false);
        return setErrMsg("Anda belum memasukan username !");
      }
      // prepare img
      const blobImg = await uriToBlob(img);
      const payloadImg = {
        uri: img,
        blob: blobImg,
      };
      // upload data
      const urlImg = await uploadImgUser(payloadImg, user.uid);
      console.log("Data uploaded");
      console.log(urlImg);
      // prepare data user
      const payloadUser = {
        displayName: username,
        photoURL: urlImg,
      };
      // change profile
      await updateProfileUser(payloadUser);
      setLoading(false);
      return navigation.replace("Home");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  console.log(img);
  return (
    <View className="flex-1" style={{ backgroundColor: primaryColor }}>
      {!loading ? "" : <Loading />}
      <HeaderUser img={img} handler={pickImg} />
      <View
        className="bg-white flex-1 px-[7.5%] items-center"
        style={{ borderTopRightRadius: 30, borderTopLeftRadius: 30 }}
      >
        <TextAuth text="Lengkapi Profile Anda" />
        <InputForm
          secure={false}
          setVal={setUsername}
          type="username"
          val={username}
          placeholder={"Username ..."}
          icon={<FontAwesome name="user" size={22} color={primaryColor} />}
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
