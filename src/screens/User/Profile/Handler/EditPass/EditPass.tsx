import { View, Text } from "react-native";
import React, { useState } from "react";
import { lightColor, primaryColor } from "../../../../../helpers/colors";
import ModalConfirm from "../../../../../components/modal/ModalConfirm";
import { Ionicons } from "@expo/vector-icons";
import { getAuth } from "firebase/auth";
import { app } from "../../../../../config/firebase/config";
import HeaderProfile from "../../../../../components/layouts/HeaderProfile";
import ButtonPress from "../../../../../components/layouts/ButtonPress";
import InputForm from "../../../../../components/forms/InputForm";
import { FontAwesome } from "@expo/vector-icons";
import { updatePass } from "../../../../../service/fireauth/fireauth";
import ErrMsg from "../../../../../components/layouts/ErrMsg";
import Loading from "../../../../../components/layouts/Loading";

export default function EditPass({ navigation }: any) {
  const user: any = getAuth(app).currentUser;
  const [img, setImg] = useState<any>(user?.photoURL);
  const [password, setPassword] = useState("");
  const [kPassword, setkPassword] = useState("");

  // modal
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const submitHandler = async () => {
    try {
      setLoading(true);
      if (kPassword === "" || password === "") {
        setLoading(false);
        return setErrMsg("inputan tidak boleh kosong !");
      }
      if (password !== kPassword) {
        setLoading(false);
        return setErrMsg("konfirmasi password tidak cocok !");
      }
      console.log(password);
      console.log(kPassword);
      await updatePass(password);
      setLoading(false);
      return navigation.replace("Profile");
    } catch (error: any) {
      setLoading(false);
      setErrMsg(error.message);
      console.log(error);
    }
  };

  return (
    <View className="flex-1" style={{ backgroundColor: primaryColor }}>
      {!loading ? "" : <Loading />}
      <HeaderProfile img={img} />

      <View
        className="flex-1 px-5"
        style={{
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: lightColor,
        }}
      >
        <InputForm
          secure
          setVal={setPassword}
          type="password"
          val={password}
          placeholder={"Masukan Password baru"}
          icon={<FontAwesome name="user" size={22} color={primaryColor} />}
        />
        <InputForm
          secure
          setVal={setkPassword}
          type="konfirpassword"
          val={kPassword}
          placeholder={"Konfirmasi Password baru"}
          icon={<FontAwesome name="user" size={22} color={primaryColor} />}
        />
        <View className="w-full items-center">
          <ErrMsg msg={errMsg} />
        </View>
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
