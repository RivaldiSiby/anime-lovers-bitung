import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderAuth from "../../../components/layouts/HeaderAuth";
import { fontRobotoM } from "../../../helpers/fonts";
import { primaryColor } from "../../../helpers/colors";
import TextAuth from "../../../components/layouts/TextAuth";
import InputForm from "../../../components/forms/InputForm";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import ButtonPress from "../../../components/layouts/ButtonPress";
import ButtonPressOutline from "../../../components/layouts/ButtonPressOutline";
import LineText from "../../../components/layouts/LineText";
import ErrMsg from "../../../components/layouts/ErrMsg";
import Loading from "../../../components/layouts/Loading";
import {
  signUpUser,
  signUpUserWithGoogle,
} from "../../../service/fireauth/fireauth";
import { addUser } from "../../../service/firestore/user/user";
import { useDispatch } from "react-redux";
import { addUser as addUserData } from "../../../redux/action/user";

export default function Daftar({ navigation }: any) {
  const dispatch: any = useDispatch();
  const [payload, setPayload] = useState({
    email: "",
    password: "",
    kpassword: "",
  });

  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const changePayload = (val: string, type: string) => {
    if (type === "email") setPayload({ ...payload, email: val });
    if (type === "password") setPayload({ ...payload, password: val });
    if (type === "kpassword") setPayload({ ...payload, kpassword: val });
  };

  const submitHandler = async () => {
    try {
      setLoading(true);
      setErrMsg("");
      // validation input fields
      if (
        payload.email === "" ||
        payload.password === "" ||
        payload.kpassword === ""
      ) {
        setLoading(false);
        return setErrMsg("Ada Inputan yang kosong !");
      }
      // config password field
      if (payload.kpassword !== payload.password) {
        setLoading(false);
        return setErrMsg("Konfirmasi Password tidak sama !");
      }

      if (payload.kpassword.length < 6) {
        setLoading(false);
        return setErrMsg("Password harus berisi lebih dari 6 karakter !");
      }
      // create user
      const data = { email: payload.email, password: payload.password };
      const result = await signUpUser(data);
      // add user payload
      const dataUser = {
        id: result.uid,
        role: "user",
      };
      const user = await addUser(dataUser);
      dispatch(addUserData(dataUser));
      console.log(user);
      setLoading(false);
      return navigation.replace("StarterUser");
    } catch (error: any) {
      setLoading(false);
      console.log("check error");
      const msgErr = error.message.split(" ");
      console.log(msgErr);
      if (msgErr.length >= 3) {
        if (msgErr[2] === "(auth/email-already-in-use).")
          return setErrMsg("Email sudah pernah digunakan");
        if (msgErr[2] === "(auth/invalid-email).")
          return setErrMsg("Email tidak valid");
      }

      return error;
    }
  };
  const submitGoogleHandler = async () => {
    try {
      const result = await signUpUserWithGoogle();
      console.log(result);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <View className="bg-white flex-1">
      {!loading ? "" : <Loading />}
      <HeaderAuth label="Daftar" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="w-full px-[7.5%] mb-5 pt-5"
      >
        <InputForm
          secure={false}
          setVal={changePayload}
          type="email"
          val={payload.email}
          placeholder={"Email "}
          icon={<FontAwesome name="user" size={22} color={primaryColor} />}
        />
        <InputForm
          secure
          setVal={changePayload}
          type="password"
          val={payload.password}
          placeholder={"Password"}
          icon={<MaterialIcons name="vpn-key" size={22} color={primaryColor} />}
        />
        <InputForm
          secure
          setVal={changePayload}
          type="kpassword"
          val={payload.kpassword}
          placeholder={"Konfirmasi Password"}
          icon={<MaterialIcons name="vpn-key" size={22} color={primaryColor} />}
        />
        <ErrMsg msg={errMsg} />
        <View className="w-full ">
          <ButtonPress
            fontBold={false}
            handler={() => submitHandler()}
            width="100%"
            label="Daftar"
            textColor={"white"}
            bgcolor={primaryColor}
          />
          {/* <LineText label="atau" />
          <ButtonPressOutline
            fontBold={false}
            handler={() => submitGoogleHandler()}
            width="100%"
            label={
              <>
                <Image
                  className="w-[15px] h-[15px] mr-5"
                  source={require("../../../assets/img/google.webp")}
                />
                <Text className="ml-5">{"   "}Daftar Google</Text>
              </>
            }
            textColor={primaryColor}
            borderColor={primaryColor}
          /> */}
        </View>
      </ScrollView>
    </View>
  );
}
