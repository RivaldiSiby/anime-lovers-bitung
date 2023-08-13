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
import TextAuth from "../../../../../components/layouts/TextAuth";
import { updateProfileUser } from "../../../../../service/fireauth/fireauth";
import Loading from "../../../../../components/layouts/Loading";
import ErrMsg from "../../../../../components/layouts/ErrMsg";

export default function EditName({ navigation }: any) {
  const user: any = getAuth(app).currentUser;
  const [img, setImg] = useState<any>(user?.photoURL);
  const [username, setUsername] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // modal

  const submitHandler = async () => {
    try {
      setLoading(true);
      if (username === "") {
        setLoading(false);
        return setErrMsg("username tidak boleh kosong !");
      }
      const payloadUser = {
        displayName: username,
      };
      await updateProfileUser(payloadUser);
      setLoading(false);
      return navigation.replace("Profile");
    } catch (error) {
      setLoading(false);
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
        <TextAuth text="Update username " />
        <InputForm
          secure={false}
          setVal={setUsername}
          type="username"
          val={username}
          placeholder={"Username ..."}
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
