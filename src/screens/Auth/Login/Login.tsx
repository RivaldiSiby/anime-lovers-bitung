import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
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
import { signInUser } from "../../../service/fireauth/fireauth";
import ErrMsg from "../../../components/layouts/ErrMsg";
import Loading from "../../../components/layouts/Loading";
import { getUser } from "../../../service/firestore/user/user";
import { useDispatch } from "react-redux";
import { addUser } from "../../../redux/action/user";

export default function Login({ navigation }: any) {
  const dispatch: any = useDispatch();
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const changePayload = (val: string, type: string) => {
    if (type === "email") setPayload({ ...payload, email: val });
    if (type === "password") setPayload({ ...payload, password: val });
  };

  const submitHandler = async () => {
    try {
      setLoading(true);
      setErrMsg("");
      // validation input fields
      if (payload.email === "" || payload.password === "") {
        setLoading(false);
        return setErrMsg("Ada Inputan yang kosong !");
      }

      // create user
      const data = { email: payload.email, password: payload.password };
      const result = await signInUser(data);
      const userdata = await getUser(result.uid);
      dispatch(addUser(userdata));
      setLoading(false);

      if (result.displayName === null) return navigation.replace("StarterUser");
      return navigation.replace("Home");
    } catch (error: any) {
      setLoading(false);
      console.log("check error");
      console.log(error.message);
      const msgErr = error.message.split(" ");
      if (msgErr.length >= 3) {
        return setErrMsg("Email tidak valid atau password salah");
      }

      return error;
    }
  };
  return (
    <View className="bg-white flex-1">
      {!loading ? "" : <Loading />}
      <HeaderAuth label="Login" />
      <TextAuth
        text=" Hallo Anime Lovers Bitung , Selamat datang Silahkan email dan password
        anda untuk login"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="w-full px-[7.5%]"
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
        <ErrMsg msg={errMsg} />
        <View className="w-full ">
          <ButtonPress
            fontBold={false}
            handler={() => submitHandler()}
            width="100%"
            label="Login"
            textColor={"white"}
            bgcolor={primaryColor}
          />
          {/* <LineText label="atau" />
          <ButtonPressOutline
            fontBold={false}
            handler={() => console.log("Daftar")}
            width="100%"
            label={
              <>
                <Image
                  className="w-[15px] h-[15px] mr-5"
                  source={require("../../../assets/img/google.webp")}
                />
                <Text className="ml-5">{"   "}Login Google</Text>
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
